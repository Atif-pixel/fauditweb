import React from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with 3D Element */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          
        </div>
        <div className="absolute inset-0 bg-teal-100 opacity-30"></div> {/* Light teal overlay */}

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-teal-600">Us</span>
            </h1>
            <p className="text-lg text-gray-700">
              Have questions or need assistance? Our team is here to help you
              with all your financial management needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-8">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-600 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Our Office
                      </h3>
                      <p className="text-gray-600">
                        Office No 1&2, 2nd Floor, East Street Galleria, MG Road, Camp<br /> Pune, Maharashtra 411001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-600 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">+91 8421034535</p>
                      <p className="text-gray-600">+91 8446874534</p>
                    </div> 
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full text-teal-600 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">fundsaudit.business@gmail.com</p>
                      <p className="text-gray-600">fundsroomtech@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mx-auto mb-12">Find Us</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7611876039277!2d73.7974655!3d18.5119908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb3c1e5614f5%3A0x74ffda8ec3f722ad!2sOffice%20No%201%262%2C%202nd%20Floor%2C%20East%20Street%20Galleria%2C%20MG%20Road%2C%20Camp%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1709041234567"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
