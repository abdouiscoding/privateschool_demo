// Each key holds [Arabic, French, English]. Edit any text here.
const D = {
  mono: ["ن", "N", "N"],
  brand: ["أكاديمية النور", "Académie Al Nour", "Al Nour Academy"],
  tag: ["مدرسة خاصة", "École privée", "Private School"],
  n_about: ["من نحن", "À propos", "About"],
  n_programs: ["البرامج", "Programmes", "Programs"],
  n_adm: ["التسجيل", "Inscriptions", "Admissions"],
  n_contact: ["اتصل بنا", "Contact", "Contact"],

  h_title: ["نصنع جيلاً متميزاً، متمسكاً بقيمه ومتطلعاً إلى المستقبل", "Former une génération brillante, fidèle à ses valeurs et tournée vers l’avenir", "Shaping a brilliant generation, rooted in values and ready for the future"],
  h_text: ["منذ عام 2008، تقدّم أكاديمية النور تعليماً متكاملاً من التحضيري إلى الثانوي، في بيئة آمنة يقودها أساتذة مؤهلون يغرسون الإتقان والانضباط وحب التعلّم.", "Depuis 2008, l’Académie Al Nour offre un enseignement complet, du préscolaire au lycée, dans un cadre sûr où des enseignants qualifiés cultivent rigueur, discipline et goût d’apprendre.", "Since 2008, Al Nour Academy has offered a complete education from kindergarten to high school, in a safe setting where qualified teachers nurture rigor, discipline and a love of learning."],
  h_cta1: ["احجز زيارة", "Réserver une visite", "Book a visit"],
  h_cta2: ["اكتشف برامجنا", "Nos programmes", "Our programs"],

  s1: ["سنة من الخبرة", "ans d’expérience", "years of experience"],
  s2: ["تلميذ", "élèves", "students"],
  s3: ["أستاذ مؤهل", "enseignants qualifiés", "qualified teachers"],
  s4: ["نسبة النجاح", "taux de réussite", "success rate"],

  a_title: ["عن الأكاديمية", "Notre école", "About the Academy"],
  a_p1: ["تأسست أكاديمية النور على يد نخبة من التربويين الذين آمنوا بأن التعليم الجيد يبدأ بالاحترام والاهتمام بكل تلميذ. اليوم نضم أكثر من 1200 تلميذ في أقسام صغيرة تتيح متابعة فردية حقيقية.", "L’Académie Al Nour a été fondée par des éducateurs convaincus qu’une bonne école commence par le respect et l’attention portée à chaque élève. Nous accueillons plus de 1 200 élèves, en petits groupes, pour un vrai suivi individuel.", "Al Nour Academy was founded by educators who believe good schooling begins with respect and attention to every student. Today we welcome over 1,200 students in small classes that allow real individual follow-up."],
  a_p2: ["نعتمد المنهاج الوطني معززاً بثلاث لغات: العربية والفرنسية والإنجليزية، مع أنشطة علمية ورياضية وفنية تنمّي الشخصية وتبني الثقة.", "Notre programme national est renforcé par trois langues, l’arabe, le français et l’anglais, et enrichi d’activités scientifiques, sportives et artistiques qui forgent la personnalité et la confiance.", "Our national curriculum is strengthened by three languages, Arabic, French and English, and enriched by science, sports and arts activities that build character and confidence."],

  p_title: ["برامجنا الدراسية", "Nos cycles d’enseignement", "Our Programs"],
  p_intro: ["مسار تعليمي متدرج يرافق التلميذ في كل مرحلة من مراحل نموه.", "Un parcours progressif qui accompagne l’élève à chaque étape de son développement.", "A progressive pathway that supports students at every stage of their growth."],
  c1_t: ["الطور الابتدائي", "Cycle primaire", "Primary School"],
  c1_d: ["تعلّم باللعب والاكتشاف، مع تأسيس قوي في القراءة والكتابة والحساب.", "Apprentissage par le jeu et la découverte, avec des bases solides en lecture, écriture et calcul.", "Learning through play and discovery, with a strong foundation in reading, writing and math."],
  c2_t: ["الطور المتوسط", "Cycle moyen", "Middle School"],
  c2_d: ["تعزيز التفكير النقدي ومهارات البحث والمشاريع العلمية استعداداً للثانوي.", "Esprit critique, méthodes de recherche et projets scientifiques pour préparer le lycée.", "Critical thinking, research skills and science projects to prepare for high school."],
  c3_t: ["الطور الثانوي", "Cycle secondaire", "High School"],
  c3_d: ["تحضير مركّز للباكالوريا مع توجيه أكاديمي ومهني شخصي لكل تلميذ.", "Préparation ciblée au baccalauréat avec orientation académique et professionnelle personnalisée.", "Focused baccalaureate preparation with personal academic and career guidance."],

  w_title: ["لماذا أكاديمية النور؟", "Pourquoi nous choisir", "Why Choose Us"],
  w1_t: ["أساتذة مؤهلون", "Équipe qualifiée", "Qualified Staff"],
  w1_d: ["فريق تربوي ذو خبرة ميدانية وتكوين مستمر.", "Une équipe éducative expérimentée et formée en continu.", "An experienced teaching team with continuous training."],
  w2_t: ["بيئة آمنة", "Cadre sécurisé", "Safe Campus"],
  w2_d: ["حراسة ومراقبة ونقل مدرسي منظم لراحة بال الأولياء.", "Surveillance, sécurité et transport scolaire organisé pour la sérénité des parents.", "Security, supervision and organized school transport for parents’ peace of mind."],
  w3_t: ["تواصل مع الأولياء", "Suivi des parents", "Parent Partnership"],
  w3_d: ["منصة رقمية وتقارير دورية تُبقيكم على اطلاع بتقدم أبنائكم.", "Plateforme numérique et bilans réguliers pour suivre la progression de votre enfant.", "A digital portal and regular reports keep you informed of your child’s progress."],

  g_title: ["الحياة في الأكاديمية", "La vie à l’académie", "Life at the Academy"],

  d_title: ["التسجيلات مفتوحة", "Inscriptions ouvertes", "Admissions Are Open"],
  d_text: ["المقاعد محدودة في كل قسم. تواصلوا معنا لزيارة المؤسسة والتعرّف على فريقنا.", "Les places sont limitées dans chaque classe. Contactez-nous pour visiter l’école et rencontrer notre équipe.", "Seats are limited in every class. Contact us to visit the campus and meet our team."],
  d1: ["أرسلوا طلب معلومات", "Envoyez votre demande", "Send an enquiry"],
  d2: ["زوروا المؤسسة وقابلوا الفريق", "Visitez l’école", "Visit and meet the team"],
  d3: ["أكملوا ملف التسجيل", "Finalisez l’inscription", "Complete enrolment"],

  k_title: ["تواصل معنا", "Nous contacter", "Contact Us"],
  k_addr_l: ["العنوان", "Adresse", "Address"],
  k_addr: ["12 شارع الزيتون، حي النور، الجزائر العاصمة", "12 rue des Oliviers, Cité Al Nour, Alger", "12 Olive Street, Al Nour District, Algiers"],
  k_hours_l: ["أوقات العمل", "Horaires", "Hours"],
  k_hours: ["من الأحد إلى الخميس، 8:00 – 17:00", "Du dimanche au jeudi, 8h00 – 17h00", "Sunday to Thursday, 8:00 – 17:00"],
  k_phone_l: ["الهاتف", "Téléphone", "Phone"],
  k_mail_l: ["البريد الإلكتروني", "E-mail", "Email"],
  k_map: ["افتح في خرائط جوجل", "Ouvrir dans Google Maps", "Open in Google Maps"],

  f_about: ["أكاديمية النور الخاصة: تعليم متميز وقيم راسخة منذ 2008.", "Académie Al Nour : excellence et valeurs depuis 2008.", "Al Nour Academy: excellence and values since 2008."],
  f_links: ["روابط سريعة", "Liens rapides", "Quick Links"],
  f_follow: ["تابعونا", "Suivez-nous", "Follow Us"]
};

const IDX = { ar: 0, fr: 1, en: 2 };
const DIR = { ar: "rtl", fr: "ltr", en: "ltr" };
const $$ = s => document.querySelectorAll(s);

function setLang(l) {
  const i = IDX[l], root = document.documentElement;
  root.lang = l;
  root.dir = DIR[l];
  $$("[data-i18n]").forEach(el => { el.textContent = D[el.dataset.i18n][i]; });
  document.title = D.brand[i] + " | " + D.tag[i];
  $$("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === l));
  try { localStorage.setItem("lang", l); } catch (e) {}
}

$$("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

// mobile menu
const nav = document.getElementById("nav"), burger = document.getElementById("burger");
burger.addEventListener("click", () => burger.setAttribute("aria-expanded", nav.classList.toggle("open")));
nav.addEventListener("click", e => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});

let saved = "ar";
try { saved = localStorage.getItem("lang") || "ar"; } catch (e) {}
setLang(IDX[saved] !== undefined ? saved : "ar");
