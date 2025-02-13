import { GoogleGenerativeAI } from "@google/generative-ai";

// 社内Gemini APIのエンドポイントとキー
const INTERNAL_API_ENDPOINT = import.meta.env.VITE_INTERNAL_GEMINI_ENDPOINT;
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// 社内ナレッジベースへのアクセス設定
const KNOWLEDGE_BASE_ENDPOINT = import.meta.env.VITE_KNOWLEDGE_BASE_ENDPOINT;
const KNOWLEDGE_BASE_KEY = import.meta.env.VITE_KNOWLEDGE_BASE_KEY;

const genAI = new GoogleGenerativeAI(API_KEY || '');

interface KnowledgeBaseResponse {
  relatedDocuments: Array<{
    title: string;
    content: string;
    lastUpdated: string;
    department: string;
  }>;
  previousSolutions: Array<{
    question: string;
    solution: string;
    successRate: number;
  }>;
}

export const getAIResponse = async (
  question: string,
  context: string
): Promise<string> => {
  try {
    if (!API_KEY || !INTERNAL_API_ENDPOINT) {
      throw new Error('API configuration is missing');
    }

    // 社内ナレッジベースから関連情報を取得
    const knowledgeBaseResponse = await fetch(`${KNOWLEDGE_BASE_ENDPOINT}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KNOWLEDGE_BASE_KEY}`
      },
      body: JSON.stringify({
        query: question,
        department: 'IT_SUPPORT',
        maxResults: 5
      })
    });

    const knowledgeData: KnowledgeBaseResponse = await knowledgeBaseResponse.json();

    // 社内ナレッジと提供された情報を組み合わせてコンテキストを強化
    const enhancedContext = `
      基本情報: ${context}

      関連する社内ドキュメント:
      ${knowledgeData.relatedDocuments.map(doc => `
        - ${doc.title}:
        ${doc.content}
        (最終更新: ${doc.lastUpdated})
      `).join('\n')}

      過去の類似質問と解決策:
      ${knowledgeData.previousSolutions.map(sol => `
        Q: ${sol.question}
        A: ${sol.solution}
        (解決率: ${sol.successRate}%)
      `).join('\n')}
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent({
      contents: [{
        role: "user",
        parts: [{
          text: `
            あなたは当社の情報システム部門のヘルプデスク担当者です。
            社内の規定やセキュリティポリシーを考慮しながら、
            以下の質問に対して最適な回答を提供してください。

            質問: ${question}
            
            以下の情報を考慮して回答してください：
            ${enhancedContext}
          `
        }]
      }]
    });

    const response = await result.response;
    const answer = response.text();

    // 回答を社内ナレッジベースに記録
    await fetch(`${KNOWLEDGE_BASE_ENDPOINT}/record`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KNOWLEDGE_BASE_KEY}`
      },
      body: JSON.stringify({
        question,
        answer,
        context: enhancedContext,
        timestamp: new Date().toISOString()
      })
    });

    return answer;
  } catch (error) {
    console.error('AI Response Error:', error);
    return `エラーが発生しました: ${error instanceof Error ? error.message : '不明なエラー'}`;
  }
}; 