import React from "react";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

import BackgroundImage from "./BackgroundImage";
import CustomCaption from "./CustomCaption";

const items = [
  {
    src: "../static/1.jpg",
    altText: "Slide 1",
    caption: "Tu solución en electromecánica",
    subtitle: "La mejor opción en el mercado"
  },
  {
    src: "../static/2.jpg",
    altText: "Slide 2",
    caption: "Experiencia en el Estado de Sonora",
    subtitle: "Hermosillo, Nogales, Guaymas, Empalme, entre otras."
  }
];

export default class CarouselEx extends React.Component {
  state = {
    activeIndex: 0
  };
  onExiting = () => {
    this.animating = true;
  };
  onExited = () => {
    this.animating = false;
  };
  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState(previousState => {
      return {
        activeIndex: nextIndex
      };
    });
  };
  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length + 1
        : this.state.activeIndex - 1;
    this.setState(previousState => {
      return {
        activeIndex: nextIndex
      };
    });
  };
  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState(previousState => {
      return {
        activeIndex: newIndex
      };
    });
  };
  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item, index) => (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src}
      >
        <BackgroundImage
          item={item}
          number={index}
          style={{
            display: "block",
            width: "100%",
            height: "400px",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
        />
        <CustomCaption caption={item.caption} subtitle={item.subtitle} />
      </CarouselItem>
    ));

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Anterior"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Siguiente"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}
