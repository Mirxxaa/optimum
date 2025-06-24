import React, { useState, useEffect } from "react";
import Iridescence from "../components/Iridescence";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaShareAlt } from "react-icons/fa";
import axios from "axios";
import CareersApplicationForm from "../components/CareersApplicationForm";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    jobType: "all",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);



  // Helper function to capitalize the first letter of a string
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  // Helper function to capitalize each word in a string
  const capitalizeWords = (string) => {
    if (!string) return "";
    return string
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  };

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Adjust the URL to match your backend
      const response = await axios.get("https://optimum-server-iqif.onrender.com/jobs/all-jobs");


        // Capitalize job names and other relevant fields
        const formattedJobs = response.data.map((job) => ({
          ...job,
          jobName: capitalizeWords(job.jobName),
          company: capitalizeWords(job.company),
          location: capitalizeWords(job.location),
        }));

        setJobs(formattedJobs);
        setIsLoading(false);

        // If no job is selected, select the first job
        if (formattedJobs.length > 0 && !selectedJob) {
          setSelectedJob(formattedJobs[0]);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs");
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term and job type
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      (job.jobName || "")
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      (job.company || "").toLowerCase().includes(filters.search.toLowerCase());
    const matchesType =
      filters.jobType === "all" || job.jobType === filters.jobType;
    return matchesSearch && matchesType;
  });

  // Format date to relative time (e.g., "2 days ago")
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const today = new Date();
      const diffTime = today - date;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) return "Today";
      if (diffDays === 1) return "Yesterday";
      return `${diffDays} days ago`;
    } catch (err) {
      return "Unknown date";
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-[#143d59]"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="lg:h-[80vh] rounded-t-4xl absolute bottom-0 w-full bg-white">
      <div className="w-full h-screen z-[-100] absolute bottom-0">
        <Iridescence
          color={[0.0, 0.04, 0.2]}
          mouseReact={false}
          amplitude={0.5}
          speed={4.0}
        />
      </div>

      <div className="lg:w-[80vw] m-auto p-8">
        {/* Main Content */}
        <main className="container mx-auto px-4 ">
          {/* Search and Filter Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search jobs or companies..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143d59]"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </div>
              <div className="md:w-64">
                <select
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#143d59]"
                  value={filters.jobType}
                  onChange={(e) =>
                    setFilters({ ...filters, jobType: e.target.value })
                  }
                >
                  <option value="all">All Job Types</option>
                  <option value="Full Time">Full-time</option>
                  <option value="Part Time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <button className="text-[#143d59] font-semibold cursor-pointer text-xl rounded-md transition-colors">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Jobs Section */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Job Listings */}
            <div className="lg:w-2/5">
              <h2 className="text-xl font-semibold mb-4">
                Available Positions ({filteredJobs.length})
              </h2>

              <div className="space-y-4 overflow-y-scroll h-screen p-4">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div
                      key={job._id}
                      className={`bg-white rounded-lg shadow-md p-5 cursor-pointer border-l-4 transition-all ${
                        selectedJob?._id === job._id
                          ? "border-l-4 border-[#143d59]"
                          : "border-transparent hover:border-l-4 hover:border-[#143d59]"
                      }`}
                      onClick={() => setSelectedJob(job)}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-[#143d59]">
                            {job.jobName}
                          </h3>
                          <p className="text-gray-700">{job.company}</p>
                        </div>
                        <span className="bg-[#f4b41a] text-white text-xs font-medium px-2.5 py-0.5 rounded">
                          {job.jobType}
                        </span>
                      </div>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <FaLocationDot />
                        {job.location}
                      </div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-sm text-gray-500">
                          Posted {formatDate(job.createdAt)}
                        </span>
                        <span className="text-sm font-medium text-[#143d59]">
                          SAR {job.salaryRange}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-5 text-center">
                    <p>No jobs match your search criteria</p>
                  </div>
                )}
              </div>
            </div>

        {/* Job Details */}
<div className="lg:w-3/5">
  {selectedJob ? (
    <div className="bg-white rounded-lg shadow-md p-6 sticky overflow-y-scroll h-screen top-8">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-[#143d59]">{selectedJob.jobName}</h2>
          <p className="text-lg text-gray-700">{selectedJob.company}</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#143d59] hover:bg-[#f4b41a] cursor-pointer font-semibold text-white py-2 px-6 rounded-md transition-colors"
        >
          Apply Now
        </button>
      </div>

      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
        <div className="flex items-center">
          <FaLocationDot className="mr-1" /> {selectedJob.location}
        </div>
        <div className="flex items-center">
          <PiBagSimpleFill className="mr-1" /> {selectedJob.jobType}
        </div>
        <div className="flex items-center">
          <span className="mr-1">SAR</span> {selectedJob.salaryRange}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          {selectedJob.requirements
            .filter((req) => req.trim() !== "")
            .map((req, index) => (
              <li key={index}>{req}</li>
            ))}
        </ul>
      </div>

      <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
        <div>
          <p className="text-gray-500">Posted {formatDate(selectedJob.createdAt)}</p>
          <p className="text-sm text-gray-500">Job ID: {selectedJob.jobId}</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full">
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-center h-64">
      <svg
        className="w-12 h-12 text-[#143d59] mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <h3 className="text-xl font-semibold mb-2">Select a job to view details</h3>
      <p className="text-gray-600">Click on any job from the list to see more information</p>
    </div>
  )}

  {/* Popup Modal for Application Form */}
  {showForm && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50  backdrop-blur-sm"
        onClick={() => setShowForm(false)}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-hidden md:max-w-lg lg:max-w-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#143d59] text-white">
          <h3 className="text-lg font-semibold">Apply for {selectedJob?.jobName}</h3>
          <button
            onClick={() => setShowForm(false)}
            className="text-white hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-white hover:bg-opacity-20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Body - Scrollable */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          <CareersApplicationForm
            selectedJob={selectedJob}
            onClose={() => setShowForm(false)}
            isModal={true}
          />
        </div>
      </div>
    </div>
  )}
</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobsPage;
