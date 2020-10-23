import { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
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
                Subscribe to our newsletter to get daily news about Mt. Merapi
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
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
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
    );
  }
}
