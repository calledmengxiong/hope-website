(function () {
  const languages = ["en", "zh", "zhTW", "ar", "id", "ms", "pt", "fr", "ja", "ru", "de", "ko"];

  function text(en, zh, zhTW, extra = {}) {
    const value = { en, zh, zhTW };
    languages.forEach((lang) => {
      if (!value[lang]) value[lang] = extra[lang] || en;
    });
    return value;
  }

  function list(en, zh, zhTW, extra = {}) {
    const value = { en, zh, zhTW };
    languages.forEach((lang) => {
      if (!value[lang]) value[lang] = extra[lang] || en;
    });
    return value;
  }

  const categoryNames = {
    "colorant-pigment": text("Colorant / Pigment", "色剂 / 颜料", "色劑 / 顏料", { ar: "ملونات / أصباغ", id: "Pewarna / Pigmen", ms: "Pewarna / Pigmen", pt: "Colorante / Pigmento", fr: "Colorant / Pigment", ja: "着色剤 / 顔料", ru: "Краситель / Пигмент", de: "Farbstoff / Pigment", ko: "착색제 / 안료" }),
    "artificial-leather": text("Artificial Leather", "人造革", "人造革", { ar: "جلد صناعي", id: "Kulit Sintetis", ms: "Kulit Sintetik", pt: "Couro Sintético", fr: "Cuir synthétique", ja: "合成皮革", ru: "Искусственная кожа", de: "Kunstleder", ko: "합성피혁" }),
    "silicone-additives": text("Silicone Additives", "硅助剂", "矽助劑", { ar: "إضافات سيليكون", id: "Aditif Silikon", ms: "Aditif Silikon", pt: "Aditivos de silicone", fr: "Additifs silicone", ja: "シリコーン添加剤", ru: "Силиконовые добавки", de: "Silikonadditive", ko: "실리콘 첨가제" }),
    "surface-finishing-agents": text("Surface Finishing Agents", "表面处理剂", "表面處理劑", { ar: "عوامل تشطيب سطحي", id: "Agen Finishing Permukaan", ms: "Ejen Kemasan Permukaan", pt: "Agentes de acabamento superficial", fr: "Agents de finition de surface", ja: "表面仕上げ剤", ru: "Агенты отделки поверхности", de: "Oberflächenfinishmittel", ko: "표면 처리제" }),
    "pu-resin": text("Resin", "树脂", "樹脂", { ar: "راتنج", id: "Resin", ms: "Resin", pt: "Resina", fr: "Résine", ja: "樹脂", ru: "Смола", de: "Harz", ko: "수지" }),
    "release-paper": text("Release Paper", "离型纸", "離型紙", { ar: "ورق فصل", id: "Kertas Release", ms: "Kertas Pelepas", pt: "Papel release", fr: "Papier de transfert", ja: "離型紙", ru: "Разделительная бумага", de: "Trennpapier", ko: "이형지" }),
    "fabric-base-material": text("Fabric / Base Material", "基布 / 面料", "基布 / 面料", { ar: "قماش / مادة أساس", id: "Kain / Bahan Dasar", ms: "Fabrik / Bahan Asas", pt: "Tecido / Material base", fr: "Tissu / Support", ja: "基布 / 素材", ru: "Ткань / Основа", de: "Gewebe / Trägermaterial", ko: "원단 / 베이스 소재" }),
    "plasticizer": text("Plasticizer", "塑化剂", "塑化劑", { ar: "ملدن", id: "Plasticizer", ms: "Plasticizer", pt: "Plastificante", fr: "Plastifiant", ja: "可塑剤", ru: "Пластификатор", de: "Weichmacher", ko: "가소제" })
  };

  const productNames = {
    "pigment-color-paste": text("Pigment Color Paste", "颜料膏", "顏料膏", { ar: "معجون صبغة لونية", id: "Pasta Pigmen Warna", ms: "Pes Pigmen Warna", pt: "Pasta de pigmento colorido", fr: "Pâte pigmentaire colorée", ja: "顔料カラーペースト", ru: "Пигментная цветная паста", de: "Pigment-Farbpaste", ko: "안료 컬러 페이스트" }),
    "pu-color-chips": text("PU Color Chips", "PU色片", "PU色片", { ar: "رقائق ألوان PU", id: "Chip Warna PU", ms: "Cip Warna PU", pt: "Chips de cor PU", fr: "Chips de couleur PU", ja: "PU カラーチップ", ru: "Цветовые чипсы PU", de: "PU-Farbchips", ko: "PU 컬러 칩" }),
    "pearl-pigment": text("Pearl Pigment", "珠光颜料", "珠光顏料", { ar: "صبغة لؤلؤية", id: "Pigmen Mutiara", ms: "Pigmen Mutiara", pt: "Pigmento perolado", fr: "Pigment nacré", ja: "パール顔料", ru: "Перламутровый пигмент", de: "Perlpigment", ko: "펄 안료" }),
    "printing-ink": text("Printing Ink", "印刷油墨", "印刷油墨", { ar: "حبر طباعة", id: "Tinta Cetak", ms: "Dakwat Percetakan", pt: "Tinta de impressão", fr: "Encre d'impression", ja: "印刷インキ", ru: "Печатная краска", de: "Druckfarbe", ko: "인쇄 잉크" }),
    "solvent-based-colorant": text("Solvent-Based Colorant", "溶剂型色剂", "溶劑型色劑", { ar: "ملون قائم على المذيب", id: "Pewarna Berbasis Pelarut", ms: "Pewarna Berasaskan Pelarut", pt: "Colorante à base de solvente", fr: "Colorant à base de solvant", ja: "溶剤系着色剤", ru: "Краситель на основе растворителя", de: "Lösemittelbasierter Farbstoff", ko: "용제형 착색제" }),
    "water-based-colorant": text("Water-Based Colorant", "水性色剂", "水性色劑", { ar: "ملون مائي", id: "Pewarna Berbasis Air", ms: "Pewarna Berasaskan Air", pt: "Colorante à base de água", fr: "Colorant à base d'eau", ja: "水性着色剤", ru: "Водный краситель", de: "Wasserbasierter Farbstoff", ko: "수성 착색제" }),
    "silicone-leveling-agent": text("Silicone Leveling Agent", "硅流平剂", "矽流平劑", { ar: "عامل تسوية سيليكون", id: "Agen Perata Silikon", ms: "Ejen Perataan Silikon", pt: "Agente nivelante de silicone", fr: "Agent nivelant silicone", ja: "シリコーンレベリング剤", ru: "Силиконовый выравнивающий агент", de: "Silikon-Verlaufmittel", ko: "실리콘 레벨링제" }),
    "silicone-slip-agent": text("Silicone Slip Agent", "硅滑爽剂", "矽滑爽劑", { ar: "عامل انزلاق سيليكون", id: "Agen Slip Silikon", ms: "Ejen Gelincir Silikon", pt: "Agente deslizante de silicone", fr: "Agent glissant silicone", ja: "シリコーンスリップ剤", ru: "Силиконовый скользящий агент", de: "Silikon-Gleitmittel", ko: "실리콘 슬립제" }),
    "additives-for-pu-leather": text("Additives for PU Leather", "PU革助剂", "PU革助劑", { ar: "إضافات لجلد PU", id: "Aditif untuk Kulit PU", ms: "Aditif untuk Kulit PU", pt: "Aditivos para couro PU", fr: "Additifs pour cuir PU", ja: "PU レザー用添加剤", ru: "Добавки для кожи PU", de: "Additive für PU-Leder", ko: "PU 가죽용 첨가제" }),
    "additives-for-pu-resin": text("Additives for PU Resin", "PU树脂助剂", "PU樹脂助劑", { ar: "إضافات لراتنج PU", id: "Aditif untuk Resin PU", ms: "Aditif untuk Resin PU", pt: "Aditivos para resina PU", fr: "Additifs pour résine PU", ja: "PU 樹脂用添加剤", ru: "Добавки для смолы PU", de: "Additive für PU-Harz", ko: "PU 수지용 첨가제" }),
    "water-based-additives-for-pu": text("Water-Based Additives for PU", "水性PU助剂", "水性PU助劑", { ar: "إضافات مائية لـ PU", id: "Aditif Berbasis Air untuk PU", ms: "Aditif Berasaskan Air untuk PU", pt: "Aditivos à base de água para PU", fr: "Additifs à base d'eau pour PU", ja: "PU 用水性添加剤", ru: "Водные добавки для PU", de: "Wasserbasierte Additive für PU", ko: "PU용 수성 첨가제" }),
    "water-based-surface-finishing-agent": text("Water-Based Surface Finishing Agent", "水性表面处理剂", "水性表面處理劑", { ar: "عامل تشطيب سطحي مائي", id: "Agen Finishing Permukaan Berbasis Air", ms: "Ejen Kemasan Permukaan Berasaskan Air", pt: "Agente de acabamento superficial à base de água", fr: "Agent de finition de surface à base d'eau", ja: "水性表面仕上げ剤", ru: "Водный агент отделки поверхности", de: "Wasserbasiertes Oberflächenfinish", ko: "수성 표면 처리제" }),
    "solvent-based-surface-finishing-agent": text("Solvent-Based Surface Finishing Agent", "溶剂型表面处理剂", "溶劑型表面處理劑", { ar: "عامل تشطيب سطحي قائم على المذيب", id: "Agen Finishing Permukaan Berbasis Pelarut", ms: "Ejen Kemasan Permukaan Berasaskan Pelarut", pt: "Agente de acabamento superficial à base de solvente", fr: "Agent de finition de surface à base de solvant", ja: "溶剤系表面仕上げ剤", ru: "Агент отделки поверхности на растворителе", de: "Lösemittelbasiertes Oberflächenfinish", ko: "용제형 표면 처리제" }),
    "matte-finish-agent": text("Matte Finish Agent", "哑光处理剂", "啞光處理劑", { ar: "عامل تشطيب مطفي", id: "Agen Finishing Matte", ms: "Ejen Kemasan Matte", pt: "Agente de acabamento fosco", fr: "Agent de finition mate", ja: "マット仕上げ剤", ru: "Матирующий агент", de: "Matt-Finishmittel", ko: "무광 처리제" }),
    "glossy-finish-agent": text("Glossy Finish Agent", "亮光处理剂", "亮光處理劑", { ar: "عامل تشطيب لامع", id: "Agen Finishing Glossy", ms: "Ejen Kemasan Berkilat", pt: "Agente de acabamento brilhante", fr: "Agent de finition brillante", ja: "光沢仕上げ剤", ru: "Глянцевый отделочный агент", de: "Glanz-Finishmittel", ko: "유광 처리제" }),
    "soft-touch-finishing-agent": text("Soft Touch Finishing Agent", "柔软手感处理剂", "柔軟手感處理劑", { ar: "عامل تشطيب بملمس ناعم", id: "Agen Finishing Sentuhan Lembut", ms: "Ejen Kemasan Sentuhan Lembut", pt: "Agente de acabamento toque suave", fr: "Agent de finition toucher doux", ja: "ソフトタッチ仕上げ剤", ru: "Агент отделки мягкого касания", de: "Soft-Touch-Finishmittel", ko: "소프트 터치 처리제" }),
    "water-based-pu-resin": text("Water-Based PU Resin", "水性PU树脂", "水性PU樹脂", { ar: "راتنج PU مائي", id: "Resin PU Berbasis Air", ms: "Resin PU Berasaskan Air", pt: "Resina PU à base de água", fr: "Résine PU à base d'eau", ja: "水性 PU 樹脂", ru: "Водная смола PU", de: "Wasserbasiertes PU-Harz", ko: "수성 PU 수지" }),
    "solvent-based-pu-resin": text("Solvent-Based PU Resin", "溶剂型PU树脂", "溶劑型PU樹脂", { ar: "راتنج PU قائم على المذيب", id: "Resin PU Berbasis Pelarut", ms: "Resin PU Berasaskan Pelarut", pt: "Resina PU à base de solvente", fr: "Résine PU à base de solvant", ja: "溶剤系 PU 樹脂", ru: "PU смола на растворителе", de: "Lösemittelbasiertes PU-Harz", ko: "용제형 PU 수지" }),
    "semi-pu-resin": text("Semi-PU Resin", "半PU树脂", "半PU樹脂", { ar: "راتنج Semi-PU", id: "Resin Semi-PU", ms: "Resin Semi-PU", pt: "Resina Semi-PU", fr: "Résine Semi-PU", ja: "Semi-PU 樹脂", ru: "Смола Semi-PU", de: "Semi-PU-Harz", ko: "Semi-PU 수지" }),
    "acrylic-resin": text("Acrylic Resin", "丙烯酸树脂", "丙烯酸樹脂", { ar: "راتنج أكريليك", id: "Resin Akrilik", ms: "Resin Akrilik", pt: "Resina acrílica", fr: "Résine acrylique", ja: "アクリル樹脂", ru: "Акриловая смола", de: "Acrylharz", ko: "아크릴 수지" }),
    "binder-resin": text("Binder Resin", "粘结树脂", "粘結樹脂", { ar: "راتنج رابط", id: "Resin Pengikat", ms: "Resin Pengikat", pt: "Resina ligante", fr: "Résine liante", ja: "バインダー樹脂", ru: "Связующая смола", de: "Bindeharz", ko: "바인더 수지" }),
    "release-resin": text("Release Resin", "离型树脂", "離型樹脂", { ar: "راتنج فصل", id: "Resin Release", ms: "Resin Pelepas", pt: "Resina de desmoldagem", fr: "Résine de démoulage", ja: "離型樹脂", ru: "Разделительная смола", de: "Trennharz", ko: "이형 수지" }),
    "matte-release-paper": text("Matte Release Paper", "哑光离型纸", "啞光離型紙", { ar: "ورق فصل مطفي", id: "Kertas Release Matte", ms: "Kertas Pelepas Matte", pt: "Papel release fosco", fr: "Papier de transfert mat", ja: "マット離型紙", ru: "Матовая разделительная бумага", de: "Mattes Trennpapier", ko: "무광 이형지" }),
    "matte-release-paper-for-pu-leather": text("Matte Release Paper for PU Leather", "PU革用哑光离型纸", "PU革用啞光離型紙", { ar: "ورق فصل مطفي لجلد PU", id: "Kertas Release Matte untuk Kulit PU", ms: "Kertas Pelepas Matte untuk Kulit PU", pt: "Papel release fosco para couro PU", fr: "Papier release mat pour cuir PU", ja: "PUレザー用マット離型紙", ru: "Матовая разделительная бумага для PU-кожи", de: "Mattes Trennpapier für PU-Leder", ko: "PU 가죽용 무광 이형지" }),
    "glossy-release-paper": text("Glossy Release Paper", "亮光离型纸", "亮光離型紙", { ar: "ورق فصل لامع", id: "Kertas Release Glossy", ms: "Kertas Pelepas Berkilat", pt: "Papel release brilhante", fr: "Papier de transfert brillant", ja: "光沢離型紙", ru: "Глянцевая разделительная бумага", de: "Glänzendes Trennpapier", ko: "유광 이형지" }),
    "embossed-release-paper": text("Embossed Release Paper", "压纹离型纸", "壓紋離型紙", { ar: "ورق فصل منقوش", id: "Kertas Release Embossed", ms: "Kertas Pelepas Timbul", pt: "Papel release texturizado", fr: "Papier de transfert embossé", ja: "エンボス離型紙", ru: "Тисненая разделительная бумага", de: "Geprägtes Trennpapier", ko: "엠보싱 이형지" }),
    "silicone-release-paper": text("Silicone Release Paper", "硅油离型纸", "矽油離型紙", { ar: "ورق فصل سيليكوني", id: "Kertas Release Silikon", ms: "Kertas Pelepas Silikon", pt: "Papel release siliconado", fr: "Papier de transfert siliconé", ja: "シリコーン離型紙", ru: "Силиконизированная разделительная бумага", de: "Silikonisiertes Trennpapier", ko: "실리콘 이형지" }),
    "pu-synthetic-leather-release-paper": text("PU Synthetic Leather Release Paper", "PU革离型纸", "PU革離型紙", { ar: "ورق فصل لجلد PU الصناعي", id: "Kertas Release untuk Kulit Sintetis PU", ms: "Kertas Pelepas untuk Kulit Sintetik PU", pt: "Papel release para couro sintético PU", fr: "Papier de transfert pour cuir synthétique PU", ja: "PU 合成皮革用離型紙", ru: "Разделительная бумага для синтетической кожи PU", de: "Trennpapier für PU-Kunstleder", ko: "PU 합성피혁용 이형지" }),
    "dop": text("DOP", "DOP塑化剂", "DOP塑化劑", { ar: "ملدن DOP", id: "Plasticizer DOP", ms: "Plasticizer DOP", pt: "Plastificante DOP", fr: "Plastifiant DOP", ja: "DOP 可塑剤", ru: "Пластификатор DOP", de: "DOP-Weichmacher", ko: "DOP 가소제" }),
    "dotp": text("DOTP", "DOTP塑化剂", "DOTP塑化劑", { ar: "ملدن DOTP", id: "Plasticizer DOTP", ms: "Plasticizer DOTP", pt: "Plastificante DOTP", fr: "Plastifiant DOTP", ja: "DOTP 可塑剤", ru: "Пластификатор DOTP", de: "DOTP-Weichmacher", ko: "DOTP 가소제" }),
    "dinp": text("DINP", "DINP塑化剂", "DINP塑化劑", { ar: "ملدن DINP", id: "Plasticizer DINP", ms: "Plasticizer DINP", pt: "Plastificante DINP", fr: "Plastifiant DINP", ja: "DINP 可塑剤", ru: "Пластификатор DINP", de: "DINP-Weichmacher", ko: "DINP 가소제" }),
    "totm": text("TOTM", "TOTM塑化剂", "TOTM塑化劑", { ar: "ملدن TOTM", id: "Plasticizer TOTM", ms: "Plasticizer TOTM", pt: "Plastificante TOTM", fr: "Plastifiant TOTM", ja: "TOTM 可塑剤", ru: "Пластификатор TOTM", de: "TOTM-Weichmacher", ko: "TOTM 가소제" }),
    "bio-based-plasticizer": text("Bio-Based Plasticizer", "生物基塑化剂", "生物基塑化劑", { ar: "ملدن حيوي", id: "Plasticizer Berbasis Bio", ms: "Plasticizer Berasaskan Bio", pt: "Plastificante de base biológica", fr: "Plastifiant biosourcé", ja: "バイオベース可塑剤", ru: "Биопластификатор", de: "Biobasierter Weichmacher", ko: "바이오 기반 가소제" }),
    "eco-friendly-plasticizer": text("Eco-Friendly Plasticizer", "环保塑化剂", "環保塑化劑", { ar: "ملدن صديق للبيئة", id: "Plasticizer Ramah Lingkungan", ms: "Plasticizer Mesra Alam", pt: "Plastificante ecológico", fr: "Plastifiant écologique", ja: "環境配慮型可塑剤", ru: "Экологичный пластификатор", de: "Umweltfreundlicher Weichmacher", ko: "친환경 가소제" }),
    "nonwoven-fabric": text("Nonwoven Fabric", "无纺布", "無紡布", { ar: "قماش غير منسوج", id: "Kain Nonwoven", ms: "Fabrik Bukan Tenunan", pt: "Tecido não tecido", fr: "Non-tissé", ja: "不織布", ru: "Нетканый материал", de: "Vliesstoff", ko: "부직포" }),
    "knitted-fabric": text("Knitted Fabric", "针织布", "針織布", { ar: "قماش محبوك", id: "Kain Rajut", ms: "Fabrik Berkait", pt: "Tecido de malha", fr: "Tissu tricoté", ja: "ニット生地", ru: "Трикотажное полотно", de: "Strickware", ko: "니트 원단" }),
    "microfiber-base-fabric": text("Microfiber Base Fabric", "超纤基布", "超纖基布", { ar: "قماش أساس مايكروفايبر", id: "Kain Dasar Microfiber", ms: "Fabrik Asas Mikrofiber", pt: "Tecido base de microfibra", fr: "Support textile microfibre", ja: "マイクロファイバー基布", ru: "Микрофибровая основа", de: "Mikrofaser-Trägergewebe", ko: "마이크로파이버 베이스 원단" }),
    "polyester-fabric": text("Polyester Fabric", "涤纶布", "滌綸布", { ar: "قماش بوليستر", id: "Kain Poliester", ms: "Fabrik Poliester", pt: "Tecido de poliéster", fr: "Tissu polyester", ja: "ポリエステル生地", ru: "Полиэстеровая ткань", de: "Polyestergewebe", ko: "폴리에스터 원단" }),
    "cotton-backing-fabric": text("Cotton Backing Fabric", "棉底布", "棉底布", { ar: "قماش بطانة قطني", id: "Kain Backing Katun", ms: "Fabrik Sandaran Kapas", pt: "Tecido de suporte em algodão", fr: "Tissu support coton", ja: "綿バック基布", ru: "Хлопковая подложка", de: "Baumwoll-Trägergewebe", ko: "면 백킹 원단" }),
    "pu-leather": text("PU Leather", "PU革", "PU革", { ar: "جلد PU", id: "Kulit PU", ms: "Kulit PU", pt: "Couro PU", fr: "Cuir PU", ja: "PU レザー", ru: "Кожа PU", de: "PU-Leder", ko: "PU 가죽" }),
    "semi-pu-leather": text("Semi-PU Leather", "半PU革", "半PU革", { ar: "جلد Semi-PU", id: "Kulit Semi-PU", ms: "Kulit Semi-PU", pt: "Couro Semi-PU", fr: "Cuir Semi-PU", ja: "Semi-PU レザー", ru: "Кожа Semi-PU", de: "Semi-PU-Leder", ko: "Semi-PU 가죽" }),
    "pvc-leather": text("PVC Leather", "PVC革", "PVC革", { ar: "جلد PVC", id: "Kulit PVC", ms: "Kulit PVC", pt: "Couro PVC", fr: "Cuir PVC", ja: "PVC レザー", ru: "Кожа PVC", de: "PVC-Leder", ko: "PVC 가죽" }),
    "microfiber-leather": text("Microfiber Leather", "超纤革", "超纖革", { ar: "جلد مايكروفايبر", id: "Kulit Microfiber", ms: "Kulit Mikrofiber", pt: "Couro de microfibra", fr: "Cuir microfibre", ja: "マイクロファイバーレザー", ru: "Микрофибровая кожа", de: "Mikrofaserleder", ko: "마이크로파이버 가죽" }),
    "water-based-leather": text("Water-Based Leather", "水性革", "水性革", { ar: "جلد مائي", id: "Kulit Berbasis Air", ms: "Kulit Berasaskan Air", pt: "Couro à base de água", fr: "Cuir à base d'eau", ja: "水性レザー", ru: "Водная искусственная кожа", de: "Wasserbasiertes Leder", ko: "수성 가죽" }),
    "automotive-leather": text("Automotive Leather", "汽车革", "汽車革", { ar: "جلد للسيارات", id: "Kulit Otomotif", ms: "Kulit Automotif", pt: "Couro automotivo", fr: "Cuir automobile", ja: "自動車用レザー", ru: "Автомобильная кожа", de: "Automobilleder", ko: "자동차용 가죽" }),
    "sofa-leather": text("Sofa Leather", "沙发革", "沙發革", { ar: "جلد للأرائك", id: "Kulit Sofa", ms: "Kulit Sofa", pt: "Couro para sofá", fr: "Cuir pour canapé", ja: "ソファ用レザー", ru: "Кожа для диванов", de: "Sofaleder", ko: "소파용 가죽" }),
    "shoe-upper-leather": text("Shoe Upper Leather", "鞋面革", "鞋面革", { ar: "جلد لوجه الحذاء", id: "Kulit Upper Sepatu", ms: "Kulit Bahagian Atas Kasut", pt: "Couro para cabedal", fr: "Cuir pour tige de chaussure", ja: "靴アッパー用レザー", ru: "Кожа для верха обуви", de: "Schuhoberleder", ko: "신발 갑피용 가죽" })
  };

  const categoryImages = {
    "colorant-pigment": "assets/products/pigment-color-paste.webp",
    "silicone-additives": "assets/products/silicone-leveling-agent.webp",
    "surface-finishing-agents": "assets/products/water-based-surface-finishing-agent.webp",
    "pu-resin": "assets/products/water-based-pu-resin.webp",
    "release-paper": "assets/products/embossed-release-paper.webp",
    plasticizer: "assets/products/eco-friendly-plasticizer.webp",
    "fabric-base-material": "assets/category-artificial-fabric.png",
    "artificial-leather": "assets/products/pu-synthetic-leather.webp"
  };

  const productRows = [
    ["colorant-pigment", "pigment-color-paste", "assets/products/pigment-color-paste.webp", ["Synthetic leather coating", "PU resin coloring", "Textile coating", "Industrial color matching"]],
    ["colorant-pigment", "pu-color-chips", "assets/products/pu-color-chips.webp", ["PU leather", "Semi-PU leather", "Resin coloring", "Surface coating"]],
    ["colorant-pigment", "pearl-pigment", "assets/products/pearl-pigment.webp", ["Decorative PU leather", "Coatings", "Printing inks", "Fashion material surfaces"]],
    ["colorant-pigment", "printing-ink", "", ["Synthetic leather printing", "Decorative coating", "Textile surface printing", "Packaging material samples"]],
    ["colorant-pigment", "solvent-based-colorant", "", ["Solvent-based PU coating", "PVC leather", "Industrial coating", "Color matching"]],
    ["colorant-pigment", "water-based-colorant", "", ["Water-based PU leather", "Textile coating", "Surface finishing", "Eco-conscious formulations"]],
    ["silicone-additives", "silicone-leveling-agent", "assets/products/silicone-leveling-agent.webp", ["PU leather coating", "Surface finishing", "Topcoat systems", "Coated textile production"]],
    ["silicone-additives", "silicone-slip-agent", "assets/products/silicone-slip-agent.webp", ["Sofa leather", "Automotive interior leather", "Shoe upper leather", "Bag leather"]],
    ["silicone-additives", "additives-for-pu-leather", "", ["PU leather", "Semi-PU leather", "Furniture leather", "Footwear materials"]],
    ["silicone-additives", "additives-for-pu-resin", "", ["PU resin formulation", "Coating compounds", "Binder systems", "Synthetic leather production"]],
    ["silicone-additives", "water-based-additives-for-pu", "", ["Water-based PU leather", "Waterborne coating", "Textile finishing", "Eco-conscious material systems"]],
    ["surface-finishing-agents", "water-based-surface-finishing-agent", "assets/products/water-based-surface-finishing-agent.webp", ["Water-based leather", "Microfiber leather", "Furniture leather", "Coated fabric finishing"]],
    ["surface-finishing-agents", "solvent-based-surface-finishing-agent", "", ["PU leather finishing", "PVC leather finishing", "Automotive interior materials", "Furniture upholstery"]],
    ["surface-finishing-agents", "matte-finish-agent", "", ["Matte PU leather", "Furniture leather", "Bag material", "Coated textiles"]],
    ["surface-finishing-agents", "glossy-finish-agent", "", ["Glossy leather", "Decorative surfaces", "Fashion materials", "PVC coating"]],
    ["surface-finishing-agents", "soft-touch-finishing-agent", "", ["Sofa leather", "Garment leather", "Bag material", "Interior surfaces"]],
    ["pu-resin", "water-based-pu-resin", "assets/products/water-based-pu-resin.webp", ["Water-based synthetic leather", "Textile coating", "Furniture leather", "Automotive interior materials"]],
    ["pu-resin", "solvent-based-pu-resin", "", ["Synthetic leather coating", "Topcoat systems", "Adhesive layers", "Industrial coatings"]],
    ["pu-resin", "semi-pu-resin", "", ["Semi-PU leather", "Furniture upholstery", "Bag materials", "Coated fabric"]],
    ["pu-resin", "acrylic-resin", "", ["Coating binder", "Surface finishing", "Textile coating", "Decorative materials"]],
    ["pu-resin", "binder-resin", "", ["Coating adhesion", "Fabric backing", "Leather lamination", "Industrial coating"]],
    ["pu-resin", "release-resin", "", ["Release coating", "Synthetic leather processing", "Paper treatment", "Industrial film processing"]],
    ["release-paper", "matte-release-paper", "assets/products/embossed-release-paper.webp", ["Matte PU leather", "Furniture leather", "Shoe upper material", "Decorative surfaces"]],
    ["release-paper", "matte-release-paper-for-pu-leather", "assets/products/matte-release-paper-for-pu-leather.webp", ["PU synthetic leather", "Matte surface finishing", "Texture transfer", "Furniture leather", "Shoe upper material"]],
    ["release-paper", "glossy-release-paper", "", ["Glossy PU leather", "Fashion materials", "Decorative panels", "Bag materials"]],
    ["release-paper", "embossed-release-paper", "", ["PU synthetic leather", "Automotive leather", "Furniture upholstery", "Shoe upper material"]],
    ["release-paper", "silicone-release-paper", "", ["Release coating", "Lamination", "Synthetic leather processing", "Protective liner"]],
    ["release-paper", "pu-synthetic-leather-release-paper", "", ["PU leather", "Semi-PU leather", "Furniture upholstery", "Footwear materials"]],
    ["plasticizer", "dop", "assets/products/eco-friendly-plasticizer.webp", ["PVC synthetic leather", "Flexible PVC film", "Coating compounds", "Industrial materials"]],
    ["plasticizer", "dotp", "", ["PVC leather", "Flexible film", "Cable material", "Coated fabric"]],
    ["plasticizer", "dinp", "", ["PVC synthetic leather", "Industrial film", "Coating compound", "Flooring material"]],
    ["plasticizer", "totm", "", ["Heat-resistant PVC", "Cable compounds", "Industrial coatings", "Flexible materials"]],
    ["plasticizer", "bio-based-plasticizer", "", ["Flexible PVC", "Coated materials", "Synthetic leather", "Eco-conscious formulations"]],
    ["plasticizer", "eco-friendly-plasticizer", "", ["PVC synthetic leather", "Flexible PVC film", "Coating compounds", "Industrial material formulations"]],
    ["fabric-base-material", "nonwoven-fabric", "assets/category-artificial-fabric.png", ["Synthetic leather backing", "Coated fabric", "Lamination", "Industrial material base"]],
    ["fabric-base-material", "knitted-fabric", "", ["Coated textile", "Synthetic leather", "Garment materials", "Furniture backing"]],
    ["fabric-base-material", "microfiber-base-fabric", "", ["Microfiber leather", "Shoe upper material", "Bags", "Upholstery backing"]],
    ["fabric-base-material", "polyester-fabric", "", ["Coated textiles", "Synthetic leather backing", "Industrial fabrics", "Lamination"]],
    ["fabric-base-material", "cotton-backing-fabric", "", ["Coated fabric", "Synthetic leather backing", "Decorative materials", "Soft-touch products"]],
    ["artificial-leather", "pu-leather", "assets/products/pu-synthetic-leather.webp", ["Furniture upholstery", "Shoe upper", "Bags", "Automotive interior"]],
    ["artificial-leather", "semi-pu-leather", "", ["Furniture", "Bags", "Decorative surfaces", "Footwear materials"]],
    ["artificial-leather", "pvc-leather", "assets/products/pvc-synthetic-leather.webp", ["Sofa leather", "Footwear", "Bags", "Decorative panels"]],
    ["artificial-leather", "microfiber-leather", "", ["Footwear", "Bags", "Automotive interior", "Furniture"]],
    ["artificial-leather", "water-based-leather", "", ["Furniture", "Interior surfaces", "Bags", "Eco-conscious products"]],
    ["artificial-leather", "automotive-leather", "", ["Seat surfaces", "Door panels", "Dashboard trim", "Interior components"]],
    ["artificial-leather", "sofa-leather", "", ["Sofas", "Chairs", "Furniture panels", "Interior upholstery"]],
    ["artificial-leather", "shoe-upper-leather", "", ["Shoe upper", "Sports shoes", "Casual shoes", "Bags and accessories"]]
  ];

  const productDetailProfiles = {
    "pigment-color-paste": ["concentrated pigment paste for synthetic leather coating, PU resin coloring and industrial color matching", "color strength, dispersion and batch-to-batch shade consistency", "适用于人造革涂层、PU树脂调色和工业配色的高浓度颜料膏", "色浓度、分散性和批次色相稳定"],
    "pu-color-chips": ["solid PU color chips for resin, ink and coating systems that need clean dissolution and repeatable color adjustment", "solubility, color control and production consistency", "用于PU树脂、油墨和涂层体系的固体色片", "溶解性、调色便利性和批量生产一致性"],
    "pearl-pigment": ["effect pigment for pearlescent, metallic and sparkling surface finishes", "optical effect, surface brightness and decorative appearance", "用于珠光、金属感和闪光表面效果的效果颜料", "光泽表现、装饰效果和表面层次感"],
    "printing-ink": ["printing ink for synthetic leather, release paper, film and coated textile surfaces", "adhesion, print clarity and color expression", "用于人造革、离型纸、薄膜和涂层表面印刷的油墨", "附着力、印刷清晰度和色彩表现"],
    "solvent-based-colorant": ["solvent-based colorant for PU, PVC and coating formulations", "compatibility, dispersion and shade stability in solvent systems", "用于溶剂型PU、PVC和涂层配方的色剂", "体系相容性、分散稳定和色相保持"],
    "water-based-colorant": ["water-based colorant for waterborne PU, textile coating and eco-conscious material systems", "low odor, stable dispersion and waterborne compatibility", "用于水性PU、纺织涂层和环保型材料体系的水性色剂", "低气味、分散稳定和水性体系相容性"],
    "silicone-leveling-agent": ["silicone leveling additive for coating flow and surface uniformity", "leveling, crater reduction and smoother coating appearance", "用于改善涂层流平和表面均匀性的硅流平助剂", "流平性、缩孔控制和表面平整度"],
    "silicone-slip-agent": ["silicone slip additive for smooth hand feel and anti-blocking surface performance", "slip, touch, anti-sticking and rub resistance", "用于提升表面滑爽、手感和抗粘连表现的硅滑爽剂", "滑爽性、触感、抗粘连和耐摩擦"],
    "additives-for-pu-leather": ["functional additives for PU synthetic leather production and finishing", "processing stability, hand feel, abrasion resistance and surface effect", "用于PU人造革生产和后整理的功能助剂", "加工稳定、表面手感、耐磨和外观效果"],
    "additives-for-pu-resin": ["additives for PU resin systems used in coating, binder and synthetic leather formulations", "dispersion, flow, compatibility and formulation stability", "用于PU树脂、涂层、粘结和人造革配方的助剂", "分散、流动、相容和配方稳定"],
    "water-based-additives-for-pu": ["water-based additives for waterborne PU resin and low-odor synthetic leather systems", "waterborne compatibility, processing stability and lower odor", "用于水性PU树脂和低气味人造革体系的水性助剂", "水性相容、加工稳定和低气味表现"],
    "water-based-surface-finishing-agent": ["water-based surface finishing agent for leather touch, gloss control and protective topcoat layers", "surface feel, waterborne processing and finish stability", "用于皮革触感、光泽控制和保护面层的水性表面处理剂", "手感、水性加工和表面效果稳定"],
    "solvent-based-surface-finishing-agent": ["solvent-based finishing agent for PU and PVC leather surfaces requiring strong film formation", "film strength, gloss control and abrasion resistance", "用于PU和PVC革表面后整理的溶剂型处理剂", "成膜强度、光泽控制和耐磨表现"],
    "matte-finish-agent": ["matting agent for soft, low-gloss synthetic leather and coated surfaces", "matte appearance, gloss reduction and natural texture", "用于低光泽、柔和表面效果的哑光处理剂", "降光、雾面外观和自然纹理表现"],
    "glossy-finish-agent": ["gloss finishing agent for bright synthetic leather and decorative coated materials", "surface brightness, fullness and visual depth", "用于亮光人造革和装饰涂层材料的亮光处理剂", "亮度、丰满感和表面视觉深度"],
    "soft-touch-finishing-agent": ["soft touch finishing agent for premium synthetic leather and flexible coated surfaces", "soft hand feel, skin-like touch and surface comfort", "用于高品质人造革和柔性涂层表面的柔软手感处理剂", "柔软触感、皮感和表面舒适度"],
    "water-based-pu-resin": ["water-based PU resin for synthetic leather coating, bonding and surface layers", "film formation, adhesion, flexibility and lower odor processing", "用于人造革涂层、粘结层和表面层的水性PU树脂", "成膜、附着、柔韧和低气味加工"],
    "solvent-based-pu-resin": ["solvent-based PU resin for coating systems that need strong film strength and reliable adhesion", "film strength, adhesion and topcoat durability", "用于高成膜强度和可靠附着要求的溶剂型PU树脂", "成膜强度、附着力和面层耐久性"],
    "semi-pu-resin": ["semi-PU resin for cost-effective artificial leather layers and coated fabric structures", "balanced flexibility, coating feel and processing economy", "用于经济型人造革层和涂层布结构的半PU树脂", "柔韧性、涂层手感和加工经济性"],
    "acrylic-resin": ["acrylic resin for coating binders, surface finishes and decorative material systems", "clarity, adhesion and surface film stability", "用于涂层粘结、表面处理和装饰材料体系的丙烯酸树脂", "透明性、附着和表面膜层稳定"],
    "binder-resin": ["binder resin for improving bonding between coatings, fabrics and synthetic leather layers", "bond strength, lamination stability and coating adhesion", "用于提升涂层、基布和人造革层间粘结的粘结树脂", "粘结强度、贴合稳定和涂层附着"],
    "release-resin": ["release resin for controlled peeling and surface transfer in release systems", "release performance, surface transfer and process control", "用于离型体系中控制剥离和表面转移的离型树脂", "剥离性能、表面转移和工艺控制"],
    "matte-release-paper": ["matte release paper for transferring low-gloss texture to PU and PVC synthetic leather", "matte texture clarity, clean release and reusable process stability", "用于PU和PVC人造革雾面纹理转移的哑光离型纸", "雾面纹理清晰度、剥离干净和重复使用稳定"],
    "matte-release-paper-for-pu-leather": ["matte release paper designed for stable texture transfer and clean release in PU synthetic leather production", "matte appearance, peeling performance and practical production stability", "适用于PU人造革生产的哑光离型纸", "哑光效果、剥离性能和生产稳定"],
    "glossy-release-paper": ["glossy release paper for bright synthetic leather and decorative surface transfer", "high-gloss surface, texture transfer and clean peeling", "用于亮面人造革和装饰表面转移的亮光离型纸", "高亮表面、纹理转移和干净剥离"],
    "embossed-release-paper": ["embossed release paper for forming defined grain patterns on synthetic leather", "embossing clarity, repeatability and surface texture consistency", "用于在人造革表面形成清晰纹理的压纹离型纸", "压纹清晰度、重复性和纹理一致性"],
    "silicone-release-paper": ["silicone release paper for controlled release layers and protective liner applications", "release control, surface protection and stable peeling", "用于可控离型层和保护衬纸应用的硅油离型纸", "离型控制、表面保护和稳定剥离"],
    "pu-synthetic-leather-release-paper": ["release paper for PU synthetic leather coating and texture transfer processes", "texture reproduction, clean separation and production consistency", "用于PU人造革涂层和纹理转移工艺的离型纸", "纹理还原、干净分离和生产一致性"],
    "dop": ["general-purpose plasticizer for PVC and synthetic leather formulations", "softness, processability and flexible material performance", "用于PVC和合成革配方的通用型塑化剂", "柔软性、加工适应性和材料柔韧表现"],
    "dotp": ["plasticizer for flexible PVC and coated material systems requiring improved processing balance", "flexibility, migration control and processing stability", "用于柔性PVC和涂层材料体系的塑化剂", "柔韧性、迁移控制和加工稳定"],
    "dinp": ["plasticizer for PVC leather, industrial film and coating compounds", "durability, softness and formulation compatibility", "用于PVC革、工业薄膜和涂层配方的塑化剂", "耐久、柔软和配方相容"],
    "totm": ["high-performance plasticizer for heat-resistant PVC and demanding industrial formulations", "heat resistance, permanence and long-term flexibility", "用于耐热PVC和高要求工业配方的高性能塑化剂", "耐热性、持久性和长期柔韧"],
    "bio-based-plasticizer": ["bio-based plasticizer for flexible materials and eco-conscious coated systems", "renewable content, flexibility and lower environmental profile", "用于柔性材料和环保型涂层体系的生物基塑化剂", "可再生来源、柔韧性和环保取向"],
    "eco-friendly-plasticizer": ["eco-conscious plasticizer for PVC synthetic leather and flexible coated materials", "low-odor processing, flexibility and regulatory-friendly selection", "用于PVC合成革和柔性涂层材料的环保塑化剂", "低气味加工、柔韧性和合规友好选择"],
    "nonwoven-fabric": ["nonwoven backing material for synthetic leather structures and coated composites", "dimensional stability, bonding support and uniform backing", "用于人造革结构和涂层复合材料的无纺基布", "尺寸稳定、粘结支撑和均匀底基"],
    "knitted-fabric": ["knitted fabric backing for flexible synthetic leather and coated textile applications", "stretch, softness and lamination adaptability", "用于柔性人造革和涂层纺织品的针织基布", "弹性、柔软性和贴合适应性"],
    "microfiber-base-fabric": ["microfiber base fabric for high-strength synthetic leather and footwear materials", "strength, fine texture and stable backing support", "用于高强度人造革和鞋材的超纤基布", "强度、细腻纹理和稳定支撑"],
    "polyester-fabric": ["polyester fabric backing for coated textiles and industrial material laminates", "strength, dimensional stability and coating compatibility", "用于涂层纺织品和工业复合材料的涤纶基布", "强度、尺寸稳定和涂层相容"],
    "cotton-backing-fabric": ["cotton backing fabric for soft-touch synthetic leather and decorative coated materials", "natural hand feel, backing comfort and lamination support", "用于柔软手感人造革和装饰涂层材料的棉底布", "自然手感、底基舒适度和贴合支撑"],
    "pu-leather": ["PU synthetic leather for furniture, footwear, bags and automotive interior applications", "soft touch, surface appearance and processing versatility", "用于家具、鞋材、箱包和汽车内饰的PU人造革", "柔软手感、表面外观和加工适应性"],
    "semi-pu-leather": ["Semi-PU leather for cost-conscious furniture, bags and decorative surfaces", "balanced cost, flexible hand feel and practical durability", "用于家具、箱包和装饰表面的半PU革", "成本平衡、柔韧手感和实用耐久"],
    "pvc-leather": ["PVC leather for upholstery, footwear, bags and decorative panels", "abrasion resistance, easy cleaning and stable surface effect", "用于软包、鞋材、箱包和装饰板材的PVC革", "耐磨、易清洁和表面效果稳定"],
    "microfiber-leather": ["microfiber leather for footwear, bags, automotive interiors and premium upholstery", "strength, fine touch and leather-like texture", "用于鞋材、箱包、汽车内饰和高品质软包的超纤革", "强度、细腻触感和仿真皮纹理"],
    "water-based-leather": ["water-based synthetic leather for furniture, bags and eco-conscious interior materials", "lower odor, soft touch and waterborne processing direction", "用于家具、箱包和环保型内饰材料的水性革", "低气味、柔软触感和水性加工方向"],
    "automotive-leather": ["automotive leather material for seat, door panel and dashboard surface applications", "wear resistance, color stability and interior surface quality", "用于座椅、门板和仪表台表面的汽车革", "耐磨、色彩稳定和内饰表面品质"],
    "sofa-leather": ["sofa leather for furniture upholstery and interior soft covering applications", "comfortable touch, surface durability and decorative texture", "用于家具软包和室内软质覆盖的沙发革", "舒适触感、表面耐久和装饰纹理"],
    "shoe-upper-leather": ["shoe upper leather for sports, casual and bag accessory materials", "flexibility, fold resistance and surface appearance", "用于运动鞋、休闲鞋和箱包配件的鞋面革", "柔韧、耐折和表面外观"]
  };

  function translatedCopy(slug, categorySlug, type) {
    const name = productNames[slug];
    const profile = productDetailProfiles[slug];
    const sourceApps = (productRows.find((row) => row[1] === slug) || [])[3] || [];
    const appText = (lang) => sourceApps.slice(0, 3).map((item) => translateApplication(item, lang)).join(lang === "zh" || lang === "zhTW" || lang === "ja" || lang === "ko" ? "、" : ", ");
    if (profile) {
      if (type === "short") {
        return text(
          `${name.en} is a ${profile[0]}, with attention to ${profile[1]}.`,
          `${name.zh}是${profile[2]}，重点关注${profile[3]}。`,
          `${name.zhTW}是${profile[2]}，重點關注${profile[3]}。`,
          {
            ar: `${name.ar} مخصص لتطبيقات مثل ${appText("ar")}، مع التركيز على الأداء العملي وثبات المعالجة.`,
            id: `${name.id} digunakan untuk ${appText("id")}, dengan fokus pada performa praktis dan stabilitas proses.`,
            ms: `${name.ms} digunakan untuk ${appText("ms")}, dengan tumpuan pada prestasi praktikal dan kestabilan proses.`,
            pt: `${name.pt} é indicado para ${appText("pt")}, com foco em desempenho prático e estabilidade de processo.`,
            fr: `${name.fr} convient à ${appText("fr")}, avec un accent sur la performance pratique et la stabilité du procédé.`,
            ja: `${name.ja}は${appText("ja")}向けの材料で、実用性能と加工安定性を重視しています。`,
            ru: `${name.ru} применяется для ${appText("ru")} с акцентом на практические характеристики и стабильность процесса.`,
            de: `${name.de} eignet sich für ${appText("de")} und legt den Schwerpunkt auf praktische Leistung und Prozessstabilität.`,
            ko: `${name.ko}은 ${appText("ko")}에 사용되며 실용 성능과 공정 안정성에 중점을 둡니다.`
          }
        );
      }
      return text(
        `${name.en} is developed for ${appText("en")}. It helps manufacturers improve ${profile[1]} while keeping processing conditions practical for coating, finishing or synthetic leather production.`,
        `${name.zh}主要用于${appText("zh")}。它能帮助客户改善${profile[3]}，在涂层、后整理或人造革生产中保持更稳定、可沟通的加工表现。`,
        `${name.zhTW}主要用於${appText("zhTW")}。它能幫助客戶改善${profile[3]}，在塗層、後整理或人造革生產中保持更穩定、可溝通的加工表現。`,
        {
          ar: `تم تطوير ${name.ar} لتطبيقات مثل ${appText("ar")}. يساعد العملاء على تحسين جودة السطح وثبات التشغيل وملاءمة الإنتاج في أنظمة الجلد الصناعي والطلاء.`,
          id: `${name.id} dikembangkan untuk ${appText("id")}. Produk ini membantu meningkatkan kualitas permukaan, stabilitas proses, dan kesesuaian produksi pada sistem kulit sintetis dan coating.`,
          ms: `${name.ms} dibangunkan untuk ${appText("ms")}. Produk ini membantu meningkatkan kualiti permukaan, kestabilan proses, dan kesesuaian pengeluaran dalam sistem kulit sintetik dan salutan.`,
          pt: `${name.pt} foi desenvolvido para ${appText("pt")}. Ajuda a melhorar a qualidade de superfície, a estabilidade de processo e a adequação produtiva em sistemas de couro sintético e revestimento.`,
          fr: `${name.fr} est développé pour ${appText("fr")}. Il aide à améliorer la qualité de surface, la stabilité du procédé et l'adaptation à la production dans les systèmes de cuir synthétique et de revêtement.`,
          ja: `${name.ja}は${appText("ja")}向けに設計されています。合成皮革やコーティング工程で、表面品質、加工安定性、生産適性の向上に役立ちます。`,
          ru: `${name.ru} разработан для ${appText("ru")}. Он помогает улучшить качество поверхности, стабильность процесса и пригодность к производству в системах синтетической кожи и покрытий.`,
          de: `${name.de} wurde für ${appText("de")} entwickelt. Es unterstützt eine bessere Oberflächenqualität, Prozessstabilität und Produktionseignung in Kunstleder- und Beschichtungssystemen.`,
          ko: `${name.ko}은 ${appText("ko")} 용도로 개발되었습니다. 합성피혁 및 코팅 공정에서 표면 품질, 공정 안정성, 생산 적합성을 개선하는 데 도움이 됩니다.`
        }
      );
    }
    const category = categoryNames[categorySlug];
    if (type === "short") {
      return text(
        `${name.en} is suitable for ${category.en} systems and practical industrial applications.`,
        `${name.zh}适用于${category.zh}体系及实际工业应用。`,
        `${name.zhTW}適用於${category.zhTW}體系及實際工業應用。`,
        {
          ar: `${name.ar} مناسب لتطبيقات ${category.ar} والمواد الصناعية العملية.`,
          id: `${name.id} cocok untuk sistem ${category.id} dan aplikasi industri praktis.`,
          ms: `${name.ms} sesuai untuk sistem ${category.ms} dan aplikasi industri praktikal.`,
          pt: `${name.pt} é indicado para sistemas de ${category.pt} e aplicações industriais.`,
          fr: `${name.fr} convient aux systèmes de ${category.fr} et aux applications industrielles.`,
          ja: `${name.ja} は ${category.ja} システムおよび産業用途に適しています。`,
          ru: `${name.ru} подходит для систем ${category.ru} и промышленных применений.`,
          de: `${name.de} eignet sich für ${category.de}-Systeme und industrielle Anwendungen.`,
          ko: `${name.ko}은 ${category.ko} 시스템 및 산업 적용에 적합합니다.`
        }
      );
    }
    return text(
      `${name.en} supports stable processing, surface quality and material performance for global B2B customers.`,
      `${name.zh}可支持稳定加工、表面品质和材料性能，适合外贸客户选型沟通。`,
      `${name.zhTW}可支援穩定加工、表面品質和材料性能，適合外貿客戶選型溝通。`,
      {
        ar: `يدعم ${name.ar} ثبات المعالجة وجودة السطح وأداء المواد للعملاء العالميين.`,
        id: `${name.id} mendukung proses yang stabil, kualitas permukaan dan performa material untuk pelanggan B2B global.`,
        ms: `${name.ms} menyokong proses stabil, kualiti permukaan dan prestasi bahan untuk pelanggan B2B global.`,
        pt: `${name.pt} apoia estabilidade de processo, qualidade de superfície e desempenho do material para clientes B2B globais.`,
        fr: `${name.fr} soutient la stabilité du procédé, la qualité de surface et la performance des matériaux pour les clients B2B.`,
        ja: `${name.ja} は、安定した加工、表面品質、材料性能をサポートします。`,
        ru: `${name.ru} помогает поддерживать стабильность процесса, качество поверхности и характеристики материала.`,
        de: `${name.de} unterstützt Prozessstabilität, Oberflächenqualität und Materialleistung für globale B2B-Kunden.`,
        ko: `${name.ko}은 안정적인 공정, 표면 품질 및 소재 성능을 지원합니다.`
      }
    );
  }

  const applicationTranslationRules = {
    ar: {
      "Synthetic leather": "جلد صناعي", "synthetic leather": "جلد صناعي", "Artificial leather": "جلد صناعي", "PU synthetic leather": "جلد PU صناعي", "PVC synthetic leather": "جلد PVC صناعي", "PU leather": "جلد PU", "PVC leather": "جلد PVC", "Semi-PU leather": "جلد Semi-PU", "Microfiber leather": "جلد مايكروفايبر", "Water-based leather": "جلد مائي", "Water-based PU leather": "جلد PU مائي", "Sofa leather": "جلد الأرائك", "Furniture leather": "جلد الأثاث", "Automotive leather": "جلد السيارات", "Shoe upper leather": "جلد وجه الحذاء", "Garment leather": "جلد الملابس", "Decorative PU leather": "جلد PU زخرفي", "Glossy PU leather": "جلد PU لامع", "Matte PU leather": "جلد PU مطفي", "Glossy leather": "جلد لامع",
      "Flexible PVC film": "فيلم PVC مرن", "Flexible PVC": "PVC مرن", "Heat-resistant PVC": "PVC مقاوم للحرارة", "Flexible film": "فيلم مرن", "Industrial film processing": "معالجة أفلام صناعية", "Industrial film": "فيلم صناعي",
      "Coating compounds": "مركبات طلاء", "Coating compound": "مركب طلاء", "Coating adhesion": "التصاق الطلاء", "Coating binder": "رابط الطلاء", "Surface coating": "طلاء سطحي", "Decorative coating": "طلاء زخرفي", "Release coating": "طلاء فصل", "PVC coating": "طلاء PVC", "Textile coating": "طلاء النسيج", "Waterborne coating": "طلاء مائي", "Solvent-based PU coating": "طلاء PU قائم على المذيب", "Industrial coatings": "طلاءات صناعية", "Industrial coating": "طلاء صناعي", "Coatings": "طلاءات", "coating": "طلاء",
      "Surface finishing": "تشطيب سطحي", "Matte surface finishing": "تشطيب سطح مطفي", "Textile finishing": "تشطيب النسيج", "Coated fabric finishing": "تشطيب القماش المطلي", "PU leather finishing": "تشطيب جلد PU", "PVC leather finishing": "تشطيب جلد PVC",
      "Coated textile production": "إنتاج المنسوجات المطلية", "Coated textiles": "منسوجات مطلية", "Coated textile": "منسوجات مطلية", "Coated fabric": "قماش مطلي", "Coated materials": "مواد مطلية", "Coated": "مطلي",
      "Furniture upholstery": "تنجيد الأثاث", "Interior upholstery": "تنجيد داخلي", "Upholstery backing": "بطانة التنجيد", "Furniture backing": "بطانة الأثاث", "Fabric backing": "بطانة قماشية", "Synthetic leather backing": "بطانة الجلد الصناعي", "Leather lamination": "تصفيح الجلد", "Lamination": "تصفيح",
      "Fashion material surfaces": "أسطح مواد الموضة", "Fashion materials": "مواد الموضة", "Decorative materials": "مواد زخرفية", "Decorative panels": "ألواح زخرفية", "Decorative surfaces": "أسطح زخرفية", "Industrial materials": "مواد صناعية", "Industrial material base": "قاعدة مواد صناعية", "Industrial material formulations": "تركيبات مواد صناعية", "Industrial fabrics": "أقمشة صناعية", "Flexible materials": "مواد مرنة",
      "Automotive interior materials": "مواد داخلية للسيارات", "Automotive interior leather": "جلد داخلي للسيارات", "Automotive interior": "داخلية السيارات", "Interior components": "مكونات داخلية", "Interior surfaces": "أسطح داخلية", "Seat surfaces": "أسطح المقاعد", "Dashboard trim": "تشطيبات لوحة القيادة", "Door panels": "ألواح الأبواب",
      "Footwear materials": "مواد الأحذية", "Footwear": "الأحذية", "Shoe upper material": "مواد وجه الحذاء", "Shoe upper": "وجه الحذاء", "Sports shoes": "أحذية رياضية", "Casual shoes": "أحذية كاجوال", "Bags and accessories": "حقائب وإكسسوارات", "Bag materials": "مواد الحقائب", "Bag material": "مواد الحقائب", "Bag leather": "جلد الحقائب", "Bags": "حقائب",
      "Furniture panels": "ألواح الأثاث", "Furniture": "الأثاث", "Sofas": "أرائك", "Chairs": "كراسي", "Soft-touch products": "منتجات ملمس ناعم", "Eco-conscious material systems": "أنظمة مواد صديقة للبيئة", "Eco-conscious formulations": "تركيبات صديقة للبيئة", "Eco-conscious products": "منتجات صديقة للبيئة", "Color matching": "مطابقة الألوان", "Industrial color matching": "مطابقة ألوان صناعية", "Resin coloring": "تلوين الراتنج", "PU resin coloring": "تلوين راتنج PU", "PU resin formulation": "تركيبة راتنج PU", "Binder systems": "أنظمة ربط", "Adhesive layers": "طبقات لاصقة", "Cable compounds": "مركبات الكابلات", "Cable material": "مواد الكابلات", "Flooring material": "مواد الأرضيات", "Packaging material samples": "عينات مواد تغليف", "Paper treatment": "معالجة الورق", "Printing inks": "أحبار طباعة", "Protective liner": "بطانة حماية", "Texture transfer": "نقل النسيج", "Topcoat systems": "أنظمة الطبقة النهائية", "Synthetic leather printing": "طباعة الجلد الصناعي", "Synthetic leather processing": "معالجة الجلد الصناعي", "Synthetic leather production": "إنتاج الجلد الصناعي", "Textile surface printing": "طباعة سطح النسيج"
    },
    id: {
      "Synthetic leather": "Kulit sintetis", "synthetic leather": "kulit sintetis", "Artificial leather": "Kulit sintetis", "PU synthetic leather": "Kulit sintetis PU", "PVC synthetic leather": "Kulit sintetis PVC", "PU leather": "Kulit PU", "PVC leather": "Kulit PVC", "Semi-PU leather": "Kulit Semi-PU", "Microfiber leather": "Kulit microfiber", "Water-based leather": "Kulit berbasis air", "Water-based PU leather": "Kulit PU berbasis air", "Sofa leather": "Kulit sofa", "Furniture leather": "Kulit furnitur", "Automotive leather": "Kulit otomotif", "Shoe upper leather": "Kulit upper sepatu", "Garment leather": "Kulit pakaian", "Decorative PU leather": "Kulit PU dekoratif", "Glossy PU leather": "Kulit PU glossy", "Matte PU leather": "Kulit PU matte", "Glossy leather": "Kulit glossy",
      "Flexible PVC film": "Film PVC fleksibel", "Flexible PVC": "PVC fleksibel", "Heat-resistant PVC": "PVC tahan panas", "Flexible film": "Film fleksibel", "Industrial film processing": "Pemrosesan film industri", "Industrial film": "Film industri",
      "Coating compounds": "Kompon coating", "Coating compound": "Kompon coating", "Coating adhesion": "Adhesi coating", "Coating binder": "Binder coating", "Surface coating": "Coating permukaan", "Decorative coating": "Coating dekoratif", "Release coating": "Coating release", "PVC coating": "Coating PVC", "Textile coating": "Coating tekstil", "Waterborne coating": "Coating berbasis air", "Solvent-based PU coating": "Coating PU berbasis pelarut", "Industrial coatings": "Coating industri", "Industrial coating": "Coating industri", "Coatings": "Coating", "coating": "coating",
      "Surface finishing": "Finishing permukaan", "Matte surface finishing": "Finishing permukaan matte", "Textile finishing": "Finishing tekstil", "Coated fabric finishing": "Finishing kain berlapis", "PU leather finishing": "Finishing kulit PU", "PVC leather finishing": "Finishing kulit PVC",
      "Coated textile production": "Produksi tekstil berlapis", "Coated textiles": "Tekstil berlapis", "Coated textile": "Tekstil berlapis", "Coated fabric": "Kain berlapis", "Coated materials": "Material berlapis", "Coated": "Berlapis",
      "Furniture upholstery": "Pelapis furnitur", "Interior upholstery": "Pelapis interior", "Upholstery backing": "Backing upholstery", "Furniture backing": "Backing furnitur", "Fabric backing": "Backing kain", "Synthetic leather backing": "Backing kulit sintetis", "Leather lamination": "Laminasi kulit", "Lamination": "Laminasi",
      "Fashion material surfaces": "Permukaan material fashion", "Fashion materials": "Material fashion", "Decorative materials": "Material dekoratif", "Decorative panels": "Panel dekoratif", "Decorative surfaces": "Permukaan dekoratif", "Industrial materials": "Material industri", "Industrial material base": "Basis material industri", "Industrial material formulations": "Formulasi material industri", "Industrial fabrics": "Kain industri", "Flexible materials": "Material fleksibel",
      "Automotive interior materials": "Material interior otomotif", "Automotive interior leather": "Kulit interior otomotif", "Automotive interior": "Interior otomotif", "Interior components": "Komponen interior", "Interior surfaces": "Permukaan interior", "Seat surfaces": "Permukaan jok", "Dashboard trim": "Trim dashboard", "Door panels": "Panel pintu",
      "Footwear materials": "Material alas kaki", "Footwear": "Alas kaki", "Shoe upper material": "Material upper sepatu", "Shoe upper": "Upper sepatu", "Sports shoes": "Sepatu olahraga", "Casual shoes": "Sepatu kasual", "Bags and accessories": "Tas dan aksesori", "Bag materials": "Material tas", "Bag material": "Material tas", "Bag leather": "Kulit tas", "Bags": "Tas",
      "Furniture panels": "Panel furnitur", "Furniture": "Furnitur", "Sofas": "Sofa", "Chairs": "Kursi", "Soft-touch products": "Produk sentuhan lembut", "Eco-conscious material systems": "Sistem material ramah lingkungan", "Eco-conscious formulations": "Formulasi ramah lingkungan", "Eco-conscious products": "Produk ramah lingkungan", "Color matching": "Pencocokan warna", "Industrial color matching": "Pencocokan warna industri", "Resin coloring": "Pewarnaan resin", "PU resin coloring": "Pewarnaan resin PU", "PU resin formulation": "Formulasi resin PU", "Binder systems": "Sistem binder", "Adhesive layers": "Lapisan perekat", "Cable compounds": "Kompon kabel", "Cable material": "Material kabel", "Flooring material": "Material lantai", "Packaging material samples": "Sampel material kemasan", "Paper treatment": "Perlakuan kertas", "Printing inks": "Tinta cetak", "Protective liner": "Liner pelindung", "Texture transfer": "Transfer tekstur", "Topcoat systems": "Sistem topcoat", "Synthetic leather printing": "Pencetakan kulit sintetis", "Synthetic leather processing": "Pemrosesan kulit sintetis", "Synthetic leather production": "Produksi kulit sintetis", "Textile surface printing": "Pencetakan permukaan tekstil"
    },
    ms: {},
    pt: {},
    fr: {},
    ja: {},
    ru: {},
    de: {},
    ko: {}
  };

  applicationTranslationRules.ms = Object.assign({}, applicationTranslationRules.id, {
    "Synthetic leather": "Kulit sintetik", "synthetic leather": "kulit sintetik", "PU synthetic leather": "Kulit sintetik PU", "PVC synthetic leather": "Kulit sintetik PVC", "Coating compounds": "Kompaun salutan", "Coating compound": "Kompaun salutan", "Industrial materials": "Bahan industri", "Flexible PVC film": "Filem PVC fleksibel", "Surface finishing": "Kemasan permukaan", "Matte surface finishing": "Kemasan permukaan matte", "Shoe upper material": "Bahan bahagian atas kasut", "Footwear materials": "Bahan kasut", "Furniture leather": "Kulit perabot", "Color matching": "Padanan warna"
  });
  applicationTranslationRules.pt = Object.assign({}, applicationTranslationRules.id, {
    "Synthetic leather": "Couro sintético", "synthetic leather": "couro sintético", "PU synthetic leather": "Couro sintético PU", "PVC synthetic leather": "Couro sintético PVC", "PU leather": "Couro PU", "PVC leather": "Couro PVC", "Semi-PU leather": "Couro Semi-PU", "Microfiber leather": "Couro microfibra", "Flexible PVC film": "Filme PVC flexível", "Flexible PVC": "PVC flexível", "Coating compounds": "Compostos de revestimento", "Coating compound": "Composto de revestimento", "Industrial materials": "Materiais industriais", "Surface finishing": "Acabamento superficial", "Matte surface finishing": "Acabamento superficial fosco", "Shoe upper material": "Material para cabedal", "Footwear materials": "Materiais para calçados", "Furniture leather": "Couro para móveis", "Color matching": "Correspondência de cores", "Textile coating": "Revestimento têxtil", "Waterborne coating": "Revestimento aquoso"
  });
  applicationTranslationRules.fr = Object.assign({}, applicationTranslationRules.pt, {
    "Synthetic leather": "Cuir synthétique", "synthetic leather": "cuir synthétique", "PU synthetic leather": "Cuir synthétique PU", "PVC synthetic leather": "Cuir synthétique PVC", "PU leather": "Cuir PU", "PVC leather": "Cuir PVC", "Semi-PU leather": "Cuir Semi-PU", "Microfiber leather": "Cuir microfibre", "Flexible PVC film": "Film PVC souple", "Flexible PVC": "PVC souple", "Coating compounds": "Composés de revêtement", "Coating compound": "Composé de revêtement", "Industrial materials": "Matériaux industriels", "Surface finishing": "Finition de surface", "Matte surface finishing": "Finition de surface mate", "Shoe upper material": "Matériau pour tige de chaussure", "Footwear materials": "Matériaux pour chaussures", "Furniture leather": "Cuir pour mobilier", "Color matching": "Correspondance des couleurs", "Textile coating": "Enduction textile", "Waterborne coating": "Revêtement aqueux"
  });
  applicationTranslationRules.ja = Object.assign({}, applicationTranslationRules.pt, {
    "Synthetic leather": "合成皮革", "synthetic leather": "合成皮革", "PU synthetic leather": "PU合成皮革", "PVC synthetic leather": "PVC合成皮革", "PU leather": "PUレザー", "PVC leather": "PVCレザー", "Semi-PU leather": "Semi-PUレザー", "Microfiber leather": "マイクロファイバーレザー", "Water-based PU leather": "水性PUレザー", "Flexible PVC film": "柔軟PVCフィルム", "Flexible PVC": "柔軟PVC", "Coating compounds": "コーティング配合材", "Coating compound": "コーティング配合材", "Industrial materials": "産業用材料", "Surface finishing": "表面仕上げ", "Matte surface finishing": "マット表面仕上げ", "Shoe upper material": "靴甲材料", "Footwear materials": "靴材", "Furniture leather": "家具用レザー", "Color matching": "色合わせ", "Textile coating": "繊維コーティング", "Waterborne coating": "水性コーティング", "Printing inks": "印刷インキ", "Texture transfer": "テクスチャ転写"
  });
  applicationTranslationRules.ru = Object.assign({}, applicationTranslationRules.pt, {
    "Synthetic leather": "Синтетическая кожа", "synthetic leather": "синтетическая кожа", "PU synthetic leather": "Синтетическая PU-кожа", "PVC synthetic leather": "Синтетическая кожа PVC", "PU leather": "PU-кожа", "PVC leather": "PVC-кожа", "Semi-PU leather": "Кожа Semi-PU", "Microfiber leather": "Микрофибровая кожа", "Flexible PVC film": "Гибкая пленка PVC", "Flexible PVC": "Гибкий PVC", "Coating compounds": "Покрывные составы", "Coating compound": "Покрывной состав", "Industrial materials": "Промышленные материалы", "Surface finishing": "Отделка поверхности", "Matte surface finishing": "Матовая отделка поверхности", "Shoe upper material": "Материал верха обуви", "Footwear materials": "Обувные материалы", "Furniture leather": "Кожа для мебели", "Color matching": "Подбор цвета", "Textile coating": "Текстильное покрытие", "Waterborne coating": "Водное покрытие", "Printing inks": "Печатные краски", "Texture transfer": "Перенос текстуры"
  });
  applicationTranslationRules.de = Object.assign({}, applicationTranslationRules.pt, {
    "Synthetic leather": "Kunstleder", "synthetic leather": "Kunstleder", "PU synthetic leather": "PU-Kunstleder", "PVC synthetic leather": "PVC-Kunstleder", "PU leather": "PU-Leder", "PVC leather": "PVC-Leder", "Semi-PU leather": "Semi-PU-Leder", "Microfiber leather": "Mikrofaserleder", "Flexible PVC film": "Flexible PVC-Folie", "Flexible PVC": "Flexibles PVC", "Coating compounds": "Beschichtungsmischungen", "Coating compound": "Beschichtungsmischung", "Industrial materials": "Industriematerialien", "Surface finishing": "Oberflächenveredelung", "Matte surface finishing": "Matte Oberflächenveredelung", "Shoe upper material": "Schuhobermaterial", "Footwear materials": "Schuhmaterialien", "Furniture leather": "Möbelleder", "Color matching": "Farbabstimmung", "Textile coating": "Textilbeschichtung", "Waterborne coating": "Wasserbasierte Beschichtung", "Printing inks": "Druckfarben", "Texture transfer": "Texturübertragung"
  });
  applicationTranslationRules.ko = Object.assign({}, applicationTranslationRules.pt, {
    "Synthetic leather": "합성피혁", "synthetic leather": "합성피혁", "PU synthetic leather": "PU 합성피혁", "PVC synthetic leather": "PVC 합성피혁", "PU leather": "PU 가죽", "PVC leather": "PVC 가죽", "Semi-PU leather": "Semi-PU 가죽", "Microfiber leather": "마이크로파이버 가죽", "Flexible PVC film": "유연 PVC 필름", "Flexible PVC": "유연 PVC", "Coating compounds": "코팅 컴파운드", "Coating compound": "코팅 컴파운드", "Industrial materials": "산업용 소재", "Surface finishing": "표면 마감", "Matte surface finishing": "무광 표면 마감", "Shoe upper material": "갑피 소재", "Footwear materials": "신발 소재", "Furniture leather": "가구용 가죽", "Color matching": "색상 매칭", "Textile coating": "섬유 코팅", "Waterborne coating": "수성 코팅", "Printing inks": "인쇄 잉크", "Texture transfer": "텍스처 전사"
  });

  const genericApplicationTerms = {
    pt: {
      "Synthetic leather": "Couro sintético", "synthetic leather": "couro sintético", "Artificial leather": "Couro sintético", "PU leather": "Couro PU", "PVC leather": "Couro PVC", "Semi-PU leather": "Couro Semi-PU", "Microfiber leather": "Couro microfibra", "Water-based leather": "Couro à base de água", "Automotive leather": "Couro automotivo", "Furniture leather": "Couro para móveis", "Sofa leather": "Couro para sofá", "Shoe upper leather": "Couro para cabedal", "Garment leather": "Couro para vestuário", "Bag leather": "Couro para bolsas", "leather": "couro", "Leather": "Couro",
      "Flexible PVC film": "Filme PVC flexível", "Flexible PVC": "PVC flexível", "Flexible film": "Filme flexível", "Industrial film": "Filme industrial", "film": "filme", "Film": "Filme",
      "Coating compounds": "Compostos de revestimento", "Coating compound": "Composto de revestimento", "coating": "revestimento", "Coating": "Revestimento", "Coatings": "Revestimentos", "Surface finishing": "Acabamento superficial", "finishing": "acabamento", "Finishing": "Acabamento",
      "Coated fabric": "Tecido revestido", "Coated textile": "Têxtil revestido", "Coated textiles": "Têxteis revestidos", "Coated materials": "Materiais revestidos",
      "Furniture": "Móveis", "Footwear": "Calçados", "Shoe upper": "Cabedal", "Bags": "Bolsas", "Chairs": "Cadeiras", "Sofas": "Sofás", "Interior": "Interior", "Automotive": "Automotivo", "Decorative": "Decorativo", "Industrial": "Industrial", "materials": "materiais", "Materials": "Materiais", "material": "material", "Material": "Material", "surfaces": "superfícies", "Surfaces": "Superfícies", "surface": "superfície", "Surface": "Superfície", "panels": "painéis", "Panels": "Painéis", "production": "produção", "Production": "Produção", "processing": "processamento", "Processing": "Processamento", "backing": "base", "Backing": "Base", "Lamination": "Laminação", "Printing inks": "Tintas de impressão", "Color matching": "Correspondência de cores", "Texture transfer": "Transferência de textura", "Topcoat systems": "Sistemas topcoat", "Release coating": "Revestimento release", "Paper treatment": "Tratamento de papel", "Protective liner": "Liner protetor", "Binder systems": "Sistemas ligantes", "Adhesive layers": "Camadas adesivas", "Cable compounds": "Compostos para cabos", "Cable material": "Material para cabos", "Flooring material": "Material para pisos"
    },
    fr: {
      "Synthetic leather": "Cuir synthétique", "synthetic leather": "cuir synthétique", "Artificial leather": "Cuir synthétique", "PU leather": "Cuir PU", "PVC leather": "Cuir PVC", "Semi-PU leather": "Cuir Semi-PU", "Microfiber leather": "Cuir microfibre", "Water-based leather": "Cuir à base d'eau", "Automotive leather": "Cuir automobile", "Furniture leather": "Cuir pour mobilier", "Sofa leather": "Cuir pour canapé", "Shoe upper leather": "Cuir pour tige de chaussure", "Garment leather": "Cuir pour vêtements", "Bag leather": "Cuir pour sacs", "leather": "cuir", "Leather": "Cuir",
      "Flexible PVC film": "Film PVC souple", "Flexible PVC": "PVC souple", "Flexible film": "Film souple", "Industrial film": "Film industriel", "film": "film", "Film": "Film",
      "Coating compounds": "Composés de revêtement", "Coating compound": "Composé de revêtement", "coating": "revêtement", "Coating": "Revêtement", "Coatings": "Revêtements", "Surface finishing": "Finition de surface", "finishing": "finition", "Finishing": "Finition",
      "Coated fabric": "Tissu enduit", "Coated textile": "Textile enduit", "Coated textiles": "Textiles enduits", "Coated materials": "Matériaux enduits",
      "Furniture": "Mobilier", "Footwear": "Chaussures", "Shoe upper": "Tige de chaussure", "Bags": "Sacs", "Chairs": "Chaises", "Sofas": "Canapés", "Interior": "Intérieur", "Automotive": "Automobile", "Decorative": "Décoratif", "Industrial": "Industriel", "materials": "matériaux", "Materials": "Matériaux", "material": "matériau", "Material": "Matériau", "surfaces": "surfaces", "Surfaces": "Surfaces", "surface": "surface", "Surface": "Surface", "panels": "panneaux", "Panels": "Panneaux", "production": "production", "Production": "Production", "processing": "traitement", "Processing": "Traitement", "backing": "support", "Backing": "Support", "Lamination": "Lamination", "Printing inks": "Encres d'impression", "Color matching": "Correspondance des couleurs", "Texture transfer": "Transfert de texture", "Topcoat systems": "Systèmes topcoat", "Release coating": "Revêtement release", "Paper treatment": "Traitement du papier", "Protective liner": "Film protecteur", "Binder systems": "Systèmes liants", "Adhesive layers": "Couches adhésives", "Cable compounds": "Composés pour câbles", "Cable material": "Matériau pour câbles", "Flooring material": "Matériau de sol"
    },
    ja: {
      "Synthetic leather": "合成皮革", "synthetic leather": "合成皮革", "Artificial leather": "合成皮革", "PU leather": "PUレザー", "PVC leather": "PVCレザー", "Semi-PU leather": "Semi-PUレザー", "Microfiber leather": "マイクロファイバーレザー", "Water-based leather": "水性レザー", "Automotive leather": "自動車用レザー", "Furniture leather": "家具用レザー", "Sofa leather": "ソファ用レザー", "Shoe upper leather": "靴甲用レザー", "Garment leather": "衣料用レザー", "Bag leather": "バッグ用レザー", "leather": "レザー", "Leather": "レザー",
      "Flexible PVC film": "柔軟PVCフィルム", "Flexible PVC": "柔軟PVC", "Flexible film": "柔軟フィルム", "Industrial film": "産業用フィルム", "film": "フィルム", "Film": "フィルム",
      "Coating compounds": "コーティング配合材", "Coating compound": "コーティング配合材", "coating": "コーティング", "Coating": "コーティング", "Coatings": "コーティング", "Surface finishing": "表面仕上げ", "finishing": "仕上げ", "Finishing": "仕上げ",
      "Coated fabric": "コーティング布", "Coated textile": "コーティング繊維", "Coated textiles": "コーティング繊維", "Coated materials": "コーティング材料",
      "Furniture": "家具", "Footwear": "靴材", "Shoe upper": "靴甲", "Bags": "バッグ", "Chairs": "椅子", "Sofas": "ソファ", "Interior": "内装", "Automotive": "自動車", "Decorative": "装飾", "Industrial": "産業用", "materials": "材料", "Materials": "材料", "material": "材料", "Material": "材料", "surfaces": "表面", "Surfaces": "表面", "surface": "表面", "Surface": "表面", "panels": "パネル", "Panels": "パネル", "production": "生産", "Production": "生産", "processing": "加工", "Processing": "加工", "backing": "基材", "Backing": "基材", "Lamination": "ラミネーション", "Printing inks": "印刷インキ", "Color matching": "色合わせ", "Texture transfer": "テクスチャ転写", "Topcoat systems": "トップコートシステム", "Release coating": "離型コーティング", "Paper treatment": "紙処理", "Protective liner": "保護ライナー", "Binder systems": "バインダーシステム", "Adhesive layers": "接着層", "Cable compounds": "ケーブルコンパウンド", "Cable material": "ケーブル材料", "Flooring material": "床材"
    },
    ru: {
      "Synthetic leather": "Синтетическая кожа", "synthetic leather": "синтетическая кожа", "Artificial leather": "Искусственная кожа", "PU leather": "PU-кожа", "PVC leather": "PVC-кожа", "Semi-PU leather": "Кожа Semi-PU", "Microfiber leather": "Микрофибровая кожа", "Water-based leather": "Кожа на водной основе", "Automotive leather": "Автомобильная кожа", "Furniture leather": "Кожа для мебели", "Sofa leather": "Кожа для диванов", "Shoe upper leather": "Кожа для верха обуви", "Garment leather": "Кожа для одежды", "Bag leather": "Кожа для сумок", "leather": "кожа", "Leather": "Кожа",
      "Flexible PVC film": "Гибкая пленка PVC", "Flexible PVC": "Гибкий PVC", "Flexible film": "Гибкая пленка", "Industrial film": "Промышленная пленка", "film": "пленка", "Film": "Пленка",
      "Coating compounds": "Покрывные составы", "Coating compound": "Покрывной состав", "coating": "покрытие", "Coating": "Покрытие", "Coatings": "Покрытия", "Surface finishing": "Отделка поверхности", "finishing": "отделка", "Finishing": "Отделка",
      "Coated fabric": "Ткань с покрытием", "Coated textile": "Текстиль с покрытием", "Coated textiles": "Текстиль с покрытием", "Coated materials": "Материалы с покрытием",
      "Furniture": "Мебель", "Footwear": "Обувь", "Shoe upper": "Верх обуви", "Bags": "Сумки", "Chairs": "Стулья", "Sofas": "Диваны", "Interior": "Интерьер", "Automotive": "Автомобильный", "Decorative": "Декоративный", "Industrial": "Промышленный", "materials": "материалы", "Materials": "Материалы", "material": "материал", "Material": "Материал", "surfaces": "поверхности", "Surfaces": "Поверхности", "surface": "поверхность", "Surface": "Поверхность", "panels": "панели", "Panels": "Панели", "production": "производство", "Production": "Производство", "processing": "обработка", "Processing": "Обработка", "backing": "основа", "Backing": "Основа", "Lamination": "Ламинация", "Printing inks": "Печатные краски", "Color matching": "Подбор цвета", "Texture transfer": "Перенос текстуры", "Topcoat systems": "Системы верхнего покрытия", "Release coating": "Разделительное покрытие", "Paper treatment": "Обработка бумаги", "Protective liner": "Защитный лайнер", "Binder systems": "Связующие системы", "Adhesive layers": "Клеевые слои", "Cable compounds": "Кабельные компаунды", "Cable material": "Кабельный материал", "Flooring material": "Материал для пола"
    },
    de: {
      "Synthetic leather": "Kunstleder", "synthetic leather": "Kunstleder", "Artificial leather": "Kunstleder", "PU leather": "PU-Leder", "PVC leather": "PVC-Leder", "Semi-PU leather": "Semi-PU-Leder", "Microfiber leather": "Mikrofaserleder", "Water-based leather": "Wasserbasiertes Leder", "Automotive leather": "Automobilleder", "Furniture leather": "Möbelleder", "Sofa leather": "Sofaleder", "Shoe upper leather": "Schuhoberleder", "Garment leather": "Bekleidungsleder", "Bag leather": "Taschenleder", "leather": "Leder", "Leather": "Leder",
      "Flexible PVC film": "Flexible PVC-Folie", "Flexible PVC": "Flexibles PVC", "Flexible film": "Flexible Folie", "Industrial film": "Industriefolie", "film": "Folie", "Film": "Folie",
      "Coating compounds": "Beschichtungsmischungen", "Coating compound": "Beschichtungsmischung", "coating": "Beschichtung", "Coating": "Beschichtung", "Coatings": "Beschichtungen", "Surface finishing": "Oberflächenveredelung", "finishing": "Veredelung", "Finishing": "Veredelung",
      "Coated fabric": "Beschichtetes Gewebe", "Coated textile": "Beschichtetes Textil", "Coated textiles": "Beschichtete Textilien", "Coated materials": "Beschichtete Materialien",
      "Furniture": "Möbel", "Footwear": "Schuhe", "Shoe upper": "Schuhoberteil", "Bags": "Taschen", "Chairs": "Stühle", "Sofas": "Sofas", "Interior": "Innenraum", "Automotive": "Automobil", "Decorative": "Dekorativ", "Industrial": "Industriell", "materials": "Materialien", "Materials": "Materialien", "material": "Material", "Material": "Material", "surfaces": "Oberflächen", "Surfaces": "Oberflächen", "surface": "Oberfläche", "Surface": "Oberfläche", "panels": "Paneele", "Panels": "Paneele", "production": "Produktion", "Production": "Produktion", "processing": "Verarbeitung", "Processing": "Verarbeitung", "backing": "Träger", "Backing": "Träger", "Lamination": "Laminierung", "Printing inks": "Druckfarben", "Color matching": "Farbabstimmung", "Texture transfer": "Texturübertragung", "Topcoat systems": "Topcoat-Systeme", "Release coating": "Trennbeschichtung", "Paper treatment": "Papierbehandlung", "Protective liner": "Schutzliner", "Binder systems": "Bindersysteme", "Adhesive layers": "Klebeschichten", "Cable compounds": "Kabelcompounds", "Cable material": "Kabelmaterial", "Flooring material": "Bodenbelagsmaterial"
    },
    ko: {
      "Synthetic leather": "합성피혁", "synthetic leather": "합성피혁", "Artificial leather": "합성피혁", "PU leather": "PU 가죽", "PVC leather": "PVC 가죽", "Semi-PU leather": "Semi-PU 가죽", "Microfiber leather": "마이크로파이버 가죽", "Water-based leather": "수성 가죽", "Automotive leather": "자동차용 가죽", "Furniture leather": "가구용 가죽", "Sofa leather": "소파용 가죽", "Shoe upper leather": "갑피용 가죽", "Garment leather": "의류용 가죽", "Bag leather": "가방용 가죽", "leather": "가죽", "Leather": "가죽",
      "Flexible PVC film": "유연 PVC 필름", "Flexible PVC": "유연 PVC", "Flexible film": "유연 필름", "Industrial film": "산업용 필름", "film": "필름", "Film": "필름",
      "Coating compounds": "코팅 컴파운드", "Coating compound": "코팅 컴파운드", "coating": "코팅", "Coating": "코팅", "Coatings": "코팅", "Surface finishing": "표면 마감", "finishing": "마감", "Finishing": "마감",
      "Coated fabric": "코팅 원단", "Coated textile": "코팅 섬유", "Coated textiles": "코팅 섬유", "Coated materials": "코팅 소재",
      "Furniture": "가구", "Footwear": "신발", "Shoe upper": "갑피", "Bags": "가방", "Chairs": "의자", "Sofas": "소파", "Interior": "내장", "Automotive": "자동차", "Decorative": "장식", "Industrial": "산업용", "materials": "소재", "Materials": "소재", "material": "소재", "Material": "소재", "surfaces": "표면", "Surfaces": "표면", "surface": "표면", "Surface": "표면", "panels": "패널", "Panels": "패널", "production": "생산", "Production": "생산", "processing": "가공", "Processing": "가공", "backing": "기재", "Backing": "기재", "Lamination": "라미네이션", "Printing inks": "인쇄 잉크", "Color matching": "색상 매칭", "Texture transfer": "텍스처 전사", "Topcoat systems": "탑코트 시스템", "Release coating": "이형 코팅", "Paper treatment": "종이 처리", "Protective liner": "보호 라이너", "Binder systems": "바인더 시스템", "Adhesive layers": "접착층", "Cable compounds": "케이블 컴파운드", "Cable material": "케이블 소재", "Flooring material": "바닥재"
    }
  };

  genericApplicationTerms.ar = Object.assign({}, applicationTranslationRules.ar, genericApplicationTerms.ar || {});
  genericApplicationTerms.id = Object.assign({}, applicationTranslationRules.id, genericApplicationTerms.id || {});
  genericApplicationTerms.ms = Object.assign({}, applicationTranslationRules.ms, genericApplicationTerms.ms || {});

  const extraApplicationTerms = {
    zh: {
      "Synthetic leather coating": "人造革涂层", "PU resin coloring": "PU树脂调色", "Textile coating": "纺织涂层", "Industrial color matching": "工业调色",
      "PU leather": "PU革", "Semi-PU leather": "半PU革", "Resin coloring": "树脂调色", "Surface coating": "表面涂层",
      "Decorative PU leather": "装饰PU革", "Coatings": "涂层体系", "Printing inks": "印刷油墨", "Fashion material surfaces": "时尚材料表面",
      "Synthetic leather printing": "人造革印刷", "Decorative coating": "装饰涂层", "Textile surface printing": "纺织表面印刷", "Packaging material samples": "包装材料样品",
      "Solvent-based PU coating": "溶剂型PU涂层", "PVC leather": "PVC革", "Industrial coating": "工业涂层", "Color matching": "调色",
      "Water-based PU leather": "水性PU革", "Surface finishing": "表面后整理", "Eco-conscious formulations": "环保型配方",
      "PU leather coating": "PU革涂层", "Topcoat systems": "面层涂饰体系", "Coated textile production": "涂层纺织品生产",
      "Sofa leather": "沙发革", "Automotive interior leather": "汽车内饰革", "Shoe upper leather": "鞋面革", "Bag leather": "箱包革",
      "Furniture leather": "家具革", "Footwear materials": "鞋材", "PU resin formulation": "PU树脂配方", "Coating compounds": "涂层配混料", "Binder systems": "粘结体系", "Synthetic leather production": "人造革生产",
      "Waterborne coating": "水性涂层", "Textile finishing": "纺织后整理", "Eco-conscious material systems": "环保型材料体系",
      "Water-based leather": "水性革", "Microfiber leather": "超纤革", "Coated fabric finishing": "涂层布后整理",
      "PU leather finishing": "PU革后整理", "PVC leather finishing": "PVC革后整理", "Automotive interior materials": "汽车内饰材料", "Furniture upholstery": "家具软包",
      "Matte PU leather": "哑光PU革", "Bag material": "箱包材料", "Coated textiles": "涂层纺织品",
      "Glossy leather": "亮面革", "Decorative surfaces": "装饰表面", "Fashion materials": "时尚材料", "PVC coating": "PVC涂层",
      "Garment leather": "服装革", "Interior surfaces": "内饰表面", "Water-based synthetic leather": "水性人造革", "Adhesive layers": "粘结层",
      "Semi-PU leather": "半PU革", "Bag materials": "箱包材料", "Coated fabric": "涂层布",
      "Coating binder": "涂层粘结剂", "Decorative materials": "装饰材料", "Coating adhesion": "涂层附着", "Fabric backing": "基布底材", "Leather lamination": "皮革贴合",
      "Release coating": "离型涂层", "Synthetic leather processing": "人造革加工", "Paper treatment": "纸张处理", "Industrial film processing": "工业薄膜加工",
      "PU synthetic leather": "PU人造革", "Matte surface finishing": "哑光表面处理", "Texture transfer": "纹理转移", "Shoe upper material": "鞋面材料",
      "Glossy PU leather": "亮光PU革", "Decorative panels": "装饰板材", "Automotive leather": "汽车革", "Release coating": "离型涂层", "Lamination": "贴合", "Protective liner": "保护衬纸",
      "PVC synthetic leather": "PVC人造革", "Flexible PVC film": "柔性PVC薄膜", "Industrial materials": "工业材料", "Flexible film": "柔性薄膜", "Cable material": "电缆材料",
      "Industrial film": "工业薄膜", "Coating compound": "涂层配混料", "Flooring material": "地板材料", "Heat-resistant PVC": "耐热PVC", "Cable compounds": "电缆料", "Industrial coatings": "工业涂层", "Flexible materials": "柔性材料",
      "Flexible PVC": "柔性PVC", "Coated materials": "涂层材料", "Synthetic leather": "人造革", "Industrial material formulations": "工业材料配方",
      "Synthetic leather backing": "人造革基布", "Industrial material base": "工业材料底基", "Coated textile": "涂层纺织品", "Garment materials": "服装材料", "Furniture backing": "家具底材",
      "Microfiber leather": "超纤革", "Bags": "箱包", "Upholstery backing": "软包底材", "Industrial fabrics": "工业用布",
      "Soft-touch products": "柔软触感产品", "Shoe upper": "鞋面", "Automotive interior": "汽车内饰", "Furniture": "家具", "Footwear": "鞋材",
      "Eco-conscious products": "环保型产品", "Seat surfaces": "座椅表面", "Door panels": "门板", "Dashboard trim": "仪表台饰件", "Interior components": "内饰部件",
      "Sofas": "沙发", "Chairs": "椅子", "Furniture panels": "家具面板", "Interior upholstery": "室内软包", "Sports shoes": "运动鞋", "Casual shoes": "休闲鞋", "Bags and accessories": "箱包及配件"
    },
    zhTW: {
      "Synthetic leather coating": "人造革塗層", "PU resin coloring": "PU樹脂調色", "Textile coating": "紡織塗層", "Industrial color matching": "工業調色",
      "PU leather": "PU革", "Semi-PU leather": "半PU革", "Resin coloring": "樹脂調色", "Surface coating": "表面塗層",
      "Decorative PU leather": "裝飾PU革", "Coatings": "塗層體系", "Printing inks": "印刷油墨", "Fashion material surfaces": "時尚材料表面",
      "Synthetic leather printing": "人造革印刷", "Decorative coating": "裝飾塗層", "Textile surface printing": "紡織表面印刷", "Packaging material samples": "包裝材料樣品",
      "Solvent-based PU coating": "溶劑型PU塗層", "PVC leather": "PVC革", "Industrial coating": "工業塗層", "Color matching": "調色",
      "Water-based PU leather": "水性PU革", "Surface finishing": "表面後整理", "Eco-conscious formulations": "環保型配方",
      "PU leather coating": "PU革塗層", "Topcoat systems": "面層塗飾體系", "Coated textile production": "塗層紡織品生產",
      "Sofa leather": "沙發革", "Automotive interior leather": "汽車內飾革", "Shoe upper leather": "鞋面革", "Bag leather": "箱包革",
      "Furniture leather": "家具革", "Footwear materials": "鞋材", "PU resin formulation": "PU樹脂配方", "Coating compounds": "塗層配混料", "Binder systems": "黏結體系", "Synthetic leather production": "人造革生產",
      "Waterborne coating": "水性塗層", "Textile finishing": "紡織後整理", "Eco-conscious material systems": "環保型材料體系",
      "Water-based leather": "水性革", "Microfiber leather": "超纖革", "Coated fabric finishing": "塗層布後整理",
      "PU leather finishing": "PU革後整理", "PVC leather finishing": "PVC革後整理", "Automotive interior materials": "汽車內飾材料", "Furniture upholstery": "家具軟包",
      "Matte PU leather": "啞光PU革", "Bag material": "箱包材料", "Coated textiles": "塗層紡織品",
      "Glossy leather": "亮面革", "Decorative surfaces": "裝飾表面", "Fashion materials": "時尚材料", "PVC coating": "PVC塗層",
      "Garment leather": "服裝革", "Interior surfaces": "內飾表面", "Water-based synthetic leather": "水性人造革", "Adhesive layers": "黏結層",
      "Bag materials": "箱包材料", "Coated fabric": "塗層布", "Coating binder": "塗層黏結劑", "Decorative materials": "裝飾材料", "Coating adhesion": "塗層附著", "Fabric backing": "基布底材", "Leather lamination": "皮革貼合",
      "Release coating": "離型塗層", "Synthetic leather processing": "人造革加工", "Paper treatment": "紙張處理", "Industrial film processing": "工業薄膜加工",
      "PU synthetic leather": "PU人造革", "Matte surface finishing": "啞光表面處理", "Texture transfer": "紋理轉移", "Shoe upper material": "鞋面材料",
      "Glossy PU leather": "亮光PU革", "Decorative panels": "裝飾板材", "Automotive leather": "汽車革", "Lamination": "貼合", "Protective liner": "保護襯紙",
      "PVC synthetic leather": "PVC人造革", "Flexible PVC film": "柔性PVC薄膜", "Industrial materials": "工業材料", "Flexible film": "柔性薄膜", "Cable material": "電纜材料",
      "Industrial film": "工業薄膜", "Coating compound": "塗層配混料", "Flooring material": "地板材料", "Heat-resistant PVC": "耐熱PVC", "Cable compounds": "電纜料", "Industrial coatings": "工業塗層", "Flexible materials": "柔性材料",
      "Flexible PVC": "柔性PVC", "Coated materials": "塗層材料", "Synthetic leather": "人造革", "Industrial material formulations": "工業材料配方",
      "Synthetic leather backing": "人造革基布", "Industrial material base": "工業材料底基", "Coated textile": "塗層紡織品", "Garment materials": "服裝材料", "Furniture backing": "家具底材",
      "Bags": "箱包", "Upholstery backing": "軟包底材", "Industrial fabrics": "工業用布", "Soft-touch products": "柔軟觸感產品", "Shoe upper": "鞋面", "Automotive interior": "汽車內飾", "Furniture": "家具", "Footwear": "鞋材",
      "Eco-conscious products": "環保型產品", "Seat surfaces": "座椅表面", "Door panels": "門板", "Dashboard trim": "儀表台飾件", "Interior components": "內飾部件",
      "Sofas": "沙發", "Chairs": "椅子", "Furniture panels": "家具面板", "Interior upholstery": "室內軟包", "Sports shoes": "運動鞋", "Casual shoes": "休閒鞋", "Bags and accessories": "箱包及配件"
    },
    pt: { "PU synthetic leather": "Couro sintético PU", "Furniture leather": "Couro para móveis", "Shoe upper material": "Material para cabedal", "PU resin coloring": "Coloração de resina PU", "Resin coloring": "Coloração de resina", "PU resin formulation": "Formulação de resina PU", "Eco-conscious products": "Produtos eco-orientados", "Eco-conscious formulations": "Formulações eco-orientadas", "Eco-conscious material systems": "Sistemas de materiais eco-orientados", "Heat-resistant PVC": "PVC resistente ao calor", "Soft-touch products": "Produtos toque suave", "Garment materials": "Materiais para vestuário", "Packaging material samples": "Amostras de material de embalagem", "Bag material": "Material para bolsas", "Lamination": "Laminação", "Water-based synthetic leather": "Couro sintético à base de água", "Synthetic leather coating": "Revestimento de couro sintético", "PU leather coating": "Revestimento de couro PU", "Matte surface finishing": "Acabamento superficial fosco", "Texture transfer": "Transferência de textura", "Industrial color matching": "Correspondência de cores industrial", "Industrial material formulations": "Formulações de materiais industriais", "Industrial material base": "Base de material industrial", "Industrial fabrics": "Tecidos industriais", "Dashboard trim": "Acabamento de painel", "Interior components": "Componentes interiores", "Interior upholstery": "Estofamento interior", "Sports shoes": "Calçados esportivos", "Casual shoes": "Calçados casuais" },
    fr: { "PU synthetic leather": "Cuir synthétique PU", "Furniture leather": "Cuir pour mobilier", "Shoe upper material": "Matériau pour tige de chaussure", "PU resin coloring": "Coloration de résine PU", "Resin coloring": "Coloration de résine", "PU resin formulation": "Formulation de résine PU", "Eco-conscious products": "Produits éco-orientés", "Eco-conscious formulations": "Formulations éco-orientées", "Eco-conscious material systems": "Systèmes de matériaux éco-orientés", "Heat-resistant PVC": "PVC résistant à la chaleur", "Soft-touch products": "Produits toucher doux", "Garment materials": "Matériaux pour vêtements", "Packaging material samples": "Échantillons de matériaux d'emballage", "Bag material": "Matériau pour sacs", "Lamination": "Lamination textile", "Water-based synthetic leather": "Cuir synthétique à base d'eau", "Synthetic leather coating": "Revêtement de cuir synthétique", "PU leather coating": "Revêtement de cuir PU", "Matte surface finishing": "Finition de surface mate", "Texture transfer": "Transfert de texture", "Textile surface printing": "Impression de surface textile", "Seat surfaces": "Surfaces de sièges", "Dashboard trim": "Garniture de tableau de bord", "Sports shoes": "Chaussures de sport", "Casual shoes": "Chaussures casual" },
    ja: { "PU synthetic leather": "PU合成皮革", "Furniture leather": "家具用レザー", "Shoe upper material": "靴甲材料", "PU resin coloring": "PU樹脂着色", "Resin coloring": "樹脂着色", "PU resin formulation": "PU樹脂配合", "Eco-conscious products": "環境配慮型製品", "Eco-conscious formulations": "環境配慮型配合", "Eco-conscious material systems": "環境配慮型材料システム", "Heat-resistant PVC": "耐熱PVC", "Soft-touch products": "ソフトタッチ製品", "Garment materials": "衣料材料", "Packaging material samples": "包装材料サンプル", "Bag material": "バッグ材料", "Lamination": "ラミネーション", "Water-based synthetic leather": "水性合成皮革", "Synthetic leather coating": "合成皮革コーティング", "PU leather coating": "PUレザーコーティング", "Matte surface finishing": "マット表面仕上げ", "Texture transfer": "テクスチャ転写", "Dashboard trim": "ダッシュボードトリム", "Sports shoes": "スポーツシューズ", "Casual shoes": "カジュアルシューズ", "Industrial color matching": "産業用調色", "Fashion material surfaces": "ファッション材料表面", "Synthetic leather printing": "合成皮革印刷", "Textile surface printing": "繊維表面印刷", "Solvent-based PU coating": "溶剤系PUコーティング", "Water-based PU leather": "水性PUレザー", "Automotive interior leather": "自動車内装レザー", "Textile finishing": "繊維仕上げ", "Automotive interior materials": "自動車内装材料", "Furniture upholstery": "家具張り材", "Matte PU leather": "マットPUレザー", "Glossy leather": "光沢レザー", "Fashion materials": "ファッション材料", "Coating binder": "コーティングバインダー", "Coating adhesion": "コーティング密着", "Fabric backing": "布基材", "Leather lamination": "レザーラミネーション", "Glossy PU leather": "光沢PUレザー", "Flexible materials": "柔軟材料", "Industrial material formulations": "産業用材料配合", "Industrial material base": "産業用材料基材", "Upholstery backing": "張り材用基布", "Industrial fabrics": "産業用ファブリック", "Automotive interior": "自動車内装", "Seat surfaces": "シート表面", "Door panels": "ドアパネル", "Interior components": "内装部品", "Interior upholstery": "内装張り材", "Bags and accessories": "バッグ・アクセサリー" },
    ru: { "PU synthetic leather": "Синтетическая PU-кожа", "Furniture leather": "Кожа для мебели", "Shoe upper material": "Материал верха обуви", "PU resin coloring": "Окрашивание PU-смолы", "Resin coloring": "Окрашивание смолы", "PU resin formulation": "Рецептура PU-смолы", "Eco-conscious products": "Экологически ориентированные продукты", "Eco-conscious formulations": "Экологически ориентированные рецептуры", "Eco-conscious material systems": "Экологически ориентированные системы материалов", "Heat-resistant PVC": "Термостойкий PVC", "Soft-touch products": "Продукты с мягким касанием", "Garment materials": "Материалы для одежды", "Packaging material samples": "Образцы упаковочных материалов", "Bag material": "Материал для сумок", "Lamination": "Ламинация", "Water-based synthetic leather": "Синтетическая кожа на водной основе", "Synthetic leather coating": "Покрытие синтетической кожи", "PU leather coating": "Покрытие PU-кожи", "Matte surface finishing": "Матовая отделка поверхности", "Texture transfer": "Перенос текстуры", "Dashboard trim": "Отделка приборной панели", "Sports shoes": "Спортивная обувь", "Casual shoes": "Повседневная обувь", "Industrial color matching": "Промышленный подбор цвета", "Fashion material surfaces": "Поверхности модных материалов", "Synthetic leather printing": "Печать по синтетической коже", "Textile surface printing": "Печать по текстильной поверхности", "Solvent-based PU coating": "PU-покрытие на растворителе", "Water-based PU leather": "PU-кожа на водной основе", "Automotive interior leather": "Кожа для автомобильного интерьера", "Textile finishing": "Отделка текстиля", "Automotive interior materials": "Материалы автомобильного интерьера", "Furniture upholstery": "Мебельная обивка", "Matte PU leather": "Матовая PU-кожа", "Glossy leather": "Глянцевая кожа", "Fashion materials": "Материалы для модных изделий", "Coating binder": "Связующее для покрытий", "Coating adhesion": "Адгезия покрытия", "Fabric backing": "Тканевая основа", "Leather lamination": "Ламинация кожи", "Glossy PU leather": "Глянцевая PU-кожа", "Flexible materials": "Гибкие материалы", "Industrial material formulations": "Рецептуры промышленных материалов", "Industrial material base": "Основа промышленных материалов", "Upholstery backing": "Основа для обивки", "Industrial fabrics": "Промышленные ткани", "Automotive interior": "Автомобильный интерьер", "Seat surfaces": "Поверхности сидений", "Door panels": "Дверные панели", "Interior components": "Компоненты интерьера", "Interior upholstery": "Внутренняя обивка", "Bags and accessories": "Сумки и аксессуары" },
    de: { "PU synthetic leather": "PU-Kunstleder", "Furniture leather": "Möbelleder", "Shoe upper material": "Schuhobermaterial", "PU resin coloring": "PU-Harzfärbung", "Resin coloring": "Harzfärbung", "PU resin formulation": "PU-Harzformulierung", "Eco-conscious products": "Umweltbewusste Produkte", "Eco-conscious formulations": "Umweltbewusste Formulierungen", "Eco-conscious material systems": "Umweltbewusste Materialsysteme", "Heat-resistant PVC": "Hitzebeständiges PVC", "Soft-touch products": "Soft-Touch-Produkte", "Garment materials": "Bekleidungsmaterialien", "Packaging material samples": "Verpackungsmuster", "Bag material": "Taschenmaterial", "Lamination": "Laminierung", "Water-based synthetic leather": "Wasserbasiertes Kunstleder", "Synthetic leather coating": "Kunstlederbeschichtung", "PU leather coating": "PU-Lederbeschichtung", "Matte surface finishing": "Matte Oberflächenveredelung", "Texture transfer": "Texturübertragung", "Dashboard trim": "Armaturenbrettverkleidung", "Sports shoes": "Sportschuhe", "Casual shoes": "Freizeitschuhe", "Sofas": "Sofagarnituren" },
    ko: { "PU synthetic leather": "PU 합성피혁", "Furniture leather": "가구용 가죽", "Shoe upper material": "갑피 소재", "PU resin coloring": "PU 수지 착색", "Resin coloring": "수지 착색", "PU resin formulation": "PU 수지 배합", "Eco-conscious products": "친환경 제품", "Eco-conscious formulations": "친환경 배합", "Eco-conscious material systems": "친환경 소재 시스템", "Heat-resistant PVC": "내열 PVC", "Soft-touch products": "소프트 터치 제품", "Garment materials": "의류 소재", "Packaging material samples": "포장재 샘플", "Bag material": "가방 소재", "Lamination": "라미네이션", "Water-based synthetic leather": "수성 합성피혁", "Synthetic leather coating": "합성피혁 코팅", "PU leather coating": "PU 가죽 코팅", "Matte surface finishing": "무광 표면 마감", "Texture transfer": "텍스처 전사", "Dashboard trim": "대시보드 트림", "Sports shoes": "운동화", "Casual shoes": "캐주얼화", "Industrial color matching": "산업용 조색", "Fashion material surfaces": "패션 소재 표면", "Synthetic leather printing": "합성피혁 인쇄", "Textile surface printing": "섬유 표면 인쇄", "Solvent-based PU coating": "용제형 PU 코팅", "Water-based PU leather": "수성 PU 가죽", "Automotive interior leather": "자동차 내장용 가죽", "Textile finishing": "섬유 마감", "Automotive interior materials": "자동차 내장 소재", "Furniture upholstery": "가구용 커버 소재", "Matte PU leather": "무광 PU 가죽", "Glossy leather": "유광 가죽", "Fashion materials": "패션 소재", "Coating binder": "코팅 바인더", "Coating adhesion": "코팅 접착성", "Fabric backing": "원단 기재", "Leather lamination": "가죽 라미네이션", "Glossy PU leather": "유광 PU 가죽", "Flexible materials": "유연 소재", "Industrial material formulations": "산업용 소재 배합", "Industrial material base": "산업용 소재 기재", "Upholstery backing": "커버용 기재", "Industrial fabrics": "산업용 원단", "Automotive interior": "자동차 내장", "Seat surfaces": "시트 표면", "Door panels": "도어 패널", "Interior components": "내장 부품", "Interior upholstery": "내장 커버 소재", "Bags and accessories": "가방 및 액세서리" },
    id: { "Synthetic leather coating": "Coating kulit sintetis", "PU leather coating": "Coating kulit PU", "Water-based synthetic leather": "Kulit sintetis berbasis air", "Eco-conscious formulations": "Formulasi ramah lingkungan", "Garment materials": "Material pakaian" },
    ms: { "Synthetic leather coating": "Salutan kulit sintetik", "PU leather coating": "Salutan kulit PU", "Water-based synthetic leather": "Kulit sintetik berasaskan air", "Eco-conscious formulations": "Formulasi mesra alam", "Garment materials": "Bahan pakaian" },
    ar: { "Synthetic leather coating": "طلاء الجلد الصناعي", "PU leather coating": "طلاء جلد PU", "Water-based synthetic leather": "جلد صناعي مائي", "Eco-conscious formulations": "تركيبات صديقة للبيئة", "Garment materials": "مواد الملابس" }
  };

  Object.entries(extraApplicationTerms).forEach(([lang, terms]) => {
    genericApplicationTerms[lang] = Object.assign({}, genericApplicationTerms[lang] || {}, terms);
    applicationTranslationRules[lang] = Object.assign({}, applicationTranslationRules[lang] || {}, terms);
  });

  function applyGenericApplicationTerms(item, lang) {
    const terms = genericApplicationTerms[lang];
    if (!terms) return item;
    return Object.keys(terms)
      .sort((a, b) => b.length - a.length)
      .reduce((textValue, term) => textValue.split(term).join(terms[term]), item);
  }

  function translateApplication(item, lang) {
    if (lang === "en") return item;
    const rules = applicationTranslationRules[lang];
    const exact = rules?.[item];
    if (exact && (lang === "id" || lang === "ms" || exact !== applicationTranslationRules.id[item])) return exact;
    const generated = applyGenericApplicationTerms(item, lang);
    return generated || item;
  }

  function translatedApplications(applications) {
    const value = {};
    languages.forEach((lang) => {
      value[lang] = applications.map((item) => translateApplication(item, lang));
    });
    return value;
  }

  function mergeApplicationsWithFallback(overrideApplications, sourceApplications) {
    const automatic = translatedApplications(sourceApplications);
    if (!overrideApplications) return automatic;
    languages.forEach((lang) => {
      const sameAsEnglish = JSON.stringify(overrideApplications[lang]) === JSON.stringify(overrideApplications.en);
      if (!overrideApplications[lang] || (lang !== "en" && sameAsEnglish)) {
        overrideApplications[lang] = automatic[lang];
      }
    });
    return overrideApplications;
  }

  const productContentOverrides = {
    "matte-release-paper-for-pu-leather": {
      shortDescription: text(
        "Matte release paper designed for stable texture transfer and clean release in PU synthetic leather production.",
        "适用于PU人造革生产的哑光离型纸，可实现稳定纹理转移和良好剥离效果。",
        "適用於PU人造革生產的啞光離型紙，可實現穩定紋理轉移和良好剝離效果。"
      ),
      description: text(
        "Matte Release Paper for PU Leather is suitable for synthetic leather finishing and surface texture formation. It supports consistent matte appearance, clean peeling performance and stable processing in practical production.",
        "PU革用哑光离型纸适用于人造革后整理和表面纹理成型，可帮助产品获得稳定的哑光效果、良好的剥离性能和稳定的加工表现。",
        "PU革用啞光離型紙適用於人造革後整理和表面紋理成型，可幫助產品獲得穩定的啞光效果、良好的剝離性能和穩定的加工表現。"
      ),
      applications: list(
        ["PU synthetic leather", "Matte surface finishing", "Texture transfer", "Furniture leather", "Shoe upper material"],
        ["PU人造革", "哑光表面处理", "纹理转移", "家具革", "鞋面材料"],
        ["PU人造革", "啞光表面處理", "紋理轉移", "家具革", "鞋面材料"]
      )
    }
  };

  productContentOverrides["matte-release-paper-for-pu-leather"].shortDescription = text(
    "Matte release paper designed for stable texture transfer and clean release in PU synthetic leather production.",
    "适用于PU人造革生产的哑光离型纸，可实现稳定纹理转移和良好剥离效果。",
    "適用於PU人造革生產的啞光離型紙，可實現穩定紋理轉移和良好剝離效果。",
    {
      ar: "ورق فصل مطفي مصمم لنقل نسيج مستقر وفصل نظيف في إنتاج جلد PU الصناعي.",
      id: "Kertas release matte untuk transfer tekstur stabil dan pelepasan bersih dalam produksi kulit sintetis PU.",
      ms: "Kertas pelepas matte untuk pemindahan tekstur stabil dan pelepasan bersih dalam pengeluaran kulit sintetik PU.",
      pt: "Papel release fosco para transferência de textura estável e separação limpa na produção de couro sintético PU.",
      fr: "Papier release mat conçu pour un transfert de texture stable et un démoulage propre dans la production de cuir synthétique PU.",
      ja: "PU合成皮革生産で安定したテクスチャ転写ときれいな剥離を支援するマット離型紙です。",
      ru: "Матовая разделительная бумага для стабильного переноса текстуры и чистого отделения при производстве синтетической PU-кожи.",
      de: "Mattes Trennpapier für stabile Texturübertragung und sauberes Ablösen bei der PU-Kunstlederproduktion.",
      ko: "PU 합성피혁 생산에서 안정적인 텍스처 전사와 깨끗한 이형을 지원하는 무광 이형지입니다."
    }
  );

  productContentOverrides["matte-release-paper-for-pu-leather"].description = text(
    "Matte Release Paper for PU Leather is suitable for synthetic leather finishing and surface texture formation. It supports consistent matte appearance, clean peeling performance and stable processing in practical production.",
    "PU革用哑光离型纸适用于人造革后整理和表面纹理成型，可帮助产品获得稳定的哑光效果、良好的剥离性能和稳定的加工表现。",
    "PU革用啞光離型紙適用於人造革後整理和表面紋理成型，可幫助產品獲得穩定的啞光效果、良好的剝離性能和穩定的加工表現。",
    {
      ar: "يناسب ورق الفصل المطفي لجلد PU عمليات تشطيب الجلد الصناعي وتشكيل نسيج السطح، ويساعد على تحقيق مظهر مطفي ثابت وأداء فصل نظيف ومعالجة مستقرة.",
      id: "Matte Release Paper for PU Leather cocok untuk finishing kulit sintetis dan pembentukan tekstur permukaan. Produk ini mendukung tampilan matte yang konsisten, pelepasan bersih, dan proses yang stabil.",
      ms: "Matte Release Paper for PU Leather sesuai untuk kemasan kulit sintetik dan pembentukan tekstur permukaan. Ia menyokong penampilan matte yang konsisten, pelepasan bersih, dan proses yang stabil.",
      pt: "O papel release fosco para couro PU é adequado para acabamento de couro sintético e formação de textura superficial, apoiando aparência fosca consistente, separação limpa e processo estável.",
      fr: "Le papier release mat pour cuir PU convient à la finition du cuir synthétique et à la formation de textures de surface, avec un aspect mat régulier, un pelage propre et un procédé stable.",
      ja: "PUレザー用マット離型紙は、合成皮革の仕上げと表面テクスチャ形成に適しており、安定したマット外観、きれいな剥離、安定した加工性を支援します。",
      ru: "Матовая разделительная бумага для PU-кожи подходит для финишной обработки синтетической кожи и формирования поверхностной текстуры, поддерживая стабильный матовый вид, чистое отделение и устойчивую переработку.",
      de: "Mattes Trennpapier für PU-Leder eignet sich für die Kunstlederveredelung und Oberflächentexturbildung und unterstützt eine gleichmäßige matte Optik, sauberes Ablösen und stabile Verarbeitung.",
      ko: "PU 가죽용 무광 이형지는 합성피혁 마감과 표면 텍스처 형성에 적합하며, 안정적인 무광 외관, 깨끗한 박리 성능, 안정적인 가공성을 지원합니다."
    }
  );

  function makeProduct(categorySlug, slug, image, applications) {
    const categoryImage = categoryImages[categorySlug];
    const overrides = productContentOverrides[slug] || {};
    const seoTitle = {};
    languages.forEach((lang) => {
      seoTitle[lang] = `${productNames[slug][lang] || productNames[slug].en} | FUJIAN HOPE NEW MATERIAL CO., LTD.`;
    });
    return {
      id: slug,
      slug,
      category: categorySlug,
      image: image || "",
      useCategoryImage: !image,
      name: productNames[slug],
      shortDescription: overrides.shortDescription || translatedCopy(slug, categorySlug, "short"),
      description: overrides.description || translatedCopy(slug, categorySlug, "description"),
      applications: mergeApplicationsWithFallback(overrides.applications, applications),
      alt: text(
        `${productNames[slug].en} sample image for ${categoryNames[categorySlug].en}`,
        `${productNames[slug].zh}样品图，用于${categoryNames[categorySlug].zh}应用`,
        `${productNames[slug].zhTW}樣品圖，用於${categoryNames[categorySlug].zhTW}應用`,
        {
          ar: `صورة عينة ${productNames[slug].ar}`,
          id: `Gambar sampel ${productNames[slug].id}`,
          ms: `Imej sampel ${productNames[slug].ms}`,
          pt: `Imagem de amostra de ${productNames[slug].pt}`,
          fr: `Image d'échantillon de ${productNames[slug].fr}`,
          ja: `${productNames[slug].ja}のサンプル画像`,
          ru: `Изображение образца: ${productNames[slug].ru}`,
          de: `Musterbild für ${productNames[slug].de}`,
          ko: `${productNames[slug].ko} 샘플 이미지`
        }
      ),
      seoTitle,
      seoDescription: overrides.shortDescription || translatedCopy(slug, categorySlug, "short"),
      categoryImage
    };
  }

  const products = productRows.map(([category, slug, image, applications]) => makeProduct(category, slug, image, applications));
  const productsByCategory = products.reduce((map, item) => {
    if (!map[item.category]) map[item.category] = [];
    map[item.category].push(item);
    return map;
  }, {});

  window.HOPE_PRODUCT_CATEGORIES = [
    ["colorant-pigment", ["Colorant/Pigment"]],
    ["silicone-additives"],
    ["surface-finishing-agents", ["Surface Finishing Agent"]],
    ["pu-resin", ["Resin"]],
    ["release-paper"],
    ["plasticizer"],
    ["fabric-base-material", ["Fabric"]],
    ["artificial-leather"]
  ].map(([slug, aliases = []]) => ({
    id: slug,
    slug,
    aliases,
    image: categoryImages[slug],
    categoryImage: categoryImages[slug],
    name: categoryNames[slug],
    products: productsByCategory[slug] || []
  }));

  window.HOPE_PRODUCTS = products;
})();
