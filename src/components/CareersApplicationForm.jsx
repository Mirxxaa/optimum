import React, { useState } from "react";




export default function CareersApplicationForm({ selectedJob, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    cv: null,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "cv") {
      const file = files[0];
      if (file && file.size > 2 * 1024 * 1024) {
        setMessage("CV must be less than 2MB.");
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!formData.cv || !selectedJob) {
      setMessage("CV and job details are required");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("experience", formData.experience);
    data.append("cv", formData.cv);

    // Include job info
    data.append("jobId", selectedJob.jobId);
    data.append("jobName", selectedJob.jobName);
    data.append("salaryRange", selectedJob.salaryRange);
    data.append("postedDate", selectedJob.createdAt);

    try {
      const res = await fetch("https://optimum-server-iqif.onrender.com/careers-applications", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Submission failed");

      setMessage("Application submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        cv: null,
      });

      // Optionally close form
      if (onClose) onClose();
    } catch (error) {
      console.error(error);
      setMessage("Error submitting application. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4">
      <h3 className="text-xl font-semibold text-[#143d59]">Submit Your Application</h3>

      {message && <p className="text-red-500">{message}</p>}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone with country code"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Years of Experience"
        className="w-full p-3 border rounded"
        required
      />
      <input
        type="file"
        name="cv"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        className="w-full"
        required
      />

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="bg-[#143d59] hover:bg-[#f4b41a] text-white font-bold py-2 px-6 rounded"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
