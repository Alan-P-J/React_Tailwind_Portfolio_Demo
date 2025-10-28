import React, { useState, useRef, forwardRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheck, FaExclamationTriangle } from 'react-icons/fa';
const ContactSection = forwardRef((props,ref) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'alanpjpnc@gmail.com',
      link: 'mailto:alanpjpnc@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 12345 67890',
      link: 'tel:+911234567890',
      color: 'text-green-500'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Kerala, India',
      link: 'https://maps.google.com/?q=Kerala,India',
      color: 'text-blue-500'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/alanpj',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/alanpj',
      color: 'hover:text-blue-600'
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs
      .sendForm(
        "service_q8vpnne", // Your Service ID
        "template_f6lms94", // Your Template ID
        formRef.current,
        "MQf4oZNT7mwtmWSZ6" // Your Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setIsSubmitting(false);
          setSubmitStatus('success');
          
          // Reset form
          formRef.current.reset();
          
          // Reset status after 5 seconds
          setTimeout(() => setSubmitStatus(''), 5000);
        },
        (error) => {
          console.error('Email failed to send:', error.text);
          setIsSubmitting(false);
          setSubmitStatus('error');
          
          // Reset status after 5 seconds
          setTimeout(() => setSubmitStatus(''), 5000);
        }
      );
  };

  return (
    <section ref={ref} id="contact" className="py-20 md:pt-29 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Let's Start a Conversation
              </h3>
              <p className="mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a project in mind or just want to connect, feel free to 
                reach out. I'll get back to you within 24 hours.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg hover:-translate-y-1 group"
                >
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300 ${method.color}`}>
                    <method.icon size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {method.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {method.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Follow me on
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-4 border border-green-200 bg-green-50 dark:bg-green-900/20 rounded-xl dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-green-900 dark:text-green-100">
                    Currently Available
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300">
                    Responding within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white shadow-lg dark:bg-gray-800 rounded-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name Input */}
                <div>
                  <label htmlFor="from_name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 transition-colors duration-300 border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="from_email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full px-4 py-3 transition-colors duration-300 border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 transition-colors duration-300 border border-gray-300 rounded-lg dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 transition-colors duration-300 border border-gray-300 rounded-lg resize-none dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Hidden field for your email (optional) */}
              <input type="hidden" name="to_email" value="alanpjpnc@gmail.com" />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 hover:shadow-lg hover:-translate-y-1 disabled:translate-y-0 disabled:cursor-not-allowed"
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

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-100 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-800">
                  <FaCheck className="flex-shrink-0 text-green-600 dark:text-green-400" />
                  <div className="text-green-700 dark:text-green-400">
                    <div className="font-semibold">Message sent successfully!</div>
                    <div className="text-sm">I'll get back to you within 24 hours.</div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-100 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-800">
                  <FaExclamationTriangle className="flex-shrink-0 text-red-600 dark:text-red-400" />
                  <div className="text-red-700 dark:text-red-400">
                    <div className="font-semibold">Failed to send message</div>
                    <div className="text-sm">Please try again or contact me directly at alanpjpnc@gmail.com</div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;