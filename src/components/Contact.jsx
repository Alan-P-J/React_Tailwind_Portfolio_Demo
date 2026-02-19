import React, { useState, useRef, forwardRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SiLeetcode } from "react-icons/si";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,


} from "react-icons/fa";
const ContactSection = forwardRef((props, ref) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "alanpjpnc@gmail.com",
      link: "mailto:alanpjpnc@gmail.com",
      color: "text-red-500",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 7510189423",
      link: "tel:+917510189423",
      color: "text-red-500",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Kerala, India",
      link: "https://maps.google.com/?q=Thrissue, Kerala,India",
      color: "text-blue-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/Alan-P-J",
      color: "hover:text-gray-800 dark:hover:text-white",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/alan-p-j-5747a1247/",
      color: "text-blue-600",
    },
    {
      label:"LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/u/K28night/",
      color: "text-green-600",
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_q8vpnne",
        "template_f6lms94",
        formRef.current,
        "MQf4oZNT7mwtmWSZ6"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitting(false);
          toast.success("Email sent successfully!");
          // Reset form
          formRef.current.reset();
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setIsSubmitting(false);
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen bg-gray-100 scroll-mt-24 py-26 md:pt-7 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together to bring your ideas to
            life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Let's Start a Conversation
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                I'm currently available for freelance work and full-time
                opportunities. Whether you have a project in mind or just want
                to connect, feel free to reach out. I'll get back to you within
                24 hours.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 bg-white shadow-md dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <div
                    className={`flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr from-blue-500 to-${method.color.replace(
                      "text-",
                      ""
                    )} dark:from-gray-700 dark:to-gray-600 text-white shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <method.icon size={24} />
                  </div>

                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {method.label}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      {method.value}
                    </p>
                  </div>

                  <div className="absolute inset-0 transition-colors border border-transparent rounded-2xl group-hover:border-blue-500"></div>
                </a>
              ))}
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white flex">
                Follow me on
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300  hover:scale-110 ${social.color} ${social.label}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 bg-white shadow-lg h-fit dark:bg-gray-800 rounded-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 text-gray-700 transition-colors duration-300 bg-gray-100 border border-blue-300 rounded-lg focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="from_email"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 text-gray-700 transition-colors duration-300 bg-gray-100 border border-blue-300 rounded-lg dark:border-gray-600 focus:outline-none dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 text-gray-700 transition-colors duration-500 bg-gray-100 border border-blue-300 rounded-lg dark:border-gray-600 focus:outline-none dark:bg-gray-700 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-gray-700 transition-colors duration-500 bg-gray-100 border border-blue-300 rounded-lg resize-none dark:border-gray-600 focus:outline-none dark:bg-gray-700 dark:text-white"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <input
                type="hidden"
                name="to_email"
                value="alanpjpnc@gmail.com"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 cursor-pointer bg-[#0767ac] rounded-lg hover:bg-blue-700 disabled:bg-blue-400 hover:shadow-lg hover:-translate-y-1 disabled:translate-y-0 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
