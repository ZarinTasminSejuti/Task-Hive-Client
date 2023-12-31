/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Banner = () => {
  const { userDetails } = useContext(AuthContext);
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full bg-cover h-[400px] bg-fixed lg:h-[750px] relative"
      style={{ backgroundImage: "url(https://i.ibb.co/PxtHzN2/banner2.jpg)" }}
    >
      <div className="max-w-[1280px]">
        <div style={overlayStyle}></div>

        <div className="text-left pl-5 lg:pl-20 absolute top-12 lg:top-56 z-10">
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="text-gray-600 text-md lg:text-4xl font-semibold mb-3"
          >
            Explore, Collaborate, Achieve with Task Hive!
          </p>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="text-black font-bold text-4xl lg:text-7xl "
          >
            Manage your works on <br />{" "}
          </p>
          <p className="font-bold text-6xl lg:text-7xl mt-5 text-black">
            Task <span className="text-amber-400">Hive</span>
          </p>
          <br />

          <p
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className="text-white w-full lg:w-1/2 text-jus text-md lg:text-2xl font-semibold mb-3 lg:mb-8"
          >
            Our intuitive platform empowers you to organize tasks effortlessly,
            prioritize effectively, and collaborate seamlessly with your team.
          </p>

          {!userDetails && (
            <>
              <Link to="/login">
                <button
                  className="btn text-black bg-amber-400 border-none hover:text-white hover:bg-black"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  Let's Explore
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
