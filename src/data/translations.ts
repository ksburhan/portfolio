export type Language = "en" | "de" | "tr" | "ja";

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

export const languageOptions: LanguageOption[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "de", label: "DE", flag: "🇩🇪" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
  { code: "ja", label: "JP", flag: "🇯🇵" },
];

export interface TimelineCopy {
  date: string;
  location: string;
  title: string;
  content: string[];
}

export interface ProjectCopy {
  title: string;
  description: string;
}

export interface Translation {
  navbar: {
    about: string;
    projects: string;
    resume: string;
    languageLabel: string;
  };
  about: {
    name: string;
    header: string;
    description: string;
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    items: ProjectCopy[];
  };
  resume: {
    title: string;
    workLabel: string;
    educationLabel: string;
    work: TimelineCopy[];
    education: TimelineCopy[];
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    navbar: {
      about: "About",
      projects: "Projects",
      resume: "Resume",
      languageLabel: "Language",
    },
    about: {
      name: "Hi, I'm Burhan Köseler. ",
      header: "A passionate Software Engineer based in Japan 📍",
      description:
        "Hey, my name is Burhan, and I'm a Software Engineer. \n" +
        "My passion is to create and develop clean Services and clean Websites for my users. " +
        "I have worked in the automotive industry as well as the game industry, " +
        "working on microservices for web applications and various server applications, mainly in Java or Kotlin. \n" +
        "I speak fluent German, English, Turkish and Japanese. ",
    },
    skills: {
      title: "Skills & Technologies",
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "[CURRENTLY OFFLINE] Monkey Ticket",
          description:
            "Web service for reselling tickets using micro services. Built on React and NodeJS with event based communication between the microservices. Deployed with Kubernetes on DigitalOcean",
        },
      ],
    },
    resume: {
      title: "Resume",
      workLabel: "Work",
      educationLabel: "Education",
      work: [
        {
          date: "March 2024 - present",
          location: "Soft Gear CO., Ltd., Tokyo/Osaka, Japan",
          title: "Game Server Engineer",
          content: [
            "Teammember of a R&D Team developing game servers for a real time action game",
            "Created design documents according to clients specificiations",
            "Communicated regularly with the client/interface partner",
            "Lead the design and implementation of a reliable matchmaker that matches the clients together based on certain criteria",
            "Ownership of the web API component that handles account information and communicates with the game client and game servers",
            "Responsible for the AWS infrastructure the servers are deployed on during development.",
          ],
        },
        {
          date: "July 2022 - October 2023",
          location: "Xibix Solutions GmbH, Munich, Germany",
          title: "Junior Software Engineer",
          content: [
            "Teammember of a Microservice Web development Project using Java (Quarkus), Angular, NGRX",
            "Fullstack Development of a car messaging Service",
            "Ownership of a monolithic Web development Project using Angular, NodeJS, RXJS and TypeOrm",
            "Fullstack Development of a media management Website implementing new features as well as refactoring old code to improve performance",
            "Committed code to GIT and deployed updates on the Microsoft Azure Cloud",
            "Analyzed user needs and proposed solutions to meet them",
            "Communicated regularly with Product Owners of the BMW Group",
          ],
        },
        {
          date: "March 2020 - August 2020",
          location: "CipSoft GmbH, Regensburg, Germany",
          title: "Intern",
          content: [
            'Ownership of project "visualize relationships between game content"',
            "Researched and prepared documentation about bulk importing into Neo4j database",
            "Wrote clear, clean code to export game content and their relationships. Created plugin for game designers to use database without query knowledge",
            "Wrote scripts and configured Jenkins for automating the process",
            "Collaborated effectively with members of software development team and personnel in other departments",
          ],
        },
      ],
      education: [
        {
          date: "March 2018 - February 2022",
          location: "OTH Regensburg, Germany",
          title: "Bachelor of Science in Computer Science",
          content: [
            "Courses in Computer Graphics, AI, Software Engineering and Software Architecture Design. " +
              "Bachelors Thesis: Framework for AI creation and comparing different AI algorithms.",
          ],
        },
        {
          date: "September 2015 - July 2017",
          location: "Technik FOS Munich, Germany",
          title: "Technical High School Graduation",
          content: [
            "High school classes in addition to 10 week internship in electronic technologies and" +
              " 10 week internship in metal technologies.",
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright",
    },
  },
  de: {
    navbar: {
      about: "About",
      projects: "Projekte",
      resume: "Lebenslauf",
      languageLabel: "Sprache",
    },
    about: {
      name: "Hey, ich bin Burhan Köseler. ",
      header: "Ein Software Engineer mit Wohnsitz in Japan 📍",
      description:
        "Hey, mein Name ist Burhan und ich bin Software Engineer. \n" +
        "Meine Leidenschaft ist es, saubere Services und saubere Websites für meine Nutzer zu entwerfen und zu entwickeln. " +
        "Ich habe sowohl in der Automobilindustrie als auch in der Spieleindustrie gearbeitet " +
        "und an Microservices für Webanwendungen sowie an verschiedenen Serveranwendungen mitgewirkt, hauptsächlich in Java oder Kotlin. \n" +
        "Ich spreche fließend Deutsch, Englisch, Türkisch und Japanisch. ",
    },
    skills: {
      title: "Skills & Technologien",
    },
    projects: {
      title: "Projekte",
      items: [
        {
          title: "[DERZEIT OFFLINE] Monkey Ticket",
          description:
            "Webservice zum Weiterverkauf von Tickets aufgebaut mit Microservices. Entwickelt mit React und NodeJS, mit event-based Kommunikation zwischen den Microservices. Bereitgestellt mit Kubernetes auf DigitalOcean.",
        },
      ],
    },
    resume: {
      title: "Lebenslauf",
      workLabel: "Berufserfahrung",
      educationLabel: "Ausbildung",
      work: [
        {
          date: "März 2024 - heute",
          location: "Soft Gear CO., Ltd., Tokio/Osaka, Japan",
          title: "Game Server Engineer",
          content: [
            "Mitglied eines R&D-Teams, das Spiele-Server für ein Echtzeit-Actionspiel entwickelt",
            "Erstellung von Designdokumenten nach Kundenspezifikationen",
            "Regelmäßige Kommunikation mit dem Kunden bzw. Schnittstellenpartner",
            "Leitung des Designs und der Implementierung eines zuverlässigen Matchmakers, der Clients anhand bestimmter Kriterien zusammenführt",
            "Verantwortlich für die Web-API-Komponente, die Account-Informationen verwaltet und mit dem Game-Client und den Game-Servern kommuniziert",
            "Zuständig für die AWS-Infrastruktur, auf der die Server während der Entwicklung bereitgestellt werden.",
          ],
        },
        {
          date: "Juli 2022 - Oktober 2023",
          location: "Xibix Solutions GmbH, München, Deutschland",
          title: "Junior Software Engineer",
          content: [
            "Mitglied eines Microservice-Web-Entwicklungsprojekts mit Java (Quarkus), Angular und NGRX",
            "Fullstack-Entwicklung eines Auto-Messaging-Services",
            "Verantwortlich für ein monolithisches Web-Entwicklungsprojekt mit Angular, NodeJS, RXJS und TypeORM",
            "Fullstack-Entwicklung einer Medienverwaltungs-Website mit Implementierung neuer Funktionen sowie Refactoring von altem Code zur Performance-Verbesserung",
            "Code-Commits in GIT und Deployment von Updates in der Microsoft Azure Cloud",
            "Analyse von Nutzeranforderungen und Vorschlag passender Lösungen",
            "Regelmäßige Kommunikation mit Product Ownern der BMW Group",
          ],
        },
        {
          date: "März 2020 - August 2020",
          location: "CipSoft GmbH, Regensburg, Deutschland",
          title: "Praktikant",
          content: [
            'Verantwortlich für das Projekt „Visualisierung der Beziehungen zwischen Spielinhalten"',
            "Recherche und Erstellung der Dokumentation zum Bulk-Import in eine Neo4j-Datenbank",
            "Sauberer, übersichtlicher Code zum Exportieren von Spielinhalten und deren Beziehungen. Plugin für Game Designer entwickelt, um die Datenbank ohne Query-Kenntnisse zu nutzen",
            "Skripte erstellt und Jenkins zur Automatisierung des Prozesses konfiguriert",
            "Effektive Zusammenarbeit mit Mitgliedern des Entwicklungsteams sowie mit Personal anderer Abteilungen",
          ],
        },
      ],
      education: [
        {
          date: "März 2018 - Februar 2022",
          location: "OTH Regensburg, Deutschland",
          title: "Bachelor of Science in Informatik",
          content: [
            "Kurse in Computergrafik, KI, Software Engineering und Softwarearchitektur-Design. " +
            "Bachelorarbeit: Framework zur Erstellung von KIs und zum Vergleich verschiedener KI-Algorithmen.",
          ],
        },
        {
          date: "September 2015 - Juli 2017",
          location: "Technik FOS München, Deutschland",
          title: "Fachhochschulreife (Technik)",
          content: [
            "Schulunterricht ergänzt durch ein 10-wöchiges Praktikum im Bereich Elektrotechnik und" +
            " ein 10-wöchiges Praktikum im Bereich Metalltechnik.",
          ],
        },
      ],
    },
    footer: {
      copyright: "Alle Rechte vorbehalten",
    },
  },
  tr: {
    navbar: {
      about: "Hakkımda",
      projects: "Projeler",
      resume: "Özgeçmiş",
      languageLabel: "Dil",
    },
    about: {
      name: "Merhaba, ben Burhan Köseler. ",
      header: "Japonya'da yaşayan tutkulu bir Software Engineer 📍",
      description:
        "Merhaba, adım Burhan ve ben bir Software Engineer. \n" +
        "Tutkum, kullanıcılarım için temiz servisler ve temiz web siteleri tasarlayıp geliştirmektir. " +
        "Hem otomotiv sektöründe hem de oyun sektöründe çalıştım; " +
        "web uygulamaları için mikroservisler ve çeşitli sunucu uygulamaları üzerinde, çoğunlukla Java ve Kotlin ile çalıştım. \n" +
        "Almanca, İngilizce, Türkçe ve Japoncayı akıcı şekilde konuşuyorum. ",
    },
    skills: {
      title: "Yetenekler ve Teknolojiler",
    },
    projects: {
      title: "Projeler",
      items: [
        {
          title: "[ŞU AN ÇEVRİMDIŞI] Monkey Ticket",
          description:
            "Mikroservisler kullanarak bilet yeniden satışı sağlayan bir web servisi. React ve NodeJS üzerine kuruludur ve mikroservisler arasında olay tabanlı iletişim kullanır. DigitalOcean üzerinde Kubernetes ile dağıtılmıştır.",
        },
      ],
    },
    resume: {
      title: "Özgeçmiş",
      workLabel: "İş Deneyimi",
      educationLabel: "Eğitim",
      work: [
        {
          date: "Mart 2024 - günümüz",
          location: "Soft Gear CO., Ltd., Tokyo/Osaka, Japonya",
          title: "Oyun Sunucu Mühendisi",
          content: [
            "Gerçek zamanlı bir aksiyon oyunu için oyun sunucuları geliştiren bir Ar-Ge ekibinin üyesi",
            "Müşteri spesifikasyonlarına uygun tasarım dokümanları hazırlama",
            "Müşteri/arayüz partneri ile düzenli iletişim",
            "Belirli kriterlere göre istemcileri eşleştiren güvenilir bir matchmaker'ın tasarımına ve uygulanmasına liderlik etme",
            "Hesap bilgilerini yöneten ve oyun istemcisi ile oyun sunucularıyla iletişim kuran web API bileşeninin sahipliği",
            "Geliştirme sürecinde sunucuların dağıtıldığı AWS altyapısından sorumluluk.",
          ],
        },
        {
          date: "Temmuz 2022 - Ekim 2023",
          location: "Xibix Solutions GmbH, Münih, Almanya",
          title: "Junior Yazılım Mühendisi",
          content: [
            "Java (Quarkus), Angular ve NGRX kullanan bir mikroservis web geliştirme projesinin ekip üyesi",
            "Bir araç mesajlaşma servisinin fullstack geliştirilmesi",
            "Angular, NodeJS, RXJS ve TypeORM kullanan monolitik bir web projesinin sahipliği",
            "Yeni özellikler ekleyen ve performansı artırmak için eski kodu yeniden düzenleyen bir medya yönetim sitesinin fullstack geliştirilmesi",
            "Kodu GIT'e işleme ve güncellemeleri Microsoft Azure Cloud'a dağıtma",
            "Kullanıcı ihtiyaçlarını analiz etme ve bunları karşılayacak çözümler önerme",
            "BMW Group Product Owner'ları ile düzenli iletişim",
          ],
        },
        {
          date: "Mart 2020 - Ağustos 2020",
          location: "CipSoft GmbH, Regensburg, Almanya",
          title: "Stajyer",
          content: [
            '"Oyun içerikleri arasındaki ilişkileri görselleştirme" projesinin sahipliği',
            "Neo4j veritabanına toplu içe aktarma konusunda araştırma ve dokümantasyon hazırlama",
            "Oyun içeriklerini ve ilişkilerini dışa aktarmak için temiz, düzenli kod yazma. Oyun tasarımcılarının sorgu bilgisine ihtiyaç duymadan veritabanını kullanabilmesi için eklenti geliştirme",
            "Sürecin otomatikleştirilmesi için scriptler yazma ve Jenkins'i yapılandırma",
            "Yazılım geliştirme ekibi üyeleri ve diğer departmanlardaki personel ile etkili iş birliği",
          ],
        },
      ],
      education: [
        {
          date: "Mart 2018 - Şubat 2022",
          location: "OTH Regensburg, Almanya",
          title: "Bilgisayar Bilimleri Lisans Derecesi",
          content: [
            "Bilgisayar Grafikleri, Yapay Zeka, Yazılım Mühendisliği ve Yazılım Mimarisi Tasarımı dersleri. " +
              "Lisans Tezi: Yapay zeka oluşturma ve farklı YZ algoritmalarını karşılaştırma için bir framework.",
          ],
        },
        {
          date: "Eylül 2015 - Temmuz 2017",
          location: "Technik FOS Münih, Almanya",
          title: "Teknik Lise Mezuniyeti (FOS)",
          content: [
            "Lise dersleri ile birlikte 10 haftalık elektronik teknolojileri stajı ve" +
              " 10 haftalık metal teknolojileri stajı.",
          ],
        },
      ],
    },
    footer: {
      copyright: "Tüm hakları saklıdır",
    },
  },
  ja: {
    navbar: {
      about: "自己紹介",
      projects: "プロジェクト",
      resume: "経歴",
      languageLabel: "言語",
    },
    about: {
      name: "こんにちは、ブルハン・コーゼラーです。 ",
      header: "日本在住なソフトウェアエンジニアです 📍",
      description:
        "こんにちは、ブルハンと申します。ソフトウェアエンジニアです。\n" +
        "ユーザーのために、クリーンなサービスとクリーンなウェブサイトを設計・開発することに情熱を注いでいます。" +
        "自動車業界およびゲーム業界での勤務経験があり、" +
        "主に Java や Kotlin を用いて、ウェブアプリ向けのマイクロサービスやさまざまなサーバーアプリケーションの開発に携わってきました。\n" +
        "ドイツ語、英語、トルコ語、日本語を流暢に話します。",
    },
    skills: {
      title: "スキル＆テクノロジー",
    },
    projects: {
      title: "プロジェクト",
      items: [
        {
          title: "[現在オフライン] Monkey Ticket",
          description:
            "マイクロサービスを用いたチケット再販ウェブサービス。React と NodeJS をベースに構築し、マイクロサービス間はイベントベースで通信します。DigitalOcean 上の Kubernetes でデプロイしました。",
        },
      ],
    },
    resume: {
      title: "経歴",
      workLabel: "職務経歴",
      educationLabel: "学歴",
      work: [
        {
          date: "2024年3月 〜 現在",
          location: "株式会社Soft Gear、東京／大阪、日本",
          title: "ゲームサーバーエンジニア",
          content: [
            "リアルタイムアクションゲーム向けのゲームサーバーを開発するR&Dチームのメンバー",
            "クライアントの仕様に基づいた設計ドキュメントの作成",
            "クライアント／インターフェース担当との定期的なコミュニケーション",
            "特定の条件に基づいてクライアント同士をマッチングする、信頼性の高いマッチメイカーの設計と実装をリード",
            "アカウント情報を扱い、ゲームクライアントおよびゲームサーバーと通信する Web API コンポーネントのオーナーシップ",
            "開発中にサーバーがデプロイされる AWS インフラの責任者。",
          ],
        },
        {
          date: "2022年7月 〜 2023年10月",
          location: "Xibix Solutions GmbH、ミュンヘン、ドイツ",
          title: "ジュニア・ソフトウェアエンジニア",
          content: [
            "Java (Quarkus)、Angular、NGRX を用いたマイクロサービス Web 開発プロジェクトのチームメンバー",
            "車載メッセージングサービスのフルスタック開発",
            "Angular、NodeJS、RXJS、TypeORM を用いたモノリシックな Web 開発プロジェクトのオーナーシップ",
            "新機能の実装とパフォーマンス改善のための既存コードのリファクタリングを含む、メディア管理ウェブサイトのフルスタック開発",
            "コードを Git にコミットし、更新を Microsoft Azure Cloud にデプロイ",
            "ユーザーニーズの分析と、それを満たすためのソリューション提案",
            "BMW Group のプロダクトオーナーとの定期的なコミュニケーション",
          ],
        },
        {
          date: "2020年3月 〜 2020年8月",
          location: "CipSoft GmbH、レーゲンスブルク、ドイツ",
          title: "インターン",
          content: [
            "「ゲームコンテンツ間の関係性の可視化」プロジェクトのオーナーシップ",
            "Neo4j データベースへのバルクインポートに関する調査とドキュメント作成",
            "ゲームコンテンツとその関係性をエクスポートするためのクリーンで読みやすいコードの作成。ゲームデザイナーがクエリの知識なしでデータベースを利用できるプラグインを開発",
            "プロセス自動化のためのスクリプト作成と Jenkins の設定",
            "ソフトウェア開発チームのメンバーや他部署のスタッフとの効果的な協業",
          ],
        },
      ],
      education: [
        {
          date: "2018年3月 〜 2022年2月",
          location: "OTH レーゲンスブルク、ドイツ",
          title: "コンピュータサイエンス学士号",
          content: [
            "コンピュータグラフィックス、AI、ソフトウェアエンジニアリング、ソフトウェアアーキテクチャ設計などの講義を履修。" +
              "学士論文：AI 作成および異なる AI アルゴリズムの比較のためのフレームワーク。",
          ],
        },
        {
          date: "2015年9月 〜 2017年7月",
          location: "Technik FOS ミュンヘン、ドイツ",
          title: "技術系上級専門学校卒業（FOS）",
          content: [
            "通常の高校授業に加え、電子技術分野での10週間のインターンシップと" +
              "金属技術分野での10週間のインターンシップを履修。",
          ],
        },
      ],
    },
    footer: {
      copyright: "All Rights Reserved",
    },
  },
};
