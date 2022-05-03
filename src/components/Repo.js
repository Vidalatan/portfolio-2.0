// var primary_repo_size = 350;
// var secondary_repo_size = 250;

function Repo(props) {

  function populateOtherRepos() {
    let _ = []
    for (let repo in props.repositories) {
      if (repo !== "primary"){
        _.push(
          <div className="col d-flex justify-content-center m-3">
            <a className="project-link pl-secondary" href={props.repositories[repo][1]} target="_blank" style={{"backgroundImage": "url("+props.repositories[repo][2]+")", "backgroundPosition": "center", "width": "250px", "height": "250px"}}>
              <p className="mb-0 mt-3 text-center"> {props.repositories[repo][0]} </p>
            </a>
          </div>
        )
      }
    }
    return _
  }


  return (
    <>
    <div id="primary-project" class="project-restrictor">
      <div className="container d-flex justify-content-center">
        <a className="project-link pl-primary" href={props.repositories.primary[1]} target="_blank" style={{"backgroundImage": "url("+props.repositories.primary[2]+")", "backgroundPosition": "center", "width": "350px", "height": "350px"}}>
          <p className="mb-0 mt-3 text-center"> {props.repositories.primary[0]} </p>
        </a>
      </div>
    </div>
    <div id="secondary-projects" className="row pt-3">
      {populateOtherRepos()}
    </div>
    </>
    
  )
}

export default Repo;