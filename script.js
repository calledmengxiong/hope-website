const categories = window.HOPE_PRODUCT_CATEGORIES || [];

const languageOptions = [
  { code: "en", label: "English", flag: "🇺🇸", dir: "ltr", htmlLang: "en" },
  { code: "zh", label: "简体中文", flag: "🇨🇳", dir: "ltr", htmlLang: "zh-CN" },
  { code: "zhTW", label: "繁體中文", flag: "🇹🇼", dir: "ltr", htmlLang: "zh-TW" },
  { code: "ar", label: "العربية", flag: "🇸🇦", dir: "rtl", htmlLang: "ar" },
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩", dir: "ltr", htmlLang: "id" },
  { code: "ms", label: "Bahasa Melayu", flag: "🇲🇾", dir: "ltr", htmlLang: "ms" },
  { code: "pt", label: "Português", flag: "🇵🇹", dir: "ltr", htmlLang: "pt" },
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr", htmlLang: "fr" },
  { code: "ja", label: "日本語", flag: "🇯🇵", dir: "ltr", htmlLang: "ja" },
  { code: "ru", label: "Русский", flag: "🇷🇺", dir: "ltr", htmlLang: "ru" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr", htmlLang: "de" },
  { code: "ko", label: "한국어", flag: "🇰🇷", dir: "ltr", htmlLang: "ko" }
];
const supportedLangs = languageOptions.map((item) => item.code);

const translations = {
  zh: {
    "nav.home": "首页", "nav.about": "关于我们", "nav.products": "产品中心", "nav.contact": "联系我们",
    "products.kicker": "我们的产品", "products.title": "产品与材料解决方案", "products.pageTitle": "全球工业材料专业供应商", "products.lead": "Hope New Material 为人造革、纺织、涂层和工业应用提供功能材料。", "products.applications": "应用场景：", "products.requestDetails": "提交询盘", "products.representativeImage": "代表图片",
    "form.name": "姓名", "form.company": "公司", "form.email": "邮箱", "form.phone": "WhatsApp / 电话", "form.product": "感兴趣产品", "form.message": "留言", "form.submit": "提交询盘", "form.namePlaceholder": "请输入您的姓名", "form.companyPlaceholder": "公司名称", "form.emailPlaceholder": "请输入您的邮箱", "form.phonePlaceholder": "WhatsApp 或电话", "form.productPlaceholder": "您感兴趣的产品", "form.messagePlaceholder": "请填写您的需求", "contact.emailLabel": "邮箱", "contact.note": "您也可以通过邮箱或 WhatsApp 直接联系我们。",
    "thanks.kicker": "询盘已发送", "thanks.title": "感谢您的询盘", "thanks.text": "您的信息已提交成功。我们会尽快查看您的需求并与您联系。", "thanks.products": "查看产品", "thanks.home": "返回首页",
    "footer.companyTitle": "可靠的材料合作伙伴", "footer.companyText": "福建厚朴新材料有限公司为人造革、涂层及工业应用领域提供可靠的材料解决方案。", "footer.quickTitle": "快速链接", "footer.categoryTitle": "产品目录", "footer.touchTitle": "联系我们", "footer.emailLabel": "邮箱", "footer.telLabel": "电话", "footer.whatsappLabel": "WhatsApp", "footer.addressLabel": "地址", "footer.address": "中国福建省厦门市湖里区软件园二期海景路59-2号1号楼402室", "footer.copyright": "© 2026 福建厚朴新材料有限公司 版权所有", "footer.home": "首页", "footer.about": "关于我们", "footer.products": "产品中心", "footer.contact": "联系我们"
    ,"footer.catColorant": "色剂 / 颜料", "footer.catLeather": "人造革", "footer.catSilicone": "硅助剂", "footer.catFinishing": "表面处理剂", "footer.catResin": "树脂", "footer.catRelease": "离型纸", "footer.catFabric": "基布", "footer.catPlasticizer": "塑化剂"
  },
  zhTW: {
    "nav.home": "首頁", "nav.about": "關於我們", "nav.products": "產品中心", "nav.contact": "聯絡我們",
    "products.kicker": "我們的產品", "products.title": "產品與材料解決方案", "products.pageTitle": "全球工業材料專業供應商", "products.lead": "Hope New Material 為人造革、紡織、塗層和工業應用提供功能材料。", "products.applications": "應用場景：", "products.requestDetails": "提交詢盤", "products.representativeImage": "代表圖片",
    "thanks.kicker": "詢盤已發送", "thanks.title": "感謝您的詢盤", "thanks.text": "您的資訊已成功提交。我們會盡快查看您的需求並與您聯絡。", "thanks.products": "查看產品", "thanks.home": "返回首頁",
    "footer.companyTitle": "可靠的材料合作夥伴", "footer.quickTitle": "快速連結", "footer.categoryTitle": "產品目錄", "footer.touchTitle": "聯絡我們", "footer.emailLabel": "郵箱", "footer.telLabel": "電話", "footer.whatsappLabel": "WhatsApp", "footer.addressLabel": "地址", "footer.copyright": "© 2026 福建厚樸新材料有限公司 版權所有", "footer.home": "首頁", "footer.about": "關於我們", "footer.products": "產品中心", "footer.contact": "聯絡我們"
  },
  ar: { "nav.home": "الرئيسية", "nav.about": "من نحن", "nav.products": "المنتجات", "nav.contact": "اتصل بنا", "products.applications": "التطبيقات:", "products.requestDetails": "طلب التفاصيل", "products.representativeImage": "صورة تمثيلية", "thanks.title": "شكراً على استفسارك", "thanks.text": "تم إرسال رسالتك بنجاح. سنراجع متطلباتك ونتواصل معك في أقرب وقت ممكن.", "thanks.home": "العودة إلى الرئيسية", "footer.categoryTitle": "فئات المنتجات", "footer.touchTitle": "تواصل معنا", "footer.emailLabel": "Email", "footer.addressLabel": "العنوان" },
  id: { "nav.home": "Beranda", "nav.about": "Tentang Kami", "nav.products": "Produk", "nav.contact": "Kontak", "products.applications": "Aplikasi:", "products.requestDetails": "Minta Detail", "products.representativeImage": "Gambar representatif", "thanks.title": "Terima Kasih atas Pertanyaan Anda", "thanks.text": "Pesan Anda telah berhasil dikirim. Kami akan meninjau kebutuhan Anda dan menghubungi Anda secepat mungkin.", "thanks.home": "Kembali ke Beranda", "footer.categoryTitle": "Kategori Produk", "footer.touchTitle": "Hubungi Kami", "footer.emailLabel": "Email", "footer.addressLabel": "Alamat" },
  ms: { "nav.home": "Laman Utama", "nav.about": "Tentang Kami", "nav.products": "Produk", "nav.contact": "Hubungi Kami", "products.applications": "Aplikasi:", "products.requestDetails": "Minta Butiran", "products.representativeImage": "Imej wakil", "thanks.title": "Terima Kasih atas Pertanyaan Anda", "thanks.text": "Mesej anda telah berjaya dihantar. Kami akan menyemak keperluan anda dan menghubungi anda secepat mungkin.", "thanks.home": "Kembali ke Laman Utama", "footer.categoryTitle": "Kategori Produk", "footer.touchTitle": "Hubungi Kami", "footer.emailLabel": "Email", "footer.addressLabel": "Alamat" },
  pt: { "nav.home": "Início", "nav.about": "Sobre nós", "nav.products": "Produtos", "nav.contact": "Contato", "products.applications": "Aplicações:", "products.requestDetails": "Solicitar detalhes", "products.representativeImage": "Imagem representativa", "thanks.title": "Obrigado pelo seu pedido", "thanks.text": "A sua mensagem foi enviada com sucesso. Iremos analisar os seus requisitos e contactá-lo o mais breve possível.", "thanks.home": "Voltar ao Início", "footer.categoryTitle": "Categorias de produtos", "footer.touchTitle": "Contato", "footer.emailLabel": "Email", "footer.addressLabel": "Endereço" },
  fr: { "nav.home": "Accueil", "nav.about": "À propos", "nav.products": "Produits", "nav.contact": "Contact", "products.applications": "Applications :", "products.requestDetails": "Demander des détails", "products.representativeImage": "Image représentative", "thanks.title": "Merci pour votre demande", "thanks.text": "Votre message a bien été envoyé. Nous examinerons vos besoins et vous contacterons dès que possible.", "thanks.home": "Retour à l'accueil", "footer.categoryTitle": "Catégories de produits", "footer.touchTitle": "Contact", "footer.emailLabel": "Email", "footer.addressLabel": "Adresse" },
  ja: { "nav.home": "ホーム", "nav.about": "会社情報", "nav.products": "製品", "nav.contact": "お問い合わせ", "products.applications": "用途：", "products.requestDetails": "詳細を問い合わせる", "products.representativeImage": "代表画像", "thanks.title": "お問い合わせありがとうございます", "thanks.text": "メッセージは正常に送信されました。内容を確認し、できるだけ早くご連絡いたします。", "thanks.home": "ホームへ戻る", "footer.categoryTitle": "製品カテゴリ", "footer.touchTitle": "お問い合わせ", "footer.emailLabel": "Email", "footer.addressLabel": "住所" },
  ru: { "nav.home": "Главная", "nav.about": "О нас", "nav.products": "Продукты", "nav.contact": "Контакты", "products.applications": "Применение:", "products.requestDetails": "Запросить детали", "products.representativeImage": "Представительное изображение", "thanks.title": "Спасибо за ваш запрос", "thanks.text": "Ваше сообщение успешно отправлено. Мы рассмотрим ваши требования и свяжемся с вами как можно скорее.", "thanks.home": "Вернуться на главную", "footer.categoryTitle": "Категории продуктов", "footer.touchTitle": "Связаться с нами", "footer.emailLabel": "Email", "footer.addressLabel": "Адрес" },
  de: { "nav.home": "Startseite", "nav.about": "Über uns", "nav.products": "Produkte", "nav.contact": "Kontakt", "products.applications": "Anwendungen:", "products.requestDetails": "Details anfragen", "products.representativeImage": "Repräsentatives Bild", "thanks.title": "Vielen Dank für Ihre Anfrage", "thanks.text": "Ihre Nachricht wurde erfolgreich übermittelt. Wir prüfen Ihre Anforderungen und kontaktieren Sie so bald wie möglich.", "thanks.home": "Zurück zur Startseite", "footer.categoryTitle": "Produktkategorien", "footer.touchTitle": "Kontakt", "footer.emailLabel": "Email", "footer.addressLabel": "Adresse" },
  ko: { "nav.home": "홈", "nav.about": "회사 소개", "nav.products": "제품", "nav.contact": "문의하기", "products.applications": "적용 분야:", "products.requestDetails": "상세 문의", "products.representativeImage": "대표 이미지", "thanks.title": "문의해 주셔서 감사합니다", "thanks.text": "메시지가 성공적으로 제출되었습니다. 요청 사항을 검토한 후 가능한 한 빨리 연락드리겠습니다.", "thanks.home": "홈으로 돌아가기", "footer.categoryTitle": "제품 카테고리", "footer.touchTitle": "문의하기", "footer.emailLabel": "Email", "footer.addressLabel": "주소" }
};

const categoryTranslations = {};

const footerCategoryKeyMap = {
  "footer.catColorant": "colorant-pigment",
  "footer.catLeather": "artificial-leather",
  "footer.catSilicone": "silicone-additives",
  "footer.catFinishing": "surface-finishing-agents",
  "footer.catResin": "pu-resin",
  "footer.catRelease": "release-paper",
  "footer.catFabric": "fabric-base-material",
  "footer.catPlasticizer": "plasticizer"
};

Object.entries(footerCategoryKeyMap).forEach(([key, slug]) => {
  const category = categories.find((item) => item.slug === slug);
  if (!category?.name) return;
  languageOptions.forEach((lang) => {
    if (lang.code === "en") return;
    if (!translations[lang.code]) translations[lang.code] = {};
    translations[lang.code][key] = category.name[lang.code] || category.name.en;
  });
});

const completeTranslationPatches = {
  zh: {
    "hero.eyebrow": "顶部工业产品与服务供应商", "hero.title": "人造革材料先进解决方案", "hero.text": "Hope New Material 专注于人造革应用中的色剂、助剂和表面处理解决方案，为汽车、家具和环保革行业提供稳定品质与实用材料。", "hero.cta": "了解更多",
    "hero2.eyebrow": "色剂与颜料解决方案", "hero2.title": "面向现代材料的创新色彩方案", "hero2.text": "我们提供颜料膏、色片、珠光颜料和功能性色彩体系，适用于人造革、涂层、纺织和工业表面应用。", "hero2.cta": "查看产品",
    "hero3.eyebrow": "制造与供应支持", "hero3.title": "先进制造与稳定供应", "hero3.text": "凭借可靠的生产资源、材料经验和出口服务能力，我们为全球客户提供稳定供应和实用材料解决方案。", "hero3.cta": "浏览产品",
    "intro.kicker": "工业材料解决方案", "intro.title": "创新材料解决方案专业供应商", "intro.text": "FUJIAN HOPE NEW MATERIAL CO., LTD. 专注于人造革、纺织、涂层和工业应用的高品质材料及化工解决方案，产品涵盖色剂与颜料、硅助剂、树脂、离型纸、基布、塑化剂、人造革和表面处理剂。", "intro.cta": "联系我们",
    "categoryCard.colorantTitle": "色剂 / 颜料", "categoryCard.colorantText": "颜料膏、PU色片、珠光颜料、印刷油墨、溶剂型色剂、水性色剂", "categoryCard.leatherTitle": "人造革", "categoryCard.leatherText": "PU革、半PU革、PVC革、超纤革、水性革、汽车革、沙发革、鞋面革", "categoryCard.siliconeTitle": "硅助剂", "categoryCard.siliconeText": "硅流平剂、硅滑爽剂、PU革助剂、PU树脂助剂、水性PU助剂", "categoryCard.finishingTitle": "表面处理剂", "categoryCard.finishingText": "水性表面处理剂、溶剂型表面处理剂、哑光处理、亮光处理、柔软手感处理",
    "service.kicker": "工业专业服务", "service.title": "可靠的材料业务伙伴", "service.text": "我们为客户提供材料选择、样品匹配、应用指导和适合出口沟通的服务，支持长期合作。",
    "serviceCard.resinTitle": "树脂", "serviceCard.resinText": "PU树脂、半PU树脂、水性PU树脂、丙烯酸树脂、粘结树脂、离型树脂", "serviceCard.releaseTitle": "离型纸", "serviceCard.releaseText": "哑光离型纸、亮光离型纸、压纹离型纸、硅油离型纸、PU革离型纸", "serviceCard.fabricTitle": "基布", "serviceCard.fabricText": "无纺布、针织布、超纤基布、涤纶布、棉底布", "serviceCard.plasticizerTitle": "塑化剂", "serviceCard.plasticizerText": "DOP、DOTP、DINP、TOTM、生物基塑化剂、环保塑化剂",
    "products.kicker": "我们的产品", "products.title": "产品与材料解决方案", "products.pageTitle": "全球工业材料专业供应商", "products.lead": "Hope New Material 为人造革、纺织、涂层和工业应用提供高品质功能材料。", "products.viewAll": "查看全部产品",
    "preview.colorant": "色剂 / 颜料", "preview.leather": "人造革", "preview.silicone": "硅助剂", "preview.finishing": "表面处理剂", "preview.resin": "树脂", "preview.release": "离型纸", "preview.fabric": "基布", "preview.plasticizer": "塑化剂",
    "gallery.kicker": "众多客户信赖", "gallery.title": "全球展会与客户拜访",
    "visit.page1.card1.title": "展会客户交流", "visit.page1.card1.text": "在国际展会上与海外客户面对面交流，沟通材料应用、产品需求和合作机会。", "visit.page1.card2.title": "全球客户会面", "visit.page1.card2.text": "在展会期间接待海外合作伙伴，通过面对面沟通建立更紧密的业务关系。", "visit.page1.card3.title": "国际展会洽谈", "visit.page1.card3.text": "在专业行业展会上与全球客户交流人造革材料及化工材料解决方案。", "visit.page2.card1.title": "工厂参观与技术交流", "visit.page2.card1.text": "海外客户到厂参观，围绕产品性能、质量要求和长期合作进行技术交流。", "visit.page2.card2.title": "客户合作交流", "visit.page2.card2.text": "与客户就产品选择、样品开发和实际应用需求进行沟通交流。", "visit.page2.card3.title": "展会合作洽谈", "visit.page2.card3.text": "在展会上会见客户和行业伙伴，介绍材料解决方案并探讨后续合作。",
    "contact.kicker": "联系我们", "contact.title": "我们能为您做什么？", "contact.text": "请发送您的需求，我们会回复产品信息、样品或技术建议。", "contact.emailLabel": "邮箱", "contact.reserve": "预留", "contact.address": "中国厦门软件园二期望海路59号", "contact.note": "您也可以通过邮箱或 WhatsApp 直接联系我们。",
    "form.name": "姓名", "form.company": "公司", "form.email": "邮箱", "form.phone": "WhatsApp / 电话", "form.product": "感兴趣产品", "form.message": "留言", "form.submit": "提交询盘", "form.note": "您也可以通过邮箱或 WhatsApp 直接联系我们。", "form.namePlaceholder": "请输入您的姓名", "form.companyPlaceholder": "公司名称", "form.emailPlaceholder": "请输入您的邮箱", "form.phonePlaceholder": "WhatsApp 或电话", "form.productPlaceholder": "您感兴趣的产品", "form.messagePlaceholder": "请填写您的需求",
    "about.hero.kicker": "Hope", "about.hero.title": "创新材料解决方案值得信赖的合作伙伴", "about.profile.kicker": "公司简介", "about.profile.title": "FUJIAN HOPE NEW MATERIAL CO., LTD.", "about.profile.p1": "FUJIAN HOPE NEW MATERIAL CO., LTD. 是人造革和涂层行业材料及化工解决方案供应商，产品包括色剂、颜料、硅助剂、表面处理剂、PU树脂、离型纸、基布、塑化剂和人造革材料。", "about.profile.p2": "我们重视稳定品质、可靠供应、实际技术沟通和长期合作，帮助全球客户提升材料性能、生产效率和产品竞争力。",
    "about.more.title": "更多材料解决方案", "about.more.text": "凭借行业经验，我们致力于为全球客户提供可靠材料方案和专业服务，关注产品质量、稳定供应和长期合作。", "about.team.title": "团队与全球联系", "about.team.text": "我们的团队通过工厂参观、产品交流和国际展会与海外客户及行业伙伴保持紧密合作。", "about.mission.title": "使命", "about.mission.text": "提供创新且可持续的材料解决方案，以可靠质量、专业服务和长期价值支持全球合作伙伴。", "about.vision.title": "愿景", "about.vision.text": "成为受全球客户认可的专业材料和化工解决方案供应商，与客户、员工和合作伙伴共同成长。", "about.values.title": "核心价值观", "about.values.h.title": "诚信", "about.values.h.text": "我们在每一次合作和决策中坚持诚实、透明和商业道德。", "about.values.o.title": "担当", "about.values.o.text": "我们对产品、服务和承诺负责，持续提升客户体验。", "about.values.p.title": "专业", "about.values.p.text": "我们以行业经验、高效沟通和稳定质量提供专业解决方案。", "about.values.e.title": "卓越", "about.values.e.text": "我们通过创新、改进和细节管理持续追求卓越。",
    "about.cap.leather.title": "人造革", "about.cap.leather.text": "适用于家具、汽车、鞋材、箱包和软包应用的人造革材料。", "about.cap.fabric.title": "基布", "about.cap.fabric.text": "包括超纤、无纺、针织和机织材料，支持人造革生产。", "about.cap.silicone.title": "硅助剂", "about.cap.silicone.text": "用于改善滑爽、抗粘、手感、流平和加工效率。", "about.cap.finishing.title": "表面处理剂", "about.cap.finishing.text": "用于提升触感、光泽、耐磨、抗刮和整体外观。", "about.cap.colorant.title": "色剂 / 颜料", "about.cap.colorant.text": "用于人造革、纺织和工业涂层的高性能色剂与颜料。", "about.cap.release.title": "离型纸", "about.cap.release.text": "提供哑光、亮光、压纹和硅油离型纸，支持稳定纹理转移。", "about.cap.resin.title": "树脂", "about.cap.resin.text": "包括PU树脂、水性树脂、丙烯酸树脂和粘结树脂。", "about.cap.plasticizer.title": "塑化剂", "about.cap.plasticizer.text": "用于改善PVC和人造革应用中的柔软度、加工性和耐用性。",
    "thanks.kicker": "询盘已发送", "thanks.title": "感谢您的询盘", "thanks.text": "您的信息已提交成功。我们会尽快查看您的需求并与您联系。", "thanks.products": "查看产品", "thanks.home": "返回首页",
    "footer.companyTitle": "可靠的材料合作伙伴", "footer.companyText": "福建厚朴新材料有限公司为人造革、涂层及工业应用领域提供可靠的材料解决方案。", "footer.quickTitle": "快速链接", "footer.categoryTitle": "产品目录", "footer.touchTitle": "联系我们", "footer.emailLabel": "邮箱", "footer.telLabel": "电话", "footer.whatsappLabel": "WhatsApp", "footer.addressLabel": "地址", "footer.address": "中国福建省厦门市湖里区软件园二期海景路59-2号1号楼402室", "footer.copyright": "© 2026 福建厚朴新材料有限公司 版权所有", "footer.home": "首页", "footer.about": "关于我们", "footer.products": "产品中心", "footer.contact": "联系我们"
  },
  zhTW: {
    "hero.eyebrow": "頂級工業產品與服務供應商", "hero.title": "人造革材料先進解決方案", "hero.text": "Hope New Material 專注於人造革應用中的色劑、助劑和表面處理解決方案，提供穩定品質與實用材料。", "hero.cta": "了解更多", "hero2.eyebrow": "色劑與顏料解決方案", "hero2.title": "面向現代材料的創新色彩方案", "hero2.text": "我們提供顏料膏、色片、珠光顏料和功能性色彩體系。", "hero2.cta": "查看產品", "hero3.eyebrow": "製造與供應支援", "hero3.title": "先進製造與穩定供應", "hero3.text": "我們以可靠生產資源、材料經驗和出口服務支援全球客戶。", "hero3.cta": "瀏覽產品",
    "intro.kicker": "工業材料解決方案", "intro.title": "創新材料解決方案專業供應商", "intro.text": "FUJIAN HOPE NEW MATERIAL CO., LTD. 專注於人造革、紡織、塗層和工業應用材料及化工解決方案。", "intro.cta": "聯絡我們",
    "categoryCard.colorantTitle": "色劑 / 顏料", "categoryCard.colorantText": "顏料膏、PU色片、珠光顏料、印刷油墨、溶劑型色劑、水性色劑", "categoryCard.leatherTitle": "人造革", "categoryCard.leatherText": "PU革、半PU革、PVC革、超纖革、水性革、汽車革、沙發革、鞋面革", "categoryCard.siliconeTitle": "矽助劑", "categoryCard.siliconeText": "矽流平劑、矽滑爽劑、PU革助劑、PU樹脂助劑、水性PU助劑", "categoryCard.finishingTitle": "表面處理劑", "categoryCard.finishingText": "水性表面處理劑、溶劑型表面處理劑、啞光處理、亮光處理、柔軟手感處理",
    "service.kicker": "工業專業服務", "service.title": "可靠的材料業務夥伴", "service.text": "我們提供材料選擇、樣品匹配、應用指導和出口溝通支援。", "serviceCard.resinTitle": "樹脂", "serviceCard.resinText": "PU樹脂、半PU樹脂、水性PU樹脂、丙烯酸樹脂、粘結樹脂、離型樹脂", "serviceCard.releaseTitle": "離型紙", "serviceCard.releaseText": "啞光離型紙、亮光離型紙、壓紋離型紙、矽油離型紙、PU革離型紙", "serviceCard.fabricTitle": "基布", "serviceCard.fabricText": "無紡布、針織布、超纖基布、滌綸布、棉底布", "serviceCard.plasticizerTitle": "塑化劑", "serviceCard.plasticizerText": "DOP、DOTP、DINP、TOTM、生物基塑化劑、環保塑化劑",
    "products.kicker": "我們的產品", "products.title": "產品與材料解決方案", "products.pageTitle": "全球工業材料專業供應商", "products.lead": "Hope New Material 為人造革、紡織、塗層和工業應用提供高品質功能材料。", "products.viewAll": "查看全部產品", "preview.colorant": "色劑 / 顏料", "preview.leather": "人造革", "preview.silicone": "矽助劑", "preview.finishing": "表面處理劑", "preview.resin": "樹脂", "preview.release": "離型紙", "preview.fabric": "基布", "preview.plasticizer": "塑化劑",
    "gallery.kicker": "眾多客戶信賴", "gallery.title": "全球展會與客戶拜訪", "visit.page1.card1.title": "展會客戶交流", "visit.page1.card1.text": "在國際展會上與海外客戶面對面交流材料應用、產品需求和合作機會。", "visit.page1.card2.title": "全球客戶會面", "visit.page1.card2.text": "展會期間接待海外合作夥伴，建立更緊密的業務關係。", "visit.page1.card3.title": "國際展會洽談", "visit.page1.card3.text": "在專業展會上交流人造革材料及化工材料解決方案。", "visit.page2.card1.title": "工廠參觀與技術交流", "visit.page2.card1.text": "海外客戶到廠參觀並交流產品性能、品質要求和長期合作。", "visit.page2.card2.title": "客戶合作交流", "visit.page2.card2.text": "與客戶溝通產品選擇、樣品開發和實際應用需求。", "visit.page2.card3.title": "展會合作洽談", "visit.page2.card3.text": "在展會上會見客戶和產業夥伴，介紹材料解決方案。",
    "contact.kicker": "聯絡我們", "contact.title": "我們能為您做什麼？", "contact.text": "請發送您的需求，我們會回覆產品資訊、樣品或技術建議。", "contact.emailLabel": "郵箱", "contact.reserve": "預留", "contact.address": "中國廈門軟體園二期望海路59號", "contact.note": "您也可以透過郵箱或 WhatsApp 直接聯絡我們。", "form.name": "姓名", "form.company": "公司", "form.email": "郵箱", "form.phone": "WhatsApp / 電話", "form.product": "感興趣產品", "form.message": "留言", "form.submit": "提交詢盤", "form.note": "您也可以透過郵箱或 WhatsApp 直接聯絡我們。", "form.namePlaceholder": "請輸入您的姓名", "form.companyPlaceholder": "公司名稱", "form.emailPlaceholder": "請輸入您的郵箱", "form.phonePlaceholder": "WhatsApp 或電話", "form.productPlaceholder": "您感興趣的產品", "form.messagePlaceholder": "請填寫您的需求",
    "about.hero.kicker": "Hope", "about.hero.title": "創新材料解決方案值得信賴的合作夥伴", "about.profile.kicker": "公司簡介", "about.profile.title": "FUJIAN HOPE NEW MATERIAL CO., LTD.", "about.profile.p1": "FUJIAN HOPE NEW MATERIAL CO., LTD. 是人造革和塗層行業材料及化工解決方案供應商。", "about.profile.p2": "我們重視穩定品質、可靠供應、實際技術溝通和長期合作。", "about.more.title": "更多材料解決方案", "about.more.text": "我們致力於為全球客戶提供可靠材料方案和專業服務。", "about.team.title": "團隊與全球聯繫", "about.team.text": "我們透過工廠參觀、產品交流和國際展會與海外客戶保持合作。", "about.mission.title": "使命", "about.mission.text": "提供創新且可持續的材料解決方案。", "about.vision.title": "願景", "about.vision.text": "成為受全球客戶認可的專業材料和化工解決方案供應商。", "about.values.title": "核心價值觀", "about.values.h.title": "誠信", "about.values.h.text": "堅持誠實、透明和商業道德。", "about.values.o.title": "擔當", "about.values.o.text": "對產品、服務和承諾負責。", "about.values.p.title": "專業", "about.values.p.text": "以行業經驗和穩定品質提供專業方案。", "about.values.e.title": "卓越", "about.values.e.text": "透過創新和改進持續追求卓越。",
    "about.cap.leather.title": "人造革", "about.cap.leather.text": "適用於家具、汽車、鞋材、箱包和軟包應用的人造革材料。", "about.cap.fabric.title": "基布", "about.cap.fabric.text": "包括超纖、無紡、針織和機織材料。", "about.cap.silicone.title": "矽助劑", "about.cap.silicone.text": "用於改善滑爽、抗粘、手感、流平和加工效率。", "about.cap.finishing.title": "表面處理劑", "about.cap.finishing.text": "用於提升觸感、光澤、耐磨和整體外觀。", "about.cap.colorant.title": "色劑 / 顏料", "about.cap.colorant.text": "用於人造革、紡織和工業塗層的色劑與顏料。", "about.cap.release.title": "離型紙", "about.cap.release.text": "提供啞光、亮光、壓紋和矽油離型紙。", "about.cap.resin.title": "樹脂", "about.cap.resin.text": "包括PU樹脂、水性樹脂、丙烯酸樹脂和粘結樹脂。", "about.cap.plasticizer.title": "塑化劑", "about.cap.plasticizer.text": "改善PVC和人造革應用中的柔軟度和加工性。",
    "thanks.kicker": "詢盤已發送", "thanks.title": "感謝您的詢盤", "thanks.text": "您的資訊已成功提交。我們會盡快查看您的需求並與您聯絡。", "thanks.products": "查看產品", "thanks.home": "返回首頁", "footer.companyText": "福建厚樸新材料有限公司為人造革、塗層及工業應用領域提供可靠的材料解決方案。", "footer.address": "中國福建省廈門市湖里區軟體園二期海景路59-2號1號樓402室", "footer.catColorant": "色劑 / 顏料", "footer.catLeather": "人造革", "footer.catSilicone": "矽助劑", "footer.catFinishing": "表面處理劑", "footer.catResin": "樹脂", "footer.catRelease": "離型紙", "footer.catFabric": "基布", "footer.catPlasticizer": "塑化劑"
  }
};

function compactPatch(base) {
  const productNames = {
    colorant: base.colorant, leather: base.leather, silicone: base.silicone, finishing: base.finishing,
    resin: base.resin, release: base.release, fabric: base.fabric, plasticizer: base.plasticizer
  };
  return {
    "nav.home": base.home, "nav.about": base.about, "nav.products": base.products, "nav.contact": base.contact,
    "hero.eyebrow": base.heroEyebrow, "hero.title": base.heroTitle, "hero.text": base.heroText, "hero.cta": base.learnMore,
    "hero2.eyebrow": base.colorEyebrow, "hero2.title": base.colorTitle, "hero2.text": base.colorText, "hero2.cta": base.viewProducts,
    "hero3.eyebrow": base.supplyEyebrow, "hero3.title": base.supplyTitle, "hero3.text": base.supplyText, "hero3.cta": base.exploreProducts,
    "intro.kicker": base.materialSolutions, "intro.title": base.introTitle, "intro.text": base.introText, "intro.cta": base.contact,
    "categoryCard.colorantTitle": productNames.colorant, "categoryCard.colorantText": base.colorantList, "categoryCard.leatherTitle": productNames.leather, "categoryCard.leatherText": base.leatherList, "categoryCard.siliconeTitle": productNames.silicone, "categoryCard.siliconeText": base.siliconeList, "categoryCard.finishingTitle": productNames.finishing, "categoryCard.finishingText": base.finishingList,
    "service.kicker": base.serviceKicker, "service.title": base.serviceTitle, "service.text": base.serviceText,
    "serviceCard.resinTitle": productNames.resin, "serviceCard.resinText": base.resinList, "serviceCard.releaseTitle": productNames.release, "serviceCard.releaseText": base.releaseList, "serviceCard.fabricTitle": productNames.fabric, "serviceCard.fabricText": base.fabricList, "serviceCard.plasticizerTitle": productNames.plasticizer, "serviceCard.plasticizerText": base.plasticizerList,
    "products.kicker": base.ourProducts, "products.title": base.productsTitle, "products.pageTitle": base.productsPageTitle, "products.lead": base.productsLead, "products.viewAll": base.viewAll, "products.applications": base.applications, "products.requestDetails": base.requestDetails, "products.representativeImage": base.representativeImage,
    "preview.colorant": productNames.colorant, "preview.leather": productNames.leather, "preview.silicone": productNames.silicone, "preview.finishing": productNames.finishing, "preview.resin": productNames.resin, "preview.release": productNames.release, "preview.fabric": productNames.fabric, "preview.plasticizer": productNames.plasticizer,
    "gallery.kicker": base.trusted, "gallery.title": base.galleryTitle,
    "visit.page1.card1.title": base.visit1Title, "visit.page1.card1.text": base.visit1Text, "visit.page1.card2.title": base.visit2Title, "visit.page1.card2.text": base.visit2Text, "visit.page1.card3.title": base.visit3Title, "visit.page1.card3.text": base.visit3Text, "visit.page2.card1.title": base.visit4Title, "visit.page2.card1.text": base.visit4Text, "visit.page2.card2.title": base.visit5Title, "visit.page2.card2.text": base.visit5Text, "visit.page2.card3.title": base.visit6Title, "visit.page2.card3.text": base.visit6Text,
    "contact.kicker": base.contact, "contact.title": base.contactTitle, "contact.text": base.contactText, "contact.emailLabel": base.email, "contact.reserve": base.reserved, "contact.address": base.addressText, "contact.note": base.formNote,
    "form.name": base.name, "form.company": base.company, "form.email": base.email, "form.phone": base.phone, "form.product": base.interestedProduct, "form.message": base.message, "form.submit": base.sendInquiry, "form.note": base.formNote, "form.namePlaceholder": base.namePlaceholder, "form.companyPlaceholder": base.companyPlaceholder, "form.emailPlaceholder": base.emailPlaceholder, "form.phonePlaceholder": base.phonePlaceholder, "form.productPlaceholder": base.productPlaceholder, "form.messagePlaceholder": base.messagePlaceholder,
    "about.hero.kicker": "Hope", "about.hero.title": base.aboutHeroTitle, "about.profile.kicker": base.companyProfile, "about.profile.title": "FUJIAN HOPE NEW MATERIAL CO., LTD.", "about.profile.p1": base.profile1, "about.profile.p2": base.profile2, "about.more.title": base.moreTitle, "about.more.text": base.moreText, "about.team.title": base.teamTitle, "about.team.text": base.teamText, "about.mission.title": base.mission, "about.mission.text": base.missionText, "about.vision.title": base.vision, "about.vision.text": base.visionText, "about.values.title": base.valuesTitle, "about.values.h.title": base.honesty, "about.values.h.text": base.honestyText, "about.values.o.title": base.ownership, "about.values.o.text": base.ownershipText, "about.values.p.title": base.professionalism, "about.values.p.text": base.professionalismText, "about.values.e.title": base.excellence, "about.values.e.text": base.excellenceText,
    "about.cap.leather.title": productNames.leather, "about.cap.leather.text": base.capLeather, "about.cap.fabric.title": productNames.fabric, "about.cap.fabric.text": base.capFabric, "about.cap.silicone.title": productNames.silicone, "about.cap.silicone.text": base.capSilicone, "about.cap.finishing.title": productNames.finishing, "about.cap.finishing.text": base.capFinishing, "about.cap.colorant.title": productNames.colorant, "about.cap.colorant.text": base.capColorant, "about.cap.release.title": productNames.release, "about.cap.release.text": base.capRelease, "about.cap.resin.title": productNames.resin, "about.cap.resin.text": base.capResin, "about.cap.plasticizer.title": productNames.plasticizer, "about.cap.plasticizer.text": base.capPlasticizer,
    "thanks.kicker": base.inquirySent, "thanks.title": base.thanksTitle, "thanks.text": base.thanksText, "thanks.products": base.viewProducts, "thanks.home": base.backHome,
    "footer.companyTitle": base.partnerTitle, "footer.companyText": base.footerCompany, "footer.quickTitle": base.quickLinks, "footer.categoryTitle": base.productCategories, "footer.touchTitle": base.getInTouch, "footer.emailLabel": base.email, "footer.telLabel": base.tel, "footer.whatsappLabel": "WhatsApp", "footer.addressLabel": base.address, "footer.address": base.footerAddress, "footer.copyright": base.copyright, "footer.home": base.home, "footer.about": base.about, "footer.products": base.products, "footer.contact": base.contact,
    "footer.catColorant": productNames.colorant, "footer.catLeather": productNames.leather, "footer.catSilicone": productNames.silicone, "footer.catFinishing": productNames.finishing, "footer.catResin": productNames.resin, "footer.catRelease": productNames.release, "footer.catFabric": productNames.fabric, "footer.catPlasticizer": productNames.plasticizer
  };
}

const compactTranslations = {
  ar: compactPatch({ home: "الرئيسية", about: "من نحن", products: "المنتجات", contact: "اتصل بنا", learnMore: "اعرف المزيد", viewProducts: "عرض المنتجات", exploreProducts: "استكشاف المنتجات", viewAll: "عرض كل المنتجات", applications: "التطبيقات:", requestDetails: "طلب التفاصيل", representativeImage: "صورة تمثيلية", heroEyebrow: "مزود منتجات وخدمات صناعية", heroTitle: "حلول متقدمة لمواد الجلد الصناعي", heroText: "نوفر مواد ملونة وإضافات ومعالجات سطحية لتطبيقات الجلد الصناعي بجودة مستقرة.", colorEyebrow: "حلول الملونات والأصباغ", colorTitle: "حلول ألوان مبتكرة للمواد الحديثة", colorText: "نوفر معاجين صبغية ورقائق ألوان وأصباغ لؤلؤية لأنظمة الطلاء والجلد الصناعي.", supplyEyebrow: "دعم التصنيع والتوريد", supplyTitle: "تميز في التصنيع والتوريد", supplyText: "ندعم العملاء العالميين بموارد إنتاج موثوقة وخبرة مواد وخدمة تصدير.", materialSolutions: "حلول المواد الصناعية", introTitle: "مورد محترف لحلول المواد المبتكرة", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. تقدم مواد وحلول كيميائية للجلد الصناعي والمنسوجات والطلاء والتطبيقات الصناعية.", colorant: "ملونات / أصباغ", leather: "جلد صناعي", silicone: "إضافات سيليكون", finishing: "عوامل معالجة السطح", resin: "راتنج", release: "ورق فصل", fabric: "قماش / مادة أساس", plasticizer: "ملدن", colorantList: "معجون صبغي، رقائق ألوان PU، صبغة لؤلؤية، حبر طباعة، ملون مذيب، ملون مائي", leatherList: "جلد PU، جلد شبه PU، جلد PVC، جلد مايكروفايبر، جلد مائي، جلد سيارات وأحذية", siliconeList: "عامل تسوية سيليكون، عامل انزلاق، إضافات PU ومضافات مائية", finishingList: "معالجة سطحية مائية ومذيبة، مطفي، لامع، ملمس ناعم", serviceKicker: "خدمات صناعية مهنية", serviceTitle: "شريك مواد موثوق لأعمالك", serviceText: "ندعم اختيار المواد ومطابقة العينات وإرشاد التطبيقات والتواصل للتصدير.", resinList: "راتنج PU، شبه PU، PU مائي، أكريليك، رابط، راتنج فصل", releaseList: "ورق فصل مطفي، لامع، منقوش، سيليكوني، لجلد PU", fabricList: "قماش غير منسوج، محبوك، مايكروفايبر، بوليستر، بطانة قطن", plasticizerList: "DOP، DOTP، DINP، TOTM، ملدن حيوي، ملدن صديق للبيئة", ourProducts: "منتجاتنا", productsTitle: "المنتجات وحلول المواد", productsPageTitle: "مورد محترف للمواد الصناعية العالمية", productsLead: "نوفر مواد وظيفية عالية الجودة للجلد الصناعي والمنسوجات والطلاء.", trusted: "موثوق من العديد", galleryTitle: "معارض عالمية وزيارات العملاء", visit1Title: "لقاء العملاء في المعرض", visit1Text: "نلتقي العملاء الدوليين لمناقشة التطبيقات والمتطلبات وفرص التعاون.", visit2Title: "زيارة شركاء عالميين", visit2Text: "نستقبل الشركاء الدوليين ونبني علاقات أقرب بالتواصل المباشر.", visit3Title: "نقاش في معرض دولي", visit3Text: "نناقش حلول مواد الجلد الصناعي والكيماويات في المعارض المتخصصة.", visit4Title: "زيارة مصنع ونقاش فني", visit4Text: "يزور العملاء المصنع لمناقشة الأداء والجودة والتعاون طويل الأجل.", visit5Title: "اجتماع تعاون العملاء", visit5Text: "نتواصل حول اختيار المنتجات وتطوير العينات واحتياجات التطبيق.", visit6Title: "اجتماع شراكة في المعرض", visit6Text: "نلتقي العملاء والشركاء لتقديم حلول المواد وبحث التعاون.", contactTitle: "كيف يمكننا مساعدتك؟", contactText: "أرسل متطلباتك وسنرد بمعلومات المنتج أو العينات أو الاقتراحات الفنية.", email: "Email", reserved: "محجوز", addressText: "طريق وانغهاي رقم 59، شيامن، الصين", name: "الاسم", company: "الشركة", phone: "WhatsApp / الهاتف", interestedProduct: "المنتج المطلوب", message: "الرسالة", sendInquiry: "إرسال الاستفسار", formNote: "يمكنك أيضاً التواصل معنا مباشرة عبر Email أو WhatsApp.", namePlaceholder: "ما اسمك؟", companyPlaceholder: "اسم الشركة", emailPlaceholder: "ما بريدك الإلكتروني؟", phonePlaceholder: "WhatsApp أو رقم الهاتف", productPlaceholder: "ما المنتج الذي تهتم به؟", messagePlaceholder: "كيف يمكننا مساعدتك؟", aboutHeroTitle: "شريك موثوق لحلول المواد المبتكرة", companyProfile: "ملف الشركة", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. مورد مواد وحلول كيميائية لصناعات الجلد الصناعي والطلاء.", profile2: "نركز على الجودة المستقرة والتوريد الموثوق والتواصل الفني والتعاون طويل الأجل.", moreTitle: "والمزيد من الحلول", moreText: "نقدم حلول مواد موثوقة وخدمات مهنية للعملاء العالميين.", teamTitle: "فريقنا واتصالاتنا العالمية", teamText: "يعمل فريقنا مع العملاء والشركاء عبر زيارات المصانع والمعارض الدولية.", mission: "المهمة", missionText: "تقديم حلول مواد مبتكرة ومستدامة بجودة موثوقة وخدمة مهنية.", vision: "الرؤية", visionText: "أن نصبح مورداً عالمياً محترماً للمواد المتخصصة والحلول الكيميائية.", valuesTitle: "قيمنا الأساسية", honesty: "النزاهة", honestyText: "نلتزم بالصدق والشفافية والممارسات الأخلاقية.", ownership: "المسؤولية", ownershipText: "نتحمل مسؤولية منتجاتنا وخدماتنا والتزاماتنا.", professionalism: "المهنية", professionalismText: "نقدم حلولاً مهنية بخبرة صناعية وتواصل فعال.", excellence: "التميز", excellenceText: "نسعى باستمرار إلى التحسين والاهتمام بالتفاصيل.", capLeather: "مواد جلد صناعي للأثاث والسيارات والأحذية والحقائب.", capFabric: "مواد قماش أساس لدعم إنتاج الجلد الصناعي.", capSilicone: "إضافات سيليكون لتحسين النعومة والملمس والمعالجة.", capFinishing: "عوامل تشطيب لتحسين اللمس واللمعان والمظهر.", capColorant: "ملونات وأصباغ للجلد الصناعي والمنسوجات والطلاء.", capRelease: "ورق فصل لنقل النسيج والفصل النظيف.", capResin: "حلول راتنج لاصقة ومرنة ومستقرة المعالجة.", capPlasticizer: "ملدنات لتحسين المرونة والليونة والمعالجة.", inquirySent: "تم إرسال الاستفسار", thanksTitle: "شكراً على استفسارك", thanksText: "تم إرسال رسالتك بنجاح. سنراجع متطلباتك ونتواصل معك قريباً.", backHome: "العودة إلى الرئيسية", partnerTitle: "شريكك في الأعمال", footerCompany: "توفر FUJIAN HOPE NEW MATERIAL CO., LTD. حلول مواد موثوقة للجلد الصناعي والطلاء والتطبيقات الصناعية.", quickLinks: "روابط سريعة", productCategories: "فئات المنتجات", getInTouch: "تواصل معنا", tel: "الهاتف", address: "العنوان", footerAddress: "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. جميع الحقوق محفوظة." }),
  ru: compactPatch({ home: "Главная", about: "О нас", products: "Продукты", contact: "Контакты", learnMore: "Подробнее", viewProducts: "Смотреть продукты", exploreProducts: "Открыть продукты", viewAll: "Все продукты", applications: "Применение:", requestDetails: "Запросить детали", representativeImage: "Представительное изображение", heroEyebrow: "Поставщик промышленных материалов и услуг", heroTitle: "Передовые решения для материалов искусственной кожи", heroText: "Мы специализируемся на красителях, добавках и обработке поверхности для искусственной кожи со стабильным качеством.", colorEyebrow: "Решения для красителей и пигментов", colorTitle: "Инновационные цветовые решения для современных материалов", colorText: "Мы поставляем пигментные пасты, цветовые чипсы, перламутровые пигменты и функциональные цветовые системы.", supplyEyebrow: "Поддержка производства и поставок", supplyTitle: "Производственное превосходство", supplyText: "Мы поддерживаем клиентов надежными ресурсами производства, опытом материалов и экспортным сервисом.", materialSolutions: "Решения для промышленных материалов", introTitle: "Профессиональный поставщик инновационных материалов", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. предлагает материалы и химические решения для искусственной кожи, текстиля, покрытий и промышленности.", colorant: "Краситель / Пигмент", leather: "Искусственная кожа", silicone: "Силиконовые добавки", finishing: "Средства финишной обработки", resin: "Смола", release: "Разделительная бумага", fabric: "Ткань / основа", plasticizer: "Пластификатор", colorantList: "Пигментная паста, PU цветовые чипсы, перламутровый пигмент, печатная краска, растворимый и водный краситель", leatherList: "PU кожа, Semi-PU, PVC кожа, микрофибра, водная кожа, автомобильная, мебельная и обувная кожа", siliconeList: "Силиконовый выравниватель, скользящая добавка, добавки для PU кожи и PU смолы", finishingList: "Водные и растворимые средства, матовая, глянцевая и мягкая отделка", serviceKicker: "Профессиональные промышленные услуги", serviceTitle: "Надежный партнер по материалам", serviceText: "Мы помогаем с подбором материалов, образцами, применением и экспортной коммуникацией.", resinList: "PU смола, Semi-PU, водная PU смола, акриловая, связующая, разделительная смола", releaseList: "Матовая, глянцевая, тисненая, силиконовая и PU разделительная бумага", fabricList: "Нетканая, трикотажная, микрофибра, полиэстер, хлопковая основа", plasticizerList: "DOP, DOTP, DINP, TOTM, био- и экологичные пластификаторы", ourProducts: "Наши продукты", productsTitle: "Продукты и решения для материалов", productsPageTitle: "Профессиональный поставщик для мировых отраслей", productsLead: "Hope New Material предлагает функциональные материалы для искусственной кожи, текстиля, покрытий и промышленности.", trusted: "Нам доверяют клиенты", galleryTitle: "Международные выставки и визиты клиентов", visit1Title: "Встреча с клиентами на выставке", visit1Text: "Обсуждение применений материалов, требований и возможностей сотрудничества.", visit2Title: "Встреча с мировыми партнерами", visit2Text: "Прямое общение с международными партнерами укрепляет деловые связи.", visit3Title: "Обсуждение на международной выставке", visit3Text: "Обсуждение решений для искусственной кожи и химических материалов.", visit4Title: "Визит на завод и техническая встреча", visit4Text: "Клиенты посещают завод и обсуждают характеристики, качество и сотрудничество.", visit5Title: "Встреча по сотрудничеству", visit5Text: "Обсуждение выбора продуктов, образцов и практических потребностей.", visit6Title: "Выставочная партнерская встреча", visit6Text: "Представление решений и обсуждение будущего сотрудничества.", contactTitle: "Чем мы можем помочь?", contactText: "Отправьте требования, и мы ответим информацией о продуктах, образцах или техническими советами.", email: "Email", reserved: "Зарезервировано", addressText: "No. 59 Wanghai Road, Software Park Phase II, Xiamen, China", name: "Имя", company: "Компания", phone: "WhatsApp / Телефон", interestedProduct: "Интересующий продукт", message: "Сообщение", sendInquiry: "Отправить запрос", formNote: "Вы также можете связаться с нами напрямую по Email или WhatsApp.", namePlaceholder: "Как вас зовут?", companyPlaceholder: "Название компании", emailPlaceholder: "Ваш Email", phonePlaceholder: "WhatsApp или телефон", productPlaceholder: "Какой продукт вас интересует?", messagePlaceholder: "Как мы можем помочь?", aboutHeroTitle: "Надежный партнер для инновационных материалов", companyProfile: "Профиль компании", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. является поставщиком материалов и химических решений для искусственной кожи и покрытий.", profile2: "Мы уделяем внимание стабильному качеству, надежным поставкам, технической коммуникации и долгосрочному сотрудничеству.", moreTitle: "И многое другое", moreText: "Мы предоставляем надежные материалы и профессиональные услуги для клиентов по всему миру.", teamTitle: "Команда и глобальные связи", teamText: "Наша команда работает с клиентами и партнерами через визиты на заводы и международные выставки.", mission: "Миссия", missionText: "Предоставлять инновационные и устойчивые решения с надежным качеством и профессиональным сервисом.", vision: "Видение", visionText: "Стать уважаемым поставщиком специальных материалов и химических решений.", valuesTitle: "Наши ценности", honesty: "ЧЕСТНОСТЬ", honestyText: "Мы придерживаемся честности, прозрачности и этики.", ownership: "ОТВЕТСТВЕННОСТЬ", ownershipText: "Мы отвечаем за продукты, услуги и обязательства.", professionalism: "ПРОФЕССИОНАЛИЗМ", professionalismText: "Мы предлагаем профессиональные решения на основе опыта.", excellence: "СОВЕРШЕНСТВО", excellenceText: "Мы постоянно улучшаемся и уделяем внимание деталям.", capLeather: "Материалы искусственной кожи для мебели, авто, обуви и сумок.", capFabric: "Материалы основы для производства искусственной кожи.", capSilicone: "Силиконовые добавки для гладкости, ощущения и обработки.", capFinishing: "Финишные средства для улучшения внешнего вида и свойств.", capColorant: "Красители и пигменты для кожи, текстиля и покрытий.", capRelease: "Разделительная бумага для переноса текстуры и чистого отделения.", capResin: "Смолы для адгезии, гибкости и стабильной обработки.", capPlasticizer: "Пластификаторы для гибкости и мягкости.", inquirySent: "Запрос отправлен", thanksTitle: "Спасибо за ваш запрос", thanksText: "Ваше сообщение успешно отправлено. Мы свяжемся с вами как можно скорее.", backHome: "На главную", partnerTitle: "Ваш деловой партнер", footerCompany: "FUJIAN HOPE NEW MATERIAL CO., LTD. предлагает надежные решения для искусственной кожи, покрытий и промышленности.", quickLinks: "Быстрые ссылки", productCategories: "Категории продуктов", getInTouch: "Связаться", tel: "Тел.", address: "Адрес", footerAddress: "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. Все права защищены." })
};

["id", "ms", "pt", "fr", "ja", "de", "ko"].forEach((lang) => {
  const base = compactTranslations.ru;
  compactTranslations[lang] = { ...base, ...translations[lang] };
});

Object.entries({ ...completeTranslationPatches, ...compactTranslations }).forEach(([lang, patch]) => {
  if (!translations[lang]) translations[lang] = {};
  Object.assign(translations[lang], patch);
});

const languageSpecificPatches = {
  id: compactPatch({ home: "Beranda", about: "Tentang Kami", products: "Produk", contact: "Kontak", learnMore: "Pelajari Lebih Lanjut", viewProducts: "Lihat Produk", exploreProducts: "Jelajahi Produk", viewAll: "Lihat Semua Produk", applications: "Aplikasi:", requestDetails: "Minta Detail", representativeImage: "Gambar representatif", heroEyebrow: "Penyedia produk dan layanan industri", heroTitle: "Solusi lanjutan untuk material kulit sintetis", heroText: "Kami menyediakan colorant, aditif dan solusi finishing permukaan untuk aplikasi kulit sintetis dengan kualitas stabil.", colorEyebrow: "Solusi colorant dan pigmen", colorTitle: "Solusi warna inovatif untuk material modern", colorText: "Kami menyediakan pasta pigmen, color chips, pearl pigment dan sistem warna fungsional.", supplyEyebrow: "Dukungan manufaktur dan pasokan", supplyTitle: "Keunggulan manufaktur", supplyText: "Kami mendukung pelanggan global dengan sumber produksi, pengetahuan material dan layanan ekspor.", materialSolutions: "Solusi material industri", introTitle: "Pemasok profesional untuk solusi material inovatif", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. menyediakan material dan solusi kimia untuk kulit sintetis, tekstil, coating dan aplikasi industri.", colorant: "Colorant / Pigment", leather: "Kulit Sintetis", silicone: "Aditif Silikon", finishing: "Agen Finishing Permukaan", resin: "Resin", release: "Release Paper", fabric: "Kain / Material Dasar", plasticizer: "Plasticizer", colorantList: "Pasta pigmen, PU color chips, pearl pigment, tinta cetak, colorant solvent-based, colorant water-based", leatherList: "PU leather, semi-PU, PVC leather, microfiber leather, water-based leather, automotive, sofa dan shoe upper leather", siliconeList: "Agen leveling silikon, slip agent, aditif PU leather, aditif PU resin, aditif water-based PU", finishingList: "Finishing water-based, solvent-based, matte, glossy dan soft touch", serviceKicker: "Layanan profesional industri", serviceTitle: "Mitra material terpercaya untuk bisnis Anda", serviceText: "Kami mendukung pemilihan material, pencocokan sampel, panduan aplikasi dan komunikasi ekspor.", resinList: "PU resin, semi-PU resin, water-based PU resin, acrylic resin, binder resin, release resin", releaseList: "Matte, glossy, embossed, silicone release paper dan PU synthetic leather paper", fabricList: "Nonwoven, knitted, microfiber base, polyester dan cotton backing fabric", plasticizerList: "DOP, DOTP, DINP, TOTM, bio-based dan eco-friendly plasticizer", ourProducts: "Produk Kami", productsTitle: "Produk & Solusi Material", productsPageTitle: "Pemasok profesional untuk industri global", productsLead: "Hope New Material menyediakan material fungsional untuk kulit sintetis, tekstil, coating dan industri.", trusted: "Dipercaya banyak pelanggan", galleryTitle: "Pameran global & kunjungan pelanggan", visit1Title: "Pertemuan pelanggan di pameran", visit1Text: "Bertemu pelanggan luar negeri untuk membahas aplikasi material, kebutuhan produk dan peluang kerja sama.", visit2Title: "Kunjungan mitra global", visit2Text: "Menyambut mitra internasional dan membangun hubungan bisnis melalui komunikasi langsung.", visit3Title: "Diskusi pameran internasional", visit3Text: "Membahas solusi kulit sintetis dan material kimia di pameran industri.", visit4Title: "Kunjungan pabrik & diskusi teknis", visit4Text: "Pelanggan mengunjungi pabrik dan membahas performa produk, kualitas dan kerja sama jangka panjang.", visit5Title: "Pertemuan kerja sama pelanggan", visit5Text: "Berkomunikasi tentang pemilihan produk, pengembangan sampel dan kebutuhan aplikasi.", visit6Title: "Pertemuan kemitraan pameran", visit6Text: "Memperkenalkan solusi material dan menjajaki kerja sama lanjutan.", contactTitle: "Apa yang bisa kami bantu?", contactText: "Kirim kebutuhan Anda. Kami akan merespons dengan informasi produk, sampel atau saran teknis.", email: "Email", reserved: "Dicadangkan", addressText: "No. 59 Wanghai Road, Software Park Phase II, Xiamen, China", name: "Nama", company: "Perusahaan", phone: "WhatsApp / Telepon", interestedProduct: "Produk yang diminati", message: "Pesan", sendInquiry: "Kirim Inquiry", formNote: "Anda juga dapat menghubungi kami langsung melalui Email atau WhatsApp.", namePlaceholder: "Siapa nama Anda?", companyPlaceholder: "Nama perusahaan", emailPlaceholder: "Apa email Anda?", phonePlaceholder: "WhatsApp atau nomor telepon", productPlaceholder: "Produk apa yang Anda minati?", messagePlaceholder: "Bagaimana kami bisa membantu?", aboutHeroTitle: "Mitra terpercaya untuk solusi material inovatif", companyProfile: "Profil Perusahaan", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. adalah pemasok material dan solusi kimia untuk industri kulit sintetis dan coating.", profile2: "Kami fokus pada kualitas stabil, pasokan andal, komunikasi teknis praktis dan kerja sama jangka panjang.", moreTitle: "Dan masih banyak lagi", moreText: "Kami menyediakan solusi material dan layanan profesional untuk pelanggan global.", teamTitle: "Tim & koneksi global", teamText: "Tim kami bekerja dengan pelanggan dan mitra melalui kunjungan pabrik dan pameran internasional.", mission: "Misi", missionText: "Memberikan solusi material inovatif dan berkelanjutan dengan kualitas andal.", vision: "Visi", visionText: "Menjadi pemasok material khusus dan solusi kimia yang dihormati secara global.", valuesTitle: "Nilai inti kami", honesty: "KEJUJURAN", honestyText: "Kami menjunjung kejujuran, transparansi dan etika bisnis.", ownership: "TANGGUNG JAWAB", ownershipText: "Kami bertanggung jawab atas produk, layanan dan komitmen.", professionalism: "PROFESIONALISME", professionalismText: "Kami memberikan solusi profesional melalui pengalaman industri.", excellence: "KEUNGGULAN", excellenceText: "Kami terus melakukan perbaikan dan memperhatikan detail.", capLeather: "Material kulit sintetis untuk furnitur, otomotif, alas kaki dan tas.", capFabric: "Material backing fabric untuk produksi kulit sintetis.", capSilicone: "Aditif silikon untuk meningkatkan smoothness, feel dan processing.", capFinishing: "Agen finishing untuk meningkatkan touch, gloss dan tampilan.", capColorant: "Colorant dan pigmen untuk kulit sintetis, tekstil dan coating.", capRelease: "Release paper untuk transfer tekstur dan clean release.", capResin: "Solusi resin untuk adhesi, fleksibilitas dan stabilitas proses.", capPlasticizer: "Plasticizer untuk meningkatkan fleksibilitas dan softness.", inquirySent: "Inquiry terkirim", thanksTitle: "Terima kasih atas inquiry Anda", thanksText: "Pesan Anda berhasil dikirim. Kami akan segera menghubungi Anda.", backHome: "Kembali ke Beranda", partnerTitle: "Mitra Bisnis Anda", footerCompany: "FUJIAN HOPE NEW MATERIAL CO., LTD. menyediakan solusi material untuk kulit sintetis, coating dan aplikasi industri.", quickLinks: "Tautan Cepat", productCategories: "Kategori Produk", getInTouch: "Hubungi Kami", tel: "Tel", address: "Alamat", footerAddress: "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. Semua hak dilindungi." }),
  ms: compactPatch({ home: "Laman Utama", about: "Tentang Kami", products: "Produk", contact: "Hubungi Kami", learnMore: "Ketahui Lagi", viewProducts: "Lihat Produk", exploreProducts: "Terokai Produk", viewAll: "Lihat Semua Produk", applications: "Aplikasi:", requestDetails: "Minta Butiran", representativeImage: "Imej wakil", heroEyebrow: "Pembekal produk dan perkhidmatan industri", heroTitle: "Penyelesaian lanjutan untuk bahan kulit sintetik", heroText: "Kami membekalkan pewarna, aditif dan penyelesaian rawatan permukaan untuk aplikasi kulit sintetik dengan kualiti stabil.", colorEyebrow: "Penyelesaian pewarna dan pigmen", colorTitle: "Penyelesaian warna inovatif untuk bahan moden", colorText: "Kami menyediakan pes pigmen, cip warna, pigmen mutiara dan sistem warna berfungsi.", supplyEyebrow: "Sokongan pembuatan dan bekalan", supplyTitle: "Kecemerlangan pembuatan", supplyText: "Kami menyokong pelanggan global dengan sumber pengeluaran, pengalaman bahan dan perkhidmatan eksport.", materialSolutions: "Penyelesaian bahan industri", introTitle: "Pembekal profesional untuk penyelesaian bahan inovatif", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. menyediakan bahan dan penyelesaian kimia untuk kulit sintetik, tekstil, salutan dan aplikasi industri.", colorant: "Pewarna / Pigmen", leather: "Kulit Sintetik", silicone: "Aditif Silikon", finishing: "Agen Kemasan Permukaan", resin: "Resin", release: "Kertas Pelepas", fabric: "Fabrik / Bahan Asas", plasticizer: "Plasticizer", colorantList: "Pes pigmen, cip warna PU, pigmen mutiara, dakwat cetak, pewarna berasaskan pelarut dan air", leatherList: "Kulit PU, semi-PU, PVC, mikrofiber, berasaskan air, automotif, sofa dan kasut", siliconeList: "Ejen perataan silikon, ejen gelincir, aditif PU leather dan PU resin", finishingList: "Kemasan berasaskan air, pelarut, matte, glossy dan soft touch", serviceKicker: "Perkhidmatan profesional industri", serviceTitle: "Rakan bahan yang dipercayai untuk perniagaan anda", serviceText: "Kami menyokong pemilihan bahan, padanan sampel, panduan aplikasi dan komunikasi eksport.", resinList: "PU resin, semi-PU resin, water-based PU resin, acrylic resin, binder resin, release resin", releaseList: "Matte, glossy, embossed, silicone release paper dan PU synthetic leather paper", fabricList: "Nonwoven, knitted, microfiber base, polyester dan cotton backing fabric", plasticizerList: "DOP, DOTP, DINP, TOTM, bio-based dan eco-friendly plasticizer", ourProducts: "Produk Kami", productsTitle: "Produk & Penyelesaian Bahan", productsPageTitle: "Pembekal profesional untuk industri global", productsLead: "Hope New Material menyediakan bahan berfungsi untuk kulit sintetik, tekstil, salutan dan industri.", trusted: "Dipercayai ramai pelanggan", galleryTitle: "Pameran global & lawatan pelanggan", visit1Title: "Pertemuan pelanggan pameran", visit1Text: "Bertemu pelanggan luar negara untuk membincangkan aplikasi bahan, keperluan produk dan peluang kerjasama.", visit2Title: "Lawatan rakan global", visit2Text: "Menyambut rakan antarabangsa dan membina hubungan perniagaan melalui komunikasi langsung.", visit3Title: "Perbincangan pameran antarabangsa", visit3Text: "Membincangkan penyelesaian kulit sintetik dan bahan kimia di pameran industri.", visit4Title: "Lawatan kilang & perbincangan teknikal", visit4Text: "Pelanggan melawat kilang dan membincangkan prestasi produk, kualiti dan kerjasama jangka panjang.", visit5Title: "Mesyuarat kerjasama pelanggan", visit5Text: "Berkomunikasi tentang pemilihan produk, pembangunan sampel dan keperluan aplikasi.", visit6Title: "Mesyuarat kerjasama pameran", visit6Text: "Memperkenalkan penyelesaian bahan dan meneroka kerjasama masa depan.", contactTitle: "Bagaimana kami boleh membantu?", contactText: "Hantar keperluan anda. Kami akan membalas dengan maklumat produk, sampel atau cadangan teknikal.", email: "Email", reserved: "Dikhaskan", addressText: "No. 59 Wanghai Road, Software Park Phase II, Xiamen, China", name: "Nama", company: "Syarikat", phone: "WhatsApp / Telefon", interestedProduct: "Produk diminati", message: "Mesej", sendInquiry: "Hantar Pertanyaan", formNote: "Anda juga boleh menghubungi kami terus melalui Email atau WhatsApp.", namePlaceholder: "Apakah nama anda?", companyPlaceholder: "Nama syarikat", emailPlaceholder: "Apakah email anda?", phonePlaceholder: "WhatsApp atau nombor telefon", productPlaceholder: "Produk apa yang anda minati?", messagePlaceholder: "Bagaimana kami boleh membantu?", aboutHeroTitle: "Rakan dipercayai untuk penyelesaian bahan inovatif", companyProfile: "Profil Syarikat", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. ialah pembekal bahan dan penyelesaian kimia untuk industri kulit sintetik dan salutan.", profile2: "Kami fokus pada kualiti stabil, bekalan boleh dipercayai, komunikasi teknikal praktikal dan kerjasama jangka panjang.", moreTitle: "Dan banyak lagi", moreText: "Kami menyediakan penyelesaian bahan dan perkhidmatan profesional untuk pelanggan global.", teamTitle: "Pasukan & hubungan global", teamText: "Pasukan kami bekerjasama dengan pelanggan dan rakan melalui lawatan kilang dan pameran antarabangsa.", mission: "Misi", missionText: "Menyampaikan penyelesaian bahan inovatif dan mampan dengan kualiti boleh dipercayai.", vision: "Visi", visionText: "Menjadi pembekal bahan khusus dan penyelesaian kimia yang dihormati di peringkat global.", valuesTitle: "Nilai Teras Kami", honesty: "KEJUJURAN", honestyText: "Kami menegakkan kejujuran, ketelusan dan etika perniagaan.", ownership: "TANGGUNGJAWAB", ownershipText: "Kami bertanggungjawab terhadap produk, perkhidmatan dan komitmen.", professionalism: "PROFESIONALISME", professionalismText: "Kami menyampaikan penyelesaian profesional melalui pengalaman industri.", excellence: "KECEMERLANGAN", excellenceText: "Kami terus menambah baik dan memberi perhatian kepada detail.", capLeather: "Bahan kulit sintetik untuk perabot, automotif, kasut dan beg.", capFabric: "Bahan fabrik asas untuk pengeluaran kulit sintetik.", capSilicone: "Aditif silikon untuk meningkatkan kelicinan, rasa dan pemprosesan.", capFinishing: "Agen kemasan untuk meningkatkan sentuhan, gloss dan penampilan.", capColorant: "Pewarna dan pigmen untuk kulit sintetik, tekstil dan salutan.", capRelease: "Kertas pelepas untuk pemindahan tekstur dan clean release.", capResin: "Penyelesaian resin untuk lekatan, fleksibiliti dan kestabilan proses.", capPlasticizer: "Plasticizer untuk meningkatkan fleksibiliti dan kelembutan.", inquirySent: "Pertanyaan dihantar", thanksTitle: "Terima kasih atas pertanyaan anda", thanksText: "Mesej anda berjaya dihantar. Kami akan menghubungi anda secepat mungkin.", backHome: "Kembali ke Laman Utama", partnerTitle: "Rakan Perniagaan Anda", footerCompany: "FUJIAN HOPE NEW MATERIAL CO., LTD. menyediakan penyelesaian bahan untuk kulit sintetik, salutan dan aplikasi industri.", quickLinks: "Pautan Pantas", productCategories: "Kategori Produk", getInTouch: "Hubungi Kami", tel: "Tel", address: "Alamat", footerAddress: "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. Hak cipta terpelihara." })
};

const additionalLanguagePatches = {
  pt: compactPatch({ ...languageSpecificPatches.id, home: "Início", about: "Sobre nós", products: "Produtos", contact: "Contato", learnMore: "Saiba mais", viewProducts: "Ver produtos", exploreProducts: "Explorar produtos", viewAll: "Ver todos os produtos", applications: "Aplicações:", requestDetails: "Solicitar detalhes", representativeImage: "Imagem representativa", heroEyebrow: "Fornecedor de produtos e serviços industriais", heroTitle: "Soluções avançadas para materiais de couro sintético", heroText: "Fornecemos colorantes, aditivos e soluções de tratamento de superfície para couro sintético com qualidade estável.", colorEyebrow: "Soluções de colorantes e pigmentos", colorTitle: "Soluções de cor inovadoras para materiais modernos", colorText: "Fornecemos pasta pigmentária, chips de cor, pigmentos perolados e sistemas funcionais de cor.", supplyEyebrow: "Suporte de fabricação e fornecimento", supplyTitle: "Excelência em fabricação", supplyText: "Apoiamos clientes globais com recursos de produção, conhecimento de materiais e serviço de exportação.", materialSolutions: "Soluções de materiais industriais", introTitle: "Fornecedor profissional de soluções de materiais inovadores", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. fornece materiais e soluções químicas para couro sintético, têxteis, revestimentos e aplicações industriais.", colorant: "Colorante / Pigmento", leather: "Couro Sintético", silicone: "Aditivos de Silicone", finishing: "Agentes de Acabamento", resin: "Resina", release: "Papel Release", fabric: "Tecido / Material Base", plasticizer: "Plastificante", productsTitle: "Produtos e Soluções de Materiais", productsPageTitle: "Fornecedor profissional para indústrias globais", productsLead: "Materiais funcionais para couro sintético, têxteis, revestimentos e aplicações industriais.", galleryTitle: "Exposições globais e visitas de clientes", contactTitle: "Como podemos ajudar?", contactText: "Envie seus requisitos. Responderemos com informações de produto, amostras ou sugestões técnicas.", name: "Nome", company: "Empresa", phone: "WhatsApp / Telefone", interestedProduct: "Produto de interesse", message: "Mensagem", sendInquiry: "Enviar consulta", formNote: "Você também pode nos contatar diretamente por Email ou WhatsApp.", namePlaceholder: "Qual é o seu nome?", companyPlaceholder: "Nome da empresa", emailPlaceholder: "Qual é o seu email?", phonePlaceholder: "WhatsApp ou telefone", productPlaceholder: "Qual produto lhe interessa?", messagePlaceholder: "Como podemos ajudar?", aboutHeroTitle: "Parceiro confiável para soluções de materiais inovadores", companyProfile: "Perfil da Empresa", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. é fornecedora de materiais e soluções químicas para couro sintético e revestimentos.", profile2: "Focamos qualidade estável, fornecimento confiável, comunicação técnica e cooperação de longo prazo.", partnerTitle: "Seu parceiro de negócios", quickLinks: "Links rápidos", productCategories: "Categorias de produtos", getInTouch: "Contato", tel: "Tel", address: "Endereço", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. Todos os direitos reservados." }),
  fr: compactPatch({ ...languageSpecificPatches.id, home: "Accueil", about: "À propos", products: "Produits", contact: "Contact", learnMore: "En savoir plus", viewProducts: "Voir les produits", exploreProducts: "Explorer les produits", viewAll: "Voir tous les produits", applications: "Applications :", requestDetails: "Demander des détails", representativeImage: "Image représentative", heroEyebrow: "Fournisseur de produits et services industriels", heroTitle: "Solutions avancées pour matériaux de cuir synthétique", heroText: "Nous fournissons colorants, additifs et traitements de surface pour cuir synthétique avec une qualité stable.", colorEyebrow: "Solutions colorants et pigments", colorTitle: "Solutions couleur innovantes pour matériaux modernes", colorText: "Nous proposons pâtes pigmentaires, chips couleur, pigments nacrés et systèmes couleur fonctionnels.", supplyEyebrow: "Support fabrication et approvisionnement", supplyTitle: "Excellence manufacturière", supplyText: "Nous accompagnons les clients mondiaux avec ressources de production, expertise matériaux et service export.", materialSolutions: "Solutions de matériaux industriels", introTitle: "Fournisseur professionnel de solutions matériaux innovantes", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. fournit des matériaux et solutions chimiques pour cuir synthétique, textile, revêtement et industrie.", colorant: "Colorant / Pigment", leather: "Cuir Synthétique", silicone: "Additifs Silicone", finishing: "Agents de Finition", resin: "Résine", release: "Papier Release", fabric: "Tissu / Base", plasticizer: "Plastifiant", productsTitle: "Produits et solutions matériaux", productsPageTitle: "Fournisseur professionnel pour industries mondiales", productsLead: "Matériaux fonctionnels pour cuir synthétique, textile, revêtement et applications industrielles.", galleryTitle: "Expositions mondiales et visites clients", contactTitle: "Comment pouvons-nous vous aider ?", contactText: "Envoyez vos besoins. Nous répondrons avec informations produit, échantillons ou conseils techniques.", name: "Nom", company: "Société", phone: "WhatsApp / Téléphone", interestedProduct: "Produit d'intérêt", message: "Message", sendInquiry: "Envoyer la demande", formNote: "Vous pouvez aussi nous contacter directement par Email ou WhatsApp.", namePlaceholder: "Quel est votre nom ?", companyPlaceholder: "Nom de société", emailPlaceholder: "Quel est votre email ?", phonePlaceholder: "WhatsApp ou téléphone", productPlaceholder: "Quel produit vous intéresse ?", messagePlaceholder: "Comment pouvons-nous aider ?", aboutHeroTitle: "Partenaire fiable pour solutions matériaux innovantes", companyProfile: "Profil de l'entreprise", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. est fournisseur de matériaux et solutions chimiques pour cuir synthétique et revêtements.", profile2: "Nous privilégions qualité stable, approvisionnement fiable, communication technique et coopération durable.", partnerTitle: "Votre partenaire commercial", quickLinks: "Liens rapides", productCategories: "Catégories de produits", getInTouch: "Contact", tel: "Tél", address: "Adresse", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. Tous droits réservés." }),
  de: compactPatch({ ...languageSpecificPatches.id, home: "Startseite", about: "Über uns", products: "Produkte", contact: "Kontakt", learnMore: "Mehr erfahren", viewProducts: "Produkte ansehen", exploreProducts: "Produkte entdecken", viewAll: "Alle Produkte", applications: "Anwendungen:", requestDetails: "Details anfragen", representativeImage: "Repräsentatives Bild", heroEyebrow: "Anbieter industrieller Produkte und Services", heroTitle: "Fortschrittliche Lösungen für Kunstledermaterialien", heroText: "Wir liefern Farbstoffe, Additive und Oberflächenbehandlungen für Kunstlederanwendungen mit stabiler Qualität.", colorEyebrow: "Lösungen für Farbstoffe und Pigmente", colorTitle: "Innovative Farblösungen für moderne Materialien", colorText: "Wir bieten Pigmentpasten, Farbchips, Perlglanzpigmente und funktionale Farbsysteme.", supplyEyebrow: "Fertigungs- und Lieferunterstützung", supplyTitle: "Fertigungskompetenz", supplyText: "Wir unterstützen globale Kunden mit Produktionsressourcen, Materialwissen und Exportservice.", materialSolutions: "Industrielle Materiallösungen", introTitle: "Professioneller Lieferant innovativer Materiallösungen", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. liefert Materialien und chemische Lösungen für Kunstleder, Textilien, Beschichtungen und Industrie.", colorant: "Farbstoff / Pigment", leather: "Kunstleder", silicone: "Silikonadditive", finishing: "Oberflächenfinish-Mittel", resin: "Harz", release: "Trennpapier", fabric: "Gewebe / Basismaterial", plasticizer: "Weichmacher", productsTitle: "Produkte und Materiallösungen", productsPageTitle: "Professioneller Lieferant für globale Branchen", productsLead: "Funktionsmaterialien für Kunstleder, Textilien, Beschichtungen und industrielle Anwendungen.", galleryTitle: "Internationale Messen und Kundenbesuche", contactTitle: "Wie können wir helfen?", contactText: "Senden Sie uns Ihre Anforderungen. Wir antworten mit Produktinformationen, Mustern oder technischen Vorschlägen.", name: "Name", company: "Unternehmen", phone: "WhatsApp / Telefon", interestedProduct: "Interessiertes Produkt", message: "Nachricht", sendInquiry: "Anfrage senden", formNote: "Sie können uns auch direkt per Email oder WhatsApp kontaktieren.", namePlaceholder: "Wie heißen Sie?", companyPlaceholder: "Unternehmensname", emailPlaceholder: "Ihre Email", phonePlaceholder: "WhatsApp oder Telefon", productPlaceholder: "Welches Produkt interessiert Sie?", messagePlaceholder: "Wie können wir helfen?", aboutHeroTitle: "Verlässlicher Partner für innovative Materiallösungen", companyProfile: "Unternehmensprofil", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. ist Lieferant von Materialien und chemischen Lösungen für Kunstleder und Beschichtungen.", profile2: "Wir konzentrieren uns auf stabile Qualität, zuverlässige Lieferung, technische Kommunikation und langfristige Zusammenarbeit.", partnerTitle: "Ihr Geschäftspartner", quickLinks: "Schnelllinks", productCategories: "Produktkategorien", getInTouch: "Kontakt", tel: "Tel", address: "Adresse", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. Alle Rechte vorbehalten." }),
  ja: compactPatch({ ...languageSpecificPatches.id, home: "ホーム", about: "会社情報", products: "製品", contact: "お問い合わせ", learnMore: "詳しく見る", viewProducts: "製品を見る", exploreProducts: "製品を探す", viewAll: "すべての製品", applications: "用途：", requestDetails: "詳細を問い合わせる", representativeImage: "代表画像", heroEyebrow: "産業製品・サービスサプライヤー", heroTitle: "合成皮革材料向け先進ソリューション", heroText: "合成皮革用途向けに着色剤、添加剤、表面処理ソリューションを安定した品質で提供します。", colorEyebrow: "着色剤・顔料ソリューション", colorTitle: "現代材料向け革新的カラーソリューション", colorText: "顔料ペースト、カラーチップ、パール顔料、機能性色彩システムを提供します。", supplyEyebrow: "製造・供給サポート", supplyTitle: "製造力と安定供給", supplyText: "生産リソース、材料知識、輸出サービスで世界の顧客をサポートします。", materialSolutions: "産業材料ソリューション", introTitle: "革新的材料ソリューションの専門サプライヤー", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD. は合成皮革、繊維、コーティング、産業用途向け材料と化学ソリューションを提供します。", colorant: "着色剤 / 顔料", leather: "人工皮革", silicone: "シリコーン添加剤", finishing: "表面仕上げ剤", resin: "樹脂", release: "離型紙", fabric: "基布 / ベース材", plasticizer: "可塑剤", productsTitle: "製品・材料ソリューション", productsPageTitle: "グローバル産業向け専門サプライヤー", productsLead: "合成皮革、繊維、コーティング、産業用途向け機能材料を提供します。", galleryTitle: "国際展示会と顧客訪問", contactTitle: "どのようにお手伝いできますか？", contactText: "ご要望をお送りください。製品情報、サンプル、技術提案で回答します。", name: "お名前", company: "会社名", phone: "WhatsApp / 電話", interestedProduct: "関心製品", message: "メッセージ", sendInquiry: "問い合わせを送信", formNote: "Email または WhatsApp でも直接お問い合わせいただけます。", namePlaceholder: "お名前を入力してください", companyPlaceholder: "会社名", emailPlaceholder: "メールアドレス", phonePlaceholder: "WhatsApp または電話番号", productPlaceholder: "関心のある製品", messagePlaceholder: "ご要望をご記入ください", aboutHeroTitle: "革新的材料ソリューションの信頼できるパートナー", companyProfile: "会社概要", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD. は合成皮革とコーティング産業向け材料・化学ソリューションのサプライヤーです。", profile2: "安定品質、信頼できる供給、実用的な技術コミュニケーション、長期協力を重視します。", partnerTitle: "ビジネスパートナー", quickLinks: "クイックリンク", productCategories: "製品カテゴリ", getInTouch: "お問い合わせ", tel: "電話", address: "住所", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. All rights reserved." }),
  ko: compactPatch({ ...languageSpecificPatches.id, home: "홈", about: "회사 소개", products: "제품", contact: "문의하기", learnMore: "자세히 보기", viewProducts: "제품 보기", exploreProducts: "제품 둘러보기", viewAll: "전체 제품 보기", applications: "적용 분야:", requestDetails: "상세 문의", representativeImage: "대표 이미지", heroEyebrow: "산업 제품 및 서비스 공급업체", heroTitle: "합성피혁 소재를 위한 고급 솔루션", heroText: "합성피혁 응용을 위한 착색제, 첨가제, 표면 처리 솔루션을 안정적인 품질로 제공합니다.", colorEyebrow: "착색제 및 안료 솔루션", colorTitle: "현대 소재를 위한 혁신적인 컬러 솔루션", colorText: "안료 페이스트, 컬러 칩, 펄 안료 및 기능성 컬러 시스템을 제공합니다.", supplyEyebrow: "제조 및 공급 지원", supplyTitle: "제조 역량과 안정 공급", supplyText: "생산 자원, 소재 경험, 수출 서비스를 통해 글로벌 고객을 지원합니다.", materialSolutions: "산업 소재 솔루션", introTitle: "혁신 소재 솔루션 전문 공급업체", introText: "FUJIAN HOPE NEW MATERIAL CO., LTD.는 합성피혁, 섬유, 코팅 및 산업 응용을 위한 소재와 화학 솔루션을 제공합니다.", colorant: "착색제 / 안료", leather: "인조가죽", silicone: "실리콘 첨가제", finishing: "표면 처리제", resin: "수지", release: "이형지", fabric: "원단 / 기재", plasticizer: "가소제", productsTitle: "제품 및 소재 솔루션", productsPageTitle: "글로벌 산업을 위한 전문 공급업체", productsLead: "합성피혁, 섬유, 코팅 및 산업 응용을 위한 기능성 소재를 제공합니다.", galleryTitle: "글로벌 전시회 및 고객 방문", contactTitle: "무엇을 도와드릴까요?", contactText: "요구 사항을 보내주시면 제품 정보, 샘플 또는 기술 제안으로 답변드리겠습니다.", name: "이름", company: "회사", phone: "WhatsApp / 전화", interestedProduct: "관심 제품", message: "메시지", sendInquiry: "문의 보내기", formNote: "Email 또는 WhatsApp으로도 직접 연락하실 수 있습니다.", namePlaceholder: "이름을 입력하세요", companyPlaceholder: "회사명", emailPlaceholder: "이메일을 입력하세요", phonePlaceholder: "WhatsApp 또는 전화번호", productPlaceholder: "관심 있는 제품", messagePlaceholder: "문의 내용을 입력하세요", aboutHeroTitle: "혁신 소재 솔루션의 신뢰할 수 있는 파트너", companyProfile: "회사 프로필", profile1: "FUJIAN HOPE NEW MATERIAL CO., LTD.는 합성피혁 및 코팅 산업용 소재와 화학 솔루션 공급업체입니다.", profile2: "안정적인 품질, 신뢰할 수 있는 공급, 실용적인 기술 소통 및 장기 협력을 중시합니다.", partnerTitle: "비즈니스 파트너", quickLinks: "빠른 링크", productCategories: "제품 카테고리", getInTouch: "문의하기", tel: "전화", address: "주소", copyright: "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. All rights reserved." })
};

Object.entries(additionalLanguagePatches).forEach(([lang, patch]) => {
  if (!translations[lang]) translations[lang] = {};
  Object.assign(translations[lang], patch);
});

Object.entries(languageSpecificPatches).forEach(([lang, patch]) => {
  if (!translations[lang]) translations[lang] = {};
  Object.assign(translations[lang], patch);
});

const cardTextRepairs = {
  pt: {
    "categoryCard.colorantText": "Pasta pigmentária, chips de cor PU, pigmento perolado, tinta de impressão, colorante solvente e aquoso",
    "categoryCard.leatherText": "Couro PU, semi-PU, couro PVC, microfibra, couro aquoso, automotivo, sofá e calçado",
    "categoryCard.siliconeText": "Agente nivelante silicone, agente deslizante, aditivos para couro PU, resina PU e PU aquoso",
    "categoryCard.finishingText": "Agente de acabamento aquoso, solvente, fosco, brilhante e toque macio",
    "service.kicker": "SERVIÇOS INDUSTRIAIS PROFISSIONAIS", "service.title": "Parceiro confiável em materiais", "service.text": "Apoiamos seleção de materiais, amostras, orientação de aplicação e comunicação de exportação.",
    "serviceCard.resinText": "Resina PU, semi-PU, resina PU aquosa, resina acrílica, resina ligante e release",
    "serviceCard.releaseText": "Papel release fosco, brilhante, texturizado, siliconado e para couro PU",
    "serviceCard.fabricText": "Tecido não tecido, malha, base microfibra, poliéster e base algodão",
    "serviceCard.plasticizerText": "DOP, DOTP, DINP, TOTM, plastificante bio-based e ecológico",
    "products.kicker": "NOSSOS PRODUTOS", "gallery.kicker": "CONFIADO POR MUITOS",
    "visit.page1.card1.title": "Reunião com clientes em exposição", "visit.page1.card1.text": "Discussão presencial sobre aplicações de materiais, requisitos de produto e oportunidades de cooperação.",
    "visit.page1.card2.title": "Encontro com parceiros globais", "visit.page1.card2.text": "Comunicação direta com parceiros internacionais para fortalecer relações comerciais.",
    "visit.page1.card3.title": "Discussão em exposição internacional", "visit.page1.card3.text": "Apresentação de soluções para couro sintético e materiais químicos em feiras profissionais.",
    "visit.page2.card1.title": "Visita à fábrica e discussão técnica", "visit.page2.card1.text": "Clientes visitam a fábrica e discutem desempenho, qualidade e cooperação de longo prazo.",
    "visit.page2.card2.title": "Reunião de cooperação com clientes", "visit.page2.card2.text": "Comunicação sobre seleção de produtos, desenvolvimento de amostras e necessidades práticas.",
    "visit.page2.card3.title": "Reunião de parceria em exposição", "visit.page2.card3.text": "Apresentação de soluções de materiais e exploração de cooperação futura.",
    "about.cap.leather.text": "Materiais de couro sintético para móveis, automóveis, calçados e bolsas.", "about.cap.fabric.text": "Materiais de base têxtil para produção de couro sintético.", "about.cap.silicone.text": "Aditivos silicone para melhorar toque, nivelamento e processamento.", "about.cap.finishing.text": "Agentes de acabamento para melhorar toque, brilho e aparência.", "about.cap.colorant.text": "Colorantes e pigmentos para couro sintético, têxteis e revestimentos.", "about.cap.release.text": "Papel release para transferência de textura e separação limpa.", "about.cap.resin.text": "Soluções de resina para adesão, flexibilidade e estabilidade.", "about.cap.plasticizer.text": "Plastificantes para melhorar flexibilidade e maciez."
  },
  fr: {
    "categoryCard.colorantText": "Pâte pigmentaire, chips couleur PU, pigment nacré, encre, colorant solvant et aqueux",
    "categoryCard.leatherText": "Cuir PU, semi-PU, PVC, microfibre, cuir aqueux, automobile, canapé et chaussure",
    "categoryCard.siliconeText": "Agent nivelant silicone, agent glissant, additifs pour cuir PU, résine PU et PU aqueux",
    "categoryCard.finishingText": "Finition aqueuse, solvant, mate, brillante et toucher doux",
    "service.kicker": "SERVICES INDUSTRIELS PROFESSIONNELS", "service.title": "Partenaire matériaux fiable", "service.text": "Nous aidons au choix des matériaux, échantillons, applications et communication export.",
    "serviceCard.resinText": "Résine PU, semi-PU, PU aqueuse, acrylique, liante et release", "serviceCard.releaseText": "Papier release mat, brillant, embossé, siliconé et pour cuir PU", "serviceCard.fabricText": "Non-tissé, tricot, base microfibre, polyester et support coton", "serviceCard.plasticizerText": "DOP, DOTP, DINP, TOTM, plastifiant bio-sourcé et écologique",
    "products.kicker": "NOS PRODUITS", "gallery.kicker": "FAIT CONFIANCE PAR DE NOMBREUX CLIENTS",
    "visit.page1.card1.title": "Rencontre client en salon", "visit.page1.card1.text": "Discussion directe sur applications matériaux, besoins produits et coopération.", "visit.page1.card2.title": "Rencontre partenaires mondiaux", "visit.page1.card2.text": "Communication directe avec partenaires internationaux.", "visit.page1.card3.title": "Discussion salon international", "visit.page1.card3.text": "Échange sur cuir synthétique et solutions chimiques.", "visit.page2.card1.title": "Visite usine et discussion technique", "visit.page2.card1.text": "Visite de l'usine et discussion performance, qualité et coopération.", "visit.page2.card2.title": "Réunion coopération client", "visit.page2.card2.text": "Échange sur choix produit, échantillons et besoins d'application.", "visit.page2.card3.title": "Réunion partenariat salon", "visit.page2.card3.text": "Présentation de solutions matériaux et coopération future.",
    "about.cap.leather.text": "Matériaux de cuir synthétique pour mobilier, automobile, chaussures et sacs.", "about.cap.fabric.text": "Supports textiles pour fabrication de cuir synthétique.", "about.cap.silicone.text": "Additifs silicone pour toucher, nivellement et procédé.", "about.cap.finishing.text": "Agents de finition pour toucher, brillance et apparence.", "about.cap.colorant.text": "Colorants et pigments pour cuir synthétique, textile et revêtement.", "about.cap.release.text": "Papier release pour transfert de texture et démoulage propre.", "about.cap.resin.text": "Résines pour adhésion, flexibilité et stabilité.", "about.cap.plasticizer.text": "Plastifiants pour flexibilité et douceur."
  },
  de: {
    "categoryCard.colorantText": "Pigmentpaste, PU-Farbchips, Perlglanzpigment, Druckfarbe, lösemittel- und wasserbasierte Farbstoffe",
    "categoryCard.leatherText": "PU-Leder, Semi-PU, PVC-Leder, Mikrofaserleder, wasserbasiertes Leder, Auto-, Sofa- und Schuhoberleder",
    "categoryCard.siliconeText": "Silikon-Verlaufmittel, Gleitmittel, Additive für PU-Leder, PU-Harz und wasserbasiertes PU",
    "categoryCard.finishingText": "Wasserbasierte und lösemittelbasierte Finish-Mittel, matt, glänzend und Soft-Touch",
    "service.kicker": "PROFESSIONELLE INDUSTRIESERVICES", "service.title": "Zuverlässiger Materialpartner", "service.text": "Wir unterstützen Materialauswahl, Musterabgleich, Anwendung und Exportkommunikation.",
    "serviceCard.resinText": "PU-Harz, Semi-PU-Harz, wasserbasiertes PU-Harz, Acrylharz, Bindeharz und Trennharz", "serviceCard.releaseText": "Mattes, glänzendes, geprägtes, silikonisiertes Trennpapier und PU-Trennpapier", "serviceCard.fabricText": "Vlies, Strickware, Mikrofaserbasis, Polyester und Baumwollträger", "serviceCard.plasticizerText": "DOP, DOTP, DINP, TOTM, biobasierte und umweltfreundliche Weichmacher",
    "products.kicker": "UNSERE PRODUKTE", "gallery.kicker": "VON VIELEN KUNDEN VERTRAUT",
    "visit.page1.card1.title": "Kundentreffen auf Messe", "visit.page1.card1.text": "Direkte Gespräche über Materialanwendungen, Produktanforderungen und Zusammenarbeit.", "visit.page1.card2.title": "Treffen mit globalen Partnern", "visit.page1.card2.text": "Direkte Kommunikation mit internationalen Partnern.", "visit.page1.card3.title": "Internationale Messegespräche", "visit.page1.card3.text": "Austausch über Kunstledermaterialien und chemische Lösungen.", "visit.page2.card1.title": "Werksbesuch und Technikgespräch", "visit.page2.card1.text": "Kunden besuchen das Werk und besprechen Leistung, Qualität und Kooperation.", "visit.page2.card2.title": "Kunden-Kooperationsgespräch", "visit.page2.card2.text": "Kommunikation zu Produktauswahl, Musterentwicklung und Anwendung.", "visit.page2.card3.title": "Messe-Partnerschaftsgespräch", "visit.page2.card3.text": "Vorstellung von Materiallösungen und künftiger Zusammenarbeit.",
    "about.cap.leather.text": "Kunstledermaterialien für Möbel, Automobil, Schuhe und Taschen.", "about.cap.fabric.text": "Textile Trägermaterialien für die Kunstlederproduktion.", "about.cap.silicone.text": "Silikonadditive für Griff, Verlauf und Verarbeitung.", "about.cap.finishing.text": "Finish-Mittel für Griff, Glanz und Aussehen.", "about.cap.colorant.text": "Farbstoffe und Pigmente für Kunstleder, Textilien und Beschichtungen.", "about.cap.release.text": "Trennpapier für Texturtransfer und sauberes Ablösen.", "about.cap.resin.text": "Harzlösungen für Haftung, Flexibilität und Stabilität.", "about.cap.plasticizer.text": "Weichmacher für Flexibilität und Weichheit."
  }
};

Object.entries(cardTextRepairs).forEach(([lang, patch]) => {
  if (!translations[lang]) translations[lang] = {};
  Object.assign(translations[lang], patch);
});

const lateRepairs = {
  pt: {
    "contact.emailLabel": "Email", "contact.reserve": "Reservado", "contact.address": "No. 59 Wanghai Road, Software Park Phase II, Xiamen, China", "form.email": "Email", "footer.companyText": "FUJIAN HOPE NEW MATERIAL CO., LTD. fornece soluções confiáveis de materiais para couro sintético, revestimentos e aplicações industriais.", "footer.telLabel": "Tel", "footer.address": "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China",
    "about.more.title": "E muito mais", "about.more.text": "Com experiência no setor, fornecemos soluções de materiais confiáveis e serviços profissionais para clientes globais.", "about.team.title": "Nossa equipe e conexões globais", "about.team.text": "Nossa equipe trabalha com clientes e parceiros por meio de visitas à fábrica, discussões de produtos e exposições internacionais.", "about.mission.title": "Missão", "about.mission.text": "Entregar soluções de materiais inovadoras e sustentáveis com qualidade confiável e serviço profissional.", "about.vision.title": "Visão", "about.vision.text": "Tornar-se um fornecedor globalmente respeitado de materiais especiais e soluções químicas.", "about.values.title": "Nossos valores essenciais", "about.values.h.title": "HONESTIDADE", "about.values.h.text": "Defendemos honestidade, transparência e práticas comerciais éticas.", "about.values.o.title": "RESPONSABILIDADE", "about.values.o.text": "Assumimos responsabilidade por produtos, serviços e compromissos.", "about.values.p.title": "PROFISSIONALISMO", "about.values.p.text": "Entregamos soluções profissionais com experiência industrial.", "about.values.e.title": "EXCELÊNCIA", "about.values.e.text": "Buscamos melhoria contínua e atenção aos detalhes.", "thanks.kicker": "CONSULTA ENVIADA", "thanks.title": "Obrigado pela sua consulta", "thanks.text": "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.", "thanks.home": "Voltar ao início"
  },
  fr: {
    "contact.emailLabel": "Email", "contact.reserve": "Réservé", "contact.address": "No. 59 Wanghai Road, Software Park Phase II, Xiamen, China", "form.email": "Email", "footer.companyText": "FUJIAN HOPE NEW MATERIAL CO., LTD. fournit des solutions matériaux fiables pour cuir synthétique, revêtements et applications industrielles.", "footer.telLabel": "Tél", "footer.address": "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China",
    "about.more.title": "Et bien plus encore", "about.more.text": "Avec notre expérience, nous fournissons des solutions matériaux fiables et des services professionnels.", "about.team.title": "Notre équipe et connexions mondiales", "about.team.text": "Notre équipe travaille avec clients et partenaires via visites d'usine, échanges produits et salons internationaux.", "about.mission.title": "Mission", "about.mission.text": "Fournir des solutions matériaux innovantes et durables avec qualité fiable et service professionnel.", "about.vision.title": "Vision", "about.vision.text": "Devenir un fournisseur reconnu de matériaux spéciaux et solutions chimiques.", "about.values.title": "Nos valeurs", "about.values.h.title": "HONNÊTETÉ", "about.values.h.text": "Nous défendons honnêteté, transparence et éthique.", "about.values.o.title": "RESPONSABILITÉ", "about.values.o.text": "Nous assumons la responsabilité de nos produits, services et engagements.", "about.values.p.title": "PROFESSIONNALISME", "about.values.p.text": "Nous livrons des solutions professionnelles avec expertise industrielle.", "about.values.e.title": "EXCELLENCE", "about.values.e.text": "Nous poursuivons l'amélioration continue et le souci du détail.", "thanks.kicker": "DEMANDE ENVOYÉE", "thanks.title": "Merci pour votre demande", "thanks.text": "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.", "thanks.home": "Retour à l'accueil"
  },
  de: {
    "contact.emailLabel": "Email", "contact.reserve": "Reserviert", "contact.address": "No. 59 Wanghai Road, Software Park Phase II, Xiamen, China", "form.email": "Email", "footer.companyText": "FUJIAN HOPE NEW MATERIAL CO., LTD. bietet zuverlässige Materiallösungen für Kunstleder, Beschichtungen und industrielle Anwendungen.", "footer.telLabel": "Tel", "footer.address": "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China",
    "about.more.title": "Und vieles mehr", "about.more.text": "Mit Branchenerfahrung bieten wir zuverlässige Materiallösungen und professionelle Services.", "about.team.title": "Unser Team und globale Kontakte", "about.team.text": "Unser Team arbeitet mit Kunden und Partnern über Werksbesuche, Produktgespräche und Messen.", "about.mission.title": "Mission", "about.mission.text": "Innovative und nachhaltige Materiallösungen mit zuverlässiger Qualität liefern.", "about.vision.title": "Vision", "about.vision.text": "Ein weltweit anerkannter Lieferant für Spezialmaterialien und chemische Lösungen werden.", "about.values.title": "Unsere Kernwerte", "about.values.h.title": "EHRLICHKEIT", "about.values.h.text": "Wir stehen für Ehrlichkeit, Transparenz und ethisches Handeln.", "about.values.o.title": "VERANTWORTUNG", "about.values.o.text": "Wir übernehmen Verantwortung für Produkte, Services und Zusagen.", "about.values.p.title": "PROFESSIONALITÄT", "about.values.p.text": "Wir liefern professionelle Lösungen mit Branchenerfahrung.", "about.values.e.title": "EXZELLENZ", "about.values.e.text": "Wir streben kontinuierliche Verbesserung und Detailgenauigkeit an.", "thanks.kicker": "ANFRAGE GESENDET", "thanks.title": "Vielen Dank für Ihre Anfrage", "thanks.text": "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald.", "thanks.home": "Zur Startseite"
  },
  ja: {
    "contact.emailLabel": "Email", "contact.reserve": "予約済み", "contact.address": "中国厦門市ソフトウェアパーク二期望海路59号", "form.email": "Email", "footer.companyText": "FUJIAN HOPE NEW MATERIAL CO., LTD. は合成皮革、コーティング、産業用途向けの信頼できる材料ソリューションを提供します。", "footer.telLabel": "電話", "footer.address": "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China",
    "about.more.title": "さらに多くのソリューション", "about.more.text": "業界経験を活かし、世界のお客様に信頼できる材料ソリューションと専門サービスを提供します。", "about.team.title": "チームとグローバルネットワーク", "about.team.text": "工場訪問、製品打合せ、国際展示会を通じて顧客やパートナーと連携します。", "about.mission.title": "使命", "about.mission.text": "信頼できる品質と専門サービスで革新的かつ持続可能な材料ソリューションを提供します。", "about.vision.title": "ビジョン", "about.vision.text": "特殊材料と化学ソリューションの信頼されるグローバルサプライヤーを目指します。", "about.values.title": "コアバリュー", "about.values.h.title": "誠実", "about.values.h.text": "誠実、透明性、倫理的なビジネス慣行を重視します。", "about.values.o.title": "責任", "about.values.o.text": "製品、サービス、約束に責任を持ちます。", "about.values.p.title": "専門性", "about.values.p.text": "業界経験に基づく専門的なソリューションを提供します。", "about.values.e.title": "卓越", "about.values.e.text": "継続的な改善と細部への配慮を追求します。", "thanks.kicker": "お問い合わせ送信済み", "thanks.title": "お問い合わせありがとうございます", "thanks.text": "メッセージは正常に送信されました。できるだけ早くご連絡します。", "thanks.home": "ホームへ戻る"
  },
  ko: {
    "contact.emailLabel": "Email", "contact.reserve": "예약됨", "contact.address": "중국 샤먼 소프트웨어파크 2기 왕하이로 59호", "form.email": "Email", "footer.companyText": "FUJIAN HOPE NEW MATERIAL CO., LTD.는 합성피혁, 코팅 및 산업 응용을 위한 신뢰할 수 있는 소재 솔루션을 제공합니다.", "footer.telLabel": "전화", "footer.address": "Room 402, Building 1, No.59-2 Haijing Road, Software Park Phase II, Huli District, Xiamen, Fujian, China",
    "about.more.title": "더 많은 솔루션", "about.more.text": "업계 경험을 바탕으로 글로벌 고객에게 신뢰할 수 있는 소재 솔루션과 전문 서비스를 제공합니다.", "about.team.title": "팀과 글로벌 네트워크", "about.team.text": "공장 방문, 제품 상담 및 국제 전시회를 통해 고객 및 파트너와 협력합니다.", "about.mission.title": "미션", "about.mission.text": "신뢰할 수 있는 품질과 전문 서비스로 혁신적이고 지속 가능한 소재 솔루션을 제공합니다.", "about.vision.title": "비전", "about.vision.text": "특수 소재 및 화학 솔루션 분야의 신뢰받는 글로벌 공급업체가 되는 것입니다.", "about.values.title": "핵심 가치", "about.values.h.title": "정직", "about.values.h.text": "정직, 투명성 및 윤리적 비즈니스를 중시합니다.", "about.values.o.title": "책임", "about.values.o.text": "제품, 서비스 및 약속에 책임을 집니다.", "about.values.p.title": "전문성", "about.values.p.text": "산업 경험을 바탕으로 전문 솔루션을 제공합니다.", "about.values.e.title": "탁월함", "about.values.e.text": "지속적인 개선과 세부 사항에 대한 관심을 추구합니다.", "thanks.kicker": "문의 전송 완료", "thanks.title": "문의해 주셔서 감사합니다", "thanks.text": "메시지가 성공적으로 전송되었습니다. 가능한 한 빨리 연락드리겠습니다.", "thanks.home": "홈으로 돌아가기"
  }
};

Object.entries(lateRepairs).forEach(([lang, patch]) => {
  if (!translations[lang]) translations[lang] = {};
  Object.assign(translations[lang], patch);
});

const finalTranslationRepairs = {
  ja: {
    "categoryCard.colorantText": "顔料ペースト、PUカラーチップ、パール顔料、印刷インキ、溶剤系色剤、水性色剤",
    "categoryCard.leatherText": "PUレザー、Semi-PUレザー、PVCレザー、マイクロファイバーレザー、水性レザー、自動車用レザー、ソファ用レザー、靴甲用レザー",
    "categoryCard.siliconeText": "シリコーンレベリング剤、シリコーンスリップ剤、PUレザー用添加剤、PU樹脂用添加剤、水性PU用添加剤",
    "categoryCard.finishingText": "水性表面処理剤、溶剤系表面処理剤、マット仕上げ、光沢仕上げ、ソフトタッチ仕上げ",
    "service.kicker": "産業向け専門サービス",
    "service.title": "信頼できる材料パートナー",
    "service.text": "材料選定、サンプル照合、用途提案、輸出対応コミュニケーションを通じて長期的な協力を支援します。",
    "serviceCard.resinText": "PU樹脂、Semi-PU樹脂、水性PU樹脂、アクリル樹脂、バインダー樹脂、離型樹脂",
    "serviceCard.releaseText": "マット離型紙、光沢離型紙、エンボス離型紙、シリコーン離型紙、PUレザー用離型紙",
    "serviceCard.fabricText": "不織布、ニット生地、マイクロファイバー基布、ポリエステル生地、綿裏地",
    "serviceCard.plasticizerText": "DOP、DOTP、DINP、TOTM、バイオベース可塑剤、環境配慮型可塑剤",
    "products.kicker": "当社の製品",
    "gallery.kicker": "多くのお客様からの信頼",
    "visit.page1.card1.title": "展示会での顧客交流",
    "visit.page1.card1.text": "国際展示会で海外顧客と対面し、材料用途、製品要件、協力機会について話し合います。",
    "visit.page1.card2.title": "グローバルパートナー訪問",
    "visit.page1.card2.text": "展示会で国際パートナーを迎え、直接対話を通じてより強い関係を築きます。",
    "visit.page1.card3.title": "国際展示会での商談",
    "visit.page1.card3.text": "専門展示会で合成皮革材料と化学材料ソリューションについて世界の顧客と交流します。",
    "visit.page2.card1.title": "工場見学と技術交流",
    "visit.page2.card1.text": "海外顧客が工場を訪問し、製品性能、品質要件、長期協力について話し合います。",
    "visit.page2.card2.title": "顧客協力ミーティング",
    "visit.page2.card2.text": "製品選定、サンプル開発、実際の用途ニーズについて顧客と対話します。",
    "visit.page2.card3.title": "展示会でのパートナー商談",
    "visit.page2.card3.text": "展示会で顧客や業界パートナーに材料ソリューションを紹介し、将来の協力を探ります。",
    "about.cap.leather.text": "家具、自動車、靴材、バッグ、張地用途に適した合成皮革材料です。",
    "about.cap.fabric.text": "マイクロファイバー、不織布、ニット、織物など、合成皮革製造向けの基布材料です。",
    "about.cap.silicone.text": "滑り性、耐ブロッキング性、手触り、レベリング、加工効率の改善に役立つシリコーン添加剤です。",
    "about.cap.finishing.text": "レザーの手触り、光沢、耐摩耗性、耐傷性、外観を改善する表面仕上げ剤です。",
    "about.cap.colorant.text": "合成皮革、繊維、工業用コーティング向けの色剤と顔料で、安定した分散と色調管理を支援します。",
    "about.cap.release.text": "マット、光沢、エンボス、シリコーン処理などに対応し、安定したテクスチャ転写ときれいな剥離を支援します。",
    "about.cap.resin.text": "PU樹脂、水性樹脂、アクリル樹脂、バインダー樹脂など、接着性、柔軟性、加工安定性を支える樹脂ソリューションです。",
    "about.cap.plasticizer.text": "PVCおよび合成皮革用途で柔軟性、柔らかさ、加工性、耐久性を改善する可塑剤です。",
    "footer.emailLabel": "Email",
    "footer.copyright": "© 2026 FUJIAN HOPE NEW MATERIAL CO., LTD. All rights reserved."
  },
  ko: {
    "categoryCard.colorantText": "안료 페이스트, PU 컬러칩, 펄 안료, 인쇄 잉크, 용제형 색제, 수성 색제",
    "categoryCard.leatherText": "PU 가죽, Semi-PU 가죽, PVC 가죽, 마이크로파이버 가죽, 수성 가죽, 자동차용 가죽, 소파용 가죽, 갑피용 가죽",
    "categoryCard.siliconeText": "실리콘 레벨링제, 실리콘 슬립제, PU 가죽용 첨가제, PU 수지용 첨가제, 수성 PU용 첨가제",
    "categoryCard.finishingText": "수성 표면처리제, 용제형 표면처리제, 무광 마감, 유광 마감, 소프트 터치 마감",
    "service.kicker": "산업 전문 서비스",
    "service.title": "신뢰할 수 있는 소재 파트너",
    "service.text": "소재 선택, 샘플 매칭, 적용 안내 및 수출 커뮤니케이션을 지원하여 장기 협력을 돕습니다.",
    "serviceCard.resinText": "PU 수지, Semi-PU 수지, 수성 PU 수지, 아크릴 수지, 바인더 수지, 이형 수지",
    "serviceCard.releaseText": "무광 이형지, 유광 이형지, 엠보싱 이형지, 실리콘 이형지, PU 가죽용 이형지",
    "serviceCard.fabricText": "부직포, 니트 원단, 마이크로파이버 기재, 폴리에스터 원단, 면 백킹 원단",
    "serviceCard.plasticizerText": "DOP, DOTP, DINP, TOTM, 바이오 기반 가소제, 친환경 가소제",
    "products.kicker": "제품",
    "gallery.kicker": "많은 고객의 신뢰",
    "visit.page1.card1.title": "전시회 고객 미팅",
    "visit.page1.card1.text": "국제 전시회에서 해외 고객과 만나 소재 적용, 제품 요구사항 및 협력 기회를 논의합니다.",
    "visit.page1.card2.title": "글로벌 파트너 방문",
    "visit.page1.card2.text": "전시회 기간 국제 파트너를 맞이하고 직접 소통을 통해 더 긴밀한 비즈니스 관계를 구축합니다.",
    "visit.page1.card3.title": "국제 전시회 상담",
    "visit.page1.card3.text": "전문 산업 전시회에서 글로벌 고객과 합성피혁 소재 및 화학 솔루션을 논의합니다.",
    "visit.page2.card1.title": "공장 방문 및 기술 교류",
    "visit.page2.card1.text": "해외 고객이 공장을 방문하여 제품 성능, 품질 요구사항 및 장기 협력을 논의합니다.",
    "visit.page2.card2.title": "고객 협력 미팅",
    "visit.page2.card2.text": "제품 선택, 샘플 개발 및 실제 적용 요구사항에 대해 고객과 소통합니다.",
    "visit.page2.card3.title": "전시회 파트너 상담",
    "visit.page2.card3.text": "전시회에서 고객 및 업계 파트너를 만나 소재 솔루션을 소개하고 향후 협력을 모색합니다.",
    "about.cap.leather.text": "가구, 자동차, 신발, 가방 및 장식재 용도에 적합한 합성피혁 소재입니다.",
    "about.cap.fabric.text": "마이크로파이버, 부직포, 니트 및 직물 등 합성피혁 제조용 기재 소재입니다.",
    "about.cap.silicone.text": "활주성, 방착성, 촉감, 레벨링 및 가공 효율 개선을 위한 실리콘 첨가제입니다.",
    "about.cap.finishing.text": "가죽의 촉감, 광택, 내마모성, 내스크래치성 및 외관을 개선하는 표면처리제입니다.",
    "about.cap.colorant.text": "합성피혁, 섬유 및 산업 코팅용 색제와 안료로 안정적인 분산과 색상 관리를 지원합니다.",
    "about.cap.release.text": "무광, 유광, 엠보싱 및 실리콘 코팅 마감에 적용되며 안정적인 텍스처 전사와 깨끗한 이형을 지원합니다.",
    "about.cap.resin.text": "PU 수지, 수성 수지, 아크릴 수지 및 바인더 수지를 포함하여 접착성, 유연성 및 가공 안정성을 지원합니다.",
    "about.cap.plasticizer.text": "PVC 및 합성피혁 적용에서 유연성, 부드러움, 가공성 및 내구성 개선에 사용되는 가소제입니다.",
    "footer.emailLabel": "Email"
  },
  pt: { "footer.emailLabel": "Email" },
  fr: { "footer.emailLabel": "Email" },
  de: { "footer.emailLabel": "Email" }
};

Object.entries(finalTranslationRepairs).forEach(([lang, patch]) => {
  if (!translations[lang]) translations[lang] = {};
  Object.assign(translations[lang], patch);
});

function getStoredLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (supportedLangs.includes(requested)) {
    localStorage.setItem("hopeLanguage", requested);
    return requested;
  }
  const stored = localStorage.getItem("hopeLanguage");
  if (supportedLangs.includes(stored)) return stored;
  if (stored) localStorage.removeItem("hopeLanguage");
  return "en";
}

let currentLang = getStoredLanguage();
let activeCategory = 0;
let activeItem = 0;

const tabsEl = document.querySelector(".tabs");
const panelEl = document.querySelector(".product-panel");
const langToggle = document.querySelector("[data-lang-toggle]");
const languageSelector = document.querySelector("[data-language-selector]");
const languageMenu = document.querySelector("[data-language-menu]");
const currentLangLabel = document.querySelector("[data-current-lang]");
const navToggle = document.querySelector(".nav-toggle");
const inquiryForm = document.querySelector(".inquiry-form");

const categoryHashes = categories.reduce((map, cat) => {
  map[cat.slug] = readLocalized(cat.name, cat.slug);
  return map;
}, {});

function normalizeCategoryName(name) {
  return name.replace(/\s+/g, " ").trim().toLowerCase();
}

function findCategoryIndexByName(name) {
  const normalized = normalizeCategoryName(name);
  return categories.findIndex((cat) => {
    const names = [cat.name?.en || cat.slug, ...(cat.aliases || [])].map(normalizeCategoryName);
    return names.includes(normalized);
  });
}

function findCategoryIndexBySlug(slug) {
  return categories.findIndex((cat) => cat.slug === slug);
}

function applyRequestedLocation() {
  const urlParams = new URLSearchParams(window.location.search);
  const requestedCategory = urlParams.get("category");
  if (requestedCategory) {
    const requestedIndex = findCategoryIndexByName(requestedCategory);
    if (requestedIndex >= 0) {
      activeCategory = requestedIndex;
      activeItem = 0;
    }
  }

  const [categorySlug, productSlug] = window.location.hash.replace("#", "").split("/");
  if (categorySlug) {
    const requestedIndex = findCategoryIndexBySlug(categorySlug);
    if (requestedIndex >= 0) {
      activeCategory = requestedIndex;
      activeItem = 0;
      if (productSlug) {
        const productIndex = categories[requestedIndex].products.findIndex((item) => item.slug === productSlug);
        if (productIndex >= 0) activeItem = productIndex;
      }
    }
  }
}

function getLanguageConfig() {
  return languageOptions.find((item) => item.code === currentLang) || languageOptions[0];
}

function getThanksPageBaseUrl() {
  if (window.location.protocol === "http:" || window.location.protocol === "https:") {
    return new URL("thanks.html", window.location.href).toString();
  }
  return "https://www.hopexm.com/thanks.html";
}

function updateFormNextUrl() {
  const nextInput = inquiryForm?.querySelector('input[name="_next"]');
  if (!nextInput) return;
  const url = new URL(getThanksPageBaseUrl());
  url.searchParams.set("lang", currentLang);
  nextInput.value = url.toString();
}

function localized(value, zhValue) {
  if (currentLang === "zh" && zhValue) return zhValue;
  if (currentLang === "zhTW" && zhValue) return toTraditionalText(zhValue);
  return value;
}

function readLocalized(value, fallback = "") {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    const current = value[currentLang];
    if (Array.isArray(current)) return current.length ? current : value.en || [];
    if (current) return current;
    if (value.en) return value.en;
    if (value.zh) return value.zh;
    return fallback;
  }
  return value || fallback;
}

function translate(key, fallback = "") {
  if (currentLang === "en") return fallback;
  return translations[currentLang]?.[key] || fallback;
}

function localizedCategory(cat) {
  return readLocalized(cat.name, cat.en || cat.slug);
}

function localizedProductName(product) {
  return readLocalized(product.name, product.name?.en || product.name || "");
}

function localizedProductShort(product, cat) {
  return readLocalized(product.shortDescription, product.shortDescription?.en || "");
}

function localizedProductDescription(product, cat) {
  return readLocalized(product.description, product.description?.en || "");
}

function localizedProductApplications(product) {
  const applications = readLocalized(product.applications, []);
  return Array.isArray(applications) ? applications : [];
}

function localizedProductAlt(product) {
  return readLocalized(product.alt, localizedProductName(product));
}

function checkMissingTranslations() {
  const isAllowedStaticSame = (key, value) => {
    if (!value) return true;
    if (/email|whatsapp|tel|address|copyright|hero\.kicker|profile\.title/i.test(key)) return true;
    if (/FUJIAN HOPE NEW MATERIAL|Room 402|hopexm\.com|\+86|DOP|DOTP|DINP|TOTM/.test(value)) return true;
    return ["Hope", "Email", "WhatsApp", "Tel", "Colorant / Pigment"].includes(value);
  };
  const isAllowedProductSame = (lang, product, field) => {
    if (["zh", "zhTW"].includes(lang) && field === "applications") return true;
    if (["seoTitle", "seoDescription", "alt"].includes(field)) return true;
    if (/^(dop|dotp|dinp|totm)$/.test(product.slug) && field === "name") return true;
    return false;
  };
  const staticKeys = [...document.querySelectorAll("[data-i18n]")].map((el) => ({
    key: el.dataset.i18n,
    fallback: el.dataset.original || el.textContent.trim()
  }));
  const placeholderKeys = [...document.querySelectorAll("[data-i18n-placeholder]")].map((el) => ({
    key: el.dataset.i18nPlaceholder,
    fallback: el.dataset.originalPlaceholder || el.getAttribute("placeholder") || ""
  }));
  const missingStatic = [];
  const sameAsEnglishStatic = [];
  supportedLangs.filter((lang) => lang !== "en").forEach((lang) => {
    [...staticKeys, ...placeholderKeys].forEach(({ key, fallback }) => {
      const value = translations[lang]?.[key];
      if (!value) missingStatic.push({ lang, key });
      else if (value === fallback && !isAllowedStaticSame(key, value)) {
        sameAsEnglishStatic.push({ lang, key, value });
      }
    });
  });

  const products = window.HOPE_PRODUCTS || categories.flatMap((cat) => cat.products || []);
  const productFields = ["name", "shortDescription", "description", "applications", "seoTitle", "seoDescription"];
  const missingProducts = [];
  const sameAsEnglishProducts = [];
  products.forEach((product) => {
    productFields.forEach((field) => {
      const value = product[field];
      if (!value || typeof value !== "object") return;
      supportedLangs.filter((lang) => lang !== "en").forEach((lang) => {
        const localizedValue = value[lang];
        if (!localizedValue || (Array.isArray(localizedValue) && !localizedValue.length)) {
          missingProducts.push({ lang, product: product.slug, field });
          return;
        }
        if (!isAllowedProductSame(lang, product, field) && JSON.stringify(localizedValue) === JSON.stringify(value.en)) {
          sameAsEnglishProducts.push({ lang, product: product.slug, field });
        }
      });
    });
  });

  const result = { missingStatic, sameAsEnglishStatic, missingProducts, sameAsEnglishProducts };
  console.log("Hope multilingual translation check:", result);
  if (missingStatic.length) console.table(missingStatic);
  if (sameAsEnglishStatic.length) console.table(sameAsEnglishStatic);
  if (missingProducts.length) console.table(missingProducts);
  if (sameAsEnglishProducts.length) console.table(sameAsEnglishProducts);
  return result;
}

window.checkMissingTranslations = checkMissingTranslations;

function renderLanguageMenu() {
  if (!languageMenu) return;
  languageMenu.innerHTML = languageOptions.map((item) => `
    <button class="language-option ${item.code === currentLang ? "active" : ""}" type="button" data-lang="${item.code}">
      <span>${item.flag}</span>
      <span>${item.label}</span>
    </button>
  `).join("");
}

function renderProductMenu() {
  document.querySelectorAll("[data-product-menu]").forEach((menu) => {
    menu.innerHTML = categories.map((cat) => {
      const label = localizedCategory(cat);
      return `<a href="products.html#${cat.slug}">${label}</a>`;
    }).join("");
  });
}

function renderProducts() {
  if (!tabsEl || !panelEl) return;

  tabsEl.innerHTML = categories.map((cat, index) => `
    <button class="tab ${index === activeCategory ? "active" : ""}" type="button" data-cat="${index}">
      ${localizedCategory(cat)}
    </button>
  `).join("");

  const cat = categories[activeCategory];
  const products = cat.products || [];
  const product = products[activeItem] || products[0];
  if (!product) {
    panelEl.innerHTML = "";
    return;
  }

  const applications = localizedProductApplications(product)
    .map((item) => `<span>${item}</span>`)
    .join("");
  const fallbackImage = cat.categoryImage || cat.image || "assets/products/pigment-color-paste.webp";
  const hasOwnImage = Boolean(product.image && product.image.trim()) && product.useCategoryImage !== true;
  const detailImage = hasOwnImage ? product.image : fallbackImage;
  const imageNote = hasOwnImage
    ? ""
    : `<p class="image-note">${translate("products.representativeImage", "Representative image")}</p>`;
  const inquiryHref = document.querySelector("#contact") ? "#contact" : "index.html#contact";

  panelEl.innerHTML = `
    <div class="subproducts" aria-label="${localizedCategory(cat)} product list">
      ${products.map((item, index) => `
        <button class="${index === activeItem ? "active" : ""}" type="button" data-item="${index}">
          ${localizedProductName(item)}
        </button>
      `).join("")}
    </div>
    <article class="product-detail" id="product-detail">
      <div class="product-image-wrap">
        <img src="${detailImage}" alt="${localizedProductAlt(product)}" onerror="this.onerror=null;this.src='${fallbackImage}';">
        ${imageNote}
      </div>
      <div>
        <p class="product-category-label">${localizedCategory(cat)}</p>
        <h3>${localizedProductName(product)}</h3>
        <p>${localizedProductShort(product, cat)}</p>
        <p>${localizedProductDescription(product, cat)}</p>
        <div class="application-list"><strong>${translate("products.applications", "Applications:")}</strong>${applications}</div>
        <a class="btn" href="${inquiryHref}">${translate("products.requestDetails", "Request Details")}</a>
      </div>
    </article>
  `;
  updateProductMeta(product);
}

function updateProductMeta(product) {
  if (!document.body.classList.contains("products-page-body")) return;
  const cat = categories[activeCategory];
  const productName = localizedProductName(product);
  document.title = readLocalized(product.seoTitle, `${productName} | FUJIAN HOPE NEW MATERIAL CO., LTD.`);
  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute("content", readLocalized(product.seoDescription, localizedProductShort(product, cat)));
  }
}

function updateHashFromSelection(includeProduct = false) {
  if (!document.body.classList.contains("products-page-body")) return;
  const cat = categories[activeCategory];
  const product = cat.products[activeItem];
  const nextHash = includeProduct && product ? `${cat.slug}/${product.slug}` : cat.slug;
  history.replaceState(null, "", `#${nextHash}`);
}

function scrollToProductsFromHash() {
  if (!document.body.classList.contains("products-page-body")) return;
  if (!window.location.hash) return;
  window.setTimeout(() => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

function applyLanguage() {
  const config = getLanguageConfig();
  document.documentElement.lang = config.htmlLang;
  document.documentElement.dir = config.dir;
  document.body.dir = config.dir;
  if (currentLangLabel) currentLangLabel.textContent = `${config.flag} ${config.label}`;
  if (langToggle) langToggle.setAttribute("aria-expanded", languageSelector?.classList.contains("open") ? "true" : "false");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!el.dataset.original) el.dataset.original = el.textContent;
    el.textContent = translate(key, el.dataset.original);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (!el.dataset.originalPlaceholder) el.dataset.originalPlaceholder = el.getAttribute("placeholder") || "";
    el.setAttribute("placeholder", translate(key, el.dataset.originalPlaceholder));
  });
  renderLanguageMenu();
  renderProductMenu();
  renderProducts();
  updateFormNextUrl();
}

if (inquiryForm) {
  inquiryForm.addEventListener("submit", updateFormNextUrl);
}

if (languageMenu) {
  renderLanguageMenu();
  languageMenu.addEventListener("click", (event) => {
    const option = event.target.closest("[data-lang]");
    if (!option) return;
    if (!supportedLangs.includes(option.dataset.lang)) return;
    currentLang = option.dataset.lang;
    localStorage.setItem("hopeLanguage", currentLang);
    languageSelector?.classList.remove("open");
    applyLanguage();
  });
}

if (langToggle && languageSelector) {
  langToggle.addEventListener("click", () => {
    languageSelector.classList.toggle("open");
    langToggle.setAttribute("aria-expanded", languageSelector.classList.contains("open") ? "true" : "false");
  });
}

document.addEventListener("click", (event) => {
  if (!languageSelector || languageSelector.contains(event.target)) return;
  languageSelector.classList.remove("open");
  langToggle?.setAttribute("aria-expanded", "false");
});

if (tabsEl) {
  tabsEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-cat]");
    if (!button) return;
    activeCategory = Number(button.dataset.cat);
    activeItem = 0;
    updateHashFromSelection(false);
    renderProducts();
  });
}

if (panelEl) {
  panelEl.addEventListener("click", (event) => {
    const button = event.target.closest("[data-item]");
    if (!button) return;
    activeItem = Number(button.dataset.item);
    updateHashFromSelection(true);
    renderProducts();
  });
}

window.addEventListener("hashchange", () => {
  applyRequestedLocation();
  renderProducts();
  scrollToProductsFromHash();
});

if (navToggle) {
  navToggle.addEventListener("click", () => {
    document.querySelector(".site-nav")?.classList.toggle("open");
  });
}

const slides = [...document.querySelectorAll(".hero-slide")];
let activeSlide = 0;
function showSlide(index) {
  if (!slides.length) return;
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => slide.classList.toggle("active", slideIndex === activeSlide));
}

const nextArrow = document.querySelector(".hero-arrow.next");
const prevArrow = document.querySelector(".hero-arrow.prev");
if (nextArrow && prevArrow && slides.length) {
  nextArrow.addEventListener("click", () => showSlide(activeSlide + 1));
  prevArrow.addEventListener("click", () => showSlide(activeSlide - 1));
  setInterval(() => showSlide(activeSlide + 1), 6500);
}

const visitPages = [...document.querySelectorAll("[data-visit-page]")];
const visitDots = [...document.querySelectorAll("[data-visit-dot]")];

function showVisitPage(index) {
  visitPages.forEach((page, pageIndex) => {
    page.classList.toggle("active", pageIndex === index);
  });
  visitDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === index;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-selected", String(isActive));
  });
}

visitDots.forEach((dot) => {
  dot.addEventListener("click", () => showVisitPage(Number(dot.dataset.visitDot)));
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
}

document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.lightboxSrc;
    lightbox.hidden = false;
  });
});

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});

applyRequestedLocation();
applyLanguage();
scrollToProductsFromHash();



