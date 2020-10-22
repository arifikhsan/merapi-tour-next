import React from "react";
import { Component } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";

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
        <div className="flex items-center justify-center">
          <div className="py-24 bg-white">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="text-center font-display">
                <p className="text-base font-semibold leading-6 tracking-wide text-gray-600 uppercase">
                  What to do at
                </p>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-widest text-gray-900 uppercase sm:text-4xl sm:leading-10">
                  Merapi
                </h3>
                <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 font-body lg:mx-auto">
                  Make a memories with unforgettable experience
                </p>
              </div>
              <div className="grid gap-4 mt-10">
                <div className="relative transition duration-500 hover:shadow-lg">
                  <img src="image/1.jpg" className="h-64 rounded" />
                  <h4 className="absolute bottom-0 p-4 text-lg font-semibold tracking-widest text-white uppercase">
                    Hiking
                  </h4>
                </div>
                <div className="relative transition duration-500 hover:shadow-lg">
                  <img src="image/2.jpg" className="h-64 rounded" />
                  <h4 className="absolute bottom-0 p-4 text-lg font-semibold tracking-widest text-white uppercase">
                    Climbing
                  </h4>
                </div>
                <div className="relative transition duration-500 hover:shadow-lg">
                  <img src="image/3.jpg" className="h-64 rounded" />
                  <h4 className="absolute bottom-0 p-4 text-lg font-semibold tracking-widest text-white uppercase">
                    Explore
                  </h4>
                </div>
                <div className="relative transition duration-500 hover:shadow-lg">
                  <img src="image/4.jpg" className="h-64 rounded" />
                  <h4 className="absolute bottom-0 p-4 text-lg font-semibold tracking-widest text-white uppercase">
                    Photography
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* price */}
        <section className="overflow-hidden text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center font-display">
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-widest text-gray-900 uppercase sm:text-4xl sm:leading-10">
                Pricing
              </h3>
              <p className="max-w-2xl mt-4 text-gray-500 font-body lg:mx-auto">
                Best price for best experience
              </p>
            </div>
            <div className="flex flex-wrap mt-8">
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase title-font">
                    Economy
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>$200</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /person
                    </span>
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    2 Days 1 night
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    3 Stars hotel
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    3 Destination
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    3 Times a day food
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Minibus shuttle
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">
                    Book now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-gray-500">
                    Best for new customer
                  </p>
                </div>
              </div>
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-indigo-500 rounded-lg">
                  <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white uppercase bg-indigo-500 rounded-bl">
                    Popular
                  </span>
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase title-font">
                    Family
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>$300</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /person
                    </span>
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-indigo-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    4 Days 3 night
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-indigo-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    4 Stars hotel
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-indigo-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    5 Destination
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-indigo-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    3 Times a day food
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-indigo-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Bus shuttle
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                    Book now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-gray-500">
                    Perfect holiday for your family
                  </p>
                </div>
              </div>
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <h2 className="mb-1 text-sm font-medium tracking-widest uppercase title-font">
                    Business
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>$400</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /person
                    </span>
                  </h1>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    5 Days 4 night
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    5 Stars hotel
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    6 Destination
                  </p>
                  <p className="flex items-center mb-2 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    3 Times a day food
                  </p>
                  <p className="flex items-center mb-6 text-gray-600">
                    <span className="inline-flex items-center justify-center flex-shrink-0 w-4 h-4 mr-2 text-white bg-gray-500 rounded-full">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    Private bus shuttle
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">
                    Book now
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <p className="mt-3 text-xs text-gray-500">
                    Golden experience for special person
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testi */}
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center font-display">
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-widest text-gray-900 uppercase sm:text-4xl sm:leading-10">
                Testimonials
              </h3>
              <p className="max-w-2xl mt-4 text-gray-500 font-body lg:mx-auto">
                Don't just trust our word
              </p>
            </div>
            <div className="flex flex-wrap mt-8">
              <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/theonlyzeke/128.jpg"
                  />
                  <p className="leading-relaxed">
                    Great staff, great destination, such a perfect moment!
                  </p>
                  <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
                  <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
              <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/hanna_smi/128.jpg"
                  />
                  <p className="leading-relaxed">
                    This was a wonderful unforgettable experience with Merapi
                    Tour!
                  </p>
                  <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
                  <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                    ALPER KAMU
                  </h2>
                  <p className="text-gray-500">UI Develeoper</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 lg:mb-0">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                    src="https://s3.amazonaws.com/uifaces/faces/twitter/serefka/128.jpg"
                  />
                  <p className="leading-relaxed">
                    Very well trained staff in a good tour company.
                  </p>
                  <span className="inline-block w-10 h-1 mt-6 mb-4 bg-indigo-500 rounded"></span>
                  <h2 className="text-sm font-medium tracking-wider text-gray-900 title-font">
                    HENRY LETHAM
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* statistic */}
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center font-display">
              <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-widest text-gray-900 uppercase sm:text-4xl sm:leading-10">
                Statistics
              </h3>
              <p className="max-w-2xl mt-4 text-gray-500 font-body lg:mx-auto">
                Real world prove of our services
              </p>
            </div>
            <div className="flex flex-wrap mt-8 text-center">
              <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="inline-block w-12 h-12 mb-3 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 className="text-3xl font-medium text-gray-900 title-font">
                    2.1K
                  </h2>
                  <p className="leading-relaxed">Unique daily visitor</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="inline-block w-12 h-12 mb-3 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="text-3xl font-medium text-gray-900 title-font">
                    1.3K
                  </h2>
                  <p className="leading-relaxed">Happy customer</p>
                </div>
              </div>
              <div className="w-full p-4 md:w-1/4 sm:w-1/2">
                <div className="px-4 py-6 border-2 border-gray-200 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="inline-block w-12 h-12 mb-3 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 className="text-3xl font-medium text-gray-900 title-font">
                    46
                  </h2>
                  <p className="leading-relaxed">Tourist destination</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* support */}
        <div className="flex items-center justify-center">
          <div className="py-24 bg-white">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="text-center font-display">
                <p className="text-base font-semibold leading-6 tracking-wide text-gray-600 uppercase">
                  Awward winning support
                </p>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-widest text-gray-900 uppercase sm:text-4xl sm:leading-10">
                  We're here to help
                </h3>
                <p className="max-w-2xl mt-4 text-xl leading-7 text-gray-500 font-body lg:mx-auto">
                  We will answer your question right away
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <div className="inline-flex rounded-md shadow">
                  <Link href="/contact">
                    <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline">
                      Visit contact page
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}
