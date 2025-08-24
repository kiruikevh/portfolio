import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Button } from "react-bootstrap";

function AboutCard() {
  return (
    <Card className="quote-card-view shadow-lg rounded-3">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Apart from coding, here are some activities I really enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> ✍️ Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> ⚽ Playing Soccer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Kevin</footer>

          {/* Gmail Contact Button */}
          <div className="mt-3">
            <Button
              variant="outline-danger"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kevinkirui003@gmail.com&su=Project%20Inquiry&body=Hi%20Kevin%2C%20I%27d%20like%20to%20discuss..."
              target="_blank"
            >
              📧 Email Me via Gmail
            </Button>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
