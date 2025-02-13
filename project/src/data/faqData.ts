interface FAQItem {
  id: string;
  title: string;
  children?: FAQItem[];
  answer?: string;
}

export const faqData: FAQItem[] = [
  {
    id: '1',
    title: 'ネットワークについて',
    children: [
      {
        id: '1-1',
        title: 'WIFIや有線について',
        children: [
          {
            id: '1-1-1',
            title: 'ネットが繋がりません',
            answer: '当社の製品は、最新のAI技術を活用し、ユーザーフレンドリーなインターフェースを提供します。主な機能には、自動データ分析、リアルタイムレポート作成、カスタマイズ可能なダッシュボードが含まれます。'
          },
          {
            id: '1-1-2',
            title: '自分が使用すべきWIFIがわかりません',
            answer: '最新の暗号化技術を採用し、定期的なセキュリティアップデートを実施しています。また、多要素認証にも対応しており、お客様のデータを安全に保護します。'
          },
          {
            id: '1-1-3',
            title: '有線を追加してほしいです',
            answer: 'ユーザーごとに異なるニーズに対応するため、豊富なカスタマイズオプションを提供しています。インターフェース、レポート形式、通知設定など、様々な要素をカスタマイズできます。'
          },
          {
            id: '1-1-4',
            title: 'ネットワークの速度が遅いです',
            answer: 'スマートフォンやタブレットに最適化されたレスポンシブデザインを採用しています。外出先でもスムーズに操作できる直感的なモバイルインターフェースを提供します。'
          },
          {
            id: '1-1-5',
            title: 'WIFIのパスワードはどこにありますか',
            answer: '月1回の定期アップデートに加え、セキュリティパッチは随時提供しています。新機能の追加や改善は、ユーザーフィードバックを積極的に取り入れて実施しています。'
          }
        ]
      },
      {
        id: '1-2',
        title: 'サーバやFTPについて',
        children: [
          {
            id: '1-2-1',
            title: 'FTP情報はどこにありますか',
            answer: 'スタータープラン（月額5,000円）、プロフェッショナルプラン（月額12,000円）、エンタープライズプラン（要相談）の3つのプランをご用意しています。'
          },
          {
            id: '1-2-2',
            title: 'FTPへの接続ができません',
            answer: 'クレジットカード、銀行振込、口座引き落としに対応しています。年間契約の場合は2ヶ月分無料となります。'
          },
          {
            id: '1-2-3',
            title: 'サーバの各社担当を知りたいです',
            answer: 'プランの変更は毎月可能です。アップグレードは即時反映され、ダウングレードは次の請求サイクルから適用されます。'
          },
          {
            id: '1-2-4',
            title: 'HPの簡単な修正方法は？',
            answer: '全てのプランで14日間の無料トライアルをご利用いただけます。クレジットカード情報なしで開始でき、期間中はすべての機能をお試しいただけます。'
          },
          {
            id: '1-2-5',
            title: 'カートでFTPに入るには？',
            answer: 'サービス開始から30日以内であれば、全額返金に対応しています。それ以降は月割りでの返金となります。'
          }
        ]
      },
      {
        id: '1-3',
        title: 'ここに質問を入れる',
        children: [
          {
            id: '1-3-1',
            title: '導入手順について',
            answer: '申し込みから利用開始まで最短で当日中に完了します。導入支援チームが環境設定やデータ移行をサポートいたします。'
          },
          {
            id: '1-3-2',
            title: '必要な環境について',
            answer: '最新のWebブラウザ（Chrome、Firefox、Safari、Edge）があれば利用可能です。特別なソフトウェアのインストールは不要です。'
          },
          {
            id: '1-3-3',
            title: 'データ移行について',
            answer: '既存システムからのデータ移行は、専門チームが無料でサポートします。CSVやExcelなど、様々な形式のデータに対応しています。'
          },
          {
            id: '1-3-4',
            title: '初期設定について',
            answer: 'アカウント作成後、ガイド付きの初期設定ウィザードが利用可能です。基本的な設定は30分程度で完了します。'
          },
          {
            id: '1-3-5',
            title: 'カスタマイズ支援について',
            answer: '導入時のカスタマイズは、専任のサポートスタッフが無料でお手伝いします。その後の変更も、充実したマニュアルとサポートで安心です。'
          }
        ]
      },
      {
        id: '1-4',
        title: 'ここに質問を入れる',
        children: [
          {
            id: '1-4-1',
            title: '対応ブラウザについて',
            answer: 'Chrome、Firefox、Safari、Edgeの最新版に対応しています。Internet Explorer 11以前のバージョンはサポート対象外となります。'
          },
          {
            id: '1-4-2',
            title: 'モバイル対応状況',
            answer: 'iOS 12以降、Android 8.0以降のスマートフォンやタブレットに対応しています。専用アプリも提供しています。'
          },
          {
            id: '1-4-3',
            title: '他システムとの連携',
            answer: 'REST APIを公開しており、主要な他社サービスとの連携が可能です。Zapierなどの自動化ツールにも対応しています。'
          },
          {
            id: '1-4-4',
            title: 'データ形式について',
            answer: 'インポート/エクスポートはCSV、Excel、JSON形式に対応。カスタム形式への対応も可能です。'
          },
          {
            id: '1-4-5',
            title: 'オフライン機能について',
            answer: '基本的なデータ閲覧と編集はオフラインでも可能です。オンライン復帰時に自動で同期されます。'
          }
        ]
      },
      {
        id: '1-5',
        title: 'ここに質問を入れる',
        children: [
          {
            id: '1-5-1',
            title: 'アップデート頻度',
            answer: '機能アップデートは月1回、セキュリティアップデートは必要に応じて随時提供しています。'
          },
          {
            id: '1-5-2',
            title: 'アップデート通知',
            answer: '重要なアップデートは2週間前にメールで通知します。緊急のセキュリティアップデートは即時通知されます。'
          },
          {
            id: '1-5-3',
            title: 'バージョン管理',
            answer: '過去3バージョンまでサポートしています。アップデートは段階的に適用することも可能です。'
          },
          {
            id: '1-5-4',
            title: 'ダウンタイム',
            answer: 'アップデートによるダウンタイムは通常5分以内です。メンテナンスは深夜に実施します。'
          },
          {
            id: '1-5-5',
            title: 'ロールバック対応',
            answer: '問題が発生した場合、即時に前バージョンへロールバック可能です。データの整合性は保証されます。'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'サポートについて',
    children: [
      {
        id: '2-1',
        title: 'サポート時間',
        answer: '平日9:00-18:00にて、電話およびメールでのサポートを承っております。緊急の場合は24時間対応のホットラインもご利用いただけます。'
      },
      {
        id: '2-2',
        title: 'トレーニング',
        children: [
          {
            id: '2-2-1',
            title: 'オンライントレーニング',
            answer: '毎週水曜日に無料のオンラインセミナーを開催しています。製品の基本的な使い方から応用テクニックまで、段階的に学べるカリキュラムをご用意しています。'
          },
          {
            id: '2-2-2',
            title: '対面トレーニング',
            answer: '月1回、東京・大阪・名古屋でハンズオントレーニングを実施しています。少人数制で丁寧な指導を提供します。'
          },
          {
            id: '2-2-3',
            title: 'カスタムトレーニング',
            answer: 'お客様の要望に応じたカスタムトレーニングプログラムを提供しています。社内研修としても利用可能です。'
          },
          {
            id: '2-2-4',
            title: 'トレーニング教材',
            answer: '動画教材、PDF資料、実践的な演習問題など、充実した自習用教材を提供しています。'
          },
          {
            id: '2-2-5',
            title: '認定制度',
            answer: '基礎、応用、エキスパートの3段階の認定制度があります。認定取得者には特別なサポート特典が付与されます。'
          }
        ]
      },
      {
        id: '2-3',
        title: '技術サポート',
        children: [
          {
            id: '2-3-1',
            title: 'サポート範囲',
            answer: '製品の操作方法、トラブルシューティング、カスタマイズ相談など、幅広い技術的支援を提供します。'
          },
          {
            id: '2-3-2',
            title: '対応時間',
            answer: '平日9:00-18:00の通常サポートに加え、24時間365日対応のプレミアムサポートもご用意しています。'
          },
          {
            id: '2-3-3',
            title: '対応言語',
            answer: '日本語、英語、中国語でのサポートに対応しています。その他の言語は要相談となります。'
          },
          {
            id: '2-3-4',
            title: '優先度設定',
            answer: '問題の重要度に応じて3段階の優先度を設定。最優先の場合は30分以内に初期対応を開始します。'
          },
          {
            id: '2-3-5',
            title: 'リモートサポート',
            answer: '必要に応じてリモートデスクトップによる直接支援も可能です。セキュアな接続で安全に対応します。'
          }
        ]
      },
      {
        id: '2-4',
        title: 'コミュニティ',
        children: [
          {
            id: '2-4-1',
            title: 'ユーザーフォーラム',
            answer: '活発なユーザーコミュニティで情報交換が可能です。経験豊富なユーザーや開発者が質問に回答します。'
          },
          {
            id: '2-4-2',
            title: '定期ミートアップ',
            answer: '四半期ごとにユーザーミートアップを開催。新機能の紹介や活用事例の共有を行っています。'
          },
          {
            id: '2-4-3',
            title: 'ナレッジベース',
            answer: 'ユーザー投稿による豊富なTips、活用事例、トラブルシューティング情報を提供しています。'
          },
          {
            id: '2-4-4',
            title: 'ベータテスト',
            answer: 'コミュニティメンバーは新機能のベータテストに参加可能。開発方針に意見を反映できます。'
          },
          {
            id: '2-4-5',
            title: '表彰制度',
            answer: 'コミュニティへの貢献度に応じて表彰制度があります。年間MVPには特別な特典が付与されます。'
          }
        ]
      },
      {
        id: '2-5',
        title: 'フィードバック',
        children: [
          {
            id: '2-5-1',
            title: '機能リクエスト',
            answer: 'ユーザーからの機能リクエストを随時受け付けています。四半期ごとに優先度の高いものから実装を検討します。'
          },
          {
            id: '2-5-2',
            title: 'バグ報告',
            answer: '専用のバグ報告フォームで受付。報告された内容は24時間以内に確認し、優先度に応じて対応します。'
          },
          {
            id: '2-5-3',
            title: '満足度調査',
            answer: '半年ごとに満足度調査を実施。サービス改善に向けた貴重なご意見として活用させていただきます。'
          },
          {
            id: '2-5-4',
            title: 'ベータプログラム',
            answer: '新機能のベータテストプログラムにご参加いただけます。早期アクセスと特別サポートを提供します。'
          },
          {
            id: '2-5-5',
            title: '改善提案',
            answer: 'UI/UXの改善提案を随時受け付けています。採用された提案には特典を進呈します。'
          }
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'セキュリティについて',
    children: [
      {
        id: '3-1',
        title: 'データ保護',
        children: [
          {
            id: '3-1-1',
            title: '暗号化対策',
            answer: 'すべてのデータは転送時および保存時にAES-256bitで暗号化されています。暗号化キーは定期的に更新されます。'
          },
          {
            id: '3-1-2',
            title: 'バックアップ体制',
            answer: '1時間ごとの差分バックアップ、日次の完全バックアップを実施。30日分のバックアップを保持しています。'
          },
          {
            id: '3-1-3',
            title: 'アクセス制御',
            answer: 'ロールベースのアクセス制御を実装。IPアドレス制限やデバイス認証にも対応しています。'
          },
          {
            id: '3-1-4',
            title: 'データセンター',
            answer: 'ISO 27001認証取得のデータセンターを使用。24時間365日の監視体制を敷いています。'
          },
          {
            id: '3-1-5',
            title: '監査ログ',
            answer: 'すべての操作ログを2年間保持。不正アクセスの検知と追跡が可能です。'
          }
        ]
      },
      {
        id: '3-2',
        title: '認証セキュリティ',
        children: [
          {
            id: '3-2-1',
            title: '多要素認証',
            answer: 'SMS、メール、認証アプリによる多要素認証に対応。生体認証との組み合わせも可能です。'
          },
          {
            id: '3-2-2',
            title: 'パスワードポリシー',
            answer: '強固なパスワードポリシーを適用。定期的な変更要求と過去のパスワード再利用を制限します。'
          },
          {
            id: '3-2-3',
            title: 'セッション管理',
            answer: '一定時間の無操作でセッション自動終了。同時ログインの制限も可能です。'
          },
          {
            id: '3-2-4',
            title: 'シングルサインオン',
            answer: 'SAML、OAuth2.0によるシングルサインオンに対応。社内システムとの連携が可能です。'
          },
          {
            id: '3-2-5',
            title: 'アカウントロック',
            answer: '連続ログイン失敗時のアカウントロック機能を実装。不正アクセスを防止します。'
          }
        ]
      },
      {
        id: '3-3',
        title: 'コンプライアンス',
        children: [
          {
            id: '3-3-1',
            title: '法令対応',
            answer: '個人情報保護法、GDPRなど、国内外の主要な法令に準拠しています。'
          },
          {
            id: '3-3-2',
            title: '認証取得',
            answer: 'ISO 27001、SOC 2 Type IIなど、主要なセキュリティ認証を取得しています。'
          },
          {
            id: '3-3-3',
            title: '監査対応',
            answer: '年2回の第三者機関による外部監査を実施。監査レポートは要望に応じて提供可能です。'
          },
          {
            id: '3-3-4',
            title: 'データ所在',
            answer: '日本国内のデータセンターでデータを保管。データの国外移転は行いません。'
          },
          {
            id: '3-3-5',
            title: '記録保持',
            answer: '法令に基づく適切な期間でのログ保持と、安全な廃棄を実施しています。'
          }
        ]
      },
      {
        id: '3-4',
        title: 'インシデント対応',
        children: [
          {
            id: '3-4-1',
            title: '24時間監視',
            answer: 'セキュリティオペレーションセンターによる24時間365日の監視体制を確立しています。'
          },
          {
            id: '3-4-2',
            title: '緊急対応',
            answer: 'インシデント発生時は30分以内に初期対応を開始。専門チームが対応にあたります。'
          },
          {
            id: '3-4-3',
            title: '通知体制',
            answer: 'セキュリティインシデント発生時は、影響を受ける可能性のあるユーザーに速やかに通知します。'
          },
          {
            id: '3-4-4',
            title: '復旧手順',
            answer: '詳細な復旧手順を策定済み。定期的な訓練で実効性を確保しています。'
          },
          {
            id: '3-4-5',
            title: '事後分析',
            answer: 'インシデント後は詳細な原因分析を実施。再発防止策を講じます。'
          }
        ]
      },
      {
        id: '3-5',
        title: 'セキュリティ教育',
        children: [
          {
            id: '3-5-1',
            title: '従業員教育',
            answer: '全従業員に対して四半期ごとのセキュリティ研修を実施。最新の脅威に関する情報を共有します。'
          },
          {
            id: '3-5-2',
            title: 'ユーザー向けガイド',
            answer: 'セキュリティベストプラクティスをまとめたガイドラインを提供。定期的に更新します。'
          },
          {
            id: '3-5-3',
            title: '意識向上プログラム',
            answer: 'フィッシング訓練やセキュリティクイズなど、実践的な教育プログラムを提供しています。'
          },
          {
            id: '3-5-4',
            title: '技術勉強会',
            answer: '最新のセキュリティ技術に関する勉強会を月1回開催。外部専門家による講演も実施します。'
          },
          {
            id: '3-5-5',
            title: 'セキュリティ通信',
            answer: '月次のセキュリティニュースレターで、最新の脅威動向や対策情報を配信しています。'
          }
        ]
      }
    ]
  },
  {
    id: '4',
    title: '利用方法について',
    children: [
      {
        id: '4-1',
        title: '基本操作',
        children: [
          {
            id: '4-1-1',
            title: 'ログイン方法',
            answer: 'メールアドレスとパスワードでログイン。二要素認証を有効にすることで、さらなるセキュリティ強化が可能です。'
          },
          {
            id: '4-1-2',
            title: 'ダッシュボード',
            answer: 'ログイン後のダッシュボードでは、重要な情報や通知がひと目で確認できます。レイアウトのカスタマイズも可能です。'
          },
          {
            id: '4-1-3',
            title: 'データ入力',
            answer: '直感的なフォームインターフェースで簡単にデータ入力が可能。CSVインポートにも対応しています。'
          },
          {
            id: '4-1-4',
            title: 'レポート作成',
            answer: 'ドラッグ&ドロップで簡単にレポートを作成できます。テンプレートも多数用意しています。'
          },
          {
            id: '4-1-5',
            title: 'データ検索',
            answer: '高度な検索機能を搭載。フリーワード検索に加え、詳細な条件指定も可能です。'
          }
        ]
      },
      {
        id: '4-2',
        title: '応用機能',
        children: [
          {
            id: '4-2-1',
            title: 'ワークフロー設定',
            answer: 'カスタマイズ可能なワークフローで業務を自動化。承認フローや通知設定も柔軟に行えます。'
          },
          {
            id: '4-2-2',
            title: 'データ分析',
            answer: 'AIを活用した高度なデータ分析が可能。トレンド予測やパターン検出を自動で行います。'
          },
          {
            id: '4-2-3',
            title: 'API連携',
            answer: 'RESTful APIを提供。外部システムとの連携や独自の拡張開発が可能です。'
          },
          {
            id: '4-2-4',
            title: 'バッチ処理',
            answer: '定期的なデータ処理や帳票出力を自動化できます。スケジュール設定も柔軟に行えます。'
          },
          {
            id: '4-2-5',
            title: 'カスタムフィールド',
            answer: '業務に合わせて自由にフィールドを追加できます。入力規則やバリデーションも設定可能です。'
          }
        ]
      },
      {
        id: '4-3',
        title: 'モバイル利用',
        children: [
          {
            id: '4-3-1',
            title: 'スマートフォンアプリ',
            answer: 'iOS/Android用の専用アプリを提供。オフライン作業にも対応しています。'
          },
          {
            id: '4-3-2',
            title: 'タブレット対応',
            answer: 'タブレット向けに最適化されたインターフェースを提供。タッチ操作に対応しています。'
          },
          {
            id: '4-3-3',
            title: 'プッシュ通知',
            answer: '重要な更新やアラートをリアルタイムでプッシュ通知。設定で通知内容をカスタマイズ可能です。'
          },
          {
            id: '4-3-4',
            title: 'カメラ連携',
            answer: 'スマートフォンのカメラを使用して、文書のスキャンやバーコード読み取りが可能です。'
          },
          {
            id: '4-3-5',
            title: '位置情報連携',
            answer: 'GPSと連携した位置情報の記録や、近隣情報の表示が可能です。'
          }
        ]
      },
      {
        id: '4-4',
        title: 'データ管理',
        children: [
          {
            id: '4-4-1',
            title: 'バックアップ',
            answer: '自動バックアップに加え、手動でのバックアップも可能。データは暗号化して安全に保管されます。'
          },
          {
            id: '4-4-2',
            title: 'データエクスポート',
            answer: 'CSV、Excel、PDFなど多様な形式でデータをエクスポート可能。定期的な自動エクスポートにも対応。'
          },
          {
            id: '4-4-3',
            title: 'アーカイブ',
            answer: '古いデータを自動でアーカイブ。必要に応じて簡単に復元できます。'
          },
          {
            id: '4-4-4',
            title: 'データクレンジング',
            answer: '重複データの検出や、不正確なデータの自動修正機能を提供しています。'
          },
          {
            id: '4-4-5',
            title: 'バージョン管理',
            answer: 'データの変更履歴を管理し、過去のバージョンへの復元が可能です。'
          }
        ]
      },
      {
        id: '4-5',
        title: 'カスタマイズ',
        children: [
          {
            id: '4-5-1',
            title: 'テーマ設定',
            answer: '画面のカラーテーマやレイアウトを自由にカスタマイズ可能。企業のブランドカラーに合わせた設定も可能です。'
          },
          {
            id: '4-5-2',
            title: 'ショートカット',
            answer: 'よく使う機能へのショートカットを設定可能。キーボードショートカットのカスタマイズにも対応しています。'
          },
          {
            id: '4-5-3',
            title: '通知設定',
            answer: 'メール、アプリ内通知、プッシュ通知など、通知方法と頻度を細かく設定できます。'
          },
          {
            id: '4-5-4',
            title: 'レポートテンプレート',
            answer: '独自のレポ ートテンプレートを作成・保存可能。グラフや表の形式もカスタマイズできます。'
          },
          {
            id: '4-5-5',
            title: 'ワークスペース設定',
            answer: '部署やプロジェクトごとに独立したワークスペースを設定可能。アクセス権限も個別に管理できます。'
          }
        ]
      }
    ]
  },
  {
    id: '5',
    title: '料金プランについて',
    children: [
      {
        id: '5-1',
        title: 'プラン比較',
        children: [
          {
            id: '5-1-1',
            title: 'スタータープラン詳細',
            answer: '月額5,000円で基本機能が利用可能。5ユーザーまで登録でき、5GB のストレージ容量を提供します。'
          },
          {
            id: '5-1-2',
            title: 'プロフェッショナルプラン詳細',
            answer: '月額12,000円で高度な分析機能が利用可能。20ユーザーまで登録でき、50GB のストレージ容量を提供します。'
          },
          {
            id: '5-1-3',
            title: 'エンタープライズプラン詳細',
            answer: 'カスタマイズ可能な料金体系で、無制限のユーザー登録と容量を提供。専用サポート担当者が付きます。'
          },
          {
            id: '5-1-4',
            title: 'アカデミックプラン詳細',
            answer: '教育機関向けの特別プラン。月額3,000円で基本機能が利用可能。学生アカウントの一括登録に対応。'
          },
          {
            id: '5-1-5',
            title: 'NPOプラン詳細',
            answer: '非営利団体向けの割引プラン。月額4,000円でプロフェッショナルプランと同等の機能を提供します。'
          }
        ]
      },
      {
        id: '5-2',
        title: '支払いオプション',
        children: [
          {
            id: '5-2-1',
            title: 'クレジットカード決済',
            answer: 'VISA、Mastercard、American Express、JCBに対応。決済情報は暗号化して安全に管理します。'
          },
          {
            id: '5-2-2',
            title: '銀行振込',
            answer: '月払いまたは年払いでの銀行振込に対応。年払いの場合、2ヶ月分無料となります。'
          },
          {
            id: '5-2-3',
            title: '請求書払い',
            answer: '法人のお客様向けに請求書払いに対応。支払期限は請求書発行から30日以内となります。'
          },
          {
            id: '5-2-4',
            title: '口座引き落とし',
            answer: '毎月27日に指定口座から自動引き落とし。手続きは契約時に一度のみ必要です。'
          },
          {
            id: '5-2-5',
            title: 'ポイント利用',
            answer: 'サービス利用に応じて貯まるポイントを利用可能。1ポイント1円として次回請求時に充当できます。'
          }
        ]
      },
      {
        id: '5-3',
        title: '契約期間',
        children: [
          {
            id: '5-3-1',
            title: '最低契約期間',
            answer: '最低契約期間は1ヶ月から。いつでもキャンセル可能で、日割り計算で返金対応いたします。'
          },
          {
            id: '5-3-2',
            title: '年間契約特典',
            answer: '年間契約で2ヶ月分無料。さらに優先サポートと専用トレーニングを提供します。'
          },
          {
            id: '5-3-3',
            title: '契約更新',
            answer: '契約は自動更新となります。更新前に메일でお知らせし、変更・解約の機会を提供します。'
          },
          {
            id: '5-3-4',
            title: '解約手続き',
            answer: '解約は管理画面から24時間いつでも可能。解約後のデータ保持期間は30日間です。'
          },
          {
            id: '5-3-5',
            title: '契約変更',
            answer: 'プランの変更は随時可能。アップグレードは即時反映、ダウングレードは次回更新時からの適用となります。'
          }
        ]
      },
      {
        id: '5-4',
        title: '追加オプション',
        children: [
          {
            id: '5-4-1',
            title: '追加ストレージ',
            answer: '10GB単位で追加可能。月額1,000円/10GBで容量を拡張できます。'
          },
          {
            id: '5-4-2',
            title: '追加ユーザー',
            answer: '1ユーザーあたり月額1,000円で追加可能。一括追加の場合は割引が適用されます。'
          },
          {
            id: '5-4-3',
            title: 'プレミアムサポート',
            answer: '24時間365日の専用サポート窓口を月額20,000円で提供。専任担当者が対応します。'
          },
          {
            id: '5-4-4',
            title: 'API利用拡張',
            answer: 'API呼び出し回数の上限を拡張。月額5,000円で標準の5倍まで利用可能です。'
          },
          {
            id: '5-4-5',
            title: 'カスタム開発',
            answer: '専用機能の開発に対応。お見積りは無料で、開発期間は要件により2週間〜3ヶ月です。'
          }
        ]
      },
      {
        id: '5-5',
        title: '割引プログラム',
        children: [
          {
            id: '5-5-1',
            title: 'ボリュームディスカウント',
            answer: '100ユーザー以上の契約で10%、500ユーザー以上で20%の割引を適用します。'
          },
          {
            id: '5-5-2',
            title: 'スタートアップ支援',
            answer: '設立3年以内のスタートアップ企業向けに、1年間50%オフの特別プランを提供します。'
          },
          {
            id: '5-5-3',
            title: '教育機関割引',
            answer: '学校・教育機関向けに40%オフの特別価格を提供。学生・教職員の利用を支援します。'
          },
          {
            id: '5-5-4',
            title: '紹介プログラム',
            answer: '既存ユーザーからの紹介で、紹介者・被紹介者ともに3ヶ月間20%オフを適用します。'
          },
          {
            id: '5-5-5',
            title: 'シーズン割引',
            answer: 'キャンペーン期間中は新規契約で最大3ヶ月分無料など、特別割引を実施します。'
          }
        ]
      }
    ]
  }
];