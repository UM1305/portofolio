import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgBitbucket } from "react-icons/cg";
import { DiAws, DiGit } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFilezilla,
  SiTwilio,
  SiOpenai,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFilezilla />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTwilio />
      </Col>
    </Row>
  );
}

export default Toolstack;
