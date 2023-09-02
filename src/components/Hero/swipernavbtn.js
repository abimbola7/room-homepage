import React from "react"
import { useSwiper } from "swiper/react";
import { LiaAngleLeftSolid } from "react-icons/lia"
import { LiaAngleRightSolid } from "react-icons/lia"

const SwiperNavBtn = () => {
  const swipe = useSwiper();
  return(
    <div className="absolute bottom-full right-0 sm:bottom-0 sm:-left-0 w-36 h-16 bg-black flex items-center">
      <button
      onClick={()=>swipe.slidePrev()}
      className="text-white text-5xl h-full w-full text-center flex justify-center items-center hover:bg-veryDarkGray"
      >
        <LiaAngleLeftSolid/>
      </button>
      <button
      onClick={()=>swipe.slideNext()}
      className="text-white text-5xl h-full w-full text-center flex justify-center items-center hover:bg-veryDarkGray"
      >
        <LiaAngleRightSolid/>
      </button>
    </div>
  )
}

export default SwiperNavBtn;