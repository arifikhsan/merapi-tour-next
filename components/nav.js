import Link from "next/link";
import React from "react";
import { Component } from "react";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    const { menu } = this.state;

    return (
      <div className="w-full font-display">
        {/* header */}
        <div className="z-20 w-full">
          <div className="flex justify-between font-display">
            <div className="flex items-center justify-center p-4 cursor-pointer">
              <Link href="/">
                <p className="font-bold text-white">Merapi Tour</p>
              </Link>
            </div>
            <div
              onClick={this.toggleMenu}
              className="p-4 text-white transition duration-500 cursor-pointer hover:bg-gray-600"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* overlay menu */}
        {menu && (
          <div className="fixed inset-0 z-30 bg-white">
            <div className="flex flex-col h-full">
              <div className="relative flex items-center justify-between">
                <div></div>
                <div
                  onClick={this.toggleMenu}
                  className="absolute top-0 right-0 p-4 text-gray-800 transition duration-500 cursor-pointer hover:bg-gray-600 hover:text-white"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-600 font-display">
                <div className="grid grid-cols-2">
                  <Link href="/">
                    <div
                      style={{ height: `50vh` }}
                      className="flex items-center justify-center transition duration-500 cursor-pointer hover:text-white hover:bg-gray-500"
                    >
                      Home
                    </div>
                  </Link>
                  <div
                    style={{ height: `50vh` }}
                    className="flex items-center justify-center transition duration-500 cursor-pointer hover:text-white hover:bg-gray-500"
                  >
                    Accomodation
                  </div>
                  <Link href="/gallery">
                    <div
                      style={{ height: `50vh` }}
                      className="flex items-center justify-center transition duration-500 cursor-pointer hover:text-white hover:bg-gray-500"
                    >
                      Gallery
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div
                      style={{ height: `50vh` }}
                      className="flex items-center justify-center transition duration-500 cursor-pointer hover:text-white hover:bg-gray-500"
                    >
                      Contact Us
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
