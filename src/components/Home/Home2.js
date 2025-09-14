import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import webImg from "../../Assets/webdev.jpg";
import aiImg from "../../Assets/ai.jpg";
import portalImg from "../../Assets/portal.jpg";
import serverlessImg from "../../Assets/serverless.jpg";
import cicdImg from "../../Assets/cicd.png";
import kafkaImg from "../../Assets/kafka.jpg";
import chatbotImg from "../../Assets/chatbot.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Base64 tiny noise PNG for texture overlay
const noiseBg =
  "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=')";

function Home2() {
  const goContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Web Development",
      text: "I craft immersive, lightning-fast digital experiences that don’t just look good—they convert visitors into loyal customers.",
      img: webImg,
      cta: "Hire Me 🚀",
      price: "$200+",
    },
    {
      title: "AI Solutions",
      text: "From ML models to chatbots, I build intelligent systems that automate work, analyze data, and unlock insights.",
      img: aiImg,
      cta: "Work With Me 🤖",
      price: "$400+",
    },
    {
      title: "Custom Portals",
      text: "Enterprise-grade portals with secure role-based access, deep integrations, and scalable architectures.",
      img: portalImg,
      cta: "Contact Me 🏢",
      price: "$500+",
    },
    {
      title: "Azure Functions & Serverless",
      text: "Event-driven, pay-as-you-go backends that scale automatically with demand while keeping costs low.",
      img: serverlessImg,
      cta: "Build Serverless ☁️",
      price: "$350+",
    },
    {
      title: "CI/CD Pipelines",
      text: "Continuous integration & delivery pipelines that help you ship faster with automated builds, tests, and deployments.",
      img: cicdImg,
      cta: "Automate Delivery ⚡",
      price: "$300+",
    },
    {
      title: "Event Streaming with Kafka",
      text: "Real-time data pipelines and messaging systems enabling stream processing and reliable event delivery.",
      img: kafkaImg,
      cta: "Start Streaming 🔄",
      price: "$450+",
    },
    {
      title: "Chatbots & Copilot",
      text: "AI assistants and conversational bots that enhance customer experience and streamline workflows.",
      img: chatbotImg,
      cta: "Let’s Build 🤖",
      price: "$250+",
    },
  ];

  return (
    <div>
      {/* Service sections */}
      {services.map((service, index) => (
        <section
          key={index}
          style={{
            background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0f0f0f 100%)",
            backgroundImage: `${noiseBg}, linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0f0f0f 100%)`,
            backgroundAttachment: "fixed",
            color: "white",
          }}
          className="py-5"
        >
          <Container>
            <Row className="align-items-center">
              {/* Text side */}
              <Col md={6} className={index % 2 !== 0 ? "order-md-2" : ""}>
                <motion.h2
                  className="fw-bold mb-3"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  className="mb-4"
                  style={{ color: "#ccc" }}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {service.text}
                </motion.p>
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Button variant="primary" onClick={goContact}>
                    {service.cta}
                  </Button>
                  <span className="ms-3 fw-bold text-primary">{service.price}</span>
                </motion.div>
              </Col>

              {/* Image side */}
              <Col md={6} className={index % 2 !== 0 ? "order-md-1" : ""}>
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid rounded-3 shadow"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                />
              </Col>
            </Row>
          </Container>
        </section>
      ))}

      {/* Contact CTA Section */}
      <section
        className="py-5 text-light"
        id="contact"
        style={{
          background: "linear-gradient(135deg, #111 0%, #1c1c1c 100%)",
          backgroundImage: `${noiseBg}, linear-gradient(135deg, #111 0%, #1c1c1c 100%)`,
          backgroundAttachment: "fixed",
        }}
      >
        <Container>
          <Row className="mt-5">
            <Col md={12} className="text-center">
              <h2 className="purple">Ready to build?</h2>
              <p className="mb-3 purple">
                Tell me about your project and timeline. I usually reply the same day.
              </p>
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
      </section>
    </div>
  );
}

export default Home2;
