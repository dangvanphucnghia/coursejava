import type { Metadata } from "next";
import { CourseDetailTemplate } from "@/components/courses/CourseDetailTemplate";
import { courses } from "@/data/courses";
import { courseDetails } from "@/data/course-details";

const course = courses.find((item) => item.slug === "java-core");
const detail = courseDetails["java-core"];

export const metadata: Metadata = {
  title: "Java Core miễn phí - CourseJava",
  description:
    "Khóa học Java Core miễn phí cho người mới: cú pháp Java, OOP, Collections, Lambda, Java I/O và project cuối khóa.",
};

export default function JavaCorePage() {
  if (!course) {
    return null;
  }

  return <CourseDetailTemplate course={course} detail={detail} />;
}
