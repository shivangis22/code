import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Project} from "./components/project";
import Header from "./components/header";
import Filter from "./components/filter";

import Data from "./data";

function Projectpage() {
  console.log(Data[0]);

  return (
    <>
    <div className="Appdiv">
     <Header/>
     {/* <Filter/> */}
    </div>
   {
    Data.map((dt)=>{
      return(
        <Project data={dt}/>
      )
    })

   }
    
     
    
      
     
    </>
  );
}

export default Projectpage;
