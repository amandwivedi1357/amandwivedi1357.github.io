import React from 'react'
import "./Skills.css"
import { skills } from './SkillData'
import { Text } from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar'
const Skills = () => {
  return (
    
     <div className="Skills-cont">
        <div className='skill-list'>
                {
                    skills.map((item,index)=>{
                        return (
                            <div key={index} className="skill">
                                <img src={item.img} alt={item.skill} className="skill-img" />
                                <Text className='skill-test'>{item.skill}</Text>
                            </div>
                        )
                    })
                }
        </div>
        {/* GITHUB Calendar */}

        <div>
          <div className="git-Text">
            Github-Calendar
          </div>
        </div>
        <div className='git-Cal'>
        <div className="w-full mt-5">
          <GitHubCalendar
            username="amandwivedi1357"
            blockSize={15}
            blockMargin={5}
            fontSize={18}
            
          />
        </div>
        </div>
        {/* <div>
          <p className="text-4xl font-bold text-center mt-10">
            GitHub <span className="text-violet-600">Stats</span>
          </p>
        </div> */}

        {/* <div className="w-full md:grid md:grid-cols-2 md:auto-rows-auto gap-x-5 gap-y-5 mt-5">
          <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=amandwivedi1357&theme=radical"
              alt="Github Streak"
            />
          </div>

          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=amandwivedi1357&theme=radical&count_private=true&show_icons=true"
              alt="github stats"
            />
          </div>

          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=amandwivedi1357&theme=radical"
              alt=""
            />
            </div>
     </div> */}
     </div>
  )
            }

export default Skills
