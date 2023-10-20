export const Contact = () => {
  return (
    <section>
      <h1 className="title">Contact <span>Me</span></h1>
      <div className="media-links">
        <div className="social-box">
          <div className="social-card">
            <a href="https://www.linkedin.com/in/rudi-junior/" rel="noreferrer">
              <box-icon type='logo' name='linkedin' color='#8544d5 ' size='2rem'></box-icon>
            </a>
            <h5>LinkedIn</h5>
          </div>

          <div className="social-card">
            <a href="https://github.com/RudiJr" rel="noreferrer">
              <box-icon name='github' type='logo' color='#8544d5' size='2rem'></box-icon>
            </a>
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </section>
  );
};


