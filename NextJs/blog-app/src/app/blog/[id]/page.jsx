import Link from "next/link";
import { data } from "@/app/data";

export default async function page({ params }) {
  const id = (await params).id;
  const blog = data.filter((b) => b.id===id);
  
  

  return (
    <>

      
      {/* <p className="text-center font-extrabold m-16 text-5xl">Blog {id}</p> */}
      <p className="text-center font-extrabold m-10 text-2xl"> {blog[0].title}</p>
      <p className="text-center font-extrabold m-10 text-2xl">{blog[0].description}</p>

      <div className="flex justify-center items-center mt-20">
      <Link
        href={"http://localhost:3000/blog"}
        className=" font-extrabold border-1 rounded-2xl p-3 text-2xl"
      >
        Go Back
      </Link>
      </div>
    </>
  );
}
