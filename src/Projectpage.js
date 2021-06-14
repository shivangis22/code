import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Project} from "./components/project";
import Header from "./components/header";
import {GetProjects} from "./utils/Projects"
// import Filter from "./components/filter";

import Data from "./data";

function Projectpage() {

  const [projects, setProjects] = useState([{}])
  useEffect(()=>{
    const fetchData = async()=> {
      let result = await GetProjects()
      console.log(result)
      setProjects(result)
    }
    fetchData()
  },[])
  console.log(Data[0])


  return (
    <>
    <div className="Appdiv">
     <Header/>
     {/* <Filter/> */}
    </div>
   {
    projects.map((dt)=>{
      return(
        <Project data={dt} key={dt.key}/>
      )
    })

   }
    
     
    
      
     
    </>
  );
}

export default Projectpage;
