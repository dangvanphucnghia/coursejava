export type CourseCategory = "java" | "frontend" | "backend" | "english" | "project";

export type CourseStatus = "available" | "coming-soon";

export type CourseTheme = "cyan" | "blue" | "emerald" | "amber" | "violet";

export type Course = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  category: CourseCategory;
  level: string;
  duration: string;
  priceLabel: string;
  href: string;
  status: CourseStatus;
  theme: CourseTheme;
  tags: string[];
  outcomes: string[];
  lessonsCount?: number;
  featured?: boolean;
  ctaLabel?: string;
};

export const courseCategoryOptions: Array<{
  value: CourseCategory | "all";
  label: string;
}> = [
  { value: "all", label: "Tất cả" },
  { value: "java", label: "Java" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "english", label: "English Free" },
  { value: "project", label: "Project" },
];

export const courses: Course[] = [
  {
    slug: "java-core",
    title: "Java Core",
    eyebrow: "Nền tảng bắt buộc",
    description:
      "Học Java từ cú pháp, OOP, Collections, Exception, I/O đến tư duy viết code rõ ràng cho người mới.",
    category: "java",
    level: "Beginner",
    duration: "65 bài học",
    priceLabel: "FREE",
    href: "/courses/java-core",
    status: "available",
    theme: "cyan",
    tags: ["Java", "OOP", "Collections", "I/O"],
    outcomes: [
      "Nắm cú pháp Java và cấu trúc class",
      "Hiểu OOP qua ví dụ dễ tiếp cận",
      "Có project console để đưa vào CV",
    ],
    lessonsCount: 65,
    featured: true,
    ctaLabel: "Học ngay",
  },
  {
    slug: "html-css-for-beginners",
    title: "HTML/CSS cho người mới",
    eyebrow: "Frontend căn bản",
    description:
      "Xây layout web từ số 0, hiểu semantic HTML, responsive CSS và cách dựng giao diện sạch.",
    category: "frontend",
    level: "Mất gốc",
    duration: "12 bài học",
    priceLabel: "FREE",
    href: "/courses/html-css-for-beginners",
    status: "coming-soon",
    theme: "blue",
    tags: ["HTML", "CSS", "Responsive"],
    outcomes: [
      "Biết dựng trang web semantic",
      "Nắm layout flex/grid cơ bản",
      "Làm được landing page đầu tiên",
    ],
    lessonsCount: 12,
    featured: true,
    ctaLabel: "Xem lộ trình",
  },
  {
    slug: "english-free",
    title: "English Free",
    eyebrow: "Tiếng Anh mất gốc",
    description:
      "Bắt đầu lại từ bảng chữ cái, phát âm, từ vựng nền tảng và English for Developers.",
    category: "english",
    level: "Mất gốc",
    duration: "12 bài học",
    priceLabel: "FREE",
    href: "/courses/english-free",
    status: "coming-soon",
    theme: "emerald",
    tags: ["Pronunciation", "Vocabulary", "Grammar"],
    outcomes: [
      "Đọc được tài liệu lập trình cơ bản",
      "Nắm nhóm từ vựng developer hay gặp",
      "Tự tin hơn khi học course tiếng Anh",
    ],
    lessonsCount: 12,
    featured: true,
    ctaLabel: "Xem lộ trình",
  },
  {
    slug: "spring-boot",
    title: "Spring Boot",
    eyebrow: "Backend thực chiến",
    description:
      "Xây REST API, validation, database, authentication và chuẩn bị nền tảng backend cho full-stack.",
    category: "backend",
    level: "Sau Java Core",
    duration: "16 bài học",
    priceLabel: "FREE",
    href: "/courses/spring-boot",
    status: "coming-soon",
    theme: "amber",
    tags: ["Spring Boot", "REST API", "MySQL"],
    outcomes: [
      "Tạo REST API theo mô hình layer",
      "Kết nối database và xử lý lỗi",
      "Hoàn thiện backend cho project course platform",
    ],
    lessonsCount: 16,
    featured: true,
    ctaLabel: "Xem lộ trình",
  },
  {
    slug: "javascript-foundation",
    title: "JavaScript Foundation",
    eyebrow: "Tư duy lập trình web",
    description:
      "Học biến, hàm, object, array, DOM, async và cách JavaScript vận hành trong trình duyệt.",
    category: "frontend",
    level: "Beginner",
    duration: "12 bài học",
    priceLabel: "FREE",
    href: "/courses/javascript-foundation",
    status: "coming-soon",
    theme: "amber",
    tags: ["JavaScript", "DOM", "Async"],
    outcomes: [
      "Viết được logic tương tác web",
      "Hiểu DOM và event cơ bản",
      "Sẵn sàng học React/Next.js",
    ],
    lessonsCount: 12,
    ctaLabel: "Xem lộ trình",
  },
  {
    slug: "project-portfolio",
    title: "Project Portfolio",
    eyebrow: "Project đưa vào CV",
    description:
      "Tự xây portfolio developer có responsive, section dự án, contact và tối ưu trình bày năng lực.",
    category: "project",
    level: "Beginner",
    duration: "9 bài học",
    priceLabel: "FREE",
    href: "/courses/project-portfolio",
    status: "coming-soon",
    theme: "violet",
    tags: ["Project", "CV", "Deploy"],
    outcomes: [
      "Có sản phẩm public để gửi nhà tuyển dụng",
      "Biết cách trình bày dự án cá nhân",
      "Làm quen quy trình deploy",
    ],
    lessonsCount: 9,
    ctaLabel: "Xem checklist",
  },
];

export const featuredCourses = courses.filter((course) => course.featured);

export const javaCoreCourse =
  courses.find((course) => course.slug === "java-core") ?? courses[0];

export type LessonModule = {
  title: string;
  lessons: string[];
};

export const javaCoreLessons: LessonModule[] = [
  {
    title: "Khởi động với Java",
    lessons: [
      "Introduce and Setup Environment",
      "Structure of a Java class",
      "Data types",
      "Java Output",
      "Method",
    ],
  },
  {
    title: "Lập trình hướng đối tượng",
    lessons: [
      "OOP in Java",
      "Wrapper class",
      "Keyword - static",
      "Define the scope of variables",
      "Call a method in Java",
      "Java Input",
      "String",
      "Regex",
      "Encapsulation",
      "Project - Phase 1",
      "Constructor",
      "Inheritance",
    ],
  },
  {
    title: "OOP nâng cao và project",
    lessons: [
      "Project - Phase 2",
      "Project - Phase 3",
      "Polymorphism",
      "Abstraction",
      "Keyword - final",
      "Project - Phase 4",
    ],
  },
  {
    title: "Collections, Lambda và I/O",
    lessons: [
      "ArrayList",
      "Sort Object",
      "[Advanced - Lambda] - Overview",
      "[Advanced - Lambda] - Advanced sort",
      "Project - Phase 5",
      "Java IO",
      "Project - Phase 6",
    ],
  },
];

export const javaCoreFinalProject = {
  title: "Student Management Console App",
  description:
    "Ứng dụng quản lý học viên bằng Java console, áp dụng OOP, ArrayList, sort, validate input và đọc ghi file.",
  deliverables: [
    "Thiết kế class rõ trách nhiệm",
    "Thêm, sửa, xóa, tìm kiếm và sắp xếp dữ liệu",
    "Lưu dữ liệu bằng Java I/O",
    "README hướng dẫn chạy project",
  ],
};

export const javaCoreLearningLink =
  "https://drive.google.com/drive/folders/16bIcZakK8T1OuEUC0Lek3sPDbi1BrOSd?hl=vi";
