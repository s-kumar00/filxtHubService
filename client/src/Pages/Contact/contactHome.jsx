import React from "react";

const ContactHome = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-100 py-10 px-5 flex items-center justify-center"
    >
      {/* Content Wrapper */}
      <div className="max-w-7xl w-full p-8">
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-bold font-mono justify-center items-start">
              Headquarters
            </h1>
            <div className="text-lg leading-relaxed">
              <p>Ambattur</p>
              <p>Plot No 2/11, Readhills Road</p>
              <p>Pudur</p>
              <p>Ambattur, Chennai, 600053</p>
              <p>
                <span className="font-medium">+91 6206573315</span>
              </p>
              <p>+1 314 212 7500 fax</p>
            </div>
            <a
              href="#"
              className="text-lg text-blue-500 underline mt-4 inline-block"
            >
              map &gt;
            </a>
          </div>
          {/* Right Section: Form */}
          <div className="w-full lg:w-3/4">
            <h2 className="text-4xl font-mono font-bold mb-6 p-4">
              Please provide your details.
            </h2>
            <p className="text-md font-medium mb-4">
              Asterisk <span className="text-red-600">(*)</span> indicates
              required field.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-md font-medium font-mono"
                >
                  *First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-lg font-medium font-mono"
                >
                  *Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-lg font-medium font-mono"
                >
                  *Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* Job Title */}
              <div className="flex flex-col">
                <label
                  htmlFor="jobTitle"
                  className="text-lg font-medium font-mono"
                >
                  *Job title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="border border-gray-300 p-2 rounded "
                  required
                />
              </div>

              {/* Company */}
              <div className="flex flex-col">
                <label
                  htmlFor="company"
                  className="text-lg font-medium font-mono"
                >
                  *Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* Industry */}
              <div className="flex flex-col">
                <label
                  htmlFor="industry"
                  className="text-lg font-medium font-mono"
                >
                  *Industry
                </label>
                <select
                  id="industry"
                  className="border border-gray-300 p-2 rounded"
                  required
                >
                  <option value="">Select industry...</option>
                  <option value="tech">Tech</option>
                  <option value="finance">Finance</option>
                </select>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-lg font-medium font-mono"
                >
                  *Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="border border-gray-300 p-2 rounded"
                  required
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label
                  htmlFor="country"
                  className="text-lg font-medium font-mono"
                >
                  *Country
                </label>
                <select
                  id="country"
                  className="border border-gray-300 p-2 rounded text-md font-medium font-mono"
                  required
                >
                  <option value="">Select country...</option>
                  <option value="us">United States</option>
                  <option value="india">India</option>
                </select>
              </div>

              <div className="flex flex-col sm:col-span-1">
                <p className="text-md font-medium">
                  <span className="text-red-600 text-lg font-bold">*</span> I
                  agree to receive future communication
                  <div className="flex items-center text-md font-medium">
                    <input
                      type="checkbox"
                      id="agree"
                      className="mr-2 h-5 w-5"
                    />
                    <label htmlFor="agree" className="flex items-center">
                      <span className="text-md">
                        from Amdocs, in accordance with the <br />{" "}
                        <span className="text-lg text-red-600 underline font-mono font-medium">
                          Privacy Policy.
                        </span>
                      </span>
                    </label>
                  </div>
                </p>
              </div>

              {/* Comments */}
              <div className="flex flex-col sm:col-span-1">
                <label
                  htmlFor="comments"
                  className="text-lg font-medium font-mono"
                >
                  *Comments
                </label>
                <textarea
                  id="comments"
                  className="border-2 p-2 rounded w-50"
                  rows="3"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-red-500 text-white font-medium font-mono px-4 py-2 rounded shadow hover:bg-red-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;
