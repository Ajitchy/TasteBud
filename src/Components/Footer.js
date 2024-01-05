import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen">
    <footer className="bg-base-200 text-base-content px-4 bg-[#FFF0F1] py-16 mt-auto">
      <div className="flex flex-col items center md:items-start">
        <div className="h-px mx-auto rounded-full md:hidden mt-7 w-11">
        </div>
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:border-r md:pr-5">
            <span className="text-2xl font-bold font-poppins">
              <span className="text-red-custom text-2xl">T</span>aste
              <span className="text-red-custom text-2xl">B</span>ud
            </span>
            <h2 className="text-gray-custom">Contact</h2>
            <h2 className="text-dark-custom">info@tastebud.com</h2>
          </div>
          <div className="relative lg:absolute lg:right-16">
            <div className="flex flex-col items-center space-y-4 md:items-start md:flex-row md:space-x-10">
              <div className="flex flex-col items-center text-center space-y-4 md:items-start md:text-left">
                <h2 className="text-lg font-semibold font-poppins text-[#1E1E1E]">TasteBud</h2>
                <ul className="space-y-2">
                  <li className="text-[#8A8787]">Why TasteBud</li>
                  <li className="text-[#8A8787]">Partner With Us</li>
                  <li className="text-[#8A8787]">Blog</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 md:items-start md:text-left lg:transform lg:-translate-y-4">
                <h2 className="text-lg font-semibold font-poppins text-[#1E1E1E]">Programs</h2>
                <ul className="space-y-2">
                  <li className="text-[#8A8787]">FAQ</li>
                  <li className="text-[#8A8787]">Contact Us</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 md:items-start md:text-left lg:transform lg:-translate-y-4">
                <h2 className="text-lg font-semibold font-poppins text-[#1E1E1E]">Follow Us</h2>
                <ul className="flex justify-center space-x-4 md:justify-start">
                  <li>
                    <Link to={"https://www.youtube.com"} target="_blank" rel="noopener noreferrer"
                      className="youtube social">
                      <FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: "#f54748" }} />
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer"
                      className="youtube social">
                      <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: "#f54748" }} />
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer"
                      className="youtube social">
                      <FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: "#f54748" }} />
                    </Link>
                  </li>
                  <li>
                    <Link to={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer"
                      className="youtube social">
                      <FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: "#f54748" }} />
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
