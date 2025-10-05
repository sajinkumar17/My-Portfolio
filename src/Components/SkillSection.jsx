import React, { useState } from 'react'

const SkillSection = () => {

  const [activeCategory, setActiveCategory] = useState("all")

  const categories = ["All", "Frontend", "Programming Language", "Testing", "Tools"];

    const skills = [
        //frontend
        { name: "React", level: 60, category: "Frontend" },
        { name: "HTML/CSS", level: 80, category: "Frontend" },
        //languages
        { name: "JavaScript", level: 80, category: "Programming Language" },
        { name: "Java", level: 80, category: "Programming Language" },
        //testing
        { name: "Selenium with Java", level: 80, category: "Testing" },
        { name: "Cucumber", level: 80, category: "Testing" },
        //tools
        { name: "GitHub", level: 75, category: "Tools" },
        { name: "Figma", level: 75, category: "Tools" },
        { name: "VS Code", level: 75, category: "Tools" },
    ]

    const filteredSkills = skills.filter((skill) => 
        activeCategory === "All" || skill.category === activeCategory
  )

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            My <span className='text-primary'>Skills</span>
        </h2>
        <div className='flex flex-wrap justify-center mb-12 gap-4'>
          {categories.map((category,key)=>(
            <button 
              key={key}
              className={`py-2 px-4 rounded-full transition-colors duration-300 capitalize ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bd-secondary'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredSkills.map((skills,key)=>(
                <div key={key} className='bg-card p-6 rounded-lg shadow-x5 card-hover'>
                  <div className='text-left mb-4'>
                    <h3 className='font-semibold text-lg'>{skills.name} </h3>
                  </div>
                  <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                    <div className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out'
                         style= {{width: `${skills.level}%`}}
                    />
                  </div>
                  <div className='text-right mt-1'>
                    <span className='text-sm text-muted-foreground'>{skills.level}%</span>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default SkillSection
