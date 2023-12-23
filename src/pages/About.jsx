
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      {/* who we are section  */}
      <div className="hero mt-56 lg:mt-36 bg-gradient-to-r from-white to-amber-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/HhLJ399/about1.jpg"
            className="max-w-sm rounded-lg border-2 border-white border-solid shadow-xl"
            data-aos="zoom-in"
          />
          <div>
            <div className="flex gap-4 items-center">
              <strong className="amber-200 w-1 h-7"></strong>
              <h1 className="text-5xl font-bold">Who We Are</h1>
            </div>

            <p className="py-6 text-justify lg:w-3/4">
            for a task management experience that transcends expectations. We prioritize user-friendliness, offering a platform that is easy to navigate yet robust in functionality. Our commitment to continuous improvement ensures you benefit from the latest innovations. With a mission-driven approach, we strive to be your ally in conquering tasks, providing unparalleled support for your journey toward enhanced productivity and success.
            </p>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="hero my-28 bg-gradient-to-r from-amber-300 to-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <div className="flex gap-4 items-center">
              <strong className="amber-200 w-1 h-7"></strong>
              <h1 className="text-5xl font-bold">Our Mission</h1>
            </div>

            <p className="py-6 text-justify lg:w-3/4">
            At the core of our task management system lies a mission to revolutionize the way you approach productivity. We are dedicated to providing a user-centric experience, streamlining your workflow, and fostering collaboration. Our mission is to empower individuals and teams to achieve their goals efficiently by offering an intuitive, feature-rich platform that adapts seamlessly to diverse work styles.
            </p>
          </div>
          <div className="lg:w-3/4">
            <img
              src="https://i.ibb.co/QcgJtjq/about02.jpg"
              className="max-w-sm rounded-lg shadow-xl border-2 border-white border-solid "
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      {/* who Choose Us  */}
      <div className="hero mb-48 bg-gradient-to-r from-white to-amber-300">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/symDb0Y/about2.jpg"
            className="max-w-sm rounded-lg shadow-xl border-2 border-white border-solid "
            data-aos="zoom-in"
          />
          <div>
            <div className="flex gap-4 items-center">
              <strong className="amber-200 w-1 h-7"></strong>
              <h1 className="text-5xl font-bold">Why Choose Us</h1>
            </div>

            <p className="py-6 text-justify lg:w-3/4 leading-6">
              <span className="text-black text-xl font-medium">
              Intuitive User Experience:
              </span>{" "}
              Our task management system is designed for effortless navigation, ensuring a user-friendly experience that requires minimal learning curve.<br />
              <span className="text-black text-xl font-medium">
              Robust Functionality: 
              </span>{" "}
              Enjoy a feature-rich platform that goes beyond basic task management. From collaborative tools to advanced customization options, we offer a comprehensive suite of functions tailored to your needs.
              <br />
              <span className="text-black text-xl font-medium">
              Continuous Innovation:
              </span>
              Stay ahead with our commitment to ongoing improvement. Benefit from regular updates and the latest technological advancements.
              <br />
              <span className="text-black text-xl font-medium">
              Reliable Support: 
              </span>{" "}
              Choose us for more than just software - gain a reliable ally in your productivity journey. Our dedicated support team is ready to assist you, ensuring a smooth experience every step of the way.
            </p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default About;