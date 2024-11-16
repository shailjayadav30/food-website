import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";
import logo from "../images/logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#1b1919] py-10 md:py-6 flex items-center justify-center">
      <div className="max-w-[70rem] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-6">
          {/* Left Section */}
          <div className="flex flex-col gap-6 md:w-1/3 w-full">
            <img
              className="w-32 h-16 object-contain mx-auto md:mx-0"
              src={logo}
              alt="Footer Logo"
              loading="lazy"
            />
            <p className="text-base text-[#e3e1df] text-center md:text-left">
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {/* Social Media Buttons */}
              <button className="bg-[#ddd4d4] rounded-full w-10 h-10 flex items-center justify-center">
                <FaTwitter className="text-[#1b1919] w-5 h-5" />
              </button>
              <button className="bg-[#ddd4d4] rounded-full w-10 h-10 flex items-center justify-center">
                <FaInstagram className="text-[#1b1919] w-5 h-5" />
              </button>
              <button className="bg-[#ddd4d4] rounded-full w-10 h-10 flex items-center justify-center">
                <FaFacebook className="text-[#1b1919] w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap md:flex-nowrap w-full gap-8 justify-between">
            {[
              {
                title: "Page",
                links: ["Home", "Menu", "Order online", "Catering", "Reservation"],
              },
              {
                title: "Information",
                links: ["About us", "Testimonial", "Event"],
              },
              {
                title: "Get in touch",
                links: [
                  "2972 Westheimer Rd. Santa Ana, Illinois 85486",
                  "abc@example.com",
                  "+123 4567 8901",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="flex flex-col gap-4 w-full md:w-1/3">
                <h4 className="text-lg text-[#f54748] font-semibold">{section.title}</h4>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm text-[#e3e1df] hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="mt-8 text-sm text-[#e3e1df] text-center">
          &copy; 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
