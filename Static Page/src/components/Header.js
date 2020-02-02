import React from 'react';

import config from '../../config';

export default function Header() {
  return (
    <header id="header">
      <div>
        <h1>
          ZaddyTech
        </h1>
        <p>A Big Data Services Company</p>
      </div>
      <div id="contact">
        <h2>
          <a href="mailto:contact@zaddytech.com">contact@zaddytech.com</a>
        </h2>
      </div>
    </header>
  );
}
