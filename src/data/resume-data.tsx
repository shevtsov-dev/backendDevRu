import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {TelegramIcon} from "@/components/icons/TelegramIcon";

export const RESUME_DATA = {
  name: "Роман Шевцов",
  initials: "РШ",
  location: "Минск, Беларусь, GMT",
  locationLink: "https://www.google.com/maps/place/Minsk",
  about:
    "Ориентированный на детали Backend-разработчик, нацеленный на создание высококачественных продуктов.",
  summary:
    "Как PHP-разработчик, я специализируюсь на поддержке и развитии веб-приложений, а также интеграции новых функций.\n" +
      "Мне нравится работать в команде, где могу вносить вклад в успешную реализацию задач. В своей работе я использую PHP и JavaScript, постоянно изучая новые технологии и инструменты. Я стремлюсь к профессиональному росту и открыт для новых возможностей.",
  hobby:
    "Изучение новых языков программирования — самостоятельное изучение новых технологий, фреймворков или языков.\n" +
      "\n" +
      "Чтение IT-литературы — чтение книг, статей и блогов о программировании, технологиях и разработке.\n" +
      "\n" +
      "Менторство  — обучение школьников математике. Также есть опыт в обучении программированию.\n" +
      "\n" +
      "Шахматы  — увлекаюсь игрой в шахматы.\n" +
      "\n" +
      "Фотографирование — делаю снимки природы и людей.",
  avatarUrl: "https://avatars.githubusercontent.com/u/68058566?v=4",
  contact: {
    email: "roman.shevtsov.dev@gmail.com",
    tel: "+375255403943",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shevtsov-dev",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roman-shevtsov-8a416b1b2/",
        icon: LinkedInIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/WebDevRamirez",
        icon: TelegramIcon,
      },
      /*{
        name: "X",
        url: "#",
        icon: XIcon,
      },*/
    ],
  },
  education: [
    {
      school: "Могилёвский Государственный Университет им. А. Кулешова",
      degree: "Математика и информатика",
      start: "2016",
      end: "2020",
    },
    {
      school: "Минский Государственный высший радиотехнический колледж",
      degree: "Техническая эксплуатация электронных вычислительных средств",
      start: "2012",
      end: "2016",
    },
  ],
  courses: [
    {
      course: "Laravel",
      degree: "Udemy",
      date: "2024",
    },
    {
      course: "React - Полный курс",
      degree: "Udemy",
      date: "2024",
    },
    {
      course: "Web разработчик",
      degree: "TeachMeSkills",
      date: "2024",
    },
    {
      course: "PHP 8 - Полное руководство",
      degree: "Udemy",
      date: "2023",
    },
    {
      course: "JavaScript - Полное руководство",
      degree: "Udemy",
      date: "2022",
    },
  ],
  work: [
    {
      company: "EntHub.it",
      link: "https://enthub.it/",
      badges: ["Удалённо"],
      title: "Full-stack разработчик",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Разработка и поддержка пользовательских интерфейсов веб-приложений. Технологии: JS, PHP, Laravel, CSS5, MySQL, Bootstrap, Tailwind, Git",
    },
  ],
  qualities: [
    "Обучаемость",
    "Инициативность",
    "Ответственность",
    "Трудолюбие",
    "Командная работа",
    "Креативность",
    "Коммуникабельность",
    "Адаптивность",
    "Тайм-менеджмент",
    "Критическое мышление",
    "Управление стрессом",
    "Навыки решения проблем",
  ],
  skills: [
    "PHP",
    "Laravel",
    "Bitrix",
    "JavaScript",
    "JQuery",
    "React",
    "Nginx",
    "Apache",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
    "Git",
    "GitLab",
    "GitHub",
    "SQL",
    "MySQL",
    "phpMyAdmin",
    "Figma",
    "Менторство",
  ],
  /*projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],*/
} as const;
