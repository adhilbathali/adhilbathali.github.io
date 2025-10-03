import '../styles/project-page.css';
import projects from '../assets/projects';
import { useEffect } from 'react';

export default function Projects() {
    
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [])

    return (
        <>
            <section className="project-heading">
                <h1>Projects</h1>
                <hr />
                <div className="intro">
                    <p>I don’t just build projects—I solve them. Every challenge is unique, and I craft custom solutions that fit like a missing puzzle piece. No templates, no shortcuts—just a deep dive into your needs, your vision, and the smartest way to bring it to life. If you want something ordinary, there are plenty out there. But if you’re looking for a solution that’s truly yours, you’re in the right place.

Below are some of the projects I’ve worked on, each reflecting my commitment to innovative, tailored solutions.</p>
                </div>
            </section>
            <section className="project-container">
                {projects.map((project, index) => (
                    <a href={`https://${project.url}`} className='project-box-anchor'>
                        <div key={index} className='project-box'>
                            <h2>{project.title}</h2>
                            <video autoPlay muted loop playsInline className='project-video'  src={project.video}></video>
                        </div>
                    </a>
                ))}
            </section>
        </>
    );
}
