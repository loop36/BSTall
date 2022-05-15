
import Scroll from "react-scroll";
import searchIcon from '../../Assets/search.svg';
const ScrollLink = Scroll.Link;

const Header = () => {
  return (
    <nav className="xl:pb-2 lg:pb-2 md:pb-2 sm:pb-2 m-0 xl:mx-auto bg-white w-screen shadow-md fixed sm:text-sm text-xs  xl:h-16 lg:h-16 sm:h-16 h-12 overflow-hidden ">
      <div className=" xl:justify-center flex  md:ml-20 lg:mr-40 xl:mx-auto w-screen justify-start  sm:justify-center md:justify-start lg:justify-start  items-center mx-auto xl:max-w-7xl lg:max-w-5xl md:w-100 md:px-2">
        <div className="w-100 h-100 xl:ml-0 md:-ml-10 ml-0 items-start self-start justify-start">
          <h2 className="xl:text-xl sm:text-xs md:text-base lg:flex xl:flex md:flex sm:flex hidden text-xs m-0 px-3 font-semibold xl:ml-28 lg:ml-12  text-red-500 mt-3">
            Book Stall <sub className="text-gray-800">by codeLoop</sub>
          </h2>
          <h3 className="font-bold text-base ml-5 text-red-500 sm:hidden lg:hidden xl:hidden flex mt-3 " >BS</h3>
        </div>
        <section className="self-end  mr-5 xl:mr-20 justify-end items-end flex-grow flex lg:mr-20">
          <ul className="md:space-x-8 space-x-3 text-xs lg:items-end lg:mr-20 md:mr-28 sm:mr-20 mr-5 text-gray-900 font-semibold  md:flex lg:text-right md:text-right flex">
            <li className="relative group">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                activeClass="active"
                className="group focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg"
              >                Home
              </ScrollLink>
              <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
            </li>
            <li className="relative group">
              <ScrollLink
                to="kya"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg  e"
              >
                Author
              </ScrollLink>
              <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
            </li>
            <li className="relative group">
              <ScrollLink
                to="comments"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg"
              >
                Reviews
              </ScrollLink>
              <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
            </li>
            <li className="relative group" >
              <ScrollLink
                to="OS"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="mx-auto my-auto hover:bg-purple-400 active:bg-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none"
              >
               <div className="w-8 flex "><span> Order </span>
               <img alt="search order"  className="w-3/4 mx-2 " src={searchIcon}/>
               </div>
              </ScrollLink>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Header;
