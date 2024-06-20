import Link from "next/link";
import React from "react";

const courses = [
  {
    id: "1",
    title: "ReactJS & NodeJS Full-stack coffee project",
    intro:
      "This fullstack project includes ReactJS and NodeJS framework, you can learn the basics of how to write effecient code in project",
    imgUrl:
      "https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412",
    fontEnd: "ReactJS",
    backEnd: "NodeJS",
    dataBase: "MongoDB",
    year: 2024,
    level: "Beginner",
  },
];

// const getCourses = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/course", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }

//     return res.json();
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

// YFseqFLdUA37xGuT
// mongodb+srv://99only:YFseqFLdUA37xGuT@cluster0.dnjpfrt.mongodb.net/99only_db

const Courses = async ({ course }) => {
  // const { courses } = await getCourses();
  console.log("data in courses component", course);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl" key={course._id}>
        <figure>
          <img src={course.imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <Link href={`/courses/${course._id}`}>
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
            <Link href={`/courses/${course._id}`}>
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
};

export default Courses;
