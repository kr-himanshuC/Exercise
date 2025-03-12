import React from "react";
import { data } from "@/app/data";
import Link from "next/link";

export default async function blog() {
  return (
    <div className="">
      <h1  className='text-center font-extrabold m-16 text-5xl'>Blogs</h1>

      <ul className="flex flex-col justify-center items-center">
        {data.map((blog) => (
          <span key={blog.id} className="text-center rounded-xl border-1 my-6 py-5 px-9">
           
              <Link href={`http://localhost:3000/blog/${blog.id}`}>{blog.title}</Link>
              {/* <p className="">{blog.description}</p> */}
            
          </span>
        ))}
      </ul>
    </div>
  );
}
