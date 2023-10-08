// import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="profile">
        <div className="profile-content">
        <h3>Hello, my name is</h3>
        <h1>Rudi Júnior</h1>
        <h3>{`And i'm a`}<span className="multiple-text"></span></h3>

        <div className="social-media">
          {/* <Link href="https://linkedin.com/in/rudi-junior" target="_blank"><i className="bx bxl-linkedin" title="My LinkedIn"></i></Link>
          <Link href="https://github.com/RudiJr" target="_blank"><i className="bx bxl-github" title="My Github"></i></Link> */}
        </div>
      </div>

      <div className="profile-img">
        <img src="src/assets/img/Rudi.png" alt="Rudi Júnior picture" />
      </div>
    </section>
  );
};

// TODO: Fix Links 

