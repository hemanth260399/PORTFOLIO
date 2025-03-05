import { useEffect, useRef, useState } from "react"
import { Projectcard } from "./projectcard"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import introJs from "intro.js"
import { skills } from "./skillsjson"
import LogoWall from "./logowall"
import { MindGames } from "./MindGame"
import { motion } from "framer-motion"
import "./App.css"
import MyPhoto from './MyPhoto.png';
import { fadeIn } from "./scroll"
import { projects } from "./projectJSON"
import Joyride from "react-joyride"
import { h2 } from "framer-motion/client"
function App() {
  let skillsRef = useRef(null)
  let homepageref = useRef(null)
  let resumeref = useRef(null)
  let Aboutref = useRef(null)
  let Gamesref = useRef(null)
  let Projectref = useRef(null)
  let Contactref = useRef(null)
  let [run, setrun] = useState(false)
  const [text] = useTypewriter({
    words: ['FULL STACK DEVELOPER', "FRONTEND DEVELOPER", "BACKEND DEVELOPER"],
    loop: Infinity
  })
  // useEffect(() => {
  //   introJs().setOptions({
  //     steps: [{
  //       intro: "Hi Welcome to Hemanthraja's portfolio"
  //     },
  //     {
  //       element: resumeref.current,
  //       intro: "To View my resume click here..."
  //     },
  //     {
  //       element: Aboutref.current,
  //       intro: "Who I Am , What I Do , My Values "
  //     }, {
  //       element: skillsRef.current,
  //       intro: "My All skills are scrolling here..."
  //     }, {
  //       element: Gamesref.current,
  //       intro: "Games For fun"
  //     },
  //     {
  //       element: Projectref.current,
  //       intro: "All Projects are listed here"
  //     }, {
  //       element: Contactref.current,
  //       intro: "You can contact me here"
  //     }]
  //   }).start();
  // }, [])
  let steps = [
    {
      target: "body",
      content: (<h3>Welcome to Hemanthraja's portfolio</h3>),
      disableBeacon: true,
      isFixed: true,
      style: {
        padding: '0',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
      },
    },
    {
      target: '.resume',
      content: 'Click here to view my resume...',
      disableBeacon: true
    },
    {
      target: ".about",
      content: "Who I Am , What I Do , My Values ",
      disableBeacon: true
    }, {
      target: ".skills",
      content: "My All skills are scrolling here...",
      disableBeacon: true,
    }, {
      target: ".games",
      content: "Games For fun",
      disableBeacon: true
    },
    {
      target: ".projects",
      content: "All Projects are listed here",
      disableBeacon: true
    }, {
      target: ".contact",
      content: "You can contact me here",
      disableBeacon: true
    }
  ]
  let joyrideCallback = (data) => {
    let { status } = data
    console.log(status)
    if (status === 'finished' || status === 'skipped') {
      setrun(false)
    }
  }
  useEffect(() => {
    setrun(true)
  }, [])
  return (
    <>
      <div className="background-img">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{ position: "sticky", zIndex: 99, top: 0, height: 60 }}>
          <div className="container" >
            <button className="navbar-brand fs-4 bg-dark border-0">PORTFOLIO</button>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header text-white border-bottom">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">PORTFOLIO</h5>
                <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 mr-5">
                  <li className="nav-item mx-3">
                    <button className="nav-link active mynavbar" aria-current="page" onClick={() => { homepageref.current.focus() }}><span>Home</span><i className="fa-solid fa-house"></i></button>
                  </li>
                  <li className="nav-item mx-3">
                    <button className="nav-link active mynavbar" aria-current="page" href="#" onClick={() => { Aboutref.current.focus() }}><span>About</span><i className="fa-solid fa-circle-info"></i></button>
                  </li>
                  <li className="nav-item mx-3">
                    <button className="nav-link active mynavbar" aria-current="page" onClick={() => { skillsRef.current.focus() }}><span>Skills</span><i className="fa-solid fa-brain"></i></button>
                  </li>
                  <li className="nav-item mx-3">
                    <button className="nav-link active mynavbar" aria-current="page" href="#" onClick={() => { Gamesref.current.focus() }}><span>Games</span><i className="fa-solid fa-gamepad"></i></button>
                  </li>
                  <li className="nav-item mx-3">
                    <button className="nav-link active mynavbar" aria-current="page" onClick={() => { Projectref.current.focus() }}><span>Project</span><i className="fa-solid fa-diagram-project"></i></button>
                  </li>
                  <li className="nav-item mx-3">
                    <button className="nav-link active mynavbar" aria-current="page" onClick={() => { Contactref.current.focus() }}><span>Contact</span><i className="fa-solid fa-address-card"></i></button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="container py-5 px-5 ">
          <div className="row title-card">
            <div className="col-lg-7">
              <h1 className="display-1 fw-bolder" ref={homepageref} tabIndex="-1" >Hi, </h1>
              <h1 className="display-3 fw-bolder mt-3">I'am HemanthRaja S</h1>
              <h1 className="display-5 fw-bolder mt-4">{text}<Cursor cursorColor='blue' /></h1>
              <a href="https://drive.google.com/file/d/1LglsQwNvdj0XRPvRCZUvfOcr5YSTMJ3P/view?usp=drive_link" ref={resumeref} target="_blank" className="btn btn-primary btn-lg active mt-4 resume" role="button" aria-pressed="true">View Resume</a>
              <div>
                <a href="https://github.com/hemanth260399" target="_blank" >
                  <i className="fa-brands fa-github text-dark mx-3 mt-5 display-4"></i>
                  <h4 className="display-6 inline-block fw-bolder "> - GitHub</h4>
                </a>
                <br />
                <a href="https://www.linkedin.com/in/hemanth-raja-305a08142/" target="_blank">
                  <i className="fa-brands fa-linkedin text-dark display-3 block mx-3 mt-3"></i>
                  <h4 className="display-6 inline-block fw-bolder "> - LINKEDIN</h4>
                </a>
              </div>
            </div>
            <div className="col text-center">
              <img src={MyPhoto} alt="hemanth" className="border-5 border-dark mt-5 text-center" style={{ width: 350, height: 380, borderRadius: "100%" }} />
            </div>
          </div>
        </div>
        <div ref={Aboutref} tabIndex="-1">
          <h1 className="text-center text-primary mt-5 italic underline"><p className="about d-inline">About</p></h1>
          <div className="container" >
            <div className=" row">
              <motion.div className="col-lg-4" style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPnZr9tE8evgo3qfyDvXgheJ-zAJX5K3KOg&s" alt="" style={{ width: 300, height: 280, borderRadius: 20, margin: "20px 0px 0px 40px" }} />
              </motion.div>
              <motion.div className="col-lg-7 mt-5" style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <h3 className="fw-bolder">I'm Hemanth</h3>
                <h5 className="container mt-3 font-sans tracking-widest text-wrap"> a Full Stack Developer with a strong passion for web development and a commitment to delivering high-quality, user-friendly applications. As a fresher, I have gained hands-on experience working with front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies such as Node.js, Express.js, and MongoDB.</h5>
              </motion.div>
            </div>
          </div>
        </div>
        <br />
        <div ref={skillsRef} tabIndex="-1">
          <h1 className="text-center text-primary mt-1 italic underline  "><p className=" skills d-inline">Skills</p></h1>
          <div className="container mb-3   mt-4"  >
            <motion.div className="row" style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} >
              <div className="col-lg-9 text-center" style={{ display: "flex", flexWrap: "wrap", width: "100%", }}>
                <LogoWall
                  items={skills}
                  direction='horizontal'
                  pauseOnHover={false}
                  size='clamp(8rem, 1rem + 20vmin, 25rem)'
                  duration='30s'
                  bgColor='white'
                  bgAccentColor='white'
                />
              </div>
            </motion.div>
          </div >
        </div>
        <div ref={Gamesref} tabIndex="-1">
          <h1 className="text-center text-primary mt-5 autoshow italic underline "><p className=" games d-inline">Games</p></h1>
          <div className="autoshow" >
            <MindGames />
          </div>
        </div>
        <div ref={Projectref} tabIndex="-1">
          <h1 className="text-center text-primary mt-1 italic underline " ref={Projectref} tabIndex="-1"> <p className="projects d-inline">Projects</p></h1>
          <motion.div className="container text-center projectCard " style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("right", 0.5)} initial="hidden" whileInView="show" transition={{ type: 'spring', stiffness: 300 }}>
            {
              projects.map((project, index) => (
                <Projectcard key={index} title={project.title} image={project.image} descp={project.descp} link={project.link} FE={project.FE} BE={project.BE} stack={project.stack} />
              ))
            }
          </motion.div>
        </div>
        <h1 className="text-center text-primary mt-5 mb-4 autoshow italic underline " ><p className="contact d-inline">Contact</p></h1>
        <div className="container text-center autoshow mt-5" ref={Contactref} tabIndex="-1">
          <div className="contact-bar" style={{ width: "90%", marginLeft: "5%" }}>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ReVrXEjqJzsEqSucJdmmq_HOyREMXhnFNQ&s" alt="open-envelope" className="contact-img" />
            </div>
            <div>
              <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="62fac39d-e4b5-4ba7-ac59-e1b199bc9bb2"></input>
                <div className="mb-3 contactArea">
                  <label htmlFor="exampleFormControlInput1 " ><h5>Name</h5></label>
                  <input type="text" className="contacttab" id="exampleFormControlInput1" required placeholder="Enter name" />
                </div>
                <div className="mb-3 contactArea">
                  <label htmlFor="exampleFormControlInput1" ><h5>Email address</h5></label>
                  <input type="email" className="contacttab" id="exampleFormControlInput1" required placeholder="Enter email" />
                </div>
                <div className="mb-3 contactArea">
                  <label htmlFor="exampleFormControlTextarea1" ><h5>Message</h5></label>
                  <textarea className="contacttab" name="message" id="exampleFormControlTextarea1" required style={{ height: 100 }} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <footer className="bg-dark text-white py-5 mt-5">
          <div className="container text-center">
            <p>�� 2025 HemanthRaja S. All rights reserved.</p>
          </div>
        </footer>
      </div>
      <Joyride steps={steps} continuous run={run} scrollTo={true} showStepsProgress={true} showSkipButton={true} hideBackButton={false} scrollOffset={100} callback={joyrideCallback} />
    </>
  )
}

export default App
