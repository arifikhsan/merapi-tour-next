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
              <textarea className="w-full mt-1 form-textarea" rows="5"></textarea>
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
              <button className="px-4 py-2 text-white transition duration-500 bg-gray-700 rounded-md hover:bg-gray-600">Submit</button>
            </div>
          </div>
        </div>
        <div className="hidden lg:w-1/2 lg:block">
          <img src="/image/5.jpg" alt="climbing" />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
