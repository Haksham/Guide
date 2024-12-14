import topic from "@/model/topic";
import connect from "@/libs/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {title, description}= await request.json();
  await connect();

  await topic.create({title,description}); 
  return NextResponse.json({message:"Topic created"},{status:201});
}


export async function GET() {
  await connect();
  const topics = await topic.find();
  return NextResponse.json({topics});
}

export async function DELETE(request) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get("id");
  await connect();
  await topic.findByIdAndDelete(id);
  return NextResponse.json({message:"Topic deleted"}, {status:200});
}

