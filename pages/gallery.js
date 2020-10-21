import React, { Component } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Carousel, { Modal, ModalGateway } from "react-images";

const images = [
  { source: "/image/1.jpg" },
  { source: "/image/2.jpg" },
  { source: "/image/3.jpg" },
  { source: "/image/4.jpg" },
];

export default class GalleryPage extends Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;
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
          {/* <ModalGateway>
            {modalIsOpen ? (
              <Modal onClose={this.toggleModal}> */}
          <Carousel views={images} />
          {/* </Modal>
            ) : null}
          </ModalGateway> */}
        </div>

        {/* footer */}
        <Footer />
      </div>
    );
  }
}
