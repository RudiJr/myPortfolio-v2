export const Home = () => { 
  return (
    <section className="profile">
        <div className="profile-content">
        <h3>Hello, my name is</h3>
        <h1>Rudi Júnior</h1>
        <h3>{`And i'm a`}<span className="multiple-text"></span></h3>

        <div className="social-media">
          <a href="https://linkedin.com/in/rudi-junior" rel="noreferrer" target="_blank">
            <box-icon type='logo' title="My Linkedin" name='linkedin' color='#8544d5 ' size='2rem'></box-icon>
          </a>
          <a href="https://github.com/RudiJr" rel="noreferrer" target="_blank">
            <box-icon name='github' title="My Github" type='logo' color='#8544d5' size='2rem'></box-icon>
          </a>
        </div>
      </div>

      <div className="profile-img">
        <img src="src/assets/img/Rudi.png" alt="Rudi Júnior picture" />
      </div>
    </section>
  );
};

