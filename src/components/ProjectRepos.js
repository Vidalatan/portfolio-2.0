import Repo from './Repo'

// List of repositories to add to the page
const repositories = {
  // index: [name, link, image]
  primary: ["Nerds Meet Nerds","https://nerds-meet-nerds.herokuapp.com/", "https://raw.githubusercontent.com/Nerds-Meet-Nerds/Nerds-Meet-Nerds/develop/public/assets/images/screenshots/landing-page.jpg",false],
  1: ["Poke Shop","https://vidalatan.github.io/poke-shop/index.html", "https://raw.githubusercontent.com/Vidalatan/poke-shop/main/assets/images/poke-home-screenshot.png",false],
  2: ["Tech Biz Blog Site","https://tech-biz-blog.herokuapp.com/", "https://raw.githubusercontent.com/Vidalatan/tech-biz-blog/main/assets/images/FinishedProductImage.png",false],
  3: ["Weather Dashboard","https://vidalatan.github.io/weather_dashboard/", "https://raw.githubusercontent.com/Vidalatan/weather_dashboard/main/Assets/images/fullpage.png",false],
};

function ProjectRepos() {
  return (
    <section className="container pt-5">
      <h3 className="text-center">My Project Repositories</h3>
      <Repo repositories={repositories} />
    </section>
  )
}

export default ProjectRepos;