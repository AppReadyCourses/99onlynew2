import connectMongoDB from "@/app/libs/mongodb";
import Course from "@/app/model/course";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    const { id } = params;
    console.log('params in route', params)
    await connectMongoDB();
    const course = await Course.findOne({ _id: id });
    console.log('get singal course', course)
    return NextResponse.json({ course }, { status: 200 });
  }