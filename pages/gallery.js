import React, { Component } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default class GalleryPage extends Component {
  render() {
    return (
      <div className="font-body">
        {/* hero */}
        <div style={{ height: `50vh` }} className="relative">
          <div style={{ height: `50vh` }} className="absolute inset-0 z-10">
            <div className="flex flex-col items-center justify-between w-full h-full pb-4 text-center">
              <Nav />
              <h1 className="text-5xl font-extrabold text-white md:text-6xl font-display">
                Gallery
              </h1>
              <p className="text-sm italic text-white">Mt. Merapi, Indonesia</p>
            </div>
          </div>
          <div className="absolute z-0">
            <img
              style={{ height: `50vh` }}
              className="object-cover w-full"
              src="/image/3.jpg"
              alt="bg"
            />
          </div>
        </div>

        {/* gallery */}
        <div className="max-w-6xl px-4 py-12 mx-auto">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(12)].map((_, i) => {
              return (
                <img
                  className="object-cover h-64"
                  src={`https://loremflickr.com/640/320/mountain?random=${i}`}
                  alt={`mountain ${i}`}
                />
              );
            })}
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
    );
  }
}
