import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Web Developer',
           'System Developer',
          'Freelancer',
          'MERN Stack Developer',
          'Open Source Contributor',
          'Portal Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
