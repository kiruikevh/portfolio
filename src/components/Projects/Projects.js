import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ultim"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with next js ,typescrpt , react.js, ShadCn-UI, and Vercel. Have features which allows user for realtime messaging as well as supports reactions on messages."
              ghLink="https://github.com/Aaskin345/ultim"
              demoLink="https://ultim-apab.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Purebudgets"
              description="My personal personal budget tracker built with next js tailwind css mongo db ."
              ghLink="https://github.com/Aaskin345/purebudgetss"
              demoLink="https://purebudgetss-j5bd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intern"
              description="A web application build with reactjs, nextjs,Typescript .It stores data for interns posted to a certain company to keep track of TaskS Allocated."
              ghLink="https://github.com/Aaskin345/intern"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Image detection "
              description="Multiple object object detection using pretrained model with the help of tensorflow js  ."
              ghLink="https://github.com/Aaskin345/object-detection-tensorflowjs"
              demoLink="https://object-detection-tensorflowjs.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Image resolution "
              description="Using an already trained Generative Adverserial Network(GAN)model.I developed an artificially intelligent program that increases the resolution of low quality images to an improved version of the image."
              ghLink="https://github.com/Aaskin345/image_resolution"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Cooperative Management  "
              description="A portal for user to make contributions to a cooperative society and track their already made contribution.Users also see upcoming events scheduled by the cooperative society . Admins is the super user.
              Built using C# , asp dotnet framework, sql  "
              ghLink="https://github.com/kiruikevh/CooperativeManagement"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
