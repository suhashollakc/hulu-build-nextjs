import Image from 'next/image';
import React, { useState } from "react";

function Banner() {
    const [effect, setEffect] = useState(false);
    return (
        <div className="relative flex flex-col sm:flex-row items-center h-auto opacity-90 bg-gradient-to-r from-red-700 md:bg-gradient-to-r ...">
           <Image className="object-cover opacity-20 bg-gradient-to-r from-red-700 md:bg-gradient-to-r ..."
    src="https://cdn.arstechnica.net/wp-content/uploads/2017/06/deadpool-gallery-03-gallery-image-800x430.jpg"
  width="2000"
  height="1076"

/>
<div  className='absolute px-9 mt-60 sm:mt-10'>
<h2 className=' py-1 text-nav text-lg font-semibold'>
    WATCH MOVIE
</h2>
<Image className='px-2 object-contain' 
    width = "400"
    height = "96"
    src ='https://img1.hulu.com/user/v3/artwork/e27cac54-3c3c-425e-b7de-67edc2c9f496?base_image_bucket_name=image_manager&base_image=cada526f-9ea0-4725-ba16-f9e596a5c411&operations=%5B%7B%22resize%22:%22500x150%7Cmax%22%7D,%7B%22format%22:%22png%22%7D%5D'
/>
{/* <h1 className='px-2'>DEADPOOL</h1> */}
<p className=' py-2 font-semibold text-lg text-nav'>Ryan Reynolds stars as the wise-cracking, <br/> indestructible superhero in this thrilling origins story<br/> based on the comic-book character.</p>
<div className='flex p-3'>

<button
          className={`${
            effect && "animate-wiggle"
          } bg-white px-6 py-3 text-primary text-xl font-bold rounded hover:bg-gray-200 hover:shadow-xl`}
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        >
          &#9658; PLAY
        </button>


<button className="ml-3 px-6 text-lg text-nav bg-transparent hover:bg-blue text-blue-dark font-bold hover:text-nav border border-solid border-4 hover:opacity-70 rounded">
 DETAILS
</button>

</div>



</div>


        </div>
    )
}

export default Banner
