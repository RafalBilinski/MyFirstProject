import "./Resume.css";
import React from "react";
import photo from "../../assets/photo.jpg";

const Resume = () => {
  return (
    <div className="container" id="resume">
      <div id="white-background" className="resume">


        <aside className="left-side">
          <img
            src={photo}
            alt="photo Rafał Biliński"
            width="350"
            className="photo"
            id="rafal-photo"
          />

          <section className="contacts">
            <div className="boxL"><h2 className="contacts-title">Contact</h2></div>
            <ul className="contacts-list">
              <li className="contacts-item">
                Phone:
                <a href="tel:+48784492400" className="contacts-link"
                  >+48 784 492 400</a
                >
              </li>
              <li className="contacts-item">
                E-mail:  
                <a href="mailto:rafal.bilinski92@gmail.com" className="contacts-link"
                  > rafal.bilinski92@gmail.com</a
                >
              </li>
              <li className="contacts-item">
                LinkedIn:
                <a href="https://www.linkedin.com/in/rafa%C5%82-bili%C5%84ski/" className="contacts-link"
                  >in/rafał-biliński/</a
                >
              </li>
            </ul>
          </section>

          <section className="skills">
            <div className="boxL"><h2 className="skills-title">Languages</h2>
              </div>
            <ul className="skills-list">
              <li className="skills-item">English C1</li>
              <li className="skills-item">HTML + RWD, CSS/SAAS, JavaScript</li>
              <li className="skills-item">Python basics, C++ basics</li>
            </ul>
          </section>

          <section className="skills">
            <div className="boxL"><h2 className="skills-title">Tools</h2>
              </div>
            <ul className="skills-list">
              <li className="skills-item">Jira, MS Word, MS Excel</li>
              <li className="skills-item">Chat GPT, MS CoPilot</li>
              <li className="skills-item">GitHub</li>
              <li className="skills-item">Visual Studio Code, React framework</li>
            </ul>
          </section>

          <section className="skills">
            <div className="boxL"><h2 className="skills-title">Skills</h2>
              </div>
            <ul className="skills-list">
              <li className="skills-item">Critical Thinking, Root Cause Analisys</li>
              <li className="skills-item">Statistical analysis of data and business projects</li>
              <li className="skills-item">Team Management</li>
              <li className="skills-item">Agile Project Methodology: SCRUM</li>           
            </ul>
          </section> 
          
          <section className="widget">
            <a className="widget-link" href="../../assets/Rafal Bilinski resume.pdf" download="">Download Resume</a>
          </section>
          
          <section className="rodo">
            <h6>I agree to the processing of personal data provided in this document
              for realising this recruitment processes and for future recruitment processes</h6>
              </section>




        </aside>
        <div className="right-side">
          <section className="bio">
            <div className="boxR"><h1 className="bio-title">Rafal Bilinski</h1></div>

            <p className="bio-about">
              I have <b > experience in creating the application </b > for service technicians for handling applications 
                <b> and in team work management. </b>
              I can <b> resolve conflicts in the team </b> and present the results of his work. 
              I negotiate with corporate clients with ease.

                Effectively <b > I use MS CoPilot and Chat GPT, but I keep a critical approach 
                to results obtained. </b>
                My strength is <b> ability to solve problems creatively </b> and organized 
                keeping records.

                Always <b> I am happy to learn new skills </b>, even in my free time.
                <b> My professional dream is to create the application </b> enabling dog owners to create 
                your "walking flock" and socializing in the meantime.
            </p>
          </section>

          <section className="projects">
            <div className="boxR">
            <h2 className="projects-title">Projects and Certificates</h2>
            </div>
            <ul>
              <li>
                <span className="accent"><b>ISTQB Advanced Level - Test Manager Certificate</b></span>
              </li>
              <li>
                <span className="accent"><b>ISTQB Foundation Level Certificate</b></span>
              </li>
              <li>
                Playwright (TypeScript) course
              </li>
              <li>
                Performance Testing (Jmeter) course
              </li> 
              <li>
                Teaching qualifications (nominated teacher) and tutor certificate
              </li>   
            </ul>
          </section>
        
          <section className="jobs">
            <div className="boxR"><h2 className="education-title">Work Experience</h2></div>

            <h3 className="jobs-occupation">
              Automatic / analyst / technical advisor - <span className="accent">Automatyka chłodnicza ZRO-BILI Rafał Biliński</span>
            </h3>
            <p className="jobs-time">November 2018 - Currently</p>

            <ul className="experience">
              <li className="experience-item">
                Development of control algorithms based on physical phenomena
              </li>
              <li className="experience-item">
                Reporting and handling errors
              </li>
              <li className="experience-item">
                Work on data sets from physical sensors and investment of software layer errors of BMS controllers
              </li>
              <li className="experience-item">
                Conducting technical and business talks with corporate clients, costing
              </li>
              <li className="experience-item">
                Conducting training for technical and office employees
              </li>
            </ul>

            <h3 className="jobs-occupation">
              Leading electrician / automatisation engineer  - <span className="accent">Naprawa Urządzeń Chłodniczych Czesław Biliński</span>
            </h3>
            <p className="jobs-time">June 2016 - October 2018</p>

            <ul className="experience">
              <li className="experience-item">
                Implementation of investments from scratch: business analysis, testing, implementation, implementation of corrections and as-built documentation
              </li>
              <li className="experience-item">
                Digitalization of data circulation and documentation as well as staff training
              </li>
              <li className="experience-item">
                Analysis of data on the operation of refrigeration systems and correction of system parameters
              </li>
              <li className="experience-item">
                Coordination of service and logistics activities in the Dolnośląskie and Opolskie voivodships
              </li>
              <li className="experience-item">
                Diagnostics and security automation service along with monitoring
              </li>
            </ul>

            <h3 className="jobs-occupation">
              Service technician for refrigeration and household appliances - 
              <span className="accent">Naprawa Urządzeń Chłodniczych Czesław Biliński</span>
            </h3>
            <p className="jobs-time">June 2009 - June 2016, in parallel with studies</p>

            <ul className="experience">
              <li className="experience-item">
                Diagnosing faults and repairing industrial equipment and household appliances
              </li>
              <li className="experience-item">
                Service of refrigeration equipment on large-scale facilities
              </li>
            </ul>
          </section>
          

          <section className="education">
            <div className="boxR"><h2 className="education-title">Education</h2></div>

            <h3 className="education-degree">
              Master degree - Electrical engineering: Industrial automation<br/>
              <span className="accent">Wroclaw Uniwersity of Technology (Politechnika Wrocławska)</span>
            </h3>
            <p className="education-time">October 2014 - June 2016</p>

            <h3 className="education-degree">
              Engineer degree: Electrical engineering<br/>
              <span className="accent">Wroclaw Uniwersity of Technology (Politechnika Wrocławska)</span>
            </h3>
            <p className="education-time">October 2011 - June 2014</p>
          </section>
          
        </div>
      </div>
    </div>


  ) ;
}