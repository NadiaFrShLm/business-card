import React from 'react';

function Button({ btnClass, label, href, imgSrc }) {
  return (
    <a className={`button ${btnClass}`} href={href}>
      {' '}
      <img className="email-img" src={imgSrc} />
      <span className="text">{label}</span>
    </a>
  );
}

export default Button;
