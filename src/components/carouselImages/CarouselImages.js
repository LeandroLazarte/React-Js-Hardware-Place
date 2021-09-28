import * as React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselImages = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner5.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner6.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="../assets/ImagesCarousel/banner7.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImages;
