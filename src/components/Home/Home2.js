import React from 'react';
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import {
  SiApachekafka,
  SiAzurefunctions,
  SiGithubactions,
  SiAzuredevops,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMicrosoft,
} from 'react-icons/si';
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  hover: { scale: 1.05, boxShadow: "0px 12px 30px rgba(0,0,0,0.15)" }
};
function Home2() {
    const goContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Intro Section */}
       <Row className="align-items-center">
  <Col md={8} className="home-about-description">
    <motion.h1
      style={{ fontSize: '2.6em' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </motion.h1>

    <motion.p
      className="home-about-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      🚀 I build <strong className="purple">reliable, scalable products end‑to‑end</strong> — 
      from modern UIs to cloud backends and AI automations.
      <br /><br />
      I'm fluent in{' '}
      <span className="purple animate-text">JavaScript</span>,{' '}
      <span className="purple animate-text">Python</span>, and the <span className="purple animate-text">.NET stack</span>.
      <br /><br />
      My interests include{' '}
      <span className="purple animate-text">Web Technologies</span>,{' '}
      <span className="purple animate-text">Data Science & Machine Learning</span>, and{' '}
      <span className="purple animate-text">Cloud / Serverless</span>.
      <br /><br />
      I love building with{' '}
      <span className="purple animate-text">Node.js</span>,{' '}
      <span className="purple animate-text">React.js & Next.js</span>, and architecting portals with{' '}
      <span className="purple animate-text">C# / ASP.NET</span>.
      <br /><br />
      I also automate workflows with <span className="purple animate-text">CI/CD</span> and integrate intelligent chatbots 🤖.
    </motion.p>
  </Col>

  <Col md={4} className="myAvtar">
    <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
      <motion.img
        src={myImg}
        className="img-fluid rounded-circle shadow-lg"
        alt="avatar"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </Tilt>
  </Col>
</Row>


        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kiruikevh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/kevin_aaskin"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kevin-kirui-1906b4240"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Capabilities Snapshot */}
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <div className="d-inline-flex flex-wrap gap-2 justify-content-center">
              <Badge bg="secondary" className="p-2"><SiReact style={{ marginRight: 6 }} /> React / Next.js</Badge>
              <Badge bg="secondary" className="p-2"><SiNodedotjs style={{ marginRight: 6 }} /> Node.js APIs</Badge>
              <Badge bg="secondary" className="p-2"><SiPython style={{ marginRight: 6 }} /> Python & AI</Badge>
              <Badge bg="secondary" className="p-2"><SiAzurefunctions style={{ marginRight: 6 }} /> Azure Functions</Badge>
              <Badge bg="secondary" className="p-2"><SiGithubactions style={{ marginRight: 6 }} /> GitHub Actions CI/CD</Badge>
              <Badge bg="secondary" className="p-2"><SiAzuredevops style={{ marginRight: 6 }} /> Azure DevOps</Badge>
              <Badge bg="secondary" className="p-2"><SiApachekafka style={{ marginRight: 6 }} /> Apache Kafka</Badge>
              <Badge bg="secondary" className="p-2"><SiMicrosoft style={{ marginRight: 6 }} /> Copilot / Chatbots</Badge>
            </div>
          </Col>
        </Row>

        {/* Services & Pricing */}
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <h1 className="purple">My Services & Pricing</h1>
            <p className="purple">Choose a package that fits your needs 🚀</p>
          </Col>
        </Row>

       <Row className="justify-content-center mt-4 g-4">
  {/* Web Development */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-code-slash fs-1 text-primary"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingTop: '2.5rem', paddingRight: '4rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Web Development
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I craft <strong>immersive, lightning-fast digital experiences</strong> 
          that don’t just look good—they <strong>convert visitors into loyal customers</strong>.
          Each website is designed with a focus on 
          <strong> storytelling, usability, and performance</strong>, ensuring your brand 
          stands out in a crowded digital world.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>✨ Pixel-perfect, responsive design</li>
          <li>⚡ Optimized for speed, SEO & conversions</li>
          <li>🔗 Seamless API & third-party integrations</li>
          <li>🛡️ Secure, scalable back-end architecture</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $200+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Hire Me 🚀
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>

        {/* Python & AI Solutions */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-cpu fs-1 text-primary"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingTop: '2.5rem', paddingRight: '4rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AI Solutions
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I build <strong>intelligent systems</strong> that automate work, analyze data, 
          and unlock insights. From <strong>ML models & OCR/NLP pipelines</strong> to 
          <strong> predictive forecasting & AI chatbots</strong>, my solutions 
          turn complexity into simple automation.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>🤖 Machine learning & deep learning models</li>
          <li>📊 Data cleaning, analytics & forecasting</li>
          <li>⚡ FastAPI / Flask APIs & automation scripts</li>
          <li>🧠 OCR/NLP pipelines for text & image data</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $400+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Work With Me 🤖
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>


          {/* Custom Portals */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-window-sidebar fs-1 text-primary"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingTop: '2.5rem', paddingRight: '4rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Custom Portals
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I design and build <strong>enterprise-grade portals</strong> powered by 
          <strong> C# / ASP.NET</strong> with <strong>secure role-based access</strong>, 
          deep integrations, and <strong>scalable architectures</strong>. Perfect 
          for organizations that need <strong>collaboration, automation, and analytics</strong> in one place.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>🔐 Authentication (OTP / OAuth / Active Directory)</li>
          <li>🔗 Business Central & ERP integrations</li>
          <li>📊 Reporting dashboards & workflows</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $500+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Contact Me 🏢
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>


{/* Azure Functions & Serverless */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-cloud-check fs-1 text-primary"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingTop: '2.5rem', paddingRight: '4rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Azure Functions<br />& Serverless
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I build <strong>event-driven, pay-as-you-go backends</strong> that scale 
          automatically with demand. Using <strong>Azure Functions</strong>, I create 
          <strong> lightweight, reliable, and observable services</strong> that keep costs low 
          while ensuring performance at scale.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>⚡ HTTP, Queue & Timer triggers</li>
          <li>🔄 Durable Functions & bindings</li>
          <li>📈 Monitor, autoscale & secure</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }} // slightly smaller on small screens
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $350+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Build Serverless ☁️
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>



{/* CI/CD Pipelines */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-arrow-repeat fs-1 text-primary"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingTop: '2.5rem', paddingRight: '4rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          CI/CD Pipelines
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I set up <strong>continuous integration & delivery pipelines</strong> that help 
          you <strong>ship faster</strong> with confidence. From <strong>automated builds & tests</strong> 
          to <strong>zero-downtime deployments</strong>, your releases stay smooth and reliable.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>⚙️ GitHub Actions / Azure DevOps</li>
          <li>🛠️ Infra as Code (Bicep / Terraform)</li>
          <li>🔐 Secrets management & environments</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $300+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Automate Delivery ⚡
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>


{/* Kafka / Event Streaming */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-diagram-3 fs-1 text-primary"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingRight: '4rem', paddingTop: '2.5rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Event Streaming<br />with Kafka
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I design <strong>real-time data pipelines</strong> and <strong>microservices messaging</strong> systems 
          using Kafka, enabling <strong>stream processing, scalability, and reliable event delivery</strong> 
          for modern applications.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>📌 Topic design & partitioning</li>
          <li>💻 Producers/Consumers (Node / Python / .NET)</li>
          <li>🗄️ kSQL / Connect / Schema Registry</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $450+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Start Streaming 🔄
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>


{/* Chatbots / Copilot */}
<Col xs={12} md={6} lg={4}>
  <motion.div
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="h-100"
  >
    <Card className="service-card h-100 border-0 text-center shadow-lg rounded-4 bg-white position-relative overflow-hidden">
      {/* Floating Glow Effect */}
      <motion.div
        className="position-absolute top-0 start-50 translate-middle-x bg-primary rounded-circle"
        style={{ width: 120, height: 120, opacity: 0.08, zIndex: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <div className="service-icon mb-3 position-relative z-1">
        <motion.i
          className="bi bi-robot fs-1 text-primary"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </div>

      <Card.Body className="position-relative z-1" style={{ paddingRight: '4rem', paddingTop: '2.5rem' }}>
        <motion.h4
          className="fw-bold fs-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Chatbots<br />& Copilot
        </motion.h4>

        <motion.p
          className="text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I develop <strong>intelligent bots and Copilot integrations</strong> for 
          <strong> task automation, knowledge search, and multi-platform support</strong>. 
          Enhance productivity and provide seamless user experiences with safety guardrails and telemetry.
        </motion.p>

        <motion.ul
          className="text-start small mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <li>🤖 RAG & vector search implementations</li>
          <li>💬 Teams, Web, & Portal bots</li>
          <li>📊 Telemetry & safety guardrails</li>
        </motion.ul>

        <motion.span
          className="price-badge position-absolute top-0 end-0 m-3 bg-primary text-white px-3 py-1 rounded-3 fw-bold shadow"
          style={{ fontSize: '0.85rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          $500+
        </motion.span>

        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
          <Button variant="primary" className="mt-4 w-100 fw-bold" onClick={goContact}>
            Add a Copilot 🤖
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  </motion.div>
</Col>


        </Row>

        {/* Contact CTA */}
        <Row className="mt-5" id="contact">
          <Col md={12} className="text-center">
            <h2 className="purple">Ready to build?</h2>
            <p className="mb-3 purple">Tell me about your project and timeline. I usually reply the same day.</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button
  variant="outline-primary"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=kevinkirui003@gmail.com&su=Project%20Inquiry&body=Hi%20Kevin%2C%20I'd%20like%20to%20discuss..."
  target="_blank"
  rel="noopener noreferrer"
>
  Email Me
</Button>

              <Button
                variant="outline-secondary"
                href="https://www.linkedin.com/in/kevin-kirui-1906b4240"
                target="_blank"
                rel="noreferrer"
              >
                Message on LinkedIn
              </Button>
              <Button
                variant="outline-success"
                href="https://wa.me/254796809616?text=Hi%20Kevin%2C%20let%27s%20talk%20about%20a%20project"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
