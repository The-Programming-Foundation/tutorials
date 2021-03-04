import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SectionContainer = styled.div`
  display: flex;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default ({ children, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <SectionContainer>
        <Carousel 
            swipeable={true}
            responsive={responsive}
            slidesToSlide={1}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            renderButtonGroupOutside={true}
            containerClass="carousel-container"
          >
          {children}
        </Carousel>  
      </SectionContainer>
    </>
  );
}
