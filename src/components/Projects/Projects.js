import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import marriagehall from "../../Assets/Projects/marriage.png";
import gym from "../../Assets/Projects/gym.png";
import bitsOfCode from "../../Assets/Projects/payroll.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Payroll Management System"
              description="Payroll Management System using Angular and Node.js to simplify payroll processing for organizations. This system automates salary calculations, tax deductions, and payslip generation while ensuring accuracy and efficiency."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marriagehall}
              isBlog={false}
              title="Marriage Venue Booking System"
              description="Marriage Venue Booking System using Angular, Node.js, and SQL Server to streamline the process of searching, selecting, and booking wedding venues online. This system allows users to browse venues, check availability, and make hassle-free reservations while ensuring secure data management."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Management System"
              description="Gym Website using HTML, CSS, and JavaScript to provide a modern and engaging platform for fitness enthusiasts. This website showcases gym services, membership plans, trainer details, and workout programs in an interactive and user-friendly manner."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          
          <Col md={4} className="project-card">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
