import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  const roles = [
    { text: 'Web Developer 🌐', color: '#6e45e2' },
    { text: 'System Developer 💻', color: '#ff6b6b' },
    { text: 'Freelancer 🚀', color: '#ffb347' },
    { text: 'MERN Stack Developer 🛠️', color: '#1dd1a1' },
    { text: 'Open Source Contributor 👐', color: '#576574' },
    { text: 'Portal Developer 🏢', color: '#54a0ff' },
    { text: 'Azure Developer ☁️', color: '#0abde3' },
    { text: 'AI Engineer 🤖', color: '#f368e0' },
    { text: 'Cloud Solutions Architect 🏗️', color: '#ff9f43' },
    { text: 'Serverless Expert ⚡', color: '#10ac84' },
  ];

  return (
    <div style={{ 
      fontSize: '1.6em', 
      fontWeight: '600', 
      lineHeight: '1.6', 
      minHeight: '70px', 
      color: '#fff', 
      textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)',
      transition: 'all 0.3s ease-in-out'
    }}>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          cursor: '|',
        }}
        onInit={(typewriter) => {
          roles.forEach((role) => {
            typewriter
              .typeString(
                `<span style="color:${role.color}; text-shadow: 0 0 8px ${role.color};">${role.text}</span>`
              )
              .pauseFor(1500)
              .deleteAll()
              .pauseFor(300);
          });
          typewriter.start();
        }}
      />
    </div>
  );
}

export default Type;
