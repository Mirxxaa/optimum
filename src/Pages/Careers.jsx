import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import Iridescence from "../components/Iridescence";
import { useTranslation } from "react-i18next";
const Careers = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/"); // This will navigate to /home
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Store the file
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Your application has been submitted!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      cv: null,
    });
  };

  return (
    <div className="w-full lg:h-[80vh] md:h-[80vh] sm:h-[70vh] h-[70vh] rounded-t-4xl absolute bottom-0 bg-white">
      <div className="w-full h-screen z-[-100] absolute bottom-0">
        <Iridescence
          color={[0, 0, 0.8]}
          mouseReact={true}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <section className=" flex items-center justify-center py-10 md:py-16 px-4 lg:w-[80vw] md:w-[80vw] sm:w-full w-full m-auto">
        <div className="flex flex-col md:flex-row items-start">
          <div className="px-4 md:p-8 w-full lg:w-1/2  md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-700 font-semibold mb-4">
              {t("appllyForAJob")}
            </h2>
            <div className="h-1 w-24 bg-[#BBA14E] rounded-full"></div>
            <p className="mt-6 text-base sm:text-lg text-gray-600 w-full md:w-4/5">
              {t("careersDescription")}
            </p>
          </div>

          <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 md:p-6">
            <div className="bg-white w-full rounded-xl p-2 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                {t("careerApplicationForm")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none ${
                      focusedField === "name"
                        ? "border-blue-700 "
                        : "border-gray-300"
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "name" || formData.name
                        ? "text-xs text-blue-700 -top-2 bg-white px-1"
                        : "text-gray-500 top-3"
                    }`}
                  >
                    {t("youName")}
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none ${
                      focusedField === "email"
                        ? "border-blue-700 shadow-md"
                        : "border-gray-300"
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "email" || formData.email
                        ? "text-xs text-blue-700 -top-2 bg-white px-1"
                        : "text-gray-500 top-3"
                    }`}
                  >
                    {t("email")}
                  </label>
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus("phone")}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none ${
                      focusedField === "phone"
                        ? "border-blue-700 shadow-md"
                        : "border-gray-300"
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "phone" || formData.phone
                        ? "text-xs text-blue-700 -top-2 bg-white px-1"
                        : "text-gray-500 top-3"
                    }`}
                  >
                    {t("phone")}
                  </label>
                </div>

                {/* CV Upload Field */}
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none"
                  />
                  <label
                    htmlFor="cv"
                    className="absolute left-4 transition-all duration-300 pointer-events-none text-xs text-gray-500 top-3"
                  ></label>
                  {formData.cv && (
                    <p className="text-gray-600 mt-2">{formData.cv.name}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-700 text-white font-medium rounded-lg shadow-md hover:bg-[#BBA14E] focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transform transition-all duration-300 hover:cursor-pointer hover:shadow-lg"
                  >
                    {t("submitApplication")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
