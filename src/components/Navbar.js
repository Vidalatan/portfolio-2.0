
function Navbar() {
  return (
    <header className="row fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand py-0 row justify-content-start">
            <img src="./assets/images/EdgeZhero_Logo_W-C.png" alt="Vidal Tan Logo" width="60" height="60" className="d-inline-block align-text-top col my-2"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarContent" className="collapse navbar-collapse justify-content-end">
            <a href="#about-me-scroll" className="btn btn-outline-light me-2 my-2">About Me</a>
            <a href="#deployed-projects-scroll" className="btn btn-outline-light me-2 my-2">Deployed Projects</a>
            <a href="#contact-information-scroll" className="btn btn-outline-light me-2 my-2">Contact Information</a>
            <a href="https://docs.google.com/document/d/1lSuucgk-TPz7Kvhj171CTAAqWSDtuH9mvwGSKjBebDE/edit?usp=sharing" className="btn btn-outline-light me-2 my-2" target="_blank">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;