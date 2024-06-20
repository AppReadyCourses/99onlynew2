import Link from "next/link";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import CoursesPage from "./courses/page";
import FetchCourses from "./fetchCourses/page";

// const getCourses = async () => {
//   try {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/course`,
//       {
//         cache: "no-store",
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

export default async function Home() {
  // if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
  //   return null;
  // }

  // const db = [
  //   {
  //     id: 1,
  //     title: "ReactJS & NodeJS Full-stack coffee project",
  //     intro:
  //       "This fullstack project includes ReactJS and NodeJS framework, you can learn the basics of how to write effecient code in project",
  //     imgUrl:
  //       "https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412",
  //     frontEnd: "ReactJS",
  //     backEnd: "NodeJS",
  //     dataBase: "MongoDB",
  //     year: 2024,
  //     level: "Beginner",
  //     youtube: "https://www.youtube.com/embed/MnOi08OdaGY?si=H3jYz0pkei1QwbXS",
  //     duration: "5.5 hours",
  //   },
  //   {
  //     id: 2,
  //     title: "Angular & NestJS Full-stack e-commerce",
  //     intro:
  //       "This fullstack project includes Angular & NestJS framework, Angular has a very well made structure of writing codes, same as NestJS, both framework use TypeScript for codes",
  //     imgUrl:
  //       "https://ik.imagekit.io/9kllv04exw/Angular%20e-commerce.jpg?updatedAt=1718421707861",
  //     frontEnd: "Angular",
  //     backEnd: "NestJS",
  //     dataBase: "PostgresSQL",
  //     year: 2024,
  //     level: "Beginner",
  //     youtube: "https://www.youtube.com/embed/Mv5TPGGrqQg?si=BgZQbWwDY60cG094",
  //     duration: "22",
  //   },
  // ];
  // const data = await getCourses();
  // if (!data?.courses) {
  //   return (
  //     <div>

  //       <p>No courses.</p>;
  //     </div>
  //   )
  // }
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const response = await fetch(`/api/course/`);
  //     const data = await response.json();
  //     console.log("FETCH COURSES", data.courses);
  //     setCourses(data.courses);
  //   };
  //   fetchCourses()
  // }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="hero min-h-72 bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className={`text-6xl font-extrabold `}>
              Buy FullStack courses for{" "}
              <span className="text-amber-500">¢99/course </span>only!{" "}
            </h1>
            <p className="py-6">
              Yes, you read it right! I have created the full-stack project for
              ¢99(99cents) just for you, it includes so many topics such as:
              HTML5, CSS3, Responsive Design,{" "}
              <span className="font-semibold">Frontend </span>
              like ReactJS & Angular,{" "}
              <span className="font-semibold">Backend </span>
              like NodeJS & NestJS, and more! So What are you waiting for? It's
              <span className="text-amber-500"> ¢99/course </span> only! 😍
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap gap-6 justify-center">
        {/* {courses.map((course) => (
          <Courses course={course} />
        ))} */}
      </div>
      {/* <CoursesPage /> */}

      <FetchCourses />

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
