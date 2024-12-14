"use client";
import { HiOutlineTrash } from "react-icons/hi";

export default function Remove({id}) {

  const removeTopic = async() => {
    const confirm = window.confirm("Are you sure you want to delete this topic?");
    if(!confirm) return;
    else{
    await fetch(`https://guide-taupe.vercel.app/api/topicses?id=${id}`, {method: "DELETE"});
    window.location.reload();
    }
  }

  return (
    <button onClick={removeTopic}>
      <HiOutlineTrash size={24}/>
    </button>
  );
}
