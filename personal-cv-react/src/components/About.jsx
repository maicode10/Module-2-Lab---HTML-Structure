import profileImg from "../assets/profile.jpg";

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <div className="profile-img-wrapper">
        <img src={profileImg} alt="Profile photo of Maira Lorraine Domaog" className="profile-img" />
      </div>
      <p>I am a 2nd Year IT student at USTP - CDO Campus, passionate about web development and technology. I am currently learning HTML, CSS, and JavaScript to build modern and responsive websites. In my free time, I enjoy singing and playing guitar and exploring new programming concepts. My goal is to become a skilled web developer and contribute to innovative digital solutions.</p>
      <p>
        Email: <a href="mailto:domaog.mairalorraine@gmail.com">domaog.mairalorraine@gmail.com</a><br />
        GitHub: <a href="https://github.com/maicode10" target="_blank">github.com/maicode10</a>
      </p>
    </section>
  );
}

export default About;