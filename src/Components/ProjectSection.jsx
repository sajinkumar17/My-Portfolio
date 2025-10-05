import { ArrowRight, Github } from "lucide-react";


import React from "react";

const projects = [
  {
    id: 1,
    title: "Cinebite",
    description:
      "Dynamic platform that fetches movies, shows, and ratings in real time. Your go-to source for entertainment insights.",
    image: "/projects/MovieList.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    githubUrl:
      "https://github.com/sajinkumar17/Movie-Finder/tree/main/movie-list",
  },
  {
    id: 2,
    title: "ELC",
    description:
      "Automated UI testing implemented on elc.co.uk to ensure seamless user experience and functionality. Focused on validating responsiveness, accessibility, and user flows.",
    image: "/projects/testing.jpg",
    tags: ["Selenium", "Cucumber", "TestNG"],
    githubUrl: "https://github.com/sajinkumar17/ELC_007",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Kindly Check it out !
        </p>
        <div className="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition transform duration-500 group-hover:scale-110 "
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold ml-4">{project.title}</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="mr-4"/>
                </a>
              </div>
              <p className="text-muted-foreground text-sm m-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://github.com/sajinkumar17/" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My GitHub <ArrowRight/></a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
