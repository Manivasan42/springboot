import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="https://www.shutterstock.com/shutterstock/photos/2257167839/display_1500/stock-vector--d-work-with-software-man-writes-code-at-computer-develops-program-website-or-application-2257167839.jpg" className="navbar-brand">Employee Management App</a>
          </div>
        </nav>
      </header>
      <header>
        <nav className="navbar-auto">
          <div>
            <Link to="/developersite" className="navbar-brand">Developer-Site</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
