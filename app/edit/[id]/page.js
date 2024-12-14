import Edit from "@/components/editpage";

const gettopic = async (id) => {

  try {
    const res = await fetch(`https://lifes-guide.vercel.app/api/topicses/${id}`,{cache: "no-store" ,});
    
    if(!res.ok){
      throw new Error("Failed to fetch topic");
    }
    return res.json();

  } catch (error) {
    console.log("Error fetching topic:", error);
  }  
}

export default async function edits({params}){
  const {id} = params;
  const {topics}=  await gettopic(id);
  const {title,description} = topics;

  return <Edit id={id} title={title} description={description}/>
}