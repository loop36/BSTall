import { NavLink } from 'react-router-dom'


const Header=()=> {

return (
    <nav className="py-5 bg-white w-screen shadow-md">
  <div className=" flex justify-end items-center mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
    <section>
      <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex text-right">
        <li className="relative group">
          <NavLink to="#" className="group focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg"> Home </NavLink>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
        <li className="relative group">
          <NavLink to="#" className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">Services</NavLink>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
        <li className="relative group">
          <NavLink to="#" className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">About</NavLink>
          <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
        </li>
        <li><NavLink to="#" className="bg-purple-500 px-4 py-1 rounded-xl text-white hover:bg-purple-400 active:bg-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none">Contact</NavLink></li>
      </ul>
    </section>
  </div>
</nav>
)

}


export default Header