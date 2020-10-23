import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function ContactPage() {
  return (
    <div className="font-body">
      {/* hero */}
      <div style={{ height: `50vh` }} className="relative">
        <div style={{ height: `50vh` }} className="absolute inset-0 z-10">
          <div className="flex flex-col items-center justify-between w-full h-full pb-4 text-center">
            <Nav />
            <h1 className="text-5xl font-extrabold text-white md:text-6xl font-display">
              Contact Us
            </h1>
            <p className="text-sm italic text-white">Mt. Merapi, Indonesia</p>
          </div>
        </div>
        <div className="absolute z-0">
          <img
            style={{ height: `50vh` }}
            className="object-cover w-full"
            src="/image/2.jpg"
            alt="bg"
          />
        </div>
      </div>

      {/* form */}
      <div className="max-w-6xl py-12 mx-auto lg:flex lg:flex-row lg:justify-center lg:items-center">
        <div className="p-4 lg:w-1/2 lg:pr-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-display">
              Let's Discover Merapi!
            </h2>
            <p className="mt-2 text-gray-700">
              Nulla eiusmod nulla amet ad dolore incididunt enim mollit
              incididunt magna laborum cillum.
            </p>
          </div>
          <div className="mt-8">
            <div>
              <span className="text-gray-700">What is your name?</span>
              <input
                className="block w-full mt-1 form-input"
                placeholder="Jane Doe"
              />
            </div>

            <div className="mt-4">
              <span className="text-gray-700">And your phone number</span>
              <input
                className="block w-full mt-1 form-input"
                placeholder="+628123456789"
              />
            </div>

            <div className="mt-4">
              <span className="text-gray-700">For how many people?</span>
              <select className="block w-full mt-1 form-select">
                <option>1-3</option>
                <option>4-5</option>
                <option>6-10</option>
                <option>Above 10</option>
              </select>
            </div>

            <div className="mt-4">
              <span className="text-gray-700">Additional message</span>
              <textarea
                className="w-full mt-1 form-textarea"
                rows="5"
              ></textarea>
            </div>

            <div className="flex mt-4">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">privacy policy</span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <button className="px-4 py-2 text-white transition duration-500 bg-gray-700 rounded-md hover:bg-gray-600">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-1/2 lg:block">
          <img src="/image/5.jpg" alt="climbing" />
        </div>
      </div>

      {/* contact */}
      <section className="relative text-gray-700 body-font">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Merapi&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: `grayscale(1) contrast(1.2) opacity(0.4)` }}
          ></iframe>
        </div>
        <div className="container flex px-5 py-24 mx-auto">
          <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Question or Feedback?
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Get in touch with our beloved staff
            </p>
            <input
              className="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500"
              placeholder="Message"
            ></textarea>
            <button className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Send
            </button>
            <p className="mt-3 text-xs text-gray-500">
              We would love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  );
}
