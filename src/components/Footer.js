
function Footer() {
  return (
    <footer id="contact-information-scroll" className="row bg-dark">
      <h5 className="text-center mb-4"> Contact Me </h5>
      <div className="row-cols-3 d-flex mb-3">
        <a className="col d-flex justify-content-center align-items-center" href="mailto:vidalatan@gmail.com"> Email Me!</a>
        <a className="col d-flex justify-content-center align-items-center" href="https://github.com/Vidalatan" target="_blank"><img src="./assets/images/GitHub-Mark-Light-32px.png" alt="Git Hub Icon" width="32" height="32"/></a>
        <a className="col d-flex justify-content-center align-items-center" href="https://www.linkedin.com/in/vidal-tan-2848741b0" target="_blank"><img src="./assets/images/LI-In-Bug.png" alt="LinkedIn Icon" width="40" height="32"/></a>
      </div>
    </footer>
  )
}

export default Footer;