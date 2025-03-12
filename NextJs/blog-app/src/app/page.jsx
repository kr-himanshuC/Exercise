import Navbar from "@/app/components/Navbar.jsx";
import RootLayout from "./layout.jsx";


export default async function Home() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const blogs = await res.json();

  return (
    // <RootLayout>
    <div className='w-[100%] '>
    <h1  className='text-center font-extrabold m-20 text-5xl'>Data fetch from 'https://jsonplaceholder.typicode.com/users'</h1>

    <ol  className="">
      { blogs.map((d)=>(
          <li className="ml-60" key={d.id}>title {d.id}.  {d.title}</li>        
      )) }
    </ol>
   </div>
    // </RootLayout>
  );
}
