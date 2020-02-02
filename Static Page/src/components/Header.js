import React from 'react';

import config from '../../config';

export default function Header() {
  return (
    <header id="header">
      <div>
        <h1>
          ZaddyTech
        </h1>
        <p>A Professional Big Data Staffing Compnay</p>
      </div>
      <div id="contact">
        <h2>
          Reach Us -
        </h2>
        <h3>
          <a href="mailto:contact@zaddytech.com">contact@zaddytech.com</a>
        </h3>
      </div>
    </header>
  );
}
