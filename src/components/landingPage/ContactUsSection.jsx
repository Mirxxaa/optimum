import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

const ContactUsSection = () => {
  const [formData, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Message sent successfully!");
  };

  return (
    <section className=" bg-white h-screen flex items-center justify-center py-10 md:py-16 px-4 w-full  m-auto">
      <div className=" mt-10 flex flex-col md:flex-row items-start">
        <div className="p-6 md:p-8 w-full  md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1974B8] font-semibold mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-[#BBA14E] rounded-full"></div>
          <p className="mt-6 text-base sm:text-lg text-gray-600 w-full md:w-4/5">
            Have a question or want to work together? Drop us a message and
            we'll get back to you as soon as possible.
          </p>

          {/* Contact Information */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-[#1974B8]/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-[#1974B8]"
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
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">info@optibsc.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-[#1974B8]/10 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-[#1974B8]"
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
                <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                <p className="text-gray-600">+966 50 217 1947</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-8">
          <div className="bg-white w-full rounded-xl shadow-md p-4 md:p-8 transform transition-all duration-300 hover:shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                      ? "border-[#1974B8] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "name" || formData.name
                      ? "text-xs text-[#1974B8] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  Your Name
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
                      ? "border-[#1974B8] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "email" || formData.email
                      ? "text-xs text-[#1974B8] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  Email Address
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
                      ? "border-[#1974B8] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                />
                <label
                  htmlFor="subject"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "subject" || formData.subject
                      ? "text-xs text-[#1974B8] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  Subject
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
                      ? "border-[#1974B8] shadow-md"
                      : "border-gray-300"
                  }`}
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === "message" || formData.message
                      ? "text-xs text-[#1974B8] -top-2 bg-white px-1"
                      : "text-gray-500 top-3"
                  }`}
                >
                  Your Message
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#1974B8] text-white font-medium rounded-lg shadow-md hover:bg-[#BBA14E] focus:outline-none focus:ring-2 focus:ring-[#1974B8] focus:ring-opacity-50 transform transition-all duration-300 hover:cursor-pointer hover:shadow-lg"
                >
                  Send Message
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
