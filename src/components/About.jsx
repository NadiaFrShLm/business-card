import React from 'react';

function About(props) {
  return (
    <div className="about" style={{ color: props.textColor }}>
      <div className="about--description">
        <h2 style={{ color: props.headerColor }}>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. Team player. I try to keep up with
          security and best practices, and am always looking for new things to
          learn.
        </p>
      </div>
      <div className="about--interests">
        <h2 style={{ color: props.headerColor }}>Interests</h2>
        <p>
          Pastry addicted. Reader lover. Studying german dayly. Entrepreneur.
          Travel geek. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}

export default About;
