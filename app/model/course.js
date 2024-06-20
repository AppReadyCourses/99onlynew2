// const courses = [
//     {
//       id: "1",
//       title: "ReactJS & NodeJS Full-stack coffee project",
//       intro:
//         "This fullstack project includes ReactJS and NodeJS framework, you can learn the basics of how to write effecient code in project",
//       imgUrl: "https://ik.imagekit.io/9kllv04exw/fullstack_react_coffeeshop.png?updatedAt=1718411631412",
//       frontEnd: 'ReactJS',
//       backEnd: 'NodeJS',
//       dataBase: 'MongoDB',
//       year: 2024,
//       level: 'Beginner',
//       },
//   ];

import mongoose, {Schema} from "mongoose";


const courseSchema = new Schema(
    {
        title: String,
        intro: String,
        imgUrl: String,
        frontEnd: String,
        backEnd: String,
        dataBase: String,
        year: Number,
        level: String,
        youtube: String,
        duration: String
    },
    {
        timestamps: true
    }
)

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema); 

export default Course;