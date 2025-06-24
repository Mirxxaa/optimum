import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";

const ContactUsSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific field in formData
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data to ensure it's being collected correctly
    console.log("Form Data Submitted:", formData);

    try {
      const response = await axios.post(
        "https://optimum-server-iqif.onrender.com/messages/add",
        formData
      );
      console.log("Message sent successfully:", response.data);
      // Optionally reset the form or show a success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });

      // Show success alert
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error alert
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <section className=" bg-white lg:absolute md:absolute lg:bottom-0 bottom-0 lg:w-full lg:h-[80vh] rounded-t-4xl flex items-center justify-center  ">
      <div className="lg:flex lg:w-[80vw] m-auto ">
        <div className="p-6 md:p-8 w-full  md:w-1/2">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#143d59] font-semibold mb-4">
              {t("getInTouch")}
            </h2>
          </div>
          <div className="h-1 w-24 bg-[#f4b41a] rounded-full"></div>
          <p className="mt-4 text-base sm:text-lg text-gray-600 w-full md:w-4/5">
            {t("getInTouchDescription")}
          </p>

          {/* Contact Information */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-[#1974B8]/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-[#143d59]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  {t("email")}
                </h4>
                <p className="text-gray-600">connect@optibsc.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-[#1974B8]/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-[#143d59]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  {t("phone")}
                </h4>
                <p className="text-gray-600">+966 54 964 1403</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
          <div className="bg-white w-full rounded-xl   md:p-8 transform transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-[#143d59] mb-4">
              {t("sendUsAMessage")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-2">
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
                      ? "border-[#143d59] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "text-xs text-[#143d59] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  {t("youName")}
                </label>
              </div>

              {/* Phone input comes right after the Name field */}
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => handleFocus("phone")}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none ${
                    focusedField === "phone"
                      ? "border-[#143d59] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "phone" || formData.phone
                      ? "text-xs text-[#143d59] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  {t("phone")}
                </label>
              </div>

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
                      ? "border-[#143d59] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "text-xs text-[#143d59] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  {t("yourEmail")}
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus("subject")}
                  onBlur={handleBlur}
                  required
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none ${
                    focusedField === "subject"
                      ? "border-[#143d59] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "subject" || formData.subject
                      ? "text-xs text-[#143d59] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  {t("subject")}
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus("message")}
                  onBlur={handleBlur}
                  required
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border bg-white transition-all duration-300 outline-none resize-none ${
                    focusedField === "message"
                      ? "border-[#143d59] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "text-xs text-[#143d59] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  {t("yourMessage")}
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 mb-8 py-3 bg-[#143d59] text-white font-medium rounded-lg shadow-md hover:bg-[#f4b41a] focus:outline-none focus:ring-2 focus:ring-[#1974B8] focus:ring-opacity-50 transform transition-all duration-300 hover:cursor-pointer hover:shadow-lg"
                >
                  {t("sendMessage")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
