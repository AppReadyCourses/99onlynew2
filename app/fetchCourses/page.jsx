"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import FetchSingleCourse from "./[id]/page";

const FetchCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`/api/course/`);
      const data = await response.json();
      console.log("FETCH COURSES", data.courses);
      setCourses(data.courses);
    };
    fetchCourses();
  }, []);
  return (
    <div className=" flex flex-wrap gap-6 justify-center">
      {courses.map((course) => {
        //  return <h3 key={course.id}>{course.title}</h3>
        return (
          <div key={course._id}>
            <div className="card w-96 bg-base-100 shadow-xl" >
              <figure>
                <img src={course.imgUrl} alt="Course" />
              </figure>
              <div className="card-body">
                <Link href={`/fetchCourses/${course._id}`}>
                  <h2 className="card-title">
                    {course.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                </Link>
                <p className="line-clamp-3">{course.intro}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{course.frontEnd}</div>
                  <div className="badge badge-outline">{course.backEnd}</div>
                  {/* <div className="badge badge-outline">{course.dataBase}</div> */}
                  <div className="badge badge-primary badge-outline">
                    <Link href={`/fetchCourses/${course._id}`}>
                      View Details
                    </Link>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <div>
                    <form
                      action="https://www.paypal.com/cgi-bin/webscr"
                      method="post"
                      target="_top"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick" />
                      <input
                        type="hidden"
                        name="hosted_button_id"
                        value="F2GV3XQHHVM44"
                      />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input
                        type="image"
                        src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_SM.gif"
                        border="0"
                        name="submit"
                        title="Buy Now for only ¢99!"
                        alt="Buy Now for ¢99"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FetchCourses;
