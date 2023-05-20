import React from "react";
import logo from "../../../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-bgFooter text-whiteHigh w-full">
      <div className="md:pt-12 flex flex-col items-center justify-between gap-2 w-full md:max-w-5xl">
        <section className="md:pt-28 p-4 md:p-0 w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center justify-between gap-2 md:gap-4">
            <div className="col-span-1 md:col-span-6">
              <img src={logo} alt="" />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col text-start">
              <span className="footer-title">Services</span>
              <a href="/" className="link link-hover">
                Branding
              </a>
              <a href="/" className="link link-hover">
                Design
              </a>
              <a href="/" className="link link-hover">
                Marketing
              </a>
              <a href="/" className="link link-hover">
                Advertisement
              </a>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col text-start">
              <span className="footer-title">Company</span>
              <a href="/" className="link link-hover">
                About us
              </a>
              <a href="/" className="link link-hover">
                Contact
              </a>
              <a href="/" className="link link-hover">
                Jobs
              </a>
              <a href="/" className="link link-hover">
                Press kit
              </a>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col text-start">
              <span className="footer-title">Legal</span>
              <a href="/" className="link link-hover">
                Terms of use
              </a>
              <a href="/" className="link link-hover">
                Privacy policy
              </a>
              <a href="/" className="link link-hover">
                Cookie policy
              </a>
            </div>
          </div>
        </section>
        <section className="w-full">
          <hr className="text-whiteMid" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-4 md:p-0 md:py-2">
            <p>© 2023 All rights reserved</p>
            <p>Develop By {process.env.REACT_APP_CompanyName}</p>
          </div>
        </section>
      </div>
      <p></p>
    </footer>
  );
};

export default Footer;
