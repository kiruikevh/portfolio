import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import { motion } from 'framer-motion';

function Home() {
  return (
    <section>
      <Container fluid className="home-section position-relative" id="home">
        <Particle />

        <Container className="home-content py-5">
          <Row className="align-items-center">
            {/* Intro Text */}
            <Col md={7} className="home-header">
              <motion.h1
                style={{ paddingBottom: 15 }}
                className="heading"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi There!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                className="heading-name mb-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'M{' '}
                <strong className="main-name" style={{ background: 'linear-gradient(90deg,#6e45e2,#88d3ce)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Kevin Kirui
                </strong>
              </motion.h1>

              <motion.div
                style={{ textAlign: 'left' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Type />
              </motion.div>

              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* <Button
                  variant="primary"
                  size="lg"
                  className="me-3"
                  style={{ fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
                >
                  Let's Connect 🚀
                </Button>
                 <Button
      variant="outline-primary"
      size="lg"
      style={{ fontWeight: 'bold', borderWidth: '2px' }}
      onClick={() => navigate('/resume')}
    >
      View Portfolio 📁
    </Button> */}
              </motion.div>
            </Col>

            {/* Hero Image */}
            <Col md={5} className="text-center mt-4 mt-md-0">
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '450px', width: '100%' }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Next Section */}
      <Home2 />
    </section>
  );
}

export default Home;
