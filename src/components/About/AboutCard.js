import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Button } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="about-card shadow-lg rounded-4" style={{ background: "#1e1e1e", border: "none", color: "#fff" }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.05rem", lineHeight: 1.6 }}>
            I’m a developer who turns ideas into scalable, high-performance applications.  
            I love collaborating with clients, solving complex problems, and delivering user-friendly solutions.
          </p>
          <ul style={{ marginTop: "1rem", marginBottom: "1rem", listStyle: "none", paddingLeft: 0 }}>
            <li className="about-activity">
              <ImPointRight /> Building modern web apps (React / Next.js / Node.js)
            </li>
            <li className="about-activity">
              <ImPointRight /> API development & serverless architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Automations, AI integrations & data pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Performance & maintainability focused design
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
            “Quality over quantity — shipping value always.”
          </p>
          <footer className="blockquote-footer" style={{ color: "#aaa" }}>
            Kevin
          </footer>

          <div className="mt-4">
            <Button
              variant="outline-primary"
              href="mailto:kevinkirui003@gmail.com?subject=Project Inquiry"
              target="_blank"
              className="me-2"
            >
              📧 Let’s Talk
            </Button>
            <Button
              variant="outline-light"
              href="https://wa.me/254796809616?text=Hi%20Kevin%2C%20I’d%20like%20to hire you"
              target="_blank"
            >
              💬 WhatsApp
            </Button>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
