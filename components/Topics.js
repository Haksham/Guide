import Link from "next/link";
import Remove from "./remove";
import { HiPencilAlt } from "react-icons/hi";

const gettopics = async() => {
  try{
  const res = await fetch("http://localhost:3000/api/topicses", {cache: "no-store"});

  if (!res.ok) {
    throw new Error("Failed to fetch topics broooooo");
  }

  return res.json()
  }catch(error){
    console.log("error hai bhai---> ", error);
  }
}

export default async function Topics(){

  const {topics} = await gettopics();

  return (
    <>
    {topics.map((t)=>(
      <div key={t._id}>
        <div>
          <h1>{t.title}</h1>
          <p>{t.description}</p>
        </div>
        <div>
          <Remove id={t._id}/>
          <Link href={`/edit/${t._id}`}>
            <HiPencilAlt size={24}></HiPencilAlt>
          </Link>
        </div>
      </div>
    ))}
    </>
  );
}