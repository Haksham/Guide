"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Edit({id,title,description}){

  const [newtitle, setnewtitle]=useState(title);
  const [newdescription, setnewdescription]=useState(description);

  const router = useRouter();

  const handlesubmit = async(e)=>{
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topicses/${id}`,{
      method:"PUT",
      body:JSON.stringify({newtitle,newdescription}),
      headers:{
        "Content-Type":"application/json",
        },
      });

      if(!res.ok){
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handlesubmit}>
      <input onChange={(e)=>setnewtitle(e.target.value)} value={newtitle} type="text" /><br></br>
      <input onChange={(e)=>setnewdescription(e.target.value)} value={newdescription} type="text" /><br></br>
      <button type="submit">Update</button>
    </form>
  );
}

//done