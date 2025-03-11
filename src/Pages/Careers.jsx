import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Careers = () => {
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
    <div>
      <div
        className="absolute flex items-center m-12  z-100    hover:text-[#BBA14E]  cursor-pointer transition duration-200 text-[#1974B8]  rounded-full "
        onClick={handleClick}
      >
        <IoIosArrowBack /> Home
      </div>
      <section className="bg-white flex items-center justify-center py-10 md:py-16 px-4 w-full m-auto">
        <div className="mt-10 flex flex-col md:flex-row items-start">
          <div className="p-6 md:p-8 w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1974B8] font-semibold mb-4">
              Apply for a Position
            </h2>
            <div className="h-1 w-24 bg-[#BBA14E] rounded-full"></div>
            <p className="mt-6 text-base sm:text-lg text-gray-600 w-full md:w-4/5">
              Submit your application by filling out the form below.
            </p>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="bg-white w-full rounded-xl shadow-md p-4 md:p-8 transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Career Application Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
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
                        ? "border-[#1974B8] shadow-md"
                        : "border-gray-300"
                    }`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === "phone" || formData.phone
                        ? "text-xs text-[#1974B8] -top-2 bg-white px-1"
                        : "text-gray-500 top-3"
                    }`}
                  >
                    Phone Number
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
                    className="w-full px-6 py-3 bg-[#1974B8] text-white font-medium rounded-lg shadow-md hover:bg-[#BBA14E] focus:outline-none focus:ring-2 focus:ring-[#1974B8] focus:ring-opacity-50 transform transition-all duration-300 hover:cursor-pointer hover:shadow-lg"
                  >
                    Submit Application
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
