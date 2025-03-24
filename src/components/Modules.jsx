import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Modules = () => {

const {type}=useParams()
const modules= ["Module 1: History", "Module 2: Culture","Module 3: Tourism","Module 4: Music","Module 5: Food","Module 6: Fun Facts"]
const listItems=modules.map(item=> <li>{item}</li>)

return <ul><Link to ={type==="student"? "/student":"/teacher"} >{listItems}</Link></ul>;



            
   
    



    
  
}

export default Modules