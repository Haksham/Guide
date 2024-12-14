"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function add(){

  const [title,settitle] = useState("");
  const [description,setdescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!title || !description){
      alert("Please fill all the fields");
      return;
    }

    try {
      const res= await fetch("/api/topicses",{
        method:"POST",
        body:JSON.stringify({title,description}),
        headers:{
          "Content-Type":"application/json",
        },
      });

      if(res.ok){
        router.push("/");
        router.refresh();
      }else{
        alert("Something went wrong");
      }

    } catch (error) {
     console.log(error); 
    }

    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e)=>settitle(e.target.value)} value={title} type="text" placeholder="Enter a task" /><br></br>

      <input onChange={(e)=>setdescription(e.target.value)} value={description} type="text" placeholder="Enter a description" /><br></br>

      <button type="submit">Add</button>
    </form>
  );
}