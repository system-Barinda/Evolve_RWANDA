import './App.css'
import { createIcons, Menu } from 'lucide';
createIcons({ icons: { Menu,},});
import ims from './assets/benin.png'
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
    <div className="topImageDetails  h-100 w-[95%] mx-auto mt-20  rounded-md grid">
     <div className=" bg-amber-300 w-[100%] h-[170%] bg-[url('./assets/evolve-banner-2-min.png')] bg-cover bg-center rounded-md">
      <p className="details mx-auto mt-40 text-center  ">
      dadkjlakjldjla;dkljflakjldkjaj;ajdflkja
     </p>
     </div>
     <div className="  h-10 w-[90%] mx-auto mt-40"> <center><h1>🕎🕎🕎🕎</h1></center></div>
    </div>
     </body>
    </>
  )
}

export default App
