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
        {/* gallery */}
        {/* visit & accomodation */}
        {/* footer */}
        <Footer />
      </div>
    );
  }
}
