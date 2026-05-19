const API_URL = "https://backend-5mfy.onrender.com/predict";
const GENES = ['AKT1','ALK','ANKRD11','APC','ARID1A','ARID1B','ARID2','ATM','ATR','ATRX','BCOR','BRCA1','BRCA2','BRIP1','CARD11','CBFB','CDH1','CDK12','CDKN1B','CDKN2A','CDKN2Ap16INK4A','CIC','CREBBP','CTCF','DICER1','DNMT1','DNMT3A','DOT1L','EGFR','EP300','EPHA5','ERBB2','ERBB3','ERBB4','ESR1','FAT1','FGFR4','FLT4','FOXA1','FOXP1','GATA3','GRIN2A','IGF1R','IKZF1','JAK1','KDM5A','KDM5C','KDM6A','KDR','KLF4','KMT2C','LATS2','MAP2K4','MAP3K1','MED12','MEN1','MGA','MLL','MLL2','MLL3','MTOR','NCOR1','NF1','NOTCH1','NOTCH2','NOTCH3','NOTCH4','NSD1','PBRM1','PDGFRA','PIK3C2G','PIK3CA','PIK3CB','PIK3CG','PIK3R1','PLK2','POLE','PTCH1','PTEN','PTPRD','PTPRS','PTPRT','RB1','RICTOR','ROS1','RUNX1','SETD2','SF3B1','SMAD4','SMARCA4','SPEN','STAG2','STK11','TBX3','TERT','TET1','TET2','TP53','TSC2','ZFHX3'];

const I18N = {
 fr:{
  home:"Accueil", predict:"Prédiction", prevention:"Prévention", about:"À propos", donate:"Faire un don",
  badge:"AI-Powered Prediction", title1:"Prédiction du risque de récidive", title2:"du cancer du sein",
  subtitle:"Basée sur les caractéristiques cliniques et génomiques. Une aide académique pour mieux présenter le risque estimé par le modèle.",
  start:"Lancer la prédiction", learn:"En savoir plus",
  f1:"Évaluation personnalisée du risque", f2:"Données cliniques et génomiques", f3:"Résultat clair et interprétable",

  
  awarenessLabel:"Sensibilisation",
  awarenessTitle:"Le cancer du sein en chiffres",
  awarenessSubtitle:"Des données mondiales pour mieux comprendre et agir.",
  stat1Label:"nouveaux cas diagnostiqués par an dans le monde",
  stat1Source:"Source : OMS, 2022",
  stat2Label:"femmes développeront un cancer du sein au cours de leur vie",
  stat2Source:"Source : American Cancer Society",
  stat3Label:"de survie à 5 ans si détecté au stade précoce",
  stat3Source:"Source : NCI, 2023",
  stat4Label:"décès par an, dont 70% dans les pays à revenu faible ou moyen",
  stat4Source:"Source : OMS, 2022",
  awareCta:"Découvrir la prévention →",


  methodology:"Méthodologie", methIntro:"Le parcours du site est simple : saisir les données disponibles, les envoyer au backend, puis afficher la prédiction.",
methodLong1:"Notre outil repose sur un modèle d'apprentissage automatique conçu pour estimer le risque de récidive du cancer du sein à partir de données cliniques, avec la possibilité d'inclure des informations génomiques lorsqu'elles sont disponibles. Les informations saisies sont traitées par le modèle en plusieurs étapes avant de produire un résultat estimé.",
methodLong2:"Les principaux indicateurs utilisés incluent :",
methodBullet1:"La taille tumorale et la stadification TNM.",
methodBullet2:"Le grade tumoral et les caractéristiques histologiques.",
methodBullet3:"Le statut des récepteurs hormonaux et HER2.",
methodBullet4:"Les informations démographiques de la patiente, comme l'âge au diagnostic.",
methodBullet5:"Les mutations génétiques, lorsqu'elles sont disponibles.",
methodLong3:"Après la saisie des données, le système prépare les informations en traitant les variables catégorielles, les valeurs manquantes et les étapes de prétraitement nécessaires. Le modèle entraîné analyse ensuite les données disponibles et génère une estimation du risque de récidive.",
methodLong4:"Le résultat final est présenté sous forme d'une probabilité de récidive avec un niveau de risque.",
  m1:"Saisie des données", m1t:"Les données cliniques sont obligatoires. Les données génomiques restent optionnelles.",
  m2:"Analyse par le modèle", m2t:"Le backend applique l'encodage, l'imputation et l'inférence avec le modèle entraîné.",
  m3:"Affichage du résultat", m3t:"La page résultat affiche la probabilité de récidive, le niveau de risque et le modèle utilisé.",
  disclaimer:"Limite importante", disclaimerText:"Ce site est un prototype académique. Il ne remplace pas un diagnostic, un avis médical ou une décision thérapeutique.",
  aboutTitle:"À propos du projet", aboutIntro:"BCRTracker a été développé dans le cadre d'un projet de fin d'études sur la prédiction de la récidive du cancer du sein par apprentissage automatique.",
  dataModel:"Modèle de prédiction",

modelDetailsTitle:"Détails du modèle :",
modelBullet1:"Modèle final: XGBoost",
modelBullet2:"Valeurs manquantes: Imputation KNN",
modelBullet3:"Déséquilibre des classes: ADASYN",
modelBullet4:"Sortie: probabilité de récidive et niveau de risque",
  objective:"Objectif", objectiveText:"L'objectif est de proposer une estimation claire du risque de récidive et de rendre le résultat plus lisible.",


  predictTitle:"Prédiction du risque de récidive", predictIntro:"Tous les champs cliniques sont obligatoires. Seules les données génomiques sont optionnelles.",
  patient:"Informations patient", staging:"Stadification", tumor:"Caractéristiques tumorales", receptors:"Statut des récepteurs", genomic:"Données génomiques optionnelles",


  fldAge:"Âge au diagnostic",
  fldSex:"Sexe",
  fldMeno:"Statut ménopausique",
  fldLaterality:"Latéralité",
  fldTStage:"Stade T",
  fldNStage:"Stade N",
  fldMStage:"Stade M",
  fldDxStage:"Stade au diagnostic",
  fldTumorGrade:"Grade tumoral",
  fldNuclearGrade:"Grade nucléaire",
  fldHistology:"Histologie",
  fldHer2Primary:"HER2 primaire",
  fldHer2Overall:"HER2 global",
  fldER:"ER %",
  fldPR:"PR %",
  fldReceptorPatient:"Récepteurs patient",
  fldReceptorPrimary:"Récepteurs primaires",
  helperOptional:"Laissez vide si non disponible.",


  optSelectOne:"-- Sélectionner --", optFemale:"Féminin", optMale:"Masculin",
  optPre:"Pré-ménopause", optPeri:"Péri-ménopause", optPost:"Post-ménopause",
  optUnknown:"Inconnu",
  optBilateral:"Bilatéral/Droite", optLeft:"Gauche", optRight:"Droite",
  optGrade1:"I – Bien différencié", optGrade2:"II – Modérément différencié", optGrade3:"III – Peu différencié",
  optNuclear1:"I (Bas)", optNuclear2:"II (Intermédiaire)", optNuclear3:"III (Élevé)",
  optHistIDC:"Carcinome canalaire invasif du sein",
  optHistILC:"Carcinome lobulaire invasif du sein",
  optHistCarcinosarcoma:"Carcinosarcome invasif du sein",
  optHistMucinous:"Carcinome mucineux mixte invasif du sein",
  optHistMyoepithelial:"Carcinome myoépithélial invasif du sein",
  optHistMetaplastic:"Carcinome métaplasique du sein",
  optHistMixed:"Carcinome mixte canalaire et lobulaire",
  optHistUndiff:"Carcinome indifférencié du sein",
  optHistTubular:"Carcinome tubulaire",
  optNegative:"Négatif", optNegOutsidePos:"Négatif (Positif externe)", optEquivocal:"Équivoque", optPositive:"Positif",
  optTripleNeg:"Triple négatif",

  submit:"Calculer le risque", loading:"Analyse en cours...", geneToggle:"J'ai des données de mutations génétiques", geneSearch:"Rechercher un gène...",
  demoNotice:"Mode démo — le backend n'est pas encore connecté. Ce résultat est simulé et non réel.", resultTitle:"Résultat de la prédiction", newPrediction:"Nouvelle prédiction", noResult:"Aucun résultat à afficher. Lancez une prédiction depuis le formulaire.",
  preventionTitle:"Prévention et sensibilisation", preventionIntro:"Quelques informations générales pour soutenir la prévention, le dépistage et le suivi.",
  signs:"Signes d'alerte", riskFactors:"Facteurs de risque", resources:"Ressources utiles",
  sign1:"Grosseur ou changement inhabituel du sein.",
  sign2:"Changement de la peau ou du mamelon.",
  sign3:"Écoulement anormal ou douleur persistante.",
  risk1:"Âge et antécédents familiaux.",
  risk2:"Mutations héréditaires et facteurs hormonaux.",
  risk3:"Antécédents personnels de cancer du sein.",
  donateTitle:"Faire un don", donateIntro:"Cette page regroupe des associations et organismes liés au soutien des personnes touchées par le cancer du sein.",
  note:"Vérifiez toujours les informations de contact directement sur les sites officiels.",
  footer:"© 2026 — BCRTracker — Projet académique de prédiction de la récidive du cancer du sein",
  saveResult:"Sauvegarder le résultat",
  savedSuccess:"Résultat sauvegardé !",
  saveError:"Erreur lors de la sauvegarde",
  riskLow:"Récidive improbable",
  riskHigh:"Récidive probable",
  riskMedium:"Risque modéré",

  HIGH_RISK:"Risque élevé",
  MEDIUM_RISK:"Risque modéré",
  LOW_RISK:"Risque faible"
 },
 en:{
  home:"Home", predict:"Prediction", prevention:"Prevention", about:"About", donate:"Donate",
  badge:"AI-Powered Prediction", title1:"Breast cancer recurrence", title2:"risk prediction",
  subtitle:"Based on clinical and genomic characteristics. An academic support tool for presenting the model's estimated risk more clearly.",
  start:"Start prediction", learn:"Learn more",
  f1:"Personalized risk evaluation", f2:"Clinical and genomic data", f3:"Clear interpretable result",

  awarenessLabel:"Awareness",
  awarenessTitle:"Breast cancer in numbers",
  awarenessSubtitle:"Global data to better understand and act.",
  stat1Label:"new cases diagnosed per year worldwide",
  stat1Source:"Source: WHO, 2022",
  stat2Label:"women will develop breast cancer in their lifetime",
  stat2Source:"Source: American Cancer Society",
  stat3Label:"5-year survival rate when detected at an early stage",
  stat3Source:"Source: NCI, 2023",
  stat4Label:"deaths per year, 70% in low- and middle-income countries",
  stat4Source:"Source: WHO, 2022",
  awareCta:"Explore prevention →",

  methodology:"Methodology", methIntro:"The website follows a simple flow: enter the available data, send it to the backend, then display the prediction.",
  methodLong1:"Our tool is based on a machine learning model designed to estimate the risk of breast cancer recurrence using clinical data, with the possibility of including genomic information when available. The entered information is processed by the model through several steps before producing an estimated result.",
methodLong2:"The main indicators used include:",
methodBullet1:"Tumor size and TNM staging.",
methodBullet2:"Tumor grade and histological characteristics.",
methodBullet3:"Hormone receptor and HER2 status.",
methodBullet4:"Patient demographic information, such as age at diagnosis.",
methodBullet5:"Genetic mutations, when available.",
methodLong3:"After data entry, the system prepares the information by handling categorical variables, missing values, and the required preprocessing steps. The trained model then analyzes the available data and generates an estimated recurrence risk.",
methodLong4:"The final result is presented as a recurrence probability with a risk level.",
  m1:"Data entry", m1t:"Clinical data is required. Genomic data remains optional.",
  m2:"Model analysis", m2t:"The backend handles encoding, imputation, and inference using the trained model.",
  m3:"Result display", m3t:"The result page displays recurrence probability, risk level, and the model used.",
  disclaimer:"Important limitation", disclaimerText:"This website is an academic prototype. It does not replace diagnosis, medical advice, or treatment decisions.",
  aboutTitle:"About the project", aboutIntro:"BCRTracker was developed as a final-year project on breast cancer recurrence prediction using machine learning.",
  dataModel:"Prediction Model",

modelDetailsTitle:"Model details:",
modelBullet1:"Final model: XGBoost",
modelBullet2:"Missing values: KNN imputation",
modelBullet3:"Class imbalance: ADASYN",
modelBullet4:"Output: recurrence probability and risk level",
  objective:"Objective", objectiveText:"The objective is to provide a clear recurrence-risk estimate and make the result easier to understand.",

  predictTitle:"Recurrence risk prediction", predictIntro:"All clinical fields are required. Only genomic data is optional.",
  patient:"Patient information", staging:"Staging", tumor:"Tumor characteristics", receptors:"Receptor status", genomic:"Optional genomic data",

  fldAge:"Age at diagnosis",
  fldSex:"Sex",
  fldMeno:"Menopausal status",
  fldLaterality:"Laterality",
  fldTStage:"T stage",
  fldNStage:"N stage",
  fldMStage:"M stage",
  fldDxStage:"Stage at diagnosis",
  fldTumorGrade:"Tumor grade",
  fldNuclearGrade:"Nuclear grade",
  fldHistology:"Histology",
  fldHer2Primary:"HER2 primary",
  fldHer2Overall:"HER2 overall",
  fldER:"ER %",
  fldPR:"PR %",
  fldReceptorPatient:"Patient receptor status",
  fldReceptorPrimary:"Primary receptor status",
  helperOptional:"Leave empty if not available.",

  optSelectOne:"-- Select --", optFemale:"Female", optMale:"Male",
  optPre:"Pre-menopausal", optPeri:"Peri-menopausal", optPost:"Post-menopausal",
  optUnknown:"Unknown",
  optBilateral:"Bilateral/Right", optLeft:"Left", optRight:"Right",
  optGrade1:"I – Well Differentiated", optGrade2:"II – Moderately Differentiated", optGrade3:"III – Poorly Differentiated",
  optNuclear1:"I (Low)", optNuclear2:"II (Intermediate)", optNuclear3:"III (High)",
  optHistIDC:"Breast Invasive Ductal Carcinoma",
  optHistILC:"Breast Invasive Lobular Carcinoma",
  optHistCarcinosarcoma:"Breast Invasive Carcinosarcoma",
  optHistMucinous:"Breast Invasive Mixed Mucinous Carcinoma",
  optHistMyoepithelial:"Breast Invasive Myoepithelial Carcinoma",
  optHistMetaplastic:"Breast Metaplastic Carcinoma",
  optHistMixed:"Breast Mixed Ductal and Lobular Carcinoma",
  optHistUndiff:"Breast Undifferentiated Carcinoma",
  optHistTubular:"Tubular Carcinoma",
  optNegative:"Negative", optNegOutsidePos:"Negative (Outside Positive)", optEquivocal:"Equivocal", optPositive:"Positive",
  optTripleNeg:"Triple Negative",

  submit:"Calculate risk", loading:"Analyzing...", geneToggle:"I have genetic mutation data", geneSearch:"Search for a gene...",
  demoNotice:"Demo mode — backend not connected yet. This result is simulated, not real.", resultTitle:"Prediction result", newPrediction:"New prediction", noResult:"No result to display. Start a prediction from the form.",
  preventionTitle:"Prevention and awareness", preventionIntro:"General information to support prevention, screening, and follow-up.",
  signs:"Warning signs", riskFactors:"Risk factors", resources:"Useful resources",
  sign1:"Lump or unusual breast change.",
  sign2:"Skin or nipple change.",
  sign3:"Abnormal discharge or persistent pain.",
  risk1:"Age and family history.",
  risk2:"Hereditary mutations and hormonal factors.",
  risk3:"Personal history of breast cancer.",
  donateTitle:"Donate", donateIntro:"This page lists associations and organizations linked to support for people affected by breast cancer.",
  note:"Always verify contact information directly on the official websites.",
  footer:"© 2026 — BCRTracker — Academic breast cancer recurrence prediction project",
  saveResult:"Save result",
  savedSuccess:"Result saved!",
  saveError:"Error saving result",
  riskLow:"Recurrence unlikely",
  riskHigh:"Recurrence likely",
  riskMedium:"Moderate risk",

  HIGH_RISK:"High Risk",
  MEDIUM_RISK:"Medium Risk",
  LOW_RISK:"Low Risk"
 },
 ar:{
  home:"الرئيسية", predict:"التنبؤ", prevention:"الوقاية", about:"حول المشروع", donate:"تبرع",
  badge:"تنبؤ بالذكاء الاصطناعي", title1:"التنبؤ بخطر عودة", title2:"سرطان الثدي",
  subtitle:"اعتماداً على الخصائص السريرية والجينومية. أداة أكاديمية لعرض الخطر المقدر من النموذج بشكل أوضح.",
  start:"بدء التنبؤ", learn:"معرفة المزيد",
  f1:"تقييم شخصي للخطر", f2:"بيانات سريرية وجينومية", f3:"نتيجة واضحة ومفهومة",

  awarenessLabel:"التوعية",
  awarenessTitle:"سرطان الثدي بالأرقام",
  awarenessSubtitle:"بيانات عالمية لفهم أفضل والتصرف بوعي.",
  stat1Label:"حالة تشخيص جديدة سنوياً حول العالم",
  stat1Source:"المصدر: منظمة الصحة العالمية، 2022",
  stat2Label:"من النساء ستُصبن بسرطان الثدي خلال حياتهن",
  stat2Source:"المصدر: الجمعية الأمريكية للسرطان، 2022",
  stat3Label:"نسبة البقاء 5 سنوات عند الاكتشاف المبكر",
  stat3Source:"المصدر: المعهد الوطني للسرطان، 2023",
  stat4Label:"وفاة سنوياً، 70% منها في البلدان ذات الدخل المنخفض أو المتوسط",
  stat4Source:"المصدر: منظمة الصحة العالمية، 2022",
  awareCta:"اكتشفي الوقاية ←",

  methodology:"المنهجية", methIntro:"يعتمد الموقع على مسار بسيط: إدخال البيانات المتوفرة، إرسالها إلى الخادم، ثم عرض التنبؤ.",
  methodLong1:"يعتمد هذا الموقع على نموذج تعلم آلي مصمم لتقدير خطر عودة سرطان الثدي باستخدام البيانات السريرية، مع إمكانية تضمين المعلومات الجينومية عند توفرها. تتم معالجة المعلومات المدخلة من قبل النموذج عبر عدة خطوات قبل إنتاج نتيجة تقديرية.",
methodLong2:"تشمل المؤشرات الرئيسية المستخدمة:",
methodBullet1:"حجم الورم وتصنيف TNM.",
methodBullet2:"درجة الورم والخصائص النسيجية.",
methodBullet3:"حالة المستقبلات الهرمونية و HER2.",
methodBullet4:"المعلومات الديموغرافية للمريضة، مثل العمر عند التشخيص.",
methodBullet5:"الطفرات الجينية، عند توفرها.",
methodLong3:"بعد إدخال البيانات، يقوم النظام بتحضير المعلومات من خلال معالجة المتغيرات الفئوية والقيم المفقودة وخطوات المعالجة المسبقة المطلوبة. ثم يقوم النموذج المدرّب بتحليل البيانات المتاحة وإنشاء تقدير لخطر عودة المرض.",
methodLong4:"يتم تقديم النتيجة النهائية كاحتمال لعودة المرض مع مستوى خطر.",
  m1:"إدخال البيانات", m1t:"البيانات السريرية إجبارية. البيانات الجينومية اختيارية.",
  m2:"تحليل النموذج", m2t:"يتكفل الخادم بالترميز، تعويض القيم الناقصة، وتشغيل النموذج المدرّب.",
  m3:"عرض النتيجة", m3t:"تعرض صفحة النتيجة احتمال عودة المرض، مستوى الخطر، والنموذج المستخدم.",
  disclaimer:"تنبيه مهم", disclaimerText:"هذا الموقع نموذج أكاديمي ولا يعوض التشخيص أو الرأي الطبي أو القرار العلاجي.",
  aboutTitle:"حول المشروع", aboutIntro:"تم تطوير BCRTracker في إطار مشروع نهاية الدراسة حول التنبؤ بعودة سرطان الثدي باستعمال التعلم الآلي.",
 dataModel:"نموذج التنبؤ",

modelDetailsTitle:"تفاصيل النموذج:",
modelBullet1:"النموذج النهائي: XGBoost",
modelBullet2:"القيم المفقودة: تقدير KNN",
modelBullet3:"اختلال التوازن الطبقي: ADASYN",
modelBullet4:"المخرجات: احتمال عودة المرض ومستوى الخطر",
  objective:"الهدف", objectiveText:"الهدف هو تقديم تقدير واضح لخطر عودة المرض وجعل النتيجة أسهل للفهم.",

  predictTitle:"التنبؤ بخطر عودة المرض", predictIntro:"جميع الحقول السريرية إلزامية. البيانات الجينومية فقط اختيارية.",
  patient:"معلومات المريض", staging:"المرحلة", tumor:"خصائص الورم", receptors:"حالة المستقبلات", genomic:"بيانات جينومية اختيارية",

  fldAge:"العمر عند التشخيص",
  fldSex:"الجنس",
  fldMeno:"حالة انقطاع الطمث",
  fldLaterality:"الجانب المصاب",
  fldTStage:"المرحلة T",
  fldNStage:"المرحلة N",
  fldMStage:"المرحلة M",
  fldDxStage:"المرحلة عند التشخيص",
  fldTumorGrade:"درجة الورم",
  fldNuclearGrade:"الدرجة النووية",
  fldHistology:"النسيجية",
  fldHer2Primary:"HER2 الأساسي",
  fldHer2Overall:"HER2 الإجمالي",
  fldER:"ER %",
  fldPR:"PR %",
  fldReceptorPatient:"حالة مستقبلات المريضة",
  fldReceptorPrimary:"حالة المستقبلات الأساسية",
  helperOptional:"اتركي فارغاً إذا لم يكن متوفراً.",

  optSelectOne:"-- اختر --", optFemale:"أنثى", optMale:"ذكر",
  optPre:"قبل انقطاع الطمث", optPeri:"أثناء انقطاع الطمث", optPost:"بعد انقطاع الطمث",
  optUnknown:"غير معروف",
  optBilateral:"ثنائي/يمين", optLeft:"يسار", optRight:"يمين",
  optGrade1:"I – متمايز جيداً", optGrade2:"II – متمايز بشكل معتدل", optGrade3:"III – ضعيف التمايز",
  optNuclear1:"I (منخفض)", optNuclear2:"II (متوسط)", optNuclear3:"III (مرتفع)",
  optHistIDC:"سرطان الثدي الغازي القنوي",
  optHistILC:"سرطان الثدي الغازي الفصيصي",
  optHistCarcinosarcoma:"ساركوما سرطانية غازية للثدي",
  optHistMucinous:"سرطان الثدي المخاطي المختلط الغازي",
  optHistMyoepithelial:"سرطان الثدي الغازي الظهاري العضلي",
  optHistMetaplastic:"سرطان الثدي التحولي",
  optHistMixed:"سرطان الثدي المختلط قنوي وفصيصي",
  optHistUndiff:"سرطان الثدي غير المتمايز",
  optHistTubular:"السرطان الأنبوبي",
  optNegative:"سلبي", optNegOutsidePos:"سلبي (إيجابي خارجي)", optEquivocal:"غير حاسم", optPositive:"إيجابي",
  optTripleNeg:"سلبي ثلاثي",

  submit:"حساب الخطر", loading:"جاري التحليل...", geneToggle:"لدي بيانات طفرات جينية", geneSearch:"ابحث عن جين...",
  demoNotice:"وضع تجريبي — الخادم غير متصل بعد. هذه النتيجة محاكاة وليست حقيقية.", resultTitle:"نتيجة التنبؤ", newPrediction:"تنبؤ جديد", noResult:"لا توجد نتيجة للعرض. ابدئي التنبؤ من الاستمارة.",
  preventionTitle:"الوقاية والتوعية", preventionIntro:"معلومات عامة لدعم الوقاية، الكشف، والمتابعة.",
  signs:"علامات التنبيه", riskFactors:"عوامل الخطر", resources:"مصادر مفيدة",
  sign1:"كتلة أو تغير غير عادي في الثدي.",
  sign2:"تغير في الجلد أو الحلمة.",
  sign3:"إفرازات غير طبيعية أو ألم مستمر.",
  risk1:"العمر والتاريخ العائلي.",
  risk2:"الطفرات الوراثية والعوامل الهرمونية.",
  risk3:"تاريخ شخصي للإصابة بسرطان الثدي.",
  donateTitle:"تبرع", donateIntro:"تجمع هذه الصفحة جمعيات ومنظمات مرتبطة بدعم الأشخاص المتأثرين بسرطان الثدي.",
  note:"تحقق دائماً من معلومات الاتصال مباشرة من المواقع الرسمية.",
  footer:"© 2026 — BCRTracker — مشروع أكاديمي للتنبؤ بعودة سرطان الثدي",
  saveResult:"حفظ النتيجة",
  savedSuccess:"تم حفظ النتيجة!",
  saveError:"خطأ في حفظ النتيجة",
  riskLow:"عودة غير محتملة",
  riskHigh:"عودة محتملة",
  riskMedium:"خطر متوسط",

  HIGH_RISK:"خطر مرتفع",
  MEDIUM_RISK:"خطر متوسط",
  LOW_RISK:"خطر منخفض"
 }
};

function t(key){ const lang=localStorage.getItem("lang")||"fr"; return (I18N[lang]&&I18N[lang][key]) || I18N.fr[key] || key; }

function applyLanguage(){
  const lang=localStorage.getItem("lang")||"fr";
  document.documentElement.lang=lang;
  document.body.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{ el.textContent=t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
  const sel=document.getElementById("languageSelect"); if(sel) sel.value=lang;
  
  if(window.location.pathname.includes("result.html")) {
    updateResultTranslation();
  }
}


function updateResultTranslation() {
  const riskElement = document.querySelector(".risk-pill");
  const riskTextElement = document.querySelector(".result-card p:first-of-type");
  
  if(riskElement && riskElement.dataset.riskCode) {
    const riskCode = riskElement.dataset.riskCode;
    riskElement.textContent = t(riskCode);
  }
  
  if(riskTextElement && riskTextElement.dataset.titleKey) {
    riskTextElement.textContent = t(riskTextElement.dataset.titleKey);
  }
}

function initCommon(){
  applyLanguage();
  const sel=document.getElementById("languageSelect");
  if(sel) sel.addEventListener("change",()=>{
    localStorage.setItem("lang",sel.value);
    applyLanguage();

    updateResultTranslation();
  });
  const savedTheme=localStorage.getItem("theme");
  if(savedTheme==="dark") document.body.classList.add("dark");
  const mode=document.getElementById("modeButton");
  if(mode) mode.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");});
}
document.addEventListener("DOMContentLoaded",initCommon);

function renderGenes(){
  const grid=document.getElementById("geneGrid"); if(!grid) return;
  grid.innerHTML=GENES.map(g=>`<label class="gene-item"><input type="checkbox" name="gene" value="${g}"> ${g}</label>`).join("");
  const search=document.getElementById("geneSearch");
  if(search) search.addEventListener("input",()=>{
    const v=search.value.toLowerCase().trim();
    grid.querySelectorAll(".gene-item").forEach(item=>item.style.display=item.textContent.toLowerCase().includes(v)?"flex":"none");
  });
}

function initPrediction(){
  const form=document.getElementById("predictionForm"); if(!form) return;
  renderGenes();
  const toggle=document.getElementById("hasGenes");
  const geneSection=document.getElementById("geneSection");
  toggle.addEventListener("change",()=>geneSection.classList.toggle("hidden",!toggle.checked));
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const loading=document.getElementById("loading");
    const error=document.getElementById("formError");
    loading.style.display="block"; error.textContent="";
    const fd=new FormData(form);
    const pct=name=>{const raw=fd.get(name); return raw===""||raw===null?null:Number(raw);}
    
    const lang=localStorage.getItem("lang")||"fr";
    const sexVal = fd.get("SEX");
    const menoVal = fd.get("MENOPAUSAL_STATUS_AT_DIAGNOSIS");
    const latVal = fd.get("LATERALITY");


    function getApiVal(fieldVal, mapping){
      if(lang==="en") return fieldVal;
      for(const [apiKey, i18nKey] of Object.entries(mapping)){
        if(I18N[lang] && I18N[lang][i18nKey]===fieldVal) return apiKey;
      }
      return fieldVal;
    }

    const payload={clinical:{
      T_STAGE:fd.get("T_STAGE"), N_STAGE:fd.get("N_STAGE"), M_STAGE:fd.get("M_STAGE"),
      STAGE_AT_DIAGNOSIS:fd.get("STAGE_AT_DIAGNOSIS"),
      INVASIVE_CARCINOMA_DX_AGE:Number(fd.get("INVASIVE_CARCINOMA_DX_AGE")),
      SEX: getApiVal(sexVal, {"Female":"optFemale","Male":"optMale"}),
      MENOPAUSAL_STATUS_AT_DIAGNOSIS: getApiVal(menoVal, {"Pre":"optPre","Peri":"optPeri","Post":"optPost","Male":"optMale","Unknown":"optUnknown"}),
      LATERALITY: getApiVal(latVal, {"Bilateral/Right":"optBilateral","Left":"optLeft","Right":"optRight"}),
      OVERALL_TUMOR_GRADE:fd.get("OVERALL_TUMOR_GRADE"),
      PRIMARY_NUCLEAR_GRADE:fd.get("PRIMARY_NUCLEAR_GRADE"),
      HER2_STATUS_PRIMARY:fd.get("HER2_STATUS_PRIMARY"),
      OVERALL_HER2_STATUS:fd.get("OVERALL_HER2_STATUS"),
      ER_PCT_PRIMARY:Number(fd.get("ER_PCT_PRIMARY")), PR_PCT_PRIMARY:Number(fd.get("PR_PCT_PRIMARY")),
      OVERALL_RECEPTOR_STATUS_PATIENT:fd.get("OVERALL_RECEPTOR_STATUS_PATIENT"),
      RECEPTOR_STATUS_PRIMARY:fd.get("RECEPTOR_STATUS_PRIMARY"),
      TUMOR_SAMPLE_HISTOLOGY:fd.get("TUMOR_SAMPLE_HISTOLOGY")
    }, genes:null};
    
    if(toggle.checked){payload.genes={}; fd.getAll("gene").forEach(g=>payload.genes[g]=1);}
    
    try{
      let data;
      try{
        const res=await fetch(API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
        data=await res.json();
        if(!res.ok) throw new Error(data.error||"Prediction failed.");
      }catch(_){

        data = generateMockResult(payload);
        data._demo = true;
      }
      localStorage.setItem("lastPrediction",JSON.stringify(data));
      location.href="result.html";
    }catch(err){error.textContent=err.message||"Server error."}
    finally{loading.style.display="none";}
  });
}

function generateMockResult(payload){
  const c = payload.clinical;
  let score = 0;
  const stageWeights = {IA:0,IB:5,IIA:15,IIB:25,IIIA:38,IIIB:48,IIIC:55,IV:70};
  score += stageWeights[c.STAGE_AT_DIAGNOSIS] || 20;
  if(c.OVERALL_TUMOR_GRADE && c.OVERALL_TUMOR_GRADE.startsWith("III")) score += 15;
  else if(c.OVERALL_TUMOR_GRADE && c.OVERALL_TUMOR_GRADE.startsWith("II")) score += 7;
  if(c.OVERALL_HER2_STATUS === "Positive") score += 10;
  if(c.OVERALL_RECEPTOR_STATUS_PATIENT === "Triple Negative") score += 12;
  if(c.M_STAGE === "M1") score += 20;
  if(c.INVASIVE_CARCINOMA_DX_AGE < 40) score += 8;
  if(payload.genes && Object.keys(payload.genes).some(g=>["BRCA1","BRCA2","TP53"].includes(g))) score += 10;
  score += (Math.random() * 6 - 3);
  score = Math.max(3, Math.min(92, score));
  
  let risk = "Low";
  let predictionCode = "LOW_RISK";
  if (score >= 50) {
    risk = "High";
    predictionCode = "HIGH_RISK";
  } else if (score >= 25) {
    risk = "Medium";
    predictionCode = "MEDIUM_RISK";
  }
  
  return {
    recurrence_probability: score.toFixed(1),
    risk_level: risk,
    prediction_code: predictionCode,
    model_used: "Demo Mode — backend non connecté"
  };
}

document.addEventListener("DOMContentLoaded",initPrediction);


function initResult(){
  const box=document.getElementById("resultBox"); if(!box) return;
  const raw=localStorage.getItem("lastPrediction");
  if(!raw){box.innerHTML=`<div class="notice">${t("noResult")}</div>`; return;}
  const d=JSON.parse(raw);
  const p=Number(d.recurrence_probability).toFixed(1);
  

  let riskCode = d.prediction_code;
  if (!riskCode) {

    const risk = d.risk_level || "Unknown";
    if (risk === "Low") riskCode = "LOW_RISK";
    else if (risk === "Medium") riskCode = "MEDIUM_RISK";
    else if (risk === "High") riskCode = "HIGH_RISK";
    else riskCode = "LOW_RISK";
  }
  
  const riskText = t(riskCode);
  const klass = riskCode === "LOW_RISK" ? "risk-low" : (riskCode === "MEDIUM_RISK" ? "risk-medium" : "risk-high");
  
  const demoBanner = d._demo ? `<div class="demo-notice">⚠️ ${t("demoNotice")}</div>` : "";
  box.innerHTML = demoBanner + `<div class="result-card">
    <span class="probability">${p}%</span>
    <p data-i18n="resultTitle" data-title-key="resultTitle">${t("resultTitle")}</p>
    <span class="risk-pill ${klass}" data-risk-code="${riskCode}">${riskText}</span>
    <p class="helper">${d.model_used || ""}</p>
  </div>`;
  

  const resultTitleEl = box.querySelector(".result-card p:first-of-type");
  if(resultTitleEl) resultTitleEl.dataset.titleKey = "resultTitle";
  

  const saveBtn = document.getElementById("saveResultBtn");
  if(saveBtn) {
    saveBtn.addEventListener("click", function() {
      saveResultToFile(d, p, riskText);
    });
  }
}


function saveResultToFile(result, probability, riskLevel) {
  try {
    const date = new Date();
    const formattedDate = date.toLocaleString();
    
    const fileContent = `========================================
BCRTracker - Résultat de prédiction
========================================

Date : ${formattedDate}
Probabilité de récidive : ${probability}%
Niveau de risque : ${riskLevel}
Modèle utilisé : ${result.model_used || "Non spécifié"}

========================================
Ce résultat est une estimation basée sur le modèle
d'apprentissage automatique. Il ne remplace pas
l'avis d'un médecin.
========================================`;
    
    const blob = new Blob([fileContent], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bcrtracker_result_${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(t("savedSuccess"), "success");
  } catch(error) {
    showNotification(t("saveError"), "error");
  }
}


function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: ${type === "success" ? "#0f9d58" : "#d93025"};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    z-index: 1000;
    font-weight: bold;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: fadeInOut 2.5s ease forwards;
  `;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2500);
}


const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(20px); }
    15% { opacity: 1; transform: translateY(0); }
    85% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-20px); }
  }
`;
document.head.appendChild(style);
document.addEventListener("DOMContentLoaded",initResult);