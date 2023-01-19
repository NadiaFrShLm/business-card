import React from 'react';

function Footer(props) {
  return (
    <div
      className="footer"
      style={{ backgroundColor: props.bgColor, borderColor: props.borderColor }}
    >
      <a href="https://www.facebook.com/nadia.shurygina">
        <img src="../src/assets/facebook.svg" alt="facebook icom" />
      </a>
      <a href="https://www.instagram.com/nadia.fr.sh.lm/">
        <img src="../src/assets/instagram.svg" alt="instagram icom" />
      </a>

      <a href="https://github.com/NadiaFrShLm">
        <img src="../src/assets/github.svg" alt="github icom" />
      </a>
    </div>
  );
}

export default Footer;
