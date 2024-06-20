// "use client";

// import React, { useEffect, useState } from "react";
import CourseDetail from "./[id]/page";
import Courses from '../components/Courses'

const CoursesPage = () => {

  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const response = await fetch(`/api/course/`);
  //     const data = await response.json();
  //     console.log("FETCH COURSES", data.courses);
  //     setCourses(data.courses);
  //   };
  //   fetchCourses()
  // }, [])
  return (
    
    <div className=" flex flex-wrap gap-6 justify-center">
      {/* {courses.map((course) => (
          <Courses course={course} />
        ))} */}
    CoursesPage
    </div>
  );
};

export default CoursesPage;
