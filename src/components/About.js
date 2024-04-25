import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Why use this bot?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">Commands</h4>
              <p className="p-color">
                This bot is in development and will have more than 100 commands
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">Support</h4>
              <p className="p-color">
              Join our discord to have support at any time
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">Customization</h4>
              <p className="p-color">
                Free discord bot with no premium functionalities, all commands are free to use
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/commands" className="h-color no-decoration">
            Check out Commands &rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">7</h4>
            <p className="p-color">Total Servers</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">59</h4>
            <p className="p-color">Total Users</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">135</h4>
            <p className="p-color">Total Commands Ran</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
