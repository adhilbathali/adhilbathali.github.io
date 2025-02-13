import '../styles/about.css'

export default function About(){
    return(

        <section className="about">
            <div>
                <h1>Who am i ?</h1>
                <hr />
                <p>Hey there, I am <b>Adhil Bathali</b>. As an aspiring entrepreneur and a freelance web developer, I thrive on building impactful solutions through technology. My passion for web development led me to freelance projects like medievallife.ae, a medical supply company website, and paaju.com, where I showcase my work and provide web services. Beyond web development, I’m delving into AI and machine learning, with the goal of fostering a Python community to mentor others and grow together.</p>
            </div>
            <div className='download-resume-btn'>
                <button className='download-resume'>Download Résumé</button>
                <svg width="20px" className='download-arrow' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
            </div>
        </section>
    )
}