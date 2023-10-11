// import { Link } from "react-router-dom";

export const About = () => {
  return (
    <main>
      <div className="about">
        <h2>About <span>Me</span></h2>
        <h1>{`I'm Rudi`}</h1>
        <p>
            22 years old. A web developer focused on front-end, at the beginning of my career and looking to evolve more.
            Graduated in I.T Management.
            Currently living in São Paulo, SP - Brazil.
            {/* <Link href="https://heartdevs.com" target="_blank"><span className="h">He4rt Developers Member.</span></Link> */}
        </p>
      </div>

          <section className="skills">
              <div className="skills-box">
              <h2>Skills</h2>
                <div className="skill">
                  <box-icon type='logo' name='html5' color='#8544d5' size='3rem'></box-icon>
                  <p className="skill-name">HTML</p>
                </div>
                <div className="skill">
                  <box-icon type='logo' name='css3' color='#8544d5' size='3rem'></box-icon>
                  <p className="skill-name">CSS</p>
                </div>
                <div className="skill">
                  <box-icon type='logo' name='javascript' color='#8544d5' size='3rem'></box-icon>
                  <p className="skill-name">Javascript</p>
                </div>
                <div className="skill">
                  <box-icon type='logo' name='react' color='#8544d5' size='3rem'></box-icon>
                  <p className="skill-name">React</p>
                </div>
                <div className="skill">
                  <box-icon box-icon type='logo' name='tailwind-css' color='#8544d5' size='3rem'></box-icon>
                  <p className="skill-name">Tailwind</p>
                </div>
                <div className="skill">
                  <box-icon box-icon type='logo' name='bootstrap' color='#8544d5' size='3rem'></box-icon>
                  <p className="skill-name">Bootstrap</p>
                </div>
              </div>

              <div className="others">
                    <h2>Others</h2>
                    <div className="skill">
                      <box-icon box-icon type='logo' name='figma' color='#8544d5' size='3rem'></box-icon>
                      <p className="skill-name">Figma</p>
                    </div>
                    <div className="skill">
                      <box-icon box-icon type='logo' name='git' color='#8544d5' size='3rem'></box-icon>
                      <p className="skill-name">Git</p>
                    </div>
                    <div className="skill">
                      <box-icon box-icon type='logo' name='github' color='#8544d5' size='3rem'></box-icon>
                      <p className="skill-name">Github</p>
                    </div>
                  </div>
          </section>
    </main>
  
  );
};


// TODO: Fix Links 