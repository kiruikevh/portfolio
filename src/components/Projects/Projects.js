import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';

// Project Images
import leaf from '../../Assets/Projects/leaf.png';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import suicide from '../../Assets/Projects/suicide.png';
import bitsOfCode from '../../Assets/Projects/blog.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently, including personal, open-source, and enterprise solutions.
        </p>

        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          {/* Ultim */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ultim"
              description="Personal Chat Room or Workspace built with Next.js, TypeScript, React.js, ShadCN-UI, and Vercel. Features include realtime messaging and reactions."
              ghLink="https://github.com/Aaskin345/ultim"
              demoLink="https://ultim-apab.vercel.app/"
            />
          </Col>

          {/* Purebudgets */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Purebudgets"
              description="Personal budget tracker built with Next.js, Tailwind CSS, and MongoDB."
              ghLink="https://github.com/Aaskin345/purebudgetss"
              demoLink="https://purebudgetss-j5bd.vercel.app/"
            />
          </Col>

          {/* Intern */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intern"
              description="Web app for managing interns and tasks, built with React, Next.js, and TypeScript."
              ghLink="https://github.com/Aaskin345/intern"
            />
          </Col>

          {/* Image Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Image Detection"
              description="Object detection using pretrained models with TensorFlow.js."
              ghLink="https://github.com/Aaskin345/object-detection-tensorflowjs"
              demoLink="https://object-detection-tensorflowjs.vercel.app/"
            />
          </Col>

          {/* Image Resolution */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Image Resolution"
              description="AI-powered super-resolution using GANs to enhance low-quality images."
              ghLink="https://github.com/Aaskin345/image_resolution"
            />
          </Col>

          {/* Cooperative Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cooperative Management"
              description="Enterprise portal for contribution tracking and events, built with C#, ASP.NET, and SQL."
              ghLink="https://github.com/kiruikevh/CooperativeManagement"
            />
          </Col>

          {/* Enterprise Portals */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Enterprise Portals (Private Repos)"
              description="Developed and maintained enterprise solutions including ESS, eProcurement, and project management systems for organizations like ADAK and KeRRA."
              demoLink="https://ess.adak.or.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="eProcurement Platform"
              description="Custom procurement solution for vendor and tender management, deployed for ADAK."
              demoLink="https://eprocurement.adak.or.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project Management Portal"
              description="Enterprise-grade project management portal for tracking road construction projects (KeRRA)."
              demoLink="https://projects.kerra.go.ke/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Self-Service (ESS)"
              description="HR and payroll management system used by organizations like ADAK and KeRRA."
              demoLink="https://ess.kerra.go.ke/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
