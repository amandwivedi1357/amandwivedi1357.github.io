import React from 'react'
import GitHubCalendar from "react-github-calendar";
// import { Tooltip as ReactTooltip }  from "react-tooltip";

const Github = () => {
  return (
    <div name='github' className='w-full h-full bg-white'>
        <div className=' p-10 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-screen'>
        <div className="pb-8 mt-20 md:mt-20" >
            <p className="text-4xl font-bold mt-80">Github</p>
        </div>
        <div  style={{width:"full",display:"grid",gridTemplateColumns:"repeat(1,1fr)",gap:"15px",textAlign:"center",padding:"40px"}} >
             <GitHubCalendar
            username="amandwivedi1357"
            blockSize={20}
            blockMargin={5}
            fontSize={18}
          />  
          <div style={{display:"flex",margin:"auto", fontWeight: "700", fontSize: "27px",textAlign:"center",marginTop:"30px"}}>
          Username : <span style={{  display:"flex",gap:"10px",marginLeft:"5px"}}>  amandwivedi1357 </span>
          </div> 
       <img style={{margin:"auto",padding:"10px"}} align={'center'} src="https://github-readme-stats.vercel.app/api?username=amandwivedi1357&show_icons=true&locale=en&border_radius=2&theme=light" alt="amandwivedi1357"></img>
       <img style={{margin:"auto",padding:"10px"}} align={'center'} src="https://github-readme-streak-stats.herokuapp.com/?user=amandwivedi1357&show_icons=true&locale=en&border_radius=2&theme=light" alt="amandwivedi1357"></img>
       
        </div>
        </div>
        
      
    </div>
  )
}

export default Github