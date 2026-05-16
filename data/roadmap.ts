export type RoadmapTheme = "cyan" | "blue" | "emerald" | "amber" | "violet" | "slate";

export type RoadmapStep = {
  step: string;
  title: string;
  description: string;
  milestone: string;
  topics: string[];
  theme: RoadmapTheme;
};

export const roadmapSteps: RoadmapStep[] = [
  {
    step: "01",
    title: "HTML/CSS",
    description:
      "Xây nền tảng giao diện web bằng semantic HTML, CSS layout và responsive mobile-first.",
    milestone: "Hoàn thành landing page cá nhân",
    topics: ["Semantic HTML", "Flexbox/Grid", "Responsive", "Deploy"],
    theme: "cyan",
  },
  {
    step: "02",
    title: "JavaScript",
    description:
      "Hiểu cú pháp, DOM, event, async và cách biến một trang tĩnh thành trải nghiệm tương tác.",
    milestone: "Làm Todo App có lưu dữ liệu",
    topics: ["Variables", "Functions", "DOM", "Async"],
    theme: "amber",
  },
  {
    step: "03",
    title: "React/Next.js",
    description:
      "Học component, props, state, routing, rendering và cách dựng frontend có cấu trúc.",
    milestone: "Dựng course platform frontend",
    topics: ["Components", "App Router", "TypeScript", "SEO"],
    theme: "blue",
  },
  {
    step: "04",
    title: "Java/Spring Boot",
    description:
      "Xây backend API bằng Java, OOP, Spring Boot, validation và mô hình service/repository.",
    milestone: "Tạo REST API cho khóa học",
    topics: ["Java Core", "REST API", "Validation", "Auth"],
    theme: "emerald",
  },
  {
    step: "05",
    title: "Database",
    description:
      "Lưu trữ dữ liệu bằng SQL, thiết kế bảng, quan hệ và truy vấn cho ứng dụng thực tế.",
    milestone: "Thiết kế database course platform",
    topics: ["SQL", "MySQL", "Relations", "Indexes"],
    theme: "violet",
  },
  {
    step: "06",
    title: "Project thực chiến",
    description:
      "Ghép frontend, backend, database, deploy và viết README để có project hoàn chỉnh đưa vào CV.",
    milestone: "Public project full-stack",
    topics: ["Portfolio", "Course Platform", "REST API", "Deploy"],
    theme: "slate",
  },
];

export type EnglishTopic = {
  title: string;
  description: string;
  lessons: string[];
};

export const englishFreeTopics: EnglishTopic[] = [
  {
    title: "Bảng chữ cái",
    description: "Làm quen âm, chữ cái và cách đọc đơn giản để bắt đầu lại chắc hơn.",
    lessons: ["Alphabet", "Spelling", "Basic sounds"],
  },
  {
    title: "Phát âm cơ bản",
    description: "Tập âm thường gặp, trọng âm từ và cách đọc chậm rõ khi học tài liệu.",
    lessons: ["Vowels", "Consonants", "Word stress"],
  },
  {
    title: "Từ vựng nền tảng",
    description: "Nhóm từ vựng phổ biến trong lớp học, công việc và tài liệu lập trình.",
    lessons: ["Daily words", "Learning words", "Tech words"],
  },
  {
    title: "Ngữ pháp mất gốc",
    description: "Nắm câu đơn, thì cơ bản và cách đọc hiểu câu trong documentation.",
    lessons: ["Simple sentence", "Tenses", "Reading patterns"],
  },
  {
    title: "English for Developers",
    description: "Từ vựng, mẫu câu và cách đọc docs, issue, commit message cho developer.",
    lessons: ["Docs reading", "Error messages", "Git vocabulary"],
  },
];

export type PracticalProject = {
  title: string;
  description: string;
  stack: string[];
  result: string;
};

export const practicalProjects: PracticalProject[] = [
  {
    title: "Portfolio",
    description: "Trang cá nhân chuyên nghiệp để giới thiệu kỹ năng, dự án và thông tin liên hệ.",
    stack: ["HTML", "CSS", "Deploy"],
    result: "Có link public đưa vào CV",
  },
  {
    title: "Todo App",
    description: "Ứng dụng quản lý công việc nhỏ, luyện DOM, state và lưu dữ liệu local.",
    stack: ["JavaScript", "LocalStorage"],
    result: "Nắm flow CRUD cơ bản",
  },
  {
    title: "Course Platform",
    description: "Frontend nền tảng học online với khóa học, lesson, roadmap và dashboard.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    result: "Có project frontend hoàn chỉnh",
  },
  {
    title: "REST API Project",
    description: "Backend quản lý khóa học, học viên, bài học và tiến độ học tập.",
    stack: ["Java", "Spring Boot", "MySQL"],
    result: "Sẵn sàng ghép full-stack",
  },
];

export const learningBenefits = [
  "Học miễn phí, phù hợp người mới bắt đầu",
  "Roadmap rõ ràng từ frontend đến backend",
  "Có bài tập thực hành sau từng chặng",
  "Có project thật để đưa vào CV",
];
