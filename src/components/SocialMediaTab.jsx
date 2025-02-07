import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaTab = () => {
  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 left-0 z-50">
      <div className="flex flex-col space-y-4">
        <a href="https://www.facebook.com/protyasha.alixy.5/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faFacebook} className="mr-2" />
          <span>Facebook</span>
        </a>
        <a href="https://github.com/hassankhsalar" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          <span>Github</span>
        </a>
        <a href="https://www.linkedin.com/in/salar-hassan-028167217/" target="_blank" rel="noopener noreferrer" className="flex items-center p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
          <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaTab;
