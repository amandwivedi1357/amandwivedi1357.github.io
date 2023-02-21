import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "./Github.css"
const Github = () => {
  return (
    <div>
        <h1 style={{textAlign:"center",marginBottom:"2rem"}}>Github Calendar</h1>
      <div className="github" style={{paddingBottom:"5rem",margin:"auto"}}>
          <GitHubCalendar
            username="amandwivedi1357"
            blockSize={15}
            blockMargin={5}
            fontSize={18}
            
          />
        </div>
    </div>
  )
}

export default Github
