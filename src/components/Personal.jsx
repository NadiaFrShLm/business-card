import React from 'react';
import Button from './Button';

function Personal(props) {
  return (
    <div className="personal">
      <img
        src="../src/assets/photo.jpeg"
        alt="personal photo"
        className="personal--photo"
        style={{ borderColor: props.borderColor }}
      />
      <div className="personal-infoWraper">
        <h1 style={{ color: props.headerColor }}>Nadia FURZIKOVA</h1>
        <p className="personal--profession" style={{ color: props.profColor }}>
          Frontend Developer
        </p>
        <a
          href="#"
          className="personal--site"
          style={{ color: props.siteColor }}
        >
          nadiafr.website
        </a>
        <div className="personal-buttonWraper">
          <Button
            btnClass="btnWhite"
            label={'Email'}
            href={'mailto:nadia.shurygina@gmail.com'}
            imgSrc={'../src/assets/email.svg'}
          />
          <Button
            btnClass="btnBleu"
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/nadezda-furzikova-829600a2/'}
            imgSrc={'../src/assets/linkedin.svg'}
          />
        </div>
      </div>
    </div>
  );
}

export default Personal;
