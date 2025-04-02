import React from "react";
import logo from "../../assets/Logo/NavLogo.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FooterSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className="bg-[#143d59] text-white py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between space-y-10 md:space-y-0">
          {/* Logo & Social Icons Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
            <img src={logo} alt="Company Logo" className="w-40 md:w-60" />
            <div className="flex text-3xl justify-center md:justify-start gap-4 mt-6">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h2 className="font-bold text-lg mb-4">{t("ourOffice")}</h2>
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="font-semibold">{t("riyadh")}</h3>
                <p>{t("address")}</p>
              </div>
              <div>
                <h3 className="font-semibold">{t("phone")}</h3>
                <p>+966 54 964 1403</p>
              </div>
              <div>
                <h3 className="font-semibold">{t("email")}</h3>
                <p>connect@optibsc.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
              {t("subscribeToOurNewsletter")}
            </h3>
            <form className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                className="w-full p-3 border rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
                placeholder={t("emailPlaceholder")}
                required
              />
              <button
                type="submit"
                className="bg-white text-[#143d59] py-3 px-6 rounded-lg font-bold hover:bg-[#f4b41a] cursor-pointer hover:text-white transition duration-300"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="text-center text-sm p-4 bg-[#143d59] text-white">
        {t("allRightReserved")}
      </div>
    </div>
  );
};

export default FooterSection;
