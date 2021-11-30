import requests from "../utils/requests"
import { useRouter } from 'next/router';
function Nav() {

    const router = useRouter();
    return (
        <nav className='relative sticky top-0 z-50 bg-white p-6 '>
         <div className='flex px-10 font-bold sm:px-20 text-xl whitespace-nowrap
         space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide justify-center'>
             {Object.entries(requests).map(([key, {title,url}]) => (
                    <h2 key={key}
                    onClick={() => router.push(`/?genre=${key}`)}
                     className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white
                    active:text-red-500
                    ">{title}</h2>
             ))
                 }
         </div>   
         {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-[#f3f3f3] h-10 w-1/12'></div> */}
        </nav>
    )
}

export default Nav
