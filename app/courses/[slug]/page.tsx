import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailTemplate } from "@/components/courses/CourseDetailTemplate";
import { courses } from "@/data/courses";
import { courseDetails } from "@/data/course-details";

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCourseBySlug(slug: string) {
  const course = courses.find((item) => item.slug === slug);
  const detail = courseDetails[slug];

  if (!course || !detail) {
    return null;
  }

  return { course, detail };
}

export function generateStaticParams() {
  return courses
    .filter((course) => course.slug !== "java-core")
    .map((course) => ({
      slug: course.slug,
    }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getCourseBySlug(slug);

  if (!data) {
    return {
      title: "Không tìm thấy khóa học - CourseJava",
    };
  }

  return {
    title: `${data.course.title} miễn phí - CourseJava`,
    description: data.detail.summary,
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const data = getCourseBySlug(slug);

  if (!data) {
    notFound();
  }

  return <CourseDetailTemplate course={data.course} detail={data.detail} />;
}
