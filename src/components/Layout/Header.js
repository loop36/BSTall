import { NavLink } from 'react-router-dom'
import Scroll from 'react-scroll'
import AuthorWorks from '../Author/AuthorWorks'
const ScrollLink = Scroll.Link

const Header=()=> {

return (
    <nav className="py-5 bg-white w-screen shadow-md fixed">
  <div className=" flex justify-end items-center mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
    <section>
      <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex text-right">
        <li className="relative group">
          <ScrollLink 
          to="home"
        spy={true} 
        smooth={true} 
        offset={-200}
        duration={500} activeClass="active"  className="group focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg"> Home </ScrollLink>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
        <li className="relative group">
          <ScrollLink 
          to="kya"
        spy={true} 
        smooth={true} 
        offset={-200}
        duration={500} className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">Author</ScrollLink>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
        <li className="relative group">
          <ScrollLink   to="work"
        spy={true} 
        smooth={true} 
        offset={-200}
        duration={500}  className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">About</ScrollLink>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
        <li><ScrollLink   to="comments"
        spy={true} 
        smooth={true} 
        offset={-200}
        duration={500}  className="bg-purple-500 px-4 py-1 rounded-xl text-white hover:bg-purple-400 active:bg-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none">Contact</ScrollLink></li>
      </ul>
    </section>
  </div>
</nav>
)

}


export default Header