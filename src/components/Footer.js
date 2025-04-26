import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // Your WhatsApp number
  const whatsappNumber = '+254796809616';

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kevin Kirui</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} KE</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/kiruikevh"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/kevin_aaskin"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kevin-kirui-1906b4240"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> {/* WhatsApp icon */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
