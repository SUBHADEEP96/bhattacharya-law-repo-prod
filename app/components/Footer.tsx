import React from "react";
import "./footer.css";
import Link from "next/link";
let date = new Date().getFullYear();
const Footer = () => (
  <footer className="body-font bg-black text-white ">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center">
        Bhattacharyyas & Associates
      </a>
      <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © {date} . All rights reserved.
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href="https://www.linkedin.com/company/bhattacharyyas-associates-advocates-consultants">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>

        <Link className="ml-3" href="https://www.facebook.com/bhattacharyyasfb">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
      </span>
    </div>
  </footer>
);

export default Footer;
