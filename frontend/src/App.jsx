import './App.css'
import { createIcons, Menu } from 'lucide';
createIcons({ icons: { Menu,},});
function App() {
 
  return(
    <>
    <body className="bg-blue-700 text-white">
      
   
    <header className="flex   justify-between gap-15 ">
      <div className="leftSide h-[100%]   ml-3">
        <h1 className="text-6xl">evolve</h1>
       <h4 className="">solving today,shoping tomorrow</h4>
      </div>
      <div className="rightSide rounded-md  mr-3 mt-5 bg-green-300 text-white h-10 w-10 flex justify-center items-center text-center ">
        <div className="divMenu ">
            <i data-lucide="menu" class="w-6 h-6 text-gray-100"></i>
        </div>
      </div>
    </header>
     </body>
    </>
  )
}

export default App
