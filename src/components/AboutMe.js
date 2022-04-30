
function AboutMe() {
  return (
    <section className="row">
      <div className="col-md-6 g-5 mb-5 d-flex justify-content-center align-items-center primary-project">
        <a href="https://www.linkedin.com/in/vidal-tan-2848741b0" target="_blank"><img id="image-me" src="./assets/images/me.jpg" alt="Image of me" width="375" height="375"/></a>
      </div>
      <div className="col g-5 overflow-y">
        <h3>More about myself...</h3>
        <p className="p-5 p-restrictor">
            I'm a versitile web designer due to my extensive history in graphic and web design. My dedication to continuouly learning about 
            new web design trends and concepts has made me a valuable member of any team. I served in the United States Airforce as an Airborn 
            Cryptologic Linguist where I learned Mandarin Chinese. I am also a dedicated and hard worker with several years of management 
            experience. Because of these, I have developed the skill needed to be efficient and effective.
        </p>
      </div>
    </section>
  )
}

export default AboutMe;