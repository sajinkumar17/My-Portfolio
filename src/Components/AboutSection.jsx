// ...existing code...
import React from 'react'
import { Briefcase, Code ,User} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className='relative py-24 px-4'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          About <span className='text-primary'>me</span>
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Passionate Web Developer
            </h3>
            <p className='text-muted-foreground leading-relaxed'>
              My journey in web development began with a curiosity for how websites work, and it has since evolved into a full-fledged career. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href="#contact" className='cosmic-button'>
                Let's Connect
              </a>
              <a href="src\assets\SK Resume.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300 text-center'>
                Download Resume
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold'>Web Development</h4>
                  <p className='text-muted-foreground text-sm mt-1'>
                    Skilled in building responsive and dynamic websites.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold'>User Experience Design</h4>
                  <p className='text-muted-foreground text-sm mt-1'>
                    Focused on creating intuitive and user-friendly interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold'>Quality Engineer</h4>
                  <p className='text-muted-foreground text-sm mt-1'>
                    Experienced in ensuring the quality and performance of web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection