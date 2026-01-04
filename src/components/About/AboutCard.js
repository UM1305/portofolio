import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
           <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Umapathy</span> from{" "}
            <span className="purple">Chennai, India</span>.
            <br />
            <br />
            I am currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Hubino</span>, where I build scalable and
            customer-focused web applications.
            <br />
            <br />
            My work involves developing responsive user interfaces using{" "}
            <span className="purple">Angular</span>, implementing secure backend
            services with <span className="purple">Node.js</span>, and designing{" "}
            <span className="purple">RESTful APIs</span>.
            <br />
            <br />
            I have completed my <span className="purple">MCA</span> from{" "}
            <span className="purple">Ayya Nadar Janaki Ammal College</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
