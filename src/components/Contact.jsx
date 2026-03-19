import { useState, useRef, forwardRef } from "react";
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

// ── Static data outside component ──
const CONTACT_METHODS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "alanpjpnc@gmail.com",
    link: "mailto:alanpjpnc@gmail.com",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 7510189423 (WhatsApp available)",
    link: "tel:+917510189423",
    gradient: "from-green-400 to-green-600",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Kerala, India · Open to UAE",
    link: "https://maps.google.com/?q=Thrissur,Kerala,India",
    gradient: "from-blue-400 to-blue-600",
  },
];

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    label: "GitHub",
    link: "https://github.com/Alan-P-J",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/alan-p-j-5747a1247/",
    color: "hover:text-blue-600",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    link: "https://leetcode.com/u/K28night/",
    color: "hover:text-yellow-500",
  },
];

const ContactSection = forwardRef((_, ref) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSent, setLastSent]         = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();

    // Rate limiting — 1 message per minute
    if (Date.now() - lastSent < 60000) {
      toast.warn("Please wait a minute before sending again.");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formRef.current.from_email.value)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setIsSubmitting(false);
          setLastSent(Date.now());
          toast.success("Thanks for reaching out! I'll get back to you shortly.");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email failed to send:", error.text);
          setIsSubmitting(false);
          toast.error("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen py-16 transition-colors bg-gray-100 duration-300 md:pt-3 scroll-mt-24 md:pb-7 dark:bg-gray-900"
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto mb-4 bg-blue-600" aria-hidden="true" />
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Looking to hire a Java or Full Stack Developer? Let's connect and
            discuss how I can contribute to your team.
          </p>
          <span className="inline-block px-4 py-1 mt-4 mb-4 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Open to Full-Time Opportunities
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* ── Left: contact info ── */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Let's Start a Conversation
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                I'm currently open to full-time backend or full-stack developer
                opportunities, especially roles involving Java, Spring Boot, and
                scalable web applications. Feel free to reach out — I usually
                respond within 24 hours.
              </p>
            </div>

            {/* Contact method cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {CONTACT_METHODS.map((method) => (
                <a
                  key={method.label}
                  href={method.link}
                  target={method.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center justify-center p-6 text-center transition-all duration-300 bg-white shadow-md dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {/* Icon circle — uses per-card gradient */}
                  <div className={`flex items-center justify-center w-14 h-14 mb-4
                    rounded-full bg-gradient-to-tr ${method.gradient}
                    dark:from-gray-700 dark:to-gray-600 text-white shadow-md
                    group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon size={24} aria-hidden="true" />
                  </div>

                  <h5 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {method.label}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {method.value}
                  </p>

                  {/* Hover border overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-colors border border-transparent rounded-2xl group-hover:border-blue-500"
                  />
                </a>
              ))}
            </div>

            {/* Social links + resume download */}
            <div>
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Follow me on
              </h4>
              <div className="flex gap-3 mb-6">
                {SOCIAL_LINKS.map(({ icon: Icon, label, link, color }) => (
                  <a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-3 text-gray-600 dark:text-gray-400 bg-white
                      dark:bg-gray-800 rounded-lg transition-all duration-300
                      hover:scale-110 hover:shadow-md ${color}
                      focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                ))}
              </div>

              {/* Resume download */}
              <a
                href={`${import.meta.env.BASE_URL}Alan_PJ_Junior_Software_Engineer.pdf`}
                download
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* ── Right: contact form ── */}
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
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 text-gray-700 transition-colors duration-300 bg-gray-100 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-gray-700 transition-colors duration-300 bg-gray-100 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 text-gray-700 transition-colors duration-300 bg-gray-100 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
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
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-4 py-3 text-gray-700 transition-colors duration-300 bg-gray-100 border border-blue-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* to_email handled inside EmailJS template — not passed from frontend */}

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                aria-disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-3 px-8 py-4
                  font-semibold text-white transition-all duration-300
                  bg-[#0767ac] rounded-lg hover:bg-blue-700 hover:shadow-lg
                  hover:-translate-y-1 disabled:bg-blue-400 disabled:translate-y-0
                  disabled:cursor-not-allowed focus:outline-none focus:ring-2
                  focus:ring-blue-500 focus:ring-offset-2"
              >
                {isSubmitting ? (
                  <>
                    <div
                      className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane aria-hidden="true" />
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

ContactSection.displayName = "Contact";

export default ContactSection;