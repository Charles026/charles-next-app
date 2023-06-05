
import Avatar from "@/component/Avatar"
import ProjectCard from "@/component/ProjectCard"
import { project } from "@/data/projects"
import Image from "next/image"
import Link from "next/link"
import clx from "classnames"

export default function Home() {
  return (

      <main className='container px-5 flex flex-col  mx-auto pt-16  xl:flex-row '>
        
        <div className='mx-auto w-auto mb-20 xl:w-1/2 xl:mr-8'>
          <div className='text-center top-16 xl:mr-8 xl:sticky xl:text-left xl:ml-0'>
            <div className='flex flex-row justify-center xl:justify-start'>
            <Avatar src="/myphoto@2x.png" alt="User Avatar" size={140}/>
            </div>
            <div className='mt-8 '>
              <h1 className="text-4xl text-gray-900 font-bold  dark:text-gray-50">
                Charles
              </h1>
              <div className='text-lg gap-2 leading-relaxed text-gray-800 flex flex-col mt-4  dark:text-gray-50'>
                <p>
                  UI/UX Designer
                </p>
                <p>
                  Currently @ Kingsoft Office MUI Team.<br/>Designing KingSoft Office Design Systems.
                </p>
                <p>
                  🧑🏻‍💻 I design and code.<br/>
                  🐱 Living with 4 lovely cats.
                </p>
              </div>
            </div>
          

          {/* <div className='justify-center xl:justify-start mt-5 flex-row flex gap-4'>
          <Link className='text-gray-500 dark:text-white' href="https://dribbble.com/mumumycat">
         <MoonIcon />
          
          </Link>
          <Link  href="https://github.com/Charles026">
          <Image className={styles.socialIcon} src="/icon-github.svg" alt="me" width="24" height="24" />
          </Link>
          <Link className='text-gray-500 dark:text-gray-300' href="https://www.instagram.com/bancs_pine/">
          <Image className={styles.socialIcon} src="/icon-instagram.svg" alt="me" width="24" height="24" />
          </Link>
          </div> */}

          </div>
        </div>



      <div className='flex flex-col gap-12'>
      {project.map((project) => ( 
        <ProjectCard projectName={project.name} coverImage={project.image} />
      ))}

      </div>
      
    </main>
  )
}
