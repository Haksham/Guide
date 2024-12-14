import { NextResponse } from 'next/server';
import connect from '@/libs/mongo';
import topic from '@/model/topic';

export async function PUT(request ,{params}) {
  const { id } = params;
  const { newtitle:title,newdescription: description } = await request.json();
  await connect();
  await topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({message:"updated successfully"}, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connect();
  const topics = await topic.findOne({_id:id});
  return NextResponse.json({ topics },{status:200});
}

