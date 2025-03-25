import { useEffect, useRef, useState } from "react"
import { Projectcard } from "./projectcard"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { skills } from "./skillsjson"
import LogoWall from "./logowall"
import { MindGames } from "./MindGame"
import { motion } from "framer-motion"
import "./App.css"
import MyPhoto from './newpic2.png';
import { fadeIn } from "./scroll"
import { projects } from "./projectJSON"
import Joyride from "react-joyride"
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
  let joyrideStyles = {
    buttonSkip: {
      fontSize: '14px',
      fontWeight: 'bold',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      marginLeft: '10px'
    }
  }
  useEffect(() => {
    setrun(true)
  }, [])
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navFullBar " style={{ position: "sticky", zIndex: 99, top: 0, height: 60 }}>
          <div className="container" >
            <button className="navbar-brand fs-4 bg-purple-650 border-0">PORTFOLIO</button>
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
        <div className=" title-color-card pt-5 px-5 mx-auto">
          <div className=" row title-card mx-1 text-white">
            <div className="col-lg-7">
              <h1 className="display-1 fw-bolder text-dark" ref={homepageref} tabIndex="-1" >Hi, </h1>
              <h1 className="display-3 fw-bolder mt-3 text-dark">I'am HemanthRaja S</h1>
              <h1 className="display-5 fw-bolder mt-4 " style={{ background: "linear-gradient(0deg, rgba(195,6,236,1) 1%, rgba(244,0,255,1) 100%)", WebkitBackgroundClip: "text", color: "transparent", fontFamily: "monospace" }}>{text}<Cursor cursorColor='blue' /></h1>
              <a href="https://drive.google.com/file/d/19Z9i_cu4tSDXtST1n3LrZ6zRHmHyHn5v/view?usp=drivesdk" ref={resumeref} target="_blank" className="btn active mt-4 resume" role="button" aria-pressed="true">View Resume</a>
              <div className="flex flex-end mediaButton mt-5">
                <a href="https://github.com/hemanth260399" className="mr-5" target="_blank" >
                  <i className="fa-brands fa-github text-dark p-2 display-6"></i>
                </a>
                <br />
                <a href="https://www.linkedin.com/in/hemanth-raja-305a08142/" className="mr-5" target="_blank">
                  <i className="fa-brands fa-linkedin text-dark display-6 block p-2"></i>
                </a>
              </div>
            </div>
            <div className="col text-center" >
              <img src={MyPhoto} alt="hemanth" className=" text-center" style={{ height: "380px", width: "31rem", borderRadius: "10%", marginTop: "2rem" }} />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280" >
          <defs>
            <linearGradient id="gradient" x1="32%" y1="1%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'rgba(154, 242, 227, 1)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(216, 242, 238, 1)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#gradient)" fillOpacity="1" d="M0,192L34.3,176C68.6,160,137,128,206,106.7C274.3,85,343,75,411,90.7C480,107,549,149,617,165.3C685.7,181,754,171,823,149.3C891.4,128,960,96,1029,101.3C1097.1,107,1166,149,1234,154.7C1302.9,160,1371,128,1406,112L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
        <div ref={Aboutref} tabIndex="-1">
          <h1 className="text-center mt-1 fw-bolder"><p className=" about d-inline"><span style={{ color: "rgb(244, 0, 255)" }}>ABOUT</span> <span className="textDec">MYSELF</span></p></h1>
          <div className="container" >
            <div className=" row">
              <motion.div className="col-lg-4" style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPnZr9tE8evgo3qfyDvXgheJ-zAJX5K3KOg&s" alt="" style={{ width: 300, height: 280, borderRadius: 20, margin: "20px 0px 0px 40px" }} />
              </motion.div>
              <motion.div className="col-lg-7 mt-5" style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <h3 className="fw-bolder">I'm Hemanth</h3>
                <h5 className="container mt-3 font-sans tracking-widest text-wrap"> a Full Stack Developer with a strong passion for web development and a commitment to delivering high-quality, user-friendly applications. As a fresher, I have gained hands-on experience working with front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies such as Node.js, Express.js, and MongoDB.</h5>
              </motion.div>
            </div>
          </div>
        </div>
        <br />
        <div className="partonesplit">
          <div className="contentSplit">
            <div ref={skillsRef} tabIndex="-1" className="mt-5 mb-5">
              <h1 className="text-center mt-1 fw-bolder"><p className=" skills d-inline"><span style={{ color: "rgb(244, 0, 255)" }}>My</span> <span className="textDec">SKILLS</span></p></h1>
              <div className="container mb-5 mt-4"  >
                <motion.div className="row" style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} >
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
              <h1 className="text-center fw-bolder mb-5 mt-5 games"><p><span style={{ color: "rgb(244, 0, 255)" }}>My</span> <span className="textDec">GAMES</span></p></h1>
              <motion.div style={{ opacity: 0, overflow: "hidden" }} variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} >
                <MindGames />
              </motion.div>
            </div>
          </div>
        </div>
        <div ref={Projectref} tabIndex="-1" style={{ marginTop: 100 }}>
          <h1 className="text-center mt-1 fw-bolder projects"><p><span style={{ color: "rgb(244, 0, 255)" }}>My</span> <span className="textDec">PROJECTS</span></p></h1>
          <div className="container text-center projectCard ">
            {
              projects.map((project, index) => (
                <motion.div key={index} style={{ opacity: 0 }} variants={fadeIn("up", project.timing)} initial="hidden" whileInView="show" transition={{ type: 'spring', stiffness: 300 }}>
                  <Projectcard title={project.title} image={project.image} descp={project.descp} link={project.link} FE={project.FE} BE={project.BE} stack={project.stack} />
                </motion.div>
              ))
            }
          </div>
        </div>
        <h1 className="text-center fw-bolder mt-5 contact" ><p className=" skills d-inline" > <span className="textDec">CONTACT</span><span style={{ color: "rgb(244, 0, 255)" }}> ME</span></p></h1>
        <div className=" autoshow mt-5" ref={Contactref} tabIndex="-1">
          <main className="d-flex justify-content-center py-1">
            <div className="contact-form-section bg-white p-4 shadow rounded">
              <div>
                <form action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="62fac39d-e4b5-4ba7-ac59-e1b199bc9bb2"></input>
                  <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1 " ><h5>Name</h5></label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" required placeholder="Enter name" />
                  </div>
                  <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" ><h5>Email address</h5></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" required placeholder="Enter email" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" ><h5>Message</h5></label>
                    <textarea className="form-control" name="message" id="exampleFormControlTextarea1" required style={{ height: 100 }} ></textarea>
                  </div>

                  <button type="submit" className="btn btn-pink w-100">Send Message</button>
                </form>
              </div>
            </div>
          </main>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" >
            <defs>
              <linearGradient id="gradient" x1="32%" y1="1%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgba(154, 242, 227, 1)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgba(216, 242, 238, 1)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path fill="url(#gradient)" fillOpacity="1" d="M0,160L30,154.7C60,149,120,139,180,144C240,149,300,171,360,181.3C420,192,480,192,540,176C600,160,660,128,720,133.3C780,139,840,181,900,181.3C960,181,1020,139,1080,149.3C1140,160,1200,224,1260,234.7C1320,245,1380,203,1410,181.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
          </svg>
          <footer className="footer py-4 title-color-card">
            <div className="container">
              <div className=" text-center">
                <h4>Connect with Me</h4>
                <div className="social-icons mt-4">
                  <a href="https://www.facebook.com/profile.php?id=100008271646816" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fa-brands fa-facebook mx-3 h3 p-2 border-3 border-primary rounded-circle"></i>
                  </a>
                  <a href="https://www.instagram.com/hemanthraider/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fa-brands fa-instagram mx-3 h3 p-2 border-3 border-primary rounded-circle"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/hemanth-raja-305a08142/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fa-brands fa-linkedin mx-3 h3 p-2 border-3 border-primary rounded-circle"></i>
                  </a>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div >
      <Joyride steps={steps} continuous run={run} hideCloseButton styles={joyrideStyles} scrollTo={true} showStepsProgress={true} showSkipButton={true} hideBackButton={false} scrollOffset={100} />
    </>
  )
}

export default App
