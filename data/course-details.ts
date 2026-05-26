import {
  javaCoreCourse,
  javaCoreFinalProject,
  javaCoreLearningLink,
  type Course,
} from "@/data/courses";

export type Lesson = {
  title: string;
  goal: string;
  practice: string;
};

export type CourseModule = {
  title: string;
  description: string;
  lessons: Lesson[];
};

export type FinalProject = {
  title: string;
  description: string;
  requirements: string[];
  evaluation: string[];
};

export type CourseResource = {
  title: string;
  description: string;
  type: "Checklist" | "Practice" | "Documentation" | "Vocabulary" | "Project";
};

export type CourseDetail = {
  slug: Course["slug"];
  heroTitle: string;
  summary: string;
  promise: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  studyTime: string;
  prerequisites: string[];
  audience: string[];
  outcomes: string[];
  studyPlan: string[];
  modules: CourseModule[];
  finalProject: FinalProject;
  resources: CourseResource[];
  nextSteps: string[];
};

const internalCourseLink = (slug: Course["slug"]) => `/courses/${slug}#lessons`;

export const courseDetails: Record<Course["slug"], CourseDetail> = {
  "java-core": {
    slug: "java-core",
    heroTitle: "Java Core Basic cho người mới bắt đầu",
    summary:
      "Học Java từ cú pháp, class, method đến OOP, Collections, Lambda và Java I/O bằng ví dụ đơn giản, có project theo từng phase.",
    promise:
      "Sau khóa học, bạn có thể đọc hiểu code Java cơ bản, tự viết chương trình console có cấu trúc và sẵn sàng bước sang Spring Boot.",
    primaryCtaLabel: "Học ngay miễn phí",
    primaryCtaHref: javaCoreLearningLink,
    secondaryCtaLabel: "Xem danh sách bài học",
    studyTime: "4-6 tuần nếu học 5 buổi/tuần",
    prerequisites: [
      "Biết sử dụng máy tính, trình duyệt và thao tác file cơ bản",
      "Có laptop cài JDK và IDE như IntelliJ IDEA hoặc VS Code",
      "Không cần biết lập trình trước, khóa học đi từ khái niệm đầu tiên",
    ],
    audience: [
      "Người mới bắt đầu học lập trình từ số 0",
      "Người muốn học Java trước khi sang Spring Boot",
      "Người cần nền tảng OOP, Collections và Java I/O",
    ],
    outcomes: javaCoreCourse.outcomes,
    studyPlan: [
      "Xem bài học ngắn, ghi lại khái niệm bằng ví dụ của chính bạn",
      "Gõ lại code thay vì chỉ xem, sau đó đổi yêu cầu nhỏ để kiểm tra hiểu bài",
      "Hoàn thành từng phase project trước khi qua module tiếp theo",
      "Cuối tuần review lỗi sai, refactor tên biến, method và class cho dễ đọc",
    ],
    modules: [
      {
        title: "Khởi động với Java",
        description:
          "Thiết lập môi trường, hiểu cấu trúc chương trình Java và làm quen với biến, kiểu dữ liệu, output, method.",
        lessons: [
          {
            title: "Introduce and Setup Environment",
            goal: "Cài JDK, IDE và chạy được chương trình Java đầu tiên.",
            practice: "Tạo project Hello Java, in tên, tuổi và mục tiêu học của bạn.",
          },
          {
            title: "Structure of a Java class",
            goal: "Hiểu class, main method, statement và cách chương trình bắt đầu chạy.",
            practice: "Viết class StudentPrinter in thông tin một học viên.",
          },
          {
            title: "Data types",
            goal: "Phân biệt primitive type, String và cách chọn kiểu dữ liệu phù hợp.",
            practice: "Khai báo thông tin sản phẩm gồm tên, giá, số lượng, trạng thái còn hàng.",
          },
          {
            title: "Java Output",
            goal: "Dùng print, println, printf để trình bày dữ liệu rõ ràng.",
            practice: "In hóa đơn mini với format giá tiền và tổng tiền.",
          },
          {
            title: "Method",
            goal: "Tách logic thành method có input, output và tên rõ nghĩa.",
            practice: "Viết method tính điểm trung bình và xếp loại học lực.",
          },
        ],
      },
      {
        title: "OOP nền tảng",
        description:
          "Học object, class, encapsulation, constructor, inheritance và cách chia trách nhiệm trong code Java.",
        lessons: [
          {
            title: "OOP in Java",
            goal: "Hiểu object là gì và vì sao OOP giúp code dễ mở rộng.",
            practice: "Thiết kế class Student có thuộc tính và hành vi cơ bản.",
          },
          {
            title: "Wrapper class",
            goal: "Hiểu wrapper type và tình huống dùng với Collections.",
            practice: "Chuyển đổi String input sang Integer, Double và xử lý lỗi nhập sai.",
          },
          {
            title: "Keyword - static",
            goal: "Phân biệt field/method static và instance.",
            practice: "Tạo StudentCounter đếm số lượng object đã tạo.",
          },
          {
            title: "Define the scope of variables",
            goal: "Hiểu scope để tránh lỗi biến không tồn tại hoặc dùng sai nơi.",
            practice: "Sửa một đoạn code cố tình đặt biến sai scope.",
          },
          {
            title: "Call a method in Java",
            goal: "Gọi method giữa các object và truyền tham số đúng kiểu.",
            practice: "Tạo CalculatorService và gọi từ class Main.",
          },
          {
            title: "Java Input",
            goal: "Nhập dữ liệu với Scanner và kiểm soát input cơ bản.",
            practice: "Viết menu nhập thông tin học viên từ bàn phím.",
          },
          {
            title: "String",
            goal: "Xử lý chuỗi, so sánh chuỗi và dùng method String thông dụng.",
            practice: "Chuẩn hóa họ tên: trim, viết hoa chữ cái đầu, kiểm tra email.",
          },
          {
            title: "Regex",
            goal: "Dùng regex cơ bản để validate dữ liệu.",
            practice: "Validate email, số điện thoại và mã học viên.",
          },
          {
            title: "Encapsulation",
            goal: "Ẩn dữ liệu bằng private field, getter/setter và validation.",
            practice: "Chặn điểm số ngoài khoảng 0-10 trong class Student.",
          },
          {
            title: "Constructor",
            goal: "Khởi tạo object đúng trạng thái ngay từ đầu.",
            practice: "Tạo nhiều constructor cho Student và Course.",
          },
          {
            title: "Inheritance",
            goal: "Hiểu kế thừa và khi nào nên dùng thay vì copy code.",
            practice: "Tạo Person, Student, Teacher với thuộc tính dùng chung.",
          },
        ],
      },
      {
        title: "OOP nâng cao và project phase",
        description:
          "Đi sâu vào polymorphism, abstraction, final và áp dụng vào project quản lý học viên theo từng phase.",
        lessons: [
          {
            title: "Project - Phase 1",
            goal: "Tạo model và menu đầu tiên cho project quản lý học viên.",
            practice: "Tạo Student, Course, MainMenu và in danh sách mẫu.",
          },
          {
            title: "Project - Phase 2",
            goal: "Thêm chức năng nhập và hiển thị dữ liệu.",
            practice: "Thêm học viên từ bàn phím và in danh sách dạng bảng.",
          },
          {
            title: "Project - Phase 3",
            goal: "Tách service layer để logic không dồn vào Main.",
            practice: "Tạo StudentService với add, find, printAll.",
          },
          {
            title: "Polymorphism",
            goal: "Hiểu override và cách object có nhiều hình thái khi chạy.",
            practice: "Tạo nhiều loại user và override method getRoleName.",
          },
          {
            title: "Abstraction",
            goal: "Dùng abstract class/interface để mô tả hợp đồng hành vi.",
            practice: "Tạo Printable interface cho các object cần in thông tin.",
          },
          {
            title: "Keyword - final",
            goal: "Biết dùng final cho biến, method, class đúng mục đích.",
            practice: "Định nghĩa hằng số MAX_SCORE và thử bảo vệ method không cho override.",
          },
          {
            title: "Project - Phase 4",
            goal: "Refactor project theo interface và service rõ trách nhiệm.",
            practice: "Tách validation, printing và student management thành các class riêng.",
          },
        ],
      },
      {
        title: "Collections, Lambda và Java I/O",
        description:
          "Làm việc với danh sách object, sắp xếp, lambda cơ bản và lưu dữ liệu bằng file.",
        lessons: [
          {
            title: "ArrayList",
            goal: "Lưu nhiều object và thao tác thêm, sửa, xóa, tìm kiếm.",
            practice: "Quản lý danh sách học viên bằng ArrayList.",
          },
          {
            title: "Sort Object",
            goal: "Sắp xếp object theo tên, điểm hoặc ngày tạo.",
            practice: "Sắp xếp học viên theo điểm giảm dần và tên tăng dần.",
          },
          {
            title: "[Advanced - Lambda] - Overview",
            goal: "Hiểu lambda ở mức nhập môn để đọc được code hiện đại.",
            practice: "Viết Comparator bằng lambda.",
          },
          {
            title: "[Advanced - Lambda] - Advanced sort",
            goal: "Kết hợp nhiều tiêu chí sort rõ ràng.",
            practice: "Sort theo trạng thái, điểm, sau đó tên.",
          },
          {
            title: "Project - Phase 5",
            goal: "Hoàn thiện CRUD và tìm kiếm trong project.",
            practice: "Thêm update/delete/findByKeyword cho StudentService.",
          },
          {
            title: "Java IO",
            goal: "Đọc ghi file text để lưu dữ liệu đơn giản.",
            practice: "Lưu danh sách học viên ra file và load lại khi mở app.",
          },
          {
            title: "Project - Phase 6",
            goal: "Hoàn thiện project cuối khóa và README.",
            practice: "Test toàn bộ menu, xử lý input sai và viết hướng dẫn chạy project.",
          },
        ],
      },
    ],
    finalProject: {
      title: javaCoreFinalProject.title,
      description: javaCoreFinalProject.description,
      requirements: javaCoreFinalProject.deliverables,
      evaluation: [
        "Code chia class rõ trách nhiệm, không dồn toàn bộ vào Main",
        "Có validate input và thông báo lỗi dễ hiểu",
        "Có CRUD, tìm kiếm, sắp xếp và lưu dữ liệu",
        "README mô tả chức năng, cách chạy và ảnh minh họa terminal",
      ],
    },
    resources: [
      {
        title: "Java syntax checklist",
        description: "Checklist cú pháp biến, method, class, constructor, if/else, loop.",
        type: "Checklist",
      },
      {
        title: "OOP practice set",
        description: "Bộ bài tập thiết kế class, encapsulation, inheritance và interface.",
        type: "Practice",
      },
      {
        title: "Project README template",
        description: "Mẫu README giúp trình bày project Java console chuyên nghiệp.",
        type: "Project",
      },
    ],
    nextSteps: [
      "Học SQL căn bản để biết dữ liệu được lưu trong database như thế nào",
      "Học Spring Boot để biến logic Java thành REST API",
      "Ghép backend Java với frontend Next.js trong project course platform",
    ],
  },
  "html-css-for-beginners": {
    slug: "html-css-for-beginners",
    heroTitle: "HTML/CSS cho người mới mất gốc",
    summary:
      "Học cách dựng trang web đúng semantic, chia layout mobile-first và viết CSS gọn gàng trước khi học JavaScript.",
    promise:
      "Sau khóa học, bạn có thể tự dựng landing page responsive, đọc được cấu trúc HTML/CSS của một website và biết cách sửa giao diện không bị vỡ layout.",
    primaryCtaLabel: "Xem lộ trình học",
    primaryCtaHref: internalCourseLink("html-css-for-beginners"),
    secondaryCtaLabel: "Xem bài tập",
    studyTime: "2-3 tuần nếu học 45-60 phút/ngày",
    prerequisites: [
      "Chưa cần biết lập trình",
      "Biết tạo folder, mở file bằng VS Code và dùng trình duyệt",
      "Nên cài Live Server hoặc dùng Next.js sau khi đã quen HTML/CSS",
    ],
    audience: [
      "Người mới muốn học frontend từ nền móng",
      "Người hay copy CSS nhưng chưa hiểu layout",
      "Người cần làm trang portfolio hoặc landing page đầu tiên",
    ],
    outcomes: [
      "Biết viết HTML semantic, dễ đọc và tốt cho SEO",
      "Nắm box model, spacing, typography, flexbox, grid",
      "Dựng được trang responsive cho mobile, tablet, desktop",
    ],
    studyPlan: [
      "Mỗi bài chỉ tập trung một khái niệm và một mini exercise",
      "Luôn xem giao diện trên mobile trước, sau đó mở rộng lên desktop",
      "Sau mỗi module, refactor class name và spacing để layout sạch hơn",
      "Chụp screenshot trước/sau khi sửa để luyện mắt UI",
    ],
    modules: [
      {
        title: "HTML semantic và cấu trúc trang",
        description:
          "Xây nền móng HTML đúng nghĩa, biết dùng thẻ theo vai trò thay vì chỉ dùng div.",
        lessons: [
          {
            title: "HTML document structure",
            goal: "Hiểu html, head, body, metadata và cách trình duyệt đọc trang.",
            practice: "Tạo trang giới thiệu khóa học có title, description và heading đúng cấp.",
          },
          {
            title: "Semantic tags",
            goal: "Dùng header, main, section, article, nav, footer đúng ngữ cảnh.",
            practice: "Chia lại một trang toàn div thành cấu trúc semantic.",
          },
          {
            title: "Text, links and media",
            goal: "Trình bày nội dung, link, image có alt và thứ tự đọc hợp lý.",
            practice: "Tạo section bài viết có ảnh, link tài liệu và danh sách ý chính.",
          },
          {
            title: "Forms basic",
            goal: "Hiểu label, input, button, required và trải nghiệm nhập liệu cơ bản.",
            practice: "Tạo form đăng ký học miễn phí có label rõ ràng.",
          },
        ],
      },
      {
        title: "CSS nền tảng",
        description:
          "Hiểu cách CSS áp dụng style, xử lý spacing, typography và màu sắc nhất quán.",
        lessons: [
          {
            title: "Selectors and cascade",
            goal: "Biết selector, specificity và tránh CSS ghi đè khó kiểm soát.",
            practice: "Sửa một file CSS bị conflict màu button và heading.",
          },
          {
            title: "Box model",
            goal: "Hiểu margin, padding, border, width và box-sizing.",
            practice: "Dựng 3 card khóa học có spacing đều và không vỡ chiều rộng.",
          },
          {
            title: "Typography",
            goal: "Chọn font size, line-height, weight phù hợp để dễ đọc.",
            practice: "Tối ưu một đoạn mô tả dài thành block dễ scan.",
          },
          {
            title: "Color and state",
            goal: "Dùng màu, hover, focus state có chủ đích.",
            practice: "Thiết kế button primary/secondary có hover và focus visible.",
          },
        ],
      },
      {
        title: "Layout responsive",
        description:
          "Dùng flexbox, grid và media query để layout chạy tốt trên nhiều kích thước màn hình.",
        lessons: [
          {
            title: "Flexbox",
            goal: "Sắp xếp item theo hàng/cột, căn giữa và xử lý khoảng cách.",
            practice: "Dựng navbar responsive đơn giản.",
          },
          {
            title: "CSS Grid",
            goal: "Tạo lưới card rõ ràng và tự xuống dòng.",
            practice: "Dựng grid danh sách khóa học 1/2/3 cột theo viewport.",
          },
          {
            title: "Mobile-first responsive",
            goal: "Viết style từ mobile trước rồi nâng cấp lên tablet/desktop.",
            practice: "Dựng hero section không bị tràn chữ trên điện thoại.",
          },
          {
            title: "Layout debugging",
            goal: "Biết tìm nguyên nhân overflow, overlap và spacing lệch.",
            practice: "Fix một layout cố tình bị tràn ngang trên mobile.",
          },
        ],
      },
    ],
    finalProject: {
      title: "Responsive Learning Landing Page",
      description:
        "Dựng landing page giới thiệu một khóa học miễn phí với hero, roadmap, course cards, form đăng ký và footer.",
      requirements: [
        "HTML semantic đầy đủ header, main, section, footer",
        "Mobile-first, không tràn ngang ở màn hình nhỏ",
        "Có card khóa học, CTA, form và trạng thái hover/focus",
        "CSS được chia theo section, class name dễ hiểu",
      ],
      evaluation: [
        "Nội dung đọc dễ, heading đúng thứ tự",
        "Spacing đều và giao diện không bị một màu",
        "Responsive tốt trên 375px, 768px và desktop",
        "Không dùng inline style hoặc class đặt tên mơ hồ",
      ],
    },
    resources: [
      {
        title: "Semantic HTML checklist",
        description: "Danh sách thẻ semantic nên dùng cho từng phần giao diện.",
        type: "Checklist",
      },
      {
        title: "Responsive layout drills",
        description: "Bài tập nhỏ luyện flex, grid, spacing và media query.",
        type: "Practice",
      },
      {
        title: "Landing page wireframe",
        description: "Khung nội dung để học viên tự dựng trang đầu tiên.",
        type: "Project",
      },
    ],
    nextSteps: [
      "Học JavaScript Foundation để thêm tương tác cho giao diện",
      "Học React/Next.js sau khi đã nắm component layout bằng HTML/CSS",
      "Làm Project Portfolio để luyện trình bày sản phẩm cá nhân",
    ],
  },
  "javascript-foundation": {
    slug: "javascript-foundation",
    heroTitle: "JavaScript Foundation cho frontend",
    summary:
      "Học tư duy lập trình bằng JavaScript: biến, hàm, object, array, DOM, event, async và cách debug lỗi.",
    promise:
      "Sau khóa học, bạn có thể viết logic tương tác cho website, đọc hiểu code JavaScript cơ bản và sẵn sàng học React/Next.js.",
    primaryCtaLabel: "Xem syllabus JavaScript",
    primaryCtaHref: internalCourseLink("javascript-foundation"),
    secondaryCtaLabel: "Xem bài tập DOM",
    studyTime: "3-4 tuần nếu học đều mỗi ngày",
    prerequisites: [
      "Nên biết HTML/CSS cơ bản",
      "Có VS Code và trình duyệt Chrome/Edge",
      "Biết mở DevTools console để xem lỗi",
    ],
    audience: [
      "Người đã học HTML/CSS và muốn thêm tương tác",
      "Người học JavaScript nhiều lần nhưng chưa hiểu bản chất",
      "Người chuẩn bị học React/Next.js",
    ],
    outcomes: [
      "Viết được hàm, điều kiện, vòng lặp và xử lý array/object",
      "Tương tác DOM bằng event, form và state đơn giản",
      "Hiểu async/await ở mức đủ dùng với API cơ bản",
    ],
    studyPlan: [
      "Mỗi khái niệm đều gắn với một bài tập trên trình duyệt",
      "Tập đọc lỗi trong console trước khi tìm đáp án",
      "Viết function nhỏ, test bằng nhiều input khác nhau",
      "Cuối khóa làm Todo App có filter và localStorage",
    ],
    modules: [
      {
        title: "Ngôn ngữ JavaScript căn bản",
        description:
          "Nắm biến, kiểu dữ liệu, toán tử, điều kiện và vòng lặp để có nền tư duy lập trình.",
        lessons: [
          {
            title: "Variables and data types",
            goal: "Hiểu let, const, string, number, boolean, null, undefined.",
            practice: "Tạo profile object và in câu giới thiệu từ dữ liệu.",
          },
          {
            title: "Operators and conditions",
            goal: "Viết điều kiện if/else, so sánh và logic boolean.",
            practice: "Viết chương trình xếp loại điểm học viên.",
          },
          {
            title: "Loops",
            goal: "Dùng for, while và biết khi nào nên tránh loop phức tạp.",
            practice: "In bảng cửu chương và lọc số chẵn trong danh sách.",
          },
          {
            title: "Functions",
            goal: "Tách logic thành function có tham số và return rõ ràng.",
            practice: "Viết function tính tổng giỏ hàng và giảm giá.",
          },
        ],
      },
      {
        title: "Object, Array và xử lý dữ liệu",
        description:
          "Làm việc với dữ liệu dạng danh sách và object, nền tảng quan trọng cho React và API.",
        lessons: [
          {
            title: "Objects",
            goal: "Tạo, đọc, cập nhật object và hiểu nested object.",
            practice: "Quản lý thông tin course gồm title, lessons, author.",
          },
          {
            title: "Arrays",
            goal: "Dùng push, map, filter, find, reduce ở mức nhập môn.",
            practice: "Lọc khóa học miễn phí và tính tổng số bài học.",
          },
          {
            title: "Destructuring and spread",
            goal: "Viết code cập nhật dữ liệu gọn hơn, không sửa trực tiếp object cũ.",
            practice: "Clone course object và cập nhật trạng thái hoàn thành.",
          },
          {
            title: "Clean data functions",
            goal: "Viết function xử lý dữ liệu dễ test.",
            practice: "Viết searchCourses(keyword) không phụ thuộc DOM.",
          },
        ],
      },
      {
        title: "DOM, Event và Async",
        description:
          "Biến trang HTML/CSS thành ứng dụng nhỏ có tương tác, lưu dữ liệu và gọi API cơ bản.",
        lessons: [
          {
            title: "DOM selection",
            goal: "Chọn element và thay đổi text, class, attribute đúng cách.",
            practice: "Tạo counter tăng/giảm với trạng thái disabled.",
          },
          {
            title: "Events and forms",
            goal: "Bắt click, submit, input và validate form cơ bản.",
            practice: "Tạo form thêm task và báo lỗi khi nhập trống.",
          },
          {
            title: "LocalStorage",
            goal: "Lưu dữ liệu nhỏ trong trình duyệt và parse JSON an toàn.",
            practice: "Lưu danh sách todo sau khi reload trang.",
          },
          {
            title: "Fetch and async/await",
            goal: "Gọi API, xử lý loading/error và render dữ liệu.",
            practice: "Fetch danh sách bài viết giả lập và hiển thị skeleton đơn giản.",
          },
        ],
      },
    ],
    finalProject: {
      title: "Todo App có filter và localStorage",
      description:
        "Ứng dụng quản lý task gồm thêm, sửa trạng thái, xóa, filter theo trạng thái và lưu dữ liệu localStorage.",
      requirements: [
        "Có form thêm task và validate input",
        "Có filter all/active/completed",
        "Có localStorage để giữ dữ liệu sau reload",
        "Code chia function render, add, remove, toggle, filter rõ ràng",
      ],
      evaluation: [
        "Không thao tác DOM lặp lại quá mức cần thiết",
        "Function có tên rõ và ít phụ thuộc biến global",
        "Xử lý input trống và trạng thái danh sách rỗng",
        "Giao diện dùng được tốt trên mobile",
      ],
    },
    resources: [
      {
        title: "JavaScript function drills",
        description: "Bài tập luyện function, array method và object transformation.",
        type: "Practice",
      },
      {
        title: "DOM events checklist",
        description: "Checklist khi làm form, event delegation và render UI.",
        type: "Checklist",
      },
      {
        title: "MDN reading guide",
        description: "Cách đọc MDN cho người mới mà không bị quá tải thuật ngữ.",
        type: "Documentation",
      },
    ],
    nextSteps: [
      "Học React/Next.js để quản lý UI bằng component và state tốt hơn",
      "Làm Project Portfolio có tương tác nhỏ",
      "Học fetch API sâu hơn khi bắt đầu ghép backend",
    ],
  },
  "english-free": {
    slug: "english-free",
    heroTitle: "English Free cho người mất gốc muốn làm developer",
    summary:
      "Học lại tiếng Anh từ bảng chữ cái, phát âm, từ vựng nền tảng, ngữ pháp cơ bản đến English for Developers.",
    promise:
      "Sau khóa học, bạn tự tin hơn khi đọc lỗi, README, tài liệu lập trình cơ bản và hiểu những từ tiếng Anh xuất hiện thường xuyên trong code.",
    primaryCtaLabel: "Xem lộ trình English",
    primaryCtaHref: internalCourseLink("english-free"),
    secondaryCtaLabel: "Xem từ vựng developer",
    studyTime: "4 tuần, 20-30 phút/ngày",
    prerequisites: [
      "Không cần nền tiếng Anh trước",
      "Có tai nghe để luyện phát âm",
      "Sẵn sàng đọc chậm, lặp lại nhiều lần và ghi âm giọng đọc",
    ],
    audience: [
      "Người mất gốc tiếng Anh nhưng muốn học lập trình",
      "Người sợ đọc documentation tiếng Anh",
      "Người muốn hiểu từ vựng thường gặp trong code và lỗi runtime",
    ],
    outcomes: [
      "Đọc được từ vựng lập trình cơ bản",
      "Hiểu cấu trúc câu đơn trong tài liệu kỹ thuật",
      "Biết cách tra từ, ghi chú và ôn lại bằng ví dụ trong code",
    ],
    studyPlan: [
      "Mỗi ngày học 10-15 từ theo ngữ cảnh lập trình",
      "Đọc to câu ngắn, ghi âm và nghe lại để sửa phát âm",
      "Luôn đặt từ mới vào câu hoặc dòng code giả lập",
      "Cuối tuần đọc một README ngắn và highlight từ đã học",
    ],
    modules: [
      {
        title: "Bắt đầu lại từ âm và chữ",
        description:
          "Làm quen bảng chữ cái, cách đánh vần, âm cơ bản và thói quen nghe-đọc chậm.",
        lessons: [
          {
            title: "Alphabet and spelling",
            goal: "Đọc bảng chữ cái và đánh vần tên biến, file, folder.",
            practice: "Đánh vần các từ: class, method, variable, folder, branch.",
          },
          {
            title: "Basic sounds",
            goal: "Nhận diện nguyên âm/phụ âm dễ nhầm khi học từ kỹ thuật.",
            practice: "Luyện cặp từ: ship/sheep, code/cold, bug/back.",
          },
          {
            title: "Word stress",
            goal: "Biết trọng âm cơ bản để nghe từ quen dễ hơn.",
            practice: "Đánh dấu trọng âm: developer, variable, database, component.",
          },
        ],
      },
      {
        title: "Từ vựng nền tảng",
        description:
          "Học từ hay gặp trong lớp học, tài liệu, giao diện phần mềm và thông báo lỗi.",
        lessons: [
          {
            title: "Learning vocabulary",
            goal: "Nắm từ thường gặp khi học: lesson, practice, review, submit.",
            practice: "Viết 5 câu mô tả lịch học bằng từ mới.",
          },
          {
            title: "UI vocabulary",
            goal: "Hiểu từ trên giao diện: button, form, field, message, error.",
            practice: "Dịch một form đăng ký học sang tiếng Anh đơn giản.",
          },
          {
            title: "Error vocabulary",
            goal: "Hiểu từ trong lỗi: missing, invalid, required, expected, undefined.",
            practice: "Đọc 5 lỗi giả lập và đoán hành động cần sửa.",
          },
        ],
      },
      {
        title: "Ngữ pháp mất gốc cho đọc hiểu",
        description:
          "Tập trung cấu trúc câu đủ dùng để đọc documentation, không học lan man theo đề thi.",
        lessons: [
          {
            title: "Simple sentence",
            goal: "Nhận diện chủ ngữ, động từ, tân ngữ trong câu kỹ thuật.",
            practice: "Phân tích câu: The function returns a new array.",
          },
          {
            title: "Present simple in docs",
            goal: "Hiểu cách docs mô tả hành vi bằng thì hiện tại đơn.",
            practice: "Dịch 5 câu docs ngắn về method và component.",
          },
          {
            title: "Modal verbs",
            goal: "Hiểu can, should, must, may trong hướng dẫn kỹ thuật.",
            practice: "Viết quy tắc học code dùng should/must/can.",
          },
        ],
      },
      {
        title: "English for Developers",
        description:
          "Đưa tiếng Anh vào tình huống developer: đọc README, commit, issue, docs và error message.",
        lessons: [
          {
            title: "README reading",
            goal: "Biết đọc mục installation, usage, examples trong README.",
            practice: "Tóm tắt README ngắn thành 3 ý tiếng Việt.",
          },
          {
            title: "Git vocabulary",
            goal: "Hiểu commit, branch, merge, pull, push, issue.",
            practice: "Viết 5 commit message đơn giản bằng tiếng Anh.",
          },
          {
            title: "Documentation reading routine",
            goal: "Có quy trình đọc docs: scan heading, tìm example, tra từ khóa.",
            practice: "Đọc một trang docs ngắn và tạo glossary 10 từ.",
          },
        ],
      },
    ],
    finalProject: {
      title: "Developer English Glossary",
      description:
        "Tự tạo sổ tay 100 từ vựng developer có nghĩa tiếng Việt, ví dụ trong code/tài liệu và câu ghi nhớ.",
      requirements: [
        "Chia từ theo nhóm: UI, JavaScript, Java, Git, Error, Documentation",
        "Mỗi từ có nghĩa, ví dụ và ghi chú phát âm nếu cần",
        "Có 10 câu docs ngắn được dịch và phân tích",
        "Có 10 commit message cơ bản",
      ],
      evaluation: [
        "Từ vựng đặt trong ngữ cảnh lập trình, không học rời rạc",
        "Ví dụ ngắn, đúng và dễ ôn lại",
        "Có lịch review sau 1 ngày, 3 ngày, 7 ngày",
        "Người học đọc lại hiểu ngay mình đã ghi gì",
      ],
    },
    resources: [
      {
        title: "Developer vocabulary notebook",
        description: "Mẫu ghi chú từ vựng theo nhóm và theo ngữ cảnh code.",
        type: "Vocabulary",
      },
      {
        title: "Error message reading checklist",
        description: "Các bước đọc lỗi tiếng Anh trước khi tìm kiếm trên Google.",
        type: "Checklist",
      },
      {
        title: "README reading practice",
        description: "Bài luyện đọc README ngắn dành cho người mất gốc.",
        type: "Practice",
      },
    ],
    nextSteps: [
      "Đọc README của chính project Portfolio hoặc Todo App",
      "Học JavaScript/Java song song và ghi glossary theo từng bài",
      "Tập viết commit message tiếng Anh cho mỗi bài tập hoàn thành",
    ],
  },
  "spring-boot": {
    slug: "spring-boot",
    heroTitle: "Spring Boot REST API từ nền tảng Java Core",
    summary:
      "Học cách xây backend Java theo mô hình controller, service, repository, kết nối database, validation và xử lý lỗi.",
    promise:
      "Sau khóa học, bạn có thể tạo REST API cho một ứng dụng học online nhỏ và chuẩn bị ghép với frontend Next.js.",
    primaryCtaLabel: "Xem lộ trình Spring Boot",
    primaryCtaHref: internalCourseLink("spring-boot"),
    secondaryCtaLabel: "Xem project API",
    studyTime: "5-6 tuần sau khi học Java Core",
    prerequisites: [
      "Đã học Java Core, OOP, Collections và Exception cơ bản",
      "Biết SQL cơ bản: table, row, primary key, foreign key",
      "Biết dùng Postman hoặc công cụ gọi API tương tự",
    ],
    audience: [
      "Người muốn chuyển từ Java Core sang backend web",
      "Người muốn hiểu REST API và mô hình backend thực tế",
      "Người chuẩn bị làm project full-stack Java + Next.js",
    ],
    outcomes: [
      "Tạo REST API theo mô hình layer rõ ràng",
      "Kết nối database, validate request và xử lý lỗi",
      "Hoàn thiện backend course platform ở mức nhập môn",
    ],
    studyPlan: [
      "Mỗi endpoint phải test bằng Postman trước khi qua bài tiếp theo",
      "Luôn tách Controller, Service, Repository để giữ code dễ đọc",
      "Viết request/response mẫu vào README ngay khi hoàn thành endpoint",
      "Refactor DTO, exception và validation sau mỗi module",
    ],
    modules: [
      {
        title: "Spring Boot nhập môn",
        description:
          "Hiểu Spring Boot giải quyết vấn đề gì, cấu trúc project và cách tạo API đầu tiên.",
        lessons: [
          {
            title: "Create Spring Boot project",
            goal: "Tạo project với Spring Web, Validation và Lombok/JPA khi cần.",
            practice: "Tạo API GET /health trả về trạng thái ứng dụng.",
          },
          {
            title: "Controller and routing",
            goal: "Hiểu @RestController, @RequestMapping và HTTP method.",
            practice: "Tạo CourseController với GET /courses.",
          },
          {
            title: "Request and response",
            goal: "Nhận path variable, query param, request body và trả JSON.",
            practice: "Tạo endpoint tìm khóa học theo slug.",
          },
          {
            title: "Layered architecture",
            goal: "Tách controller, service, repository để code rõ trách nhiệm.",
            practice: "Refactor CourseController dùng CourseService.",
          },
        ],
      },
      {
        title: "Database và JPA",
        description:
          "Kết nối database, thiết kế entity và thao tác CRUD với Spring Data JPA.",
        lessons: [
          {
            title: "Entity and table mapping",
            goal: "Map class Java với bảng database bằng annotation cơ bản.",
            practice: "Tạo CourseEntity gồm id, slug, title, level, status.",
          },
          {
            title: "Repository",
            goal: "Dùng JpaRepository để truy vấn dữ liệu.",
            practice: "Tạo findBySlug và findByStatus.",
          },
          {
            title: "CRUD endpoints",
            goal: "Tạo API create, update, delete, get detail.",
            practice: "Hoàn thiện CRUD cho courses.",
          },
          {
            title: "Relationships",
            goal: "Hiểu quan hệ Course - Lesson và cách tránh trả dữ liệu vòng lặp.",
            practice: "Tạo lesson thuộc course và endpoint lấy syllabus.",
          },
        ],
      },
      {
        title: "Validation, error handling và API quality",
        description:
          "Làm API dễ dùng hơn bằng DTO, validate input, exception handler và response nhất quán.",
        lessons: [
          {
            title: "DTO design",
            goal: "Tách request/response DTO khỏi entity.",
            practice: "Tạo CreateCourseRequest và CourseResponse.",
          },
          {
            title: "Validation",
            goal: "Dùng @NotBlank, @Size, @Email và trả lỗi dễ hiểu.",
            practice: "Validate title, slug và description khi tạo course.",
          },
          {
            title: "Global exception handling",
            goal: "Chuẩn hóa lỗi 400, 404, 500.",
            practice: "Tạo ResourceNotFoundException và ErrorResponse.",
          },
          {
            title: "API documentation",
            goal: "Viết README endpoint rõ request/response mẫu.",
            practice: "Tạo bảng endpoint cho Course API.",
          },
        ],
      },
      {
        title: "Auth nhập môn và tích hợp frontend",
        description:
          "Làm quen authentication ở mức nền tảng và chuẩn bị API cho frontend dùng thật.",
        lessons: [
          {
            title: "Basic auth flow",
            goal: "Hiểu login, token, role và protected route ở mức khái niệm.",
            practice: "Vẽ flow login cho học viên và admin.",
          },
          {
            title: "CORS and frontend integration",
            goal: "Cho phép frontend gọi API đúng origin.",
            practice: "Cấu hình CORS cho localhost Next.js.",
          },
          {
            title: "Pagination and search",
            goal: "Trả danh sách có page, size, keyword.",
            practice: "Thêm search courses theo keyword.",
          },
          {
            title: "Deploy preparation",
            goal: "Chuẩn bị env, profile và database config cho deploy.",
            practice: "Tạo application-dev và application-prod mẫu.",
          },
        ],
      },
    ],
    finalProject: {
      title: "Course Platform REST API",
      description:
        "Backend quản lý khóa học, bài học, học viên và tiến độ học tập ở mức nhập môn.",
      requirements: [
        "Course CRUD, lesson list và course detail by slug",
        "Validate request và global error response",
        "Database có quan hệ Course - Lesson",
        "README có endpoint, request/response mẫu và cách chạy local",
      ],
      evaluation: [
        "Controller không chứa business logic dài",
        "DTO không leak entity không cần thiết",
        "Status code đúng cho success/error",
        "API có thể được gọi từ frontend Next.js",
      ],
    },
    resources: [
      {
        title: "REST API design checklist",
        description: "Checklist đặt route, status code, DTO và error response.",
        type: "Checklist",
      },
      {
        title: "Spring Boot project skeleton",
        description: "Cấu trúc package controller/service/repository/dto/exception.",
        type: "Project",
      },
      {
        title: "Postman testing routine",
        description: "Quy trình test API sau mỗi endpoint.",
        type: "Practice",
      },
    ],
    nextSteps: [
      "Ghép API với frontend Next.js Course Platform",
      "Học authentication/JWT kỹ hơn",
      "Bổ sung test service và integration test cho endpoint quan trọng",
    ],
  },
  "project-portfolio": {
    slug: "project-portfolio",
    heroTitle: "Project Portfolio developer đưa vào CV",
    summary:
      "Tự xây portfolio cá nhân có giới thiệu, kỹ năng, dự án, liên hệ, responsive và deploy public.",
    promise:
      "Sau workshop, bạn có một sản phẩm public trình bày được năng lực, project và cách liên hệ theo chuẩn junior developer.",
    primaryCtaLabel: "Xem checklist project",
    primaryCtaHref: internalCourseLink("project-portfolio"),
    secondaryCtaLabel: "Xem tiêu chí đánh giá",
    studyTime: "1-2 tuần nếu đã biết HTML/CSS cơ bản",
    prerequisites: [
      "Biết HTML/CSS cơ bản",
      "Nên có ít nhất 1-2 project nhỏ để trình bày",
      "Có tài khoản GitHub để đưa code và deploy",
    ],
    audience: [
      "Người mới cần project đầu tiên đưa vào CV",
      "Người muốn thay portfolio cá nhân rời rạc bằng trang có cấu trúc",
      "Người muốn luyện quy trình từ design, code, review đến deploy",
    ],
    outcomes: [
      "Có portfolio responsive public",
      "Biết trình bày kỹ năng và project theo hướng tuyển dụng",
      "Biết viết README, deploy và kiểm tra lỗi UI cơ bản",
    ],
    studyPlan: [
      "Bắt đầu bằng nội dung thật trước khi trang trí UI",
      "Dựng mobile trước, sau đó thêm layout desktop",
      "Mỗi section chỉ có một nhiệm vụ rõ ràng",
      "Review lại copywriting: ngắn, cụ thể, không phóng đại",
    ],
    modules: [
      {
        title: "Nội dung và cấu trúc portfolio",
        description:
          "Xác định thông điệp cá nhân, section cần có và thứ tự ưu tiên khi nhà tuyển dụng đọc.",
        lessons: [
          {
            title: "Portfolio goal",
            goal: "Biết portfolio cần chứng minh điều gì cho junior developer.",
            practice: "Viết 3 câu mô tả bạn học gì, làm được gì và đang tìm cơ hội gì.",
          },
          {
            title: "Information architecture",
            goal: "Chia section hero, skills, projects, learning path, contact.",
            practice: "Vẽ wireframe trên giấy hoặc Figma đơn giản.",
          },
          {
            title: "Project storytelling",
            goal: "Trình bày project bằng vấn đề, giải pháp, stack và kết quả.",
            practice: "Viết mô tả 2 project theo format 4 dòng.",
          },
        ],
      },
      {
        title: "Build UI mobile-first",
        description:
          "Dựng giao diện sạch, dễ đọc, responsive và có trạng thái tương tác cơ bản.",
        lessons: [
          {
            title: "Hero and navigation",
            goal: "Tạo ấn tượng đầu rõ ràng, không biến hero thành CV dài.",
            practice: "Dựng hero có tên, vai trò, mô tả ngắn và CTA xem project.",
          },
          {
            title: "Skills and roadmap",
            goal: "Trình bày kỹ năng trung thực, có nhóm rõ ràng.",
            practice: "Tạo skill groups Frontend, Backend, Tools.",
          },
          {
            title: "Project cards",
            goal: "Thiết kế card project dễ scan và có link GitHub/demo.",
            practice: "Dựng 3 card project có stack, mô tả và kết quả.",
          },
          {
            title: "Contact section",
            goal: "Giúp người xem liên hệ nhanh qua email, GitHub, LinkedIn nếu có.",
            practice: "Tạo form hoặc contact links có focus state.",
          },
        ],
      },
      {
        title: "Polish, SEO và deploy",
        description:
          "Hoàn thiện trải nghiệm, kiểm tra responsive, metadata, performance cơ bản và deploy.",
        lessons: [
          {
            title: "Responsive QA",
            goal: "Kiểm tra layout ở mobile, tablet, desktop.",
            practice: "Fix mọi lỗi overflow, text overlap và button quá nhỏ.",
          },
          {
            title: "Basic SEO",
            goal: "Thêm title, description, heading đúng cấp và alt image.",
            practice: "Viết metadata cho portfolio của bạn.",
          },
          {
            title: "README and deploy",
            goal: "Đưa code lên GitHub và deploy public.",
            practice: "Viết README có screenshot, stack, feature, setup.",
          },
        ],
      },
    ],
    finalProject: {
      title: "Personal Developer Portfolio",
      description:
        "Portfolio hoàn chỉnh, responsive, có project thật, thông tin liên hệ và link deploy public.",
      requirements: [
        "Hero có thông điệp rõ trong 5 giây đầu",
        "Có ít nhất 2 project cards với GitHub/demo",
        "Responsive không lỗi trên mobile",
        "Có README và metadata cơ bản",
      ],
      evaluation: [
        "Nội dung cụ thể, không dùng câu chung chung quá mức",
        "UI sạch, spacing nhất quán, CTA rõ",
        "Project trình bày được vai trò và kết quả",
        "Link deploy/GitHub hoạt động",
      ],
    },
    resources: [
      {
        title: "Portfolio content worksheet",
        description: "Mẫu chuẩn bị nội dung trước khi code.",
        type: "Checklist",
      },
      {
        title: "Project card writing template",
        description: "Cách viết mô tả project ngắn, thật và có sức thuyết phục.",
        type: "Project",
      },
      {
        title: "Deploy QA checklist",
        description: "Checklist kiểm tra trước khi gửi portfolio cho nhà tuyển dụng.",
        type: "Checklist",
      },
    ],
    nextSteps: [
      "Thêm Todo App và Course Platform vào portfolio",
      "Viết blog ngắn về quá trình học Java/Frontend",
      "Tối ưu GitHub profile để đồng bộ với portfolio",
    ],
  },
};

export const courseDetailList = Object.values(courseDetails);
