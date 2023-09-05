import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { useSwiper } from "swiper/react"
import { Navigation, Pagination, EffectFade } from "swiper/modules"
import "./hero.css"
import "swiper/css"
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { ReactComponent as Arrow } from "../../images/icon-arrow.svg"
import SwiperNavBtn from "./swipernavbtn"
const Hero = (props) => {
  const heroContent = [
    {
      title : "Discover innovative ways to decorate",
      description : "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
      images : {
        sm : require("../../images/mobile-image-hero-1.jpg"),
        lg : require("../../images/desktop-image-hero-1.jpg"),
      }
    },
    {
      title : "We are available all across the globe",
      description : "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
      images : {
        sm : require("../../images/mobile-image-hero-2.jpg"),
        lg : require("../../images/desktop-image-hero-2.jpg"),
      }
    },
    {
      title : "Manufactured with the best materials",
      description : "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      images : {
        sm : require("../../images/mobile-image-hero-3.jpg"),
        lg : require("../../images/desktop-image-hero-3.jpg"),
      }
    },
  ]
  return (
    <Swiper
    modules={[Navigation, Pagination, EffectFade]}
    loop={true}
    navigation={false}
    effect={'fade'}
    className=""
    spaceBetween={50}
    >
      {
        heroContent.map(elem=>(
          <SwiperSlide
          key={elem.title}
          className="flex flex-row"
          >
            <div className="flex sm:flex-row flex-col h-fit sm:h-[450px]">
              <div className="mdxl:w-[60%] sm:w-1/2 w-full">
                <img src={elem.images.lg} alt="" className="h-full object-cover w-full hidden sm:block"/>
                <img src={elem.images.sm} alt="" className="object-cover object-center sm:hidden w-[100%]"/>
              </div>
              <div className="mdxl:w-[40%] sm:w-1/2 w-full relative flex items-center bg-white justify-center px-10 py-6">
                <SwiperNavBtn/>
                <div className="space-y-4 xs:max-h-[350px] sm:max-h-[300px] py-3">
                  <h1 className="font-bold text-4xl">{elem.title}</h1>
                  <p className="text-darkGray text-sm font-semibold">{elem.description}</p>
                  <button
                  className="tracking-[.5rem] xs:tracking-[.95rem] font-bold flex flex-row space-x-3 items-center button xs:text-base"
                  >
                    <p>SHOP NOW</p>
                    <Arrow
                    className="duration-500 transform transition-all ease-in-out btnhov"
                    />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default Hero;