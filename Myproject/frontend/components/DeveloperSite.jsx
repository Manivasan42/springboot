import React from 'react';

function DeveloperSite() {
  return (
    <div className='bg-containerersss'>
      <h1><span style={{ color: 'blue' }}>Welcome to the Developer Page</span></h1>
      <p><span style={{ color: 'green' }}>This page showcases our talented team of developers.</span></p>
      <h2><span style={{ color: 'blue' }}>About Details</span></h2>
      <ul>
        <li>
          <strong><span style={{ color: 'green' }}>Manivasan Paramahamsar</span></strong>
          <p><span style={{ color: 'green' }}>Role: Java Full Stack Developer</span></p>
          <p><span style={{ color: 'green' }}>Email: prmani52@gmail.com</span></p>
        </li>
        {/* Add more team members as needed */}
      </ul>
      <h2><span style={{ color: 'blue' }}>Projects</span></h2>
      <p><span style={{ color: 'green' }}>We've worked on a variety of exciting projects. Check them out on our GitHub repositories:</span></p>
      <a href="https://github.com/Manivasan52/FullStackApplication" target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

export default DeveloperSite;
