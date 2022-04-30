
function Intro() {
  return (
    <section className="row p-md-5">
      <div className="col g-5 overflow-y">
        <h3>It all started with an interest...</h3>
        <p className="p-5 p-restrictor">
            I was a new father, a freshly hired optician, and an avid gamer. It was a weird pallet of interests and responsibilities. 
            But because of these, I stumbled upon coding and programming languages; and I was HOOKED. The first time I looked at the power
            that programming languages had, the small and big life applications, was like learning how to drive for the first time. 
            For me the joy was (and still is) more about the challenge of solving complex problems than what the end result is (although 
            succeeding does also feel just as good). My very first (partially) working 
            application was a tool that I wanted to utilize in helping me assist customers with finding the perfect eyewear. Eventually 
            my passion for coding grew from a simple hobby to a bit of an obsession. And now I am here, able to build complete and complex 
            sites full of design and logic.
        </p>
      </div>
      <div className="col-md-6 g-5 d-flex justify-content-center align-items-center">
        <a className="p-5 project-link" href="https://github.com/Vidalatan/Optic-Calculator" target="_blank">
            <img src="./assets/images/glasses.png" alt="First coding project" width="300" height="250"/>
            <p className="mb-0 mt-3 text-center">Python Optic Calculator</p>
        </a>

          {/* <!-- <img src="./assets/images/glasses.png" alt="First coding project" width="250" height="250"> --> */}
      </div>
    </section>
  )
}

export default Intro;