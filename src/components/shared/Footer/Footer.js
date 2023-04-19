import React from "react";
import logo from "../../../assets/logos/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-bgFooter text-whiteHigh h-[906px] w-full">
      <div className="pt-72 max-w-6xl flex flex-col items-center justify-between h-full">
        <section className="pt-28">
          <div className="grid grid-cols-12 items-center justify-between gap-2 md:gap-24 w-full">
            <div className="col-span-6">
              <img src={logo} alt="" />
            </div>
            <div className="col-span-2 flex flex-col text-start">
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
            <div className="col-span-2 flex flex-col text-start">
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
            <div className="col-span-2 flex flex-col text-start">
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
          <div className="flex items-center justify-between w-full py-10">
            <p>© 2023 All rights reserved</p>
            <p>Develop By Netro Creative</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
