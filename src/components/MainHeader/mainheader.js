import React, { Fragment, useState } from "react"
import ReactDOM from "react-dom";
import Hamburger from "../Hamburger/Hamburger";
import { useSwiper } from "swiper/react";
import { ReactComponent as Logo } from "../../images/logo.svg"
const SideBar = (props) => {
  const { navItems, navIsOpened, setNavIsOpened } = props;

  return (
    <Fragment>
      {
        navIsOpened && <div className={`w-full h-screen fixed bg-black bg-opacity-50 z-[10000] md:hidden`} onClick={()=>setNavIsOpened(prevState=>!prevState)}/>
      }
      {
        (
            <div className={`w-full  bg-white h-28 flex flex-row items-center px-5 sm:px-10 xs:space-x-6 space-x-3 overflow-hidden fixed top-0 left-0 transform ${ navIsOpened ? '-translate-x-[0%]' : '-translate-x-[100%]' } duration-500 ease-in-out z-[10000] md:hidden`}>
              <Hamburger
              className="block md:hidden"
              navIsOpened={navIsOpened}
              onClick={()=>setNavIsOpened(prevState=>!prevState)}
              />
              <ul
              className="flex md:hidden space-x-4 xs:space-x-8 text-black font-bold"
              >
                {
                  navItems.map((title)=>(
                    <li
                    >{title}</li>
                  ))
                }
              </ul>
            </div>
        )
      }
    </Fragment>
    
  )
}



const MainHeader = () => {
  const swipe = useSwiper()
  console.log(swipe)
  const [ navIsOpened, setNavIsOpened ] = useState(false)
  const navItems  = [ "home", "shop", "about", "contact" ];
  return (
    <Fragment>
      <header className="w-full fixed top-0 h-24 text-white z-[100]">
        <nav
        className="h-full w-[90%] mx-auto flex flex-row sm:space-x-10 items-end px-5 md:px-0"
        >
          <Hamburger
          className="block md:hidden"
          navIsOpened={navIsOpened}
          onClick={()=>setNavIsOpened(prevState=>!prevState)}
          />
          <div className="text-3xl flex-1 sm:flex-none flex justify-center">
            <Logo/>
          </div>
          
          <ul
          className="hidden md:flex-row md:space-x-4 md:flex"
          >
            {
              navItems.map((title)=>(
                <li
                className="cursor-pointer relative after:absolute after:w-0 hover:after:w-[50%] after:h-[1px] after:bg-white after:-bottom-1 flex after:mx-auto after:left-0 after:right-0 after:transition-all after:ease-in-out after:duration-500"
                >{title}</li>
              ))
            }
          </ul>
        </nav>
      </header>
      {
        ReactDOM.createPortal(
          <SideBar
          navItems={navItems}
          navIsOpened={navIsOpened}
          setNavIsOpened={setNavIsOpened}
          />,
          document.getElementById("sidebar")
        )
      }
    </Fragment>
  )
}

export default MainHeader;