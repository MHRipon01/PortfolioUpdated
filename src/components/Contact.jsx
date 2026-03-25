import emailjs from "@emailjs/browser";

import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";

export default function Contact({ isDark }) {
  // Rotating Icons
  const contactIcons = [
    { icon: <FaLinkedin />, bg: "from-blue-600 to-blue-400" },
    { icon: <SiGmail />, bg: "from-red-500 to-pink-500" },
    {
      icon: <FaGithub />,
      bg: isDark ? "from-gray-700 to-gray-900" : "from-gray-600 to-gray-800",
    },
    { icon: <FaWhatsapp />, bg: "from-green-400 to-green-600" },
  ];

  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % contactIcons.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // 📝 Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  //  Errors for tooltip
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // remove error on typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // ✅ Validation
  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .send(
        "service_bei8u4s", // service ID
        "template_1oad4jt",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          message: form.message,
        },
        "_sKr90YxRufzgabiG", // public key
      )
      .then(() => {
        toast.success("Thanks for reaching out! 🚀");

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message ❌");
      });
  };
  return (
    <section
      className={`py-20 px-6 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
              contactIcons[currentIcon].bg
            } flex items-center justify-center text-white shadow-lg transition-all duration-500`}
          >
            <div className="animate-bounce text-xl">
              {contactIcons[currentIcon].icon}
            </div>
          </div>

          <h2 className="text-2xl font-bold" id="contact">Contact Me</h2>
        </div>

        {/* Description */}
        <p
          className={`mb-10 max-w-2xl ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Great work starts with great conversations. Let’s connect and build
          something worth talking about.
        </p>

        {/* Layout */}
        <div className="grid md:grid-cols-2 items-center">
          {/* LEFT ANIMATION */}
          <div className="hidden md:flex justify-center overflow-hidden h-64">
            <div className="-rotate-90 whitespace-nowrap animate-scrollText text-4xl font-semibold opacity-20">
              Lets Connect ✦ Lets Connect ✦ Lets Connect ✦
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Names */}
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                label="First name"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                error={errors.firstName}
                isDark={isDark}
              />

              <InputField
                label="Last name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                isDark={isDark}
              />
            </div>

            {/* Email */}
            <InputField
              label="Email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              error={errors.email}
              isDark={isDark}
            />

            {/* Message */}
            <div className="relative">
              <label className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>

              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className={`w-full mt-1 p-3 rounded-lg border ${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-gray-100 border-gray-300"
                }`}
              />

              {errors.message && (
                <span className="absolute top-full mt-1 left-0 text-xs bg-red-500 text-white px-2 py-1 rounded shadow">
                  {errors.message}
                </span>
              )}
            </div>

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 transition"
              >
                Let's Talk ✨
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SCROLL ANIMATION */}
      <style jsx>{`
        @keyframes scrollText {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scrollText {
          animation: scrollText 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

//Reusable Input with Tooltip Error
function InputField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  isDark,
}) {
  return (
    <div className="relative">
      <label className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Your ${label}`}
        className={`w-full mt-1 p-3 rounded-lg border ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"
        }`}
      />

      {/* Tooltip */}
      {error && (
        <span className="absolute top-full mt-1 left-0 text-xs bg-red-500 text-white px-2 py-1 rounded shadow">
          {error}
        </span>
      )}
    </div>
  );
}
