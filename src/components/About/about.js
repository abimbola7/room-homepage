import React from "react"

const About = props => {
  const aboutArr = {
    content : `Our multifunctional collection blends design and function to suit your individual taste.
    Make each room unique, or pick a cohesive theme that best express your interests and what
    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
    or anything in between. Product specialists are available to help you create your dream space.`,
    aboutLight : require("../../images/image-about-light.jpg"),
    aboutDark : require("../../images/image-about-dark.jpg")
  }
  return (
    <section className="flex flex-col md:flex-row justify-between md:h-72 ">
      <div
      className="md:w-[30%]"
      >
        <img src={aboutArr.aboutDark} alt="" className="object-cover object-right  w-full h-full"/>
      </div>
      <div className="space-y-4 p-7 flex-1">
        <h1
        className="tracking-[.2rem] font-bold text-base text-[12px]"
        >ABOUT OUR FURNITURE</h1>
        <p className="text-darkGray text-sm font-semibold">{aboutArr.content}</p>
      </div>
      <div
      className="md:w-[30%]"
      >
        <img src={aboutArr.aboutLight} alt="" className="object-cover object-center w-full h-full"/>
      </div>
    </section>
  )
}

export default About;