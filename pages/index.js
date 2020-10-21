import React from "react";
import { Component } from "react";
import Nav from "../components/nav";

export default class IndexPage extends Component {
  render() {
    return (
      <div className="font-body">
        {/* hero */}
        <div className="relative min-h-screen">
          <div className="absolute inset-0 z-10">
            <div className="flex flex-col items-center justify-between w-full h-full pb-4 text-center">
              <Nav />
              <h1 className="text-5xl font-extrabold text-white md:text-6xl font-display">
                Awesome Merapi
              </h1>
              <p className="text-sm italic text-white">Mt. Merapi, Indonesia</p>
            </div>
          </div>
          <div className="absolute z-0">
            <img
              className="object-cover w-full h-screen"
              src="/image/1.jpg"
              alt="bg"
            />
          </div>
        </div>

        {/* what to do */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="py-12 bg-white">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-base font-semibold leading-6 tracking-wide text-gray-600 uppercase">
                  What to do at
                </p>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 uppercase sm:text-4xl sm:leading-10">
                  Merapi
                </h3>
                <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 lg:mx-auto">
                  Lorem ipsum dolor sit amet consect adipisicing elit.
                </p>
              </div>

              <div className="mt-10">
                <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-gray-500 rounded-md"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Climbing
                        </h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-gray-500 rounded-md"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Hiking
                        </h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-gray-500 rounded-md"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Travel
                        </h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10 md:mt-0">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-gray-500 rounded-md"></div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium leading-6 text-gray-900">
                          Photography
                        </h4>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* gallery */}
        {/* visit & accomodation */}
        {/* footer */}
        <footer className="text-gray-700 font-body">
          <div className="border-t border-gray-200">
            <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
              <div className="flex flex-wrap justify-center md:flex-no-wrap md:justify-start">
                <input
                  className="w-40 px-4 py-2 mr-2 text-base bg-gray-100 border border-gray-400 rounded sm:w-64 sm:mr-4 focus:outline-none focus:border-gray-500"
                  placeholder="your@email.com"
                  type="text"
                />
                <button className="inline-flex px-6 py-2 text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">
                  Button
                </button>
                <p className="mt-2 text-sm text-center text-gray-500 md:ml-6 md:mt-0 sm:text-left">
                  Bitters chicharrones fanny pack
                  <br className="hidden lg:block" />
                  waistcoat green juice
                </p>
              </div>
              <span className="inline-flex justify-center w-full mt-6 lg:ml-auto lg:mt-0 md:justify-start md:w-auto">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <div className="bg-gray-200">
            <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
              <p className="text-sm text-center text-gray-500 sm:text-left">
                © 2020 tailblocks —
                <a
                  href="https://arifikhsanudin.now.sh/"
                  className="ml-1 text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  InProduction
                </a>
              </p>
              <span className="w-full mt-2 text-sm text-center text-gray-500 sm:ml-auto sm:mt-0 sm:w-auto sm:text-left">
                Enamel pin tousled raclette tacos irony
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
