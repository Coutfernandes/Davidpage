import { useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Award,
  Baby,
  Camera,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Target,
  TrendingUp,
  Trophy,
  UsersRound,
  X,
} from 'lucide-react'

type Language = 'pt-BR' | 'en'

const content = {
  'pt-BR': {
    nav: ['Início', 'Sobre mim', 'Metodologia', 'Aulas', 'Galeria', 'Contato'],
    heroEyebrow: 'Manauara Style',
    heroRole: 'Faixa preta de Jiu-Jitsu',
    heroDescription: 'Professor, competidor e especialista em defesa pessoal. Jiu-Jitsu, Wrestling, Luta Livre e Judô em Manaus.',
    trial: 'Agende sua aula experimental',
    seeClasses: 'Ver programas',
    explore: 'Conheça o trabalho',
    credentials: ['Faixa preta 1º grau BJJ', 'Faixa preta 2º grau Luta Livre', 'Faixa marrom de Judô', 'Ex-atleta da Seleção Brasileira de Wrestling'],
    aboutEyebrow: 'Sobre mim',
    aboutTitle: 'Autoridade construída no tatame',
    about: [
      'Sou David Washington dos Santos Moreira, faixa preta 1º grau de Jiu-Jitsu pela Carlson Gracie Manaus e ex-atleta da Seleção Brasileira de Wrestling. Comecei no Judô, passei pela luta olímpica e encontrei no Jiu-Jitsu a minha linguagem definitiva dentro do tatame.',
      'Competindo desde 2012, construí uma carreira de resultados: 12 vezes campeão estadual, 7 vezes campeão nacional de wrestling e campeão pan-americano de Jiu-Jitsu No-Gi, além de títulos de luta livre no Brasil e na Europa.',
      'Hoje divido meu tempo entre competir e ensinar. Como professor, conduzo turmas de adultos, crianças de 4 a 10 anos e atletas em preparação para competição, unindo técnica apurada, disciplina e respeito — dentro e fora do tatame.',
    ],
    stats: ['Campeão estadual de Wrestling', 'Campeão nacional de Wrestling', 'Títulos de Jiu-Jitsu e Luta Livre'],
    experienceEyebrow: 'Trajetória',
    experienceTitle: 'Onde ensino e me formei professor',
    experience: [
      ['Professor de Jiu-Jitsu adulto', 'Academia Team Karina Dias', 'Atuando há 2 anos'],
      ['Professor de Luta Olímpica Kids (4 a 10 anos)', 'Academia Team Karina Dias', 'Atuando há 7 meses'],
      ['Estágio em alto rendimento', 'Fundação de Alto Rendimento — PELCI', '2 anos e 6 meses'],
      ['Estágio', 'Cross Inside', '1 ano e 6 meses'],
    ],
    achievementsEyebrow: 'Conquistas',
    achievementsTitle: 'Títulos de competição',
    achievementsIntro: 'Resultados conquistados em Jiu-Jitsu, Luta Livre, Wrestling e Judô.',
    achievementGroups: [
      { title: 'Jiu-Jitsu e Luta Livre', items: ['Campeão Amazonense FEJJAM', 'Campeão Copa Osvaldo Alves FEJJAM', 'Campeão Copa Arthur Neto FEJJAM', 'Vice-Campeão AJP Tour Zurich', 'Campeão Amazonense No-Gi FAJJEPro', 'Campeão Pan-Americano No-Gi CBJJE', 'Campeão Pan-Americano ABS No-Gi CBJJE', 'Vice-Campeão Geneva Open No-Gi IBJJF', 'Campeão Amazonense de Luta Livre FASUB', 'Campeão Open Internacional de Luta Livre FILLEPro'] },
      { title: 'Wrestling', items: ['12x Campeão Estadual', '7x Campeão Nacional', '2x Campeão Nacional Universitário', 'Campeão Copa Brasil', '2º lugar — Pan-Americano Adulto', '7º lugar — Qualificatória Olímpica 2020'] },
      { title: 'Judô', items: ['Campeão Amazonense 2012', 'Campeão Copa Fejama', 'Campeão Copa Samel', 'Vice-Campeão Copa Melhor do Amazonas'] },
    ],
    methodologyEyebrow: 'Metodologia',
    methodologyTitle: 'Como conduzo cada treino',
    methodologyIntro: 'Quatro pilares que sustentam todas as turmas, do primeiro dia ao pódio.',
    pillars: [
      ['Respeito e disciplina', 'O tatame é um espaço de hierarquia saudável: chegar no horário, cuidar do parceiro de treino e respeitar cada nível de graduação.'],
      ['Técnica e estratégia', 'Cada posição é ensinada com detalhe, transição e contexto de luta. Você entende o porquê de cada movimento, não apenas a repetição.'],
      ['Formação de caráter', 'Vitória e derrota são ferramentas de ensino. O objetivo é formar pessoas mais seguras, pacientes e responsáveis fora do tatame.'],
      ['Evolução contínua', 'Acompanhamento próximo da sua progressão, com metas claras de graduação, condicionamento físico e desempenho em competição.'],
    ],
    classesEyebrow: 'Aulas',
    classesTitle: 'Programas de treinamento',
    classesIntro: 'Escolha o formato que se encaixa na sua rotina e no seu objetivo no tatame.',
    classes: [
      ['Aulas adulto', 'Jiu-Jitsu e Luta Livre para iniciantes e avançados, com foco em defesa pessoal, condicionamento e competição.', 'Do iniciante à faixa preta'],
      ['Aulas infantis', 'Luta olímpica e Jiu-Jitsu para crianças de 4 a 10 anos, desenvolvendo coordenação motora, disciplina e confiança.', 'De 4 a 10 anos'],
      ['Aulas particulares', 'Treino individual ou em dupla, com plano de evolução desenhado para o seu objetivo específico.', 'Agenda flexível'],
      ['Seminários', 'Seminários de Jiu-Jitsu No-Gi, quedas e luta olímpica para academias, equipes e eventos.', 'Para academias e equipes'],
    ],
    whatsapp: 'Falar no WhatsApp',
    galleryEyebrow: 'Galeria',
    galleryTitle: 'No tatame e na academia',
    galleryIntro: 'Registros do treino, da competição e da rotina na Carlson Gracie Manaus.',
    captions: ['Carlson Gracie Manaus', 'Treino de quimono', 'Equipe Carlson Gracie', 'No tatame de casa'],
    contactEyebrow: 'Contato',
    contactTitle: 'Agende sua aula experimental',
    contactIntro: 'Fale diretamente comigo pelo WhatsApp, acompanhe o dia a dia no Instagram ou envie sua mensagem pelo formulário.',
    academy: 'Academia',
    location: 'Localização',
    formTitle: 'Envie sua mensagem',
    formNote: 'Ao enviar, o WhatsApp abre com a sua mensagem pronta. Nenhum dado é armazenado neste site.',
    name: 'Nome',
    namePlaceholder: 'Como posso te chamar?',
    phone: 'WhatsApp / telefone',
    phonePlaceholder: '(92) 99999-9999',
    email: 'E-mail (opcional)',
    emailPlaceholder: 'voce@email.com',
    message: 'Mensagem',
    messagePlaceholder: 'Conte o seu objetivo: primeira aula, aulas para o seu filho, seminário...',
    send: 'Enviar pelo WhatsApp',
    responseNote: 'Respondo pessoalmente cada mensagem e confirmo a turma ideal para você antes da primeira aula.',
    footerAbout: 'Jiu-Jitsu, Wrestling, Luta Livre e Judô em Manaus, Amazonas.',
    footerNav: 'Navegação',
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao topo',
    chatLabel: 'Conversar pelo WhatsApp',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    nameRequired: 'Informe seu nome.',
    phoneRequired: 'Informe seu telefone.',
    messageRequired: 'Escreva uma mensagem.',
  },
  en: {
    nav: ['Home', 'About', 'Methodology', 'Classes', 'Gallery', 'Contact'],
    heroEyebrow: 'Manauara Style',
    heroRole: 'Brazilian Jiu-Jitsu black belt',
    heroDescription: 'Coach, competitor, and self-defense specialist. Jiu-Jitsu, Wrestling, submission grappling, and Judo in Manaus.',
    trial: 'Book a trial class',
    seeClasses: 'View programs',
    explore: 'Discover the work',
    credentials: ['1st-degree BJJ black belt', '2nd-degree submission wrestling black belt', 'Judo brown belt', 'Former Brazilian Wrestling National Team athlete'],
    aboutEyebrow: 'About me',
    aboutTitle: 'Authority built on the mats',
    about: [
      'I am David Washington dos Santos Moreira, a 1st-degree Jiu-Jitsu black belt from Carlson Gracie Manaus and a former Brazilian Wrestling National Team athlete. I started with Judo, moved through Olympic wrestling, and found my true language on the mats in Jiu-Jitsu.',
      'Competing since 2012, I have built a career of results: 12-time state champion, 7-time national wrestling champion, Pan-American No-Gi Jiu-Jitsu champion, and submission wrestling titles in Brazil and Europe.',
      'Today I balance competing with teaching. I coach adults, children ages 4 to 10, and competition athletes, combining sharp technique, discipline, and respect — on and off the mats.',
    ],
    stats: ['State Wrestling champion', 'National Wrestling champion', 'Jiu-Jitsu and submission wrestling titles'],
    experienceEyebrow: 'Experience',
    experienceTitle: 'Where I teach and trained as a coach',
    experience: [
      ['Adult Jiu-Jitsu coach', 'Team Karina Dias Academy', 'Teaching for 2 years'],
      ['Kids Olympic Wrestling coach (ages 4–10)', 'Team Karina Dias Academy', 'Teaching for 7 months'],
      ['High-performance internship', 'High Performance Foundation — PELCI', '2 years and 6 months'],
      ['Internship', 'Cross Inside', '1 year and 6 months'],
    ],
    achievementsEyebrow: 'Achievements',
    achievementsTitle: 'Competition titles',
    achievementsIntro: 'Results in Jiu-Jitsu, submission wrestling, Wrestling, and Judo.',
    achievementGroups: [
      { title: 'Jiu-Jitsu & submission wrestling', items: ['Amazonian Champion FEJJAM', 'Osvaldo Alves Cup Champion FEJJAM', 'Arthur Neto Cup Champion FEJJAM', 'AJP Tour Zurich Runner-up', 'Amazonian No-Gi Champion FAJJEPro', 'Pan-American No-Gi Champion CBJJE', 'Pan-American ABS No-Gi Champion CBJJE', 'Geneva Open No-Gi IBJJF Runner-up', 'Amazonian Submission Wrestling Champion FASUB', 'International Submission Wrestling Open Champion FILLEPro'] },
      { title: 'Wrestling', items: ['12× State Champion', '7× National Champion', '2× National University Champion', 'Brazil Cup Champion', '2nd place — Senior Pan-American', '7th place — 2020 Olympic Qualifier'] },
      { title: 'Judo', items: ['Amazonian Champion 2012', 'Fejama Cup Champion', 'Samel Cup Champion', 'Amazonas Best Cup Runner-up'] },
    ],
    methodologyEyebrow: 'Methodology',
    methodologyTitle: 'How I coach every class',
    methodologyIntro: 'Four pillars behind every class, from your first day to the podium.',
    pillars: [
      ['Respect and discipline', 'The mats are a place for healthy structure: be on time, look after your training partner, and respect every belt level.'],
      ['Technique and strategy', 'Every position is taught with detail, transitions, and context. Understand why each movement works, not just how to repeat it.'],
      ['Building character', 'Wins and losses are teaching tools. The goal is to build people who are more confident, patient, and responsible off the mats.'],
      ['Continuous growth', 'Personal guidance with clear goals for belt progression, fitness, and competition performance.'],
    ],
    classesEyebrow: 'Classes',
    classesTitle: 'Training programs',
    classesIntro: 'Choose the format that fits your routine and goals on the mats.',
    classes: [
      ['Adult classes', 'Jiu-Jitsu and submission wrestling for beginners and advanced students, focused on self-defense, fitness, and competition.', 'From beginner to black belt'],
      ['Kids classes', 'Olympic wrestling and Jiu-Jitsu for children ages 4 to 10, building coordination, discipline, and confidence.', 'Ages 4 to 10'],
      ['Private classes', 'One-on-one or partner training with a progression plan designed around your specific goals.', 'Flexible schedule'],
      ['Seminars', 'No-Gi Jiu-Jitsu, takedowns, and Olympic wrestling seminars for academies, teams, and events.', 'For academies and teams'],
    ],
    whatsapp: 'Chat on WhatsApp',
    galleryEyebrow: 'Gallery',
    galleryTitle: 'On the mats and at the academy',
    galleryIntro: 'Moments from training, competition, and life at Carlson Gracie Manaus.',
    captions: ['Carlson Gracie Manaus', 'Gi training', 'Carlson Gracie team', 'On home mats'],
    contactEyebrow: 'Contact',
    contactTitle: 'Book your trial class',
    contactIntro: 'Message me on WhatsApp, follow daily training on Instagram, or send a note using the form.',
    academy: 'Academy',
    location: 'Location',
    formTitle: 'Send a message',
    formNote: 'WhatsApp will open with your message ready to send. This site does not store your information.',
    name: 'Name',
    namePlaceholder: 'What should I call you?',
    phone: 'WhatsApp / phone',
    phonePlaceholder: '(92) 99999-9999',
    email: 'Email (optional)',
    emailPlaceholder: 'you@email.com',
    message: 'Message',
    messagePlaceholder: 'Tell me your goal: a first class, classes for your child, a seminar...',
    send: 'Send via WhatsApp',
    responseNote: 'I personally reply to every message and help you find the right class before your first session.',
    footerAbout: 'Jiu-Jitsu, Wrestling, submission grappling, and Judo in Manaus, Amazonas, Brazil.',
    footerNav: 'Navigation',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
    chatLabel: 'Chat on WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    nameRequired: 'Please enter your name.',
    phoneRequired: 'Please enter your phone number.',
    messageRequired: 'Please write a message.',
  },
} as const

const whatsappNumber = '5592993916066'
const instagramUrl = 'https://instagram.com/manauarastyle_wrestling'
const sectionIds = ['home', 'about', 'methodology', 'classes', 'gallery', 'contact']
const galleryImages = [
  '/images/david-white-gracie.jpg',
  '/images/david-black-portrait.jpg',
  '/images/david-black-gracie.jpg',
  '/images/david-white-wrestling.jpg',
]

function App() {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('david-language') === 'en' ? 'en' : 'pt-BR')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]

  function changeLanguage(next: Language) {
    setLanguage(next)
    localStorage.setItem('david-language', next)
    document.documentElement.lang = next
  }

  function openWhatsApp(message: string) {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    if (!name || !phone || !message) return
    const lines = [
      language === 'en' ? 'Hello David! I would like to know more about your classes.' : 'Olá, David! Gostaria de saber mais sobre suas aulas.',
      '',
      `${t.name}: ${name}`,
      `${t.phone}: ${phone}`,
      ...(email ? [`${t.email}: ${email}`] : []),
      '',
      `${t.message}: ${message}`,
    ]
    openWhatsApp(lines.join('\n'))
  }

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="David Moreira — início">
            <img className="brand-mark" src="/images/logo-wrestling.jpeg" alt="" />
            <span className="brand-copy"><strong>David Moreira</strong><small>{language === 'en' ? 'Jiu-Jitsu black belt' : 'Faixa preta de Jiu-Jitsu'}</small></span>
          </a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label={language === 'en' ? 'Main navigation' : 'Navegação principal'}>
            {t.nav.map((label, index) => <a key={label} href={`#${sectionIds[index]}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <button className="mobile-trial" onClick={() => openWhatsApp(t.trial)}>{t.trial}<ArrowRight size={16} /></button>
          </nav>
          <div className="nav-actions">
            <label className="language-select">
              <span className="sr-only">{language === 'en' ? 'Language' : 'Idioma'}</span>
              <select value={language} onChange={(event) => changeLanguage(event.target.value as Language)} aria-label={language === 'en' ? 'Language' : 'Idioma'}>
                <option value="pt-BR">Português</option>
                <option value="en">English</option>
              </select>
            </label>
            <a className="button button-light header-cta" href="#contact">{t.trial}</a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <img className="hero-image" src="/images/david-black-gracie.jpg" alt="" />
          <div className="hero-overlay" />
          <div className="hero-inner content-width">
            <div className="hero-copy">
              <div className="eyebrow hero-eyebrow"><img src="/images/logo-wrestling.jpeg" alt="" />{t.heroEyebrow}</div>
              <h1>David<br className="mobile-break" /> Moreira</h1>
              <p className="hero-role">{t.heroRole}</p>
              <p className="hero-description">{t.heroDescription}</p>
              <div className="hero-actions">
                <a className="button button-light" href="#contact">{t.trial}<ArrowRight size={17} /></a>
                <a className="button button-outline" href="#classes">{t.seeClasses}</a>
              </div>
            </div>
            <a href="#about" className="scroll-hint">{t.explore}<ArrowDown size={16} /></a>
          </div>
        </section>

        <div className="credentials" aria-label={language === 'en' ? 'Credentials' : 'Credenciais'}>
          <div className="credentials-track">{[...t.credentials, ...t.credentials].map((item, index) => <span className="credential" key={`${item}-${index}`}>{item}<i /></span>)}</div>
        </div>

        <section className="section about-section" id="about">
          <div className="content-width about-grid">
            <div className="about-copy">
              <p className="eyebrow"><span />{t.aboutEyebrow}</p>
              <h2>{t.aboutTitle}</h2>
              {t.about.map((paragraph) => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
              <div className="stats-grid">
                {[['12×', t.stats[0]], ['7×', t.stats[1]], ['10', t.stats[2]]].map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
              </div>
            </div>
            <div className="about-photo-wrap">
              <img className="about-photo" src="/images/david-white-gracie.jpg" alt={language === 'en' ? 'David Moreira in a white Jiu-Jitsu gi at the academy' : 'David Moreira com quimono branco na academia'} />
              <img className="bjj-badge" src="/images/logo-bjj.jpeg" alt="David Moreira Brazilian Jiu-Jitsu" />
            </div>
          </div>
        </section>

        <section className="section experience-section">
          <div className="content-width">
            <p className="eyebrow"><span />{t.experienceEyebrow}</p>
            <h2>{t.experienceTitle}</h2>
            <div className="experience-list">
              {t.experience.map(([role, org, period], index) => <article className="experience-row" key={role}>
                <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{role}</h3><p>{org}</p></div>
                <span className="period">{period}</span>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section achievements-section">
          <div className="content-width">
            <p className="eyebrow"><span />{t.achievementsEyebrow}</p>
            <h2>{t.achievementsTitle}</h2>
            <p className="section-intro">{t.achievementsIntro}</p>
            <div className="achievement-grid">
              {t.achievementGroups.map((group, index) => <article className="achievement-card" key={group.title}>
                <h3><Trophy size={18} />{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <span className="achievement-index">0{index + 1}</span>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section methodology-section" id="methodology">
          <div className="content-width">
            <p className="eyebrow"><span />{t.methodologyEyebrow}</p>
            <h2>{t.methodologyTitle}</h2>
            <p className="section-intro">{t.methodologyIntro}</p>
            <div className="pillar-grid">
              {[ShieldCheck, Target, HeartHandshake, TrendingUp].map((Icon, index) => <article className="pillar-card" key={t.pillars[index][0]}>
                <Icon size={24} strokeWidth={1.7} />
                <h3>{t.pillars[index][0]}</h3>
                <p>{t.pillars[index][1]}</p>
                <span>0{index + 1}</span>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section classes-section" id="classes">
          <div className="content-width">
            <p className="eyebrow"><span />{t.classesEyebrow}</p>
            <h2>{t.classesTitle}</h2>
            <p className="section-intro">{t.classesIntro}</p>
            <div className="classes-grid">
              {[UsersRound, Baby, Dumbbell, GraduationCap].map((Icon, index) => <article className="class-card" key={t.classes[index][0]}>
                <div className="class-card-top"><Icon size={23} /><span>{t.classes[index][2]}</span></div>
                <h3>{t.classes[index][0]}</h3>
                <p>{t.classes[index][1]}</p>
                <button className="text-link" onClick={() => openWhatsApp(`${t.classes[index][0]} — ${t.trial}`)}>{t.whatsapp}<ArrowRight size={15} /></button>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="content-width">
            <p className="eyebrow"><span />{t.galleryEyebrow}</p>
            <h2>{t.galleryTitle}</h2>
            <p className="section-intro">{t.galleryIntro}</p>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => <figure className="gallery-item" key={image}>
                <img src={image} alt={t.captions[index]} loading="lazy" />
                <figcaption>{t.captions[index]}</figcaption>
              </figure>)}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="content-width contact-grid">
            <div className="contact-copy">
              <p className="eyebrow"><span />{t.contactEyebrow}</p>
              <h2>{t.contactTitle}</h2>
              <p className="section-intro">{t.contactIntro}</p>
              <div className="contact-list">
                <a className="contact-item" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle /><span><small>WhatsApp</small><strong>+55 (92) 99391-6066</strong></span><ArrowRight /></a>
                <a className="contact-item" href={instagramUrl} target="_blank" rel="noreferrer"><Camera /><span><small>Instagram</small><strong>@manauarastyle_wrestling</strong></span><ArrowRight /></a>
                <div className="contact-item"><Award /><span><small>{t.academy}</small><strong>Carlson Gracie Manaus</strong></span></div>
                <div className="contact-item"><MapPin /><span><small>{t.location}</small><strong>Manaus, AM — Brasil</strong></span></div>
              </div>
              <p className="response-note">{t.responseNote}</p>
            </div>
            <form className="contact-form" onSubmit={sendMessage}>
              <h3>{t.formTitle}</h3>
              <p>{t.formNote}</p>
              <div className="form-row">
                <label>{t.name}<input name="name" autoComplete="name" placeholder={t.namePlaceholder} required /></label>
                <label>{t.phone}<input name="phone" autoComplete="tel" type="tel" placeholder={t.phonePlaceholder} required /></label>
              </div>
              <label>{t.email}<input name="email" autoComplete="email" type="email" placeholder={t.emailPlaceholder} /></label>
              <label>{t.message}<textarea name="message" rows={4} placeholder={t.messagePlaceholder} required /></label>
              <button className="button button-light form-submit" type="submit">{t.send}<Send size={16} /></button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home"><img className="brand-mark" src="/images/logo-wrestling.jpeg" alt="" /><span className="brand-copy"><strong>David Moreira</strong><small>{language === 'en' ? 'Jiu-Jitsu black belt' : 'Faixa preta de Jiu-Jitsu'}</small></span></a>
            <p>Carlson Gracie Manaus</p>
            <p>{t.footerAbout}</p>
            <img className="footer-bjj" src="/images/logo-bjj.jpeg" alt="David Moreira Brazilian Jiu-Jitsu" />
          </div>
          <div className="footer-links"><h3>{t.footerNav}</h3>{t.nav.map((label, index) => <a key={label} href={`#${sectionIds[index]}`}>{label}</a>)}</div>
          <div className="footer-contact"><h3>{t.contactEyebrow}</h3><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">+55 (92) 99391-6066</a><a href={instagramUrl} target="_blank" rel="noreferrer">@manauarastyle_wrestling</a><p>Manaus, AM — Brasil</p></div>
        </div>
        <div className="footer-bottom content-width"><span>© {new Date().getFullYear()} David Moreira — {t.rights}</span><a href="#home">{t.backToTop}<ArrowUp size={14} /></a></div>
      </footer>
      <a className="whatsapp-fab" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label={t.chatLabel}><MessageCircle size={22} /></a>
    </>
  )
}

export default App
