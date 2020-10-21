import React from "react";
import { Component } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

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
        {/* price */}
        <section className="overflow-hidden text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col w-full mb-20 text-center">
              <h1 className="mb-2 text-3xl font-medium text-gray-900 sm:text-4xl title-font">
                Pricing
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
              </p>
              <div className="flex mx-auto mt-6 overflow-hidden border-2 border-indigo-500 rounded">
                <button className="px-4 py-1 text-white bg-indigo-500 focus:outline-none">
                  Monthly
                </button>
                <button className="px-4 py-1 focus:outline-none">
                  Annually
                </button>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                    START
                  </h2>
                  <h1 className="pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    Free
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
                    Vexillologist pitchfork
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
                    Tumeric plaid portland
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
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">
                    Button
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
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-indigo-500 rounded-lg">
                  <span className="absolute top-0 right-0 px-3 py-1 text-xs tracking-widest text-white bg-indigo-500 rounded-bl">
                    POPULAR
                  </span>
                  <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                    PRO
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>$38</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /mo
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
                    Vexillologist pitchfork
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
                    Tumeric plaid portland
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
                    Hexagon neutra unicorn
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
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                    Button
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
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                    BUSINESS
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>$56</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /mo
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
                    Vexillologist pitchfork
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
                    Tumeric plaid portland
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
                    Hexagon neutra unicorn
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
                    Vexillologist pitchfork
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
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">
                    Button
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
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
              <div className="w-full p-4 xl:w-1/4 md:w-1/2">
                <div className="relative flex flex-col h-full p-6 overflow-hidden border-2 border-gray-300 rounded-lg">
                  <h2 className="mb-1 text-sm font-medium tracking-widest title-font">
                    SPECIAL
                  </h2>
                  <h1 className="flex items-center pb-4 mb-4 text-5xl leading-none text-gray-900 border-b border-gray-200">
                    <span>$72</span>
                    <span className="ml-1 text-lg font-normal text-gray-500">
                      /mo
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
                    Vexillologist pitchfork
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
                    Tumeric plaid portland
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
                    Hexagon neutra unicorn
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
                    Vexillologist pitchfork
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
                    Mixtape chillwave tumeric
                  </p>
                  <button className="flex items-center w-full px-4 py-2 mt-auto text-white bg-gray-500 border-0 rounded focus:outline-none hover:bg-gray-600">
                    Button
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
                    Literally you probably haven't heard of them jean shorts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testi */}
        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 mb-6 lg:w-1/3 lg:mb-0">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="inline-block object-cover object-center w-20 h-20 mb-8 bg-gray-100 border-2 border-gray-200 rounded-full"
                    src="https://dummyimage.com/302x302"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
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
                    src="https://dummyimage.com/300x300"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
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
                    src="https://dummyimage.com/305x305"
                  />
                  <p className="leading-relaxed">
                    Edison bulb retro cloud bread echo park, helvetica stumptown
                    taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin
                    coffee ennui shaman taiyaki vape DIY tote bag drinking
                    vinegar cronut adaptogen squid fanny pack vaporware.
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
            <div className="flex flex-col w-full mb-20 text-center">
              <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
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
                    2.7K
                  </h2>
                  <p className="leading-relaxed">Downloads</p>
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
                  <p className="leading-relaxed">Users</p>
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
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 className="text-3xl font-medium text-gray-900 title-font">
                    74
                  </h2>
                  <p className="leading-relaxed">Files</p>
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
                  <p className="leading-relaxed">Places</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}
