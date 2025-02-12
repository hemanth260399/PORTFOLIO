import { useRef } from "react"
import { Projectcard } from "./projectcard"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import introJs from "intro.js"
import { skills } from "./skillsjson"
import LogoWall from "./logowall"
import { MindGames } from "./MindGame"
import { motion } from "framer-motion"
import "./App.css"
import { fadeIn } from "./scroll"
function App() {
  let skillsRef = useRef(null)
  let homepageref = useRef(null)
  let resumeref = useRef(null)
  let Aboutref = useRef(null)
  let Gamesref = useRef(null)
  let Projectref = useRef(null)
  let Contactref = useRef(null)
  const [text] = useTypewriter({
    words: ['FULL STACK DEVELOPER', "FRONTEND DEVELOPER", "BACKEND DEVELOPER"],
    loop: Infinity
  })
  // useEffect(() => {
  //   introJs().setOptions({
  //     steps: [{
  //       intro: "Hi Welcome to Hemanthraja's portfolio"
  //     }, {
  //       element: resumeref.current,
  //       intro: "To Download my resume click here..."
  //     },
  //     {
  //       element: skillsRef.current,
  //       intro: "My All skills are listed here"
  //     }]
  //   }).start();
  // }, [])

  return (
    <>
      <div className="background-img">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{ position: "sticky", zIndex: 99, top: 0 }}>
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
              <h1 className="display-1 fw-bolder" ref={homepageref} tabIndex="-1" >Hi , </h1>
              <h1 className="display-3 fw-bolder mt-3">I'am HemanthRaja S</h1>
              <h1 className="display-5 fw-bolder mt-4">{text}<Cursor cursorColor='blue' /></h1>
              <div>
                <a href="https://github.com/hemanth260399" target="_blank" >
                  <i className="fa-brands fa-github text-dark mx-3 mt-3 display-4"></i>
                  <h4 className="display-6 inline-block fw-bolder "> - GitHub</h4>
                </a>
                <br />
                <a href="https://www.linkedin.com/in/hemanth-raja-305a08142/" target="_blank">
                  <i className="fa-brands fa-linkedin text-dark display-3 block mx-3 mt-3"></i>
                  <h4 className="display-6 inline-block fw-bolder "> - LINKEDIN</h4>
                </a>
              </div>
              <a href="https://drive.google.com/file/d/1Fqmth9ug4zTyZ1ahUo49KwBLXYKPG2Z0/view?usp=drive_link" ref={resumeref} target="_blank" className="btn btn-primary btn-lg active mt-5" role="button" aria-pressed="true">Download Resume</a>
            </div>
            <div className="col text-center">
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.23112830.1720934866&semt=ais_hybrid" className="rounded-circle border border-dark border-5" alt="hemanth" style={{ width: 400, height: 400, marginTop: "50px" }} />
            </div>
          </div>
        </div>
        <div >
          <h1 className="text-center text-primary mt-5 italic underline">About</h1>
          <div className="container  " ref={Aboutref} tabIndex="-1">
            <div className=" row">
              <motion.div className="col-lg-4" variants={fadeIn("left", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThPnZr9tE8evgo3qfyDvXgheJ-zAJX5K3KOg&s" alt="" style={{ width: 300, height: 280, borderRadius: 20, margin: "20px 0px 0px 70px" }} />
              </motion.div>
              <motion.div className="col-lg-7 mt-5" variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
                <h3 className="fw-bolder">I'm Hemanth</h3>
                <h5 className="container mt-3 font-sans tracking-widest text-wrap"> a Full Stack Developer with a strong passion for web development and a commitment to delivering high-quality, user-friendly applications. As a fresher, I have gained hands-on experience working with front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end technologies such as Node.js, Express.js, and MongoDB.</h5>
              </motion.div>
            </div>
          </div>
        </div>
        <br />
        <div >
          <h1 className="text-center text-primary mt-1 italic underline"  >Skills</h1>
          <div className="container mb-3   mt-4" ref={skillsRef} tabIndex="-1" >
            <motion.div className="row" variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} >
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
        <h1 className="text-center text-primary mt-5 autoshow italic underline" ref={Gamesref} tabIndex="-1">Games</h1>
        <div className="autoshow" ref={Gamesref} tabIndex="-1">
          <MindGames />
        </div>
        <div ref={Projectref} tabIndex="-1">
          <h1 className="text-center text-primary mt-1 italic underline" ref={Projectref} tabIndex="-1">Projects</h1>
          <motion.div className="container text-center projectCard " variants={fadeIn("right", 0.5)} initial="hidden" whileInView="show" transition={{ type: 'spring', stiffness: 300 }}>
            <Projectcard title={"CUSTOMER RELATIONSHIP MANAGEMENT"} image={"https://th.bing.com/th?id=OIP.DAUyMJRqUuKnEl50f8h4iwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} descp={"CRM website to track customer data and send the offer to customer through mail"} link={"https://incredible-paletas-852e20.netlify.app/"} />
            <Projectcard title={"URL SHORTENER"} image={"https://img.freepik.com/free-vector/www-concept-illustration_114360-2073.jpg?ga=GA1.1.1529103848.1738552067&semt=ais_hybrid"} descp={"In this application you can short the long URL to short URL but it redirects to actual long URL"} link={"https://eclectic-bombolone-e7b282.netlify.app/"} />
            <Projectcard title={"Ecommerce"} image={"https://th.bing.com/th/id/OIP.jby8OcI6HHBfN7T93hwjCwHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"} descp={"Shop on-the-go with seamless mobile shopping, fast checkout, and exclusive deals."} link={"https://aquamarine-begonia-7ba98f.netlify.app/"} />
            <Projectcard title={"Front End project"} image={"https://img.freepik.com/premium-photo/man-is-using-computer-with-code-code-code-screen_1129891-19208.jpg?ga=GA1.1.1529103848.1738552067&semt=ais_hybrid"} descp={"Developed a dynamic nested navigation bar and custom-designed buttons for enhanced user interaction and seamless navigation"} link={"https://statuesque-clafoutis-d5fa4c.netlify.app/"} />
          </motion.div>
        </div>
        <h1 className="text-center text-primary mt-5 mb-4 autoshow italic underline" >Contact</h1>
        <div className="container text-center autoshow" ref={Contactref} tabIndex="-1">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="62fac39d-e4b5-4ba7-ac59-e1b199bc9bb2"></input>

            <div className="mb-3 contactArea">
              <label for="exampleFormControlInput1 " ><h5>Name</h5></label>
              <input type="text" className="contacttab" id="exampleFormControlInput1" required placeholder="Enter name" />
            </div>
            <div className="mb-3 contactArea">
              <label for="exampleFormControlInput1" ><h5>Email address</h5></label>
              <input type="email" className="contacttab" id="exampleFormControlInput1" required placeholder="Enter email" />
            </div>
            <div className="mb-3 contactArea">
              <label for="exampleFormControlTextarea1" ><h5>Message</h5></label>
              <textarea className="contacttab" name="message" id="exampleFormControlTextarea1" required style={{ height: 100 }} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <footer className="bg-dark text-white py-5 mt-5">
          <div className="container text-center">
            <p>�� 2025 HemanthRaja S. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
