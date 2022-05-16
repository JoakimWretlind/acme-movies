import { createGlobalStyle } from 'styled-components';

/** CREATE THEME-PROVIDER **/
export const movieTheme = {
  // colors
  black: "hsl(240, 5%, 4%)",
  gray: "rgb(121, 121, 121)",
  offWhite: "hsl(60, 5.7%, 89.6%)",
  red: "hsl(0, 75%, 36%)",
  white: "hsl(0, 0%, 100%)",

  // font-sizes
  mid: "1.6rem",

  // media queries
  small: "418px",
  medium: "768px",
  large: "1025px"
};

export const GlobalStyle = createGlobalStyle`
/** FONTS **/
@font-face {
  font-family: "alexbrush";
  src: local("alexbrush"), url('/fonts/AlexBrush.ttf') format("truetype");
}

:root {
  --swiper-navigation-size: 2.5rem;
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'Josefin Sans', sans-serif;
      background-color: #09090a;
      color: #ffffff;
      width: 100%;
      overflow-x: hidden;      
    }

    ::-webkit-scrollbar {
        display: none;
    }
    
    a {
      text-decoration: none;
      color: #ffffff;
    }
    
    ul, li {
      list-style: none;
    }

    // Swiper requires it own elements, so to be able to 
    // style these, we need to use classNames
    /******* Slider for categories *******/
    .swiper-container {
      position: relative;
      height: 100%;
      width: 100%;
    }
    // single item
    .slider{
      margin-top: 2rem;
      height: min-content;
      display: flex;
      justify-content: center;
      align-items: center;      
    }

    .swiper-button-prev, .swiper-button-next {
      margin: 17rem 45% 0 45%;
      color: #fff;
    }

    // the container for the pagination
    // keep z-index at 0, to enable the navigations
    .swiper-pagination {
      position: absolute;
      top: 0rem;
      z-index: 0;
    }

    // the bullets for the pagination
    .swiper-pagination-bullet{
      height: .5rem;
      width: 3rem;
      border-radius: .5rem;
      background-color: #6e6e6e;
    }

    // the active pagination bullet
    .swiper-pagination-bullet-active{
      background-color: white;
    }

    /******* Slider for the hero (parallax) *******/
    .heroSwiper {
      width: 100%;
      object-fit: cover;
    }

    .heroSlide {
      width: 100%;
      object-fit: cover;
    }    

    // use ::after to create an overlay over the image
    .heroSlide::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-image: radial-gradient(rgba(0,0,0,0), 58%, rgba(0,0,0,.6));
    }
`;