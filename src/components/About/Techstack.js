import React from 'react';
import { Col, Row } from 'react-bootstrap';

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDocker,
} from 'react-icons/di';
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiFigma,
  SiTypescript,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiVercel,
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {/* Core Web */}
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>

      {/* AI / ML */}
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOpenai /></Col>

      {/* Tools */}
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVercel /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>
    </Row>
  );
}

export default Techstack;
