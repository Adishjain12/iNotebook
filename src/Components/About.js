import React from "react";
import { useEffect } from "react";
import { ScrollSpy } from "bootstrap";
import "./styles.css";
const About = () => {
  useEffect(() => {
    const fn = (event) => {
      // Activate Bootstrap scrollspy on the main nav element
      const mainNav = document.body.querySelector("#mainNav");
      if (mainNav) {
        new ScrollSpy(document.body, {
          target: "#mainNav",
          offset: 74,
        });
      }

      // Collapse responsive navbar when toggler is visible
      const navbarToggler = document.body.querySelector(".navbar-toggler");
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
        return {}
      });
    };
    window.removeEventListener("DOMContentLoaded", fn);
    window.addEventListener("DOMContentLoaded", fn);
  });
  return (
    <div  id="page-top">
      <header class="bg-primary bg-gradient text-white">
        <div class="container px-4 text-center">
          <h1 class="fw-bolder">Welcome to Notify</h1>
          <p class="lead">
           <b>A Daily Notes taking website</b>
          </p>
          <a class="btn btn-lg btn-light" href="#about">
            Start scrolling!
          </a>
        </div>
      </header>
      <section id="about">
        <div class="container px-4">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
              <h2>About this page</h2>
              <p class="lead">
                This is a great website where you can take your daily notes. It has sign up and login functionality. Here you can add as much notes as you want. You can also delete and update the notes. Your notes can't be seen by anyone except you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-light" id="services">
        <div class="container px-4">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
              <h2>Services we offer</h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                optio velit inventore, expedita quo laboriosam possimus ea
                consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                laborum vel, labore ut velit dignissimos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="container px-4">
          <div class="row gx-4 justify-content-center">
            <div class="col-lg-8">
              <h2>Contact us</h2>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                odio fugiat voluptatem dolor, provident officiis, id iusto!
                Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa
                exercitationem, in, quo totam.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class="py-5 bg-dark">
        <div class="container px-4">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
