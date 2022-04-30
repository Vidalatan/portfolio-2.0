
function ProjectRepos() {
  return (
    <section className="container pt-5">
      <h3 className="text-center">My Project Repositories</h3>
      <div className="row pt-5">
        <div id="primary-project" className="project-restrictor">
            {/* <!-- <div className="container d-flex justify-content-center">
                <a className="project-link pl-primary" href="https://via.placeholder.com/500x500" target="_blank" style="background-image: url(https://via.placeholder.com/500x500); background-position: center; width: 350px; height: 350px;">
                    <p className="mb-0 mt-3 text-center"> Primary Project </p>
                </a>
            </div> --> */}
        </div>
      </div>
      <div id="secondary-projects" className="row pt-3">
        {/* <!-- <div className="col d-flex justify-content-center m-3">
            <a className="project-link pl-secondary" href="https://via.placeholder.com/500x500" target="_blank" style="background-image: url(https://via.placeholder.com/500x500); background-position: center; width: 250px; height: 250px;">
                <p className="mb-0 mt-3 text-center"> Other Project </p>
            </a>
        </div> --> */}
      </div>
    </section>
  )
}

export default ProjectRepos;