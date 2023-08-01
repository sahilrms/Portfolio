import { Link } from "react-router-dom"

function index({selected='Home'}) {
  return (
    <div className="h-20 border-b-2  border-white items-center flex text-white">
        <h1 className="text-white bg-black/500 hover:p-3 font-bold headlogo text-2xl ml-12 p-2 border-2 border-green-700">Sahil's Portfolio</h1>
        <ul className="flex justify-stretch items-center gap-8 ml-auto mr-6">
        <Link to="/"> <li className={`${selected==='Home'?`text-blue-500`:``} cursor-pointer`} >Home</li></Link>
        <Link to="/about">  <li className={`${selected==='About'?`text-blue-500`:``} cursor-pointer`}>About Me</li></Link>
        <Link to="/services">   <li className={`${selected==='Services'?`text-blue-500`:``} cursor-pointer`}>Services</li></Link>
        <Link to="/project">   <li className={`${selected==='Projects'?`text-blue-500`:``} cursor-pointer`}>Projects</li></Link>
        <Link to="/contact">   <li className={`${selected==='Contact'?`text-blue-500`:``} cursor-pointer`}>Contact Me</li></Link>
        </ul>
    </div>
  )
}

export default index