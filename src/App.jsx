import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <i>Nekesa.Ke</i><span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Let's connect <span>↗</span>
        </a>
      </nav>

      {/* Hero section */}
      <main id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line"></span>
            COMPUTER SCIENCE · SOFTWARE DESIGN & DEVELOPMENT
          </p>

          <h1>
            Hello, I'm
            <br />
            <span className="name-highlight"> Brailler Nekesa.</span>
          </h1>

          <h2>
            Building ideas into
            <br />
            <span>something meaningful.</span>
          </h2>

          <p className="hero-description">
            <p className="hero-description">
            I'm a Computer Science student learning to turn
            complex problems into practical software solutions.
            I enjoy exploring how technology works, building
            things that solve real problems, and growing with
            every project I take on.
            </p>

          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore my work <span>↗</span>
            </a>

            <a href="#about" className="button button-secondary">
              A little about me
            </a>
          </div>

          <div className="hero-status">
            <span className="status-dot"></span>
            <span>Learning. Building. Growing.</span>
          </div>
        </div>

        {/* Reserved for your future photograph */}
        <div className="hero-visual">
          <div className="visual-glow"></div>

           <div className="photo-frame">
    <div className="photo-placeholder">
      <img
        src="/images/Brailler.jpeg"
        alt="Portrait of Nekesa"
        className="profile-photo"
      />
            </div>
          </div>

          <div className="floating-note">
            <span className="note-symbol">✳</span>
            <div>
              <p className="note-title">Curiosity first.</p>
              <p className="note-description">
                Always learning something new.
              </p>
            </div>
          </div>

          <span className="decorative-star star-one">✳</span>
          <span className="decorative-star star-two">✦</span>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-line"></span>
          <span>INTRODUCTION</span>
        </div>
      </main>

      {/* About section */}
      <section id="about" className="about-section">
        <p className="section-label">A LITTLE ABOUT ME</p>

        <h2>
          Curious by nature.
          <br />
          <span>Developer in progress.</span>
        </h2>

        <p className="section-description">
          My journey in Computer Science is about more than
         writing code. It's about understanding problems,
         learning how systems work, and creating solutions
         that are useful in the real world. I'm continuously
         developing my skills through coursework, personal
         projects, and hands on experimentation.
        </p>
      </section>

      {/* Projects section */}
      

<section id="projects" className="projects-section">
  <div className="section-heading">
    <p className="section-eyebrow">WHAT I'VE BUILT</p>
    <h2>Featured Projects</h2>
    <p>
      A selection of projects where I turn ideas into practical
      software solutions.
    </p>
  </div>

  <div className="projects-grid">
    {/* Featured project */}
    <article className="project-card featured-project">
      <div className="project-screenshot">
        <img
          src="/images/event-browse.png"
          alt="Event Reservation System showing available events"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <span className="project-image-label">FEATURED PROJECT</span>
      </div>

      <div className="project-content">
        <p className="project-type">WEB APPLICATION · TICKETING</p>
        <h3>Event Reservation &amp; Ticketing System</h3>

        <p className="project-description">
          A web-based ticketing system that lets users discover events,
          create accounts, reserve available tickets, make payments
          through M-Pesa, and download their tickets. An administrative
          interface supports event and reservation management.
        </p>

        <div className="tech-stack">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">M-Pesa</span>
        </div>

        <p className="project-security">
          Built with attention to web application security, including
          work on OWASP Top 10 risks.
        </p>

        <div className="project-links">
          <span className="project-link-placeholder">
            Completed project
          </span>
        </div>
      </div>
    </article>

    {/* Project two */}
    <article className="project-card">
      <div className="project-screenshot">
        <img
          src="/images/agrostock.png"
          alt="AGROSTOCK application interface"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="project-content">
        <p className="project-type">DESKTOP OR WEB APPLICATION · .NET</p>
        <h3>AGROSTOCK</h3>

        <p className="project-description">
          An agriculture-focused inventory management project built
          to support the organization and tracking of stock.
        </p>

        <div className="tech-stack">
          <span className="tech-tag">C#</span>
          <span className="tech-tag">.NET</span>
        </div>
      </div>
    </article>

    {/* Project three */}
    <article className="project-card">
      <div className="project-screenshot">
        <img
          src="/images/expense-tracker.png"
          alt="Expense Tracker application interface"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </div>

      <div className="project-content">
        <p className="project-type">WEB APPLICATION · FINANCE</p>
        <h3>Expense Tracker</h3>

        <p className="project-description">
          A personal finance application built to record and manage
          expenses, using a Python backend and a MySQL database.
        </p>

        <div className="tech-stack">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Flask</span>
          <span className="tech-tag">MySQL</span>
        </div>
      </div>
    </article>
  </div>

  <p className="projects-note">
    Always learning, always building.
  </p>
</section>


{/* Technical Skills Section */}
<section id="skills" className="skills-section">
  <div className="skills-heading">
    <p className="skills-eyebrow">MY TOOLKIT</p>
    <h2>Technical Skills</h2>
    <p>
      Technologies I'm working with, building on, and continuing
      to explore as I grow as a software developer.
    </p>
  </div>

  <div className="skills-grid">
    <article className="skill-card">
      <div className="skill-icon">{"</>"}</div>
      <h3>Web Development</h3>
      <p className="skill-description">
        Building and styling responsive web pages.
      </p>
      <div className="skill-tags">
        <span className="skill-tag skill-strong">HTML</span>
        <span className="skill-tag skill-strong">CSS</span>
        <span className="skill-tag skill-learning">JavaScript</span>
        <span className="skill-tag skill-learning">React</span>
      </div>
    </article>

    <article className="skill-card">
      <div className="skill-icon">{"{ }"}</div>
      <h3>Programming Languages</h3>
      <p className="skill-description">
        Developing programming and problem-solving skills.
      </p>
      <div className="skill-tags">
        <span className="skill-tag skill-learning">Python</span>
        <span className="skill-tag skill-learning">Java</span>
        <span className="skill-tag skill-coursework">C#</span>
      </div>
    </article>

    <article className="skill-card">
      <div className="skill-icon">{"▤"}</div>
      <h3>Databases</h3>
      <p className="skill-description">
        Working with relational databases and SQL queries.
      </p>
      <div className="skill-tags">
        <span className="skill-tag skill-strong">SQL</span>
        <span className="skill-tag skill-strong">MySQL</span>
      </div>
    </article>

    <article className="skill-card">
      <div className="skill-icon">{"⌘"}</div>
      <h3>Frameworks &amp; Platforms</h3>
      <p className="skill-description">
        Exploring tools for backend and application development.
      </p>
      <div className="skill-tags">
        <span className="skill-tag skill-learning">Flask</span>
        <span className="skill-tag skill-learning">Django</span>
        <span className="skill-tag skill-coursework">.NET</span>
      </div>
    </article>

    <article className="skill-card">
      <div className="skill-icon">{"⚙"}</div>
      <h3>Development Tools</h3>
      <p className="skill-description">
        Tools I use to write, manage, and run code.
      </p>
      <div className="skill-tags">
        <span className="skill-tag">Git</span>
        <span className="skill-tag">GitHub</span>
        <span className="skill-tag">VS Code</span>
        <span className="skill-tag">NetBeans</span>
        <span className="skill-tag">Visual Studio</span>
        <span className="skill-tag">XAMPP</span>
      </div>
    </article>
  </div>

  <div className="skills-legend">
    <span><i className="legend-dot dot-strong"></i> Comfortable</span>
    <span><i className="legend-dot dot-learning"></i> Learning</span>
    <span><i className="legend-dot dot-coursework"></i> Coursework</span>
  </div>
</section>

{/* Education Section */}
<section id="education" className="education-section">
  <div className="education-heading">
    <p className="education-eyebrow">MY BACKGROUND</p>
    <h2>Education</h2>
    <p>
      Building my foundation in information technology and
      growing my knowledge of computer science.
    </p>
  </div>

  <div className="education-list">
    <article className="education-card">
      <div className="education-marker">
        <span></span>
      </div>

      
    <div className="education-icon">
     <span aria-hidden="true">🎓</span>
     </div>

      <div className="education-content">

        <p className="education-status">IN PROGRESS</p>
        <h3>Bachelor's Degree in Computer Science</h3>
        <p className="education-institution">
          The Catholic University of Eastern Africa (CUEA)
        </p>
        <p className="education-description">
          Developing my knowledge of software development,
          computing principles, and problem-solving.
        </p>
        <p className="education-date">2024 – 2027</p>
      </div>
    </article>

    <article className="education-card">
      <div className="education-marker">
        <span></span>
      </div>

      
    <div className="education-icon">
  <span aria-hidden="true">🎓</span>
     </div>

     <div className="education-content">

       <p className="education-status">COMPLETED</p>
        <h3>Diploma in Information Technology</h3>
        <p className="education-institution">
          Co-operative University of Kenya
        </p>
        <p className="education-date">2020 – 2022</p>
      </div>
    </article>
  </div>
</section>


      
{/* Contact Section */}
<section id="contact" className="contact-section">
  <div className="contact-heading">
    <p className="contact-eyebrow">LET'S CONNECT</p>
    <h2>Get in Touch</h2>
    <p>
      Have an opportunity, a project idea, or just want to connect?
      I'd love to hear from you.
    </p>
  </div>

  <div className="contact-card">
    <div className="contact-icon" aria-hidden="true">
      ✉️
    </div>

    <h3>Let's start a conversation</h3>
    <p>
      I'm open to learning opportunities, collaborations,
      and opportunities to grow as a software developer.
    </p>

    <a
      href="mailto:braillernekesa29@gmail.com"
      className="contact-email"
    >
      Email Me ↗
    </a>

    <div className="contact-links">
      <a
        href="https://github.com/Nekkesaa"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://www.linkedin.com/in/braillerwanjala"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>
  </div>
</section>

{/* CV Download Section */}
<section className="cv-section">
  <div className="cv-content">
    <p className="section-label">WANT TO KNOW MORE?</p>
    <h2>Let's take the next step.</h2>
    <p>
      Interested in my background and experience?
      My CV will be available to download here.
    </p>

    <a
      href="/Nekesa.pdf"
      download="Nekesa-CV.pdf"
      className="button button-primary"
    >
      Download My CV <span>↓</span>
    </a>
  </div>
</section>

     
{/* Footer */}
<footer className="site-footer">
  <a href="#home" className="footer-brand">
    Nekesa<span>.</span>
  </a>

  <p>
    Learning, building, and growing one project at a time.
  </p>

  <div className="footer-links">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#education">Education</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} Nekesa. Built with care.
    </p>
    <a href="#home" className="back-to-top">
      Back to top ↑
    </a>
  </div>
</footer>

    </div>
  );
}

export default App;
