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
};

export const GlobalStyle = createGlobalStyle`
/** FONTS **/
@font-face {
  font-family: "alexbrush";
  src: local("alexbrush"), url('/fonts/AlexBrush.ttf') format("truetype");
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
    .swiper {
      height: 100%;
    }
    .slider{
      display: flex;
      justify-content: center;
    }

    /******* Slider for the hero (parallax) *******/
    .heroSwiper {
      width: 100%;
      height: 100%;
    }

    .heroSlide {
      width: 100%;
      height: 100%;
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center;
    }

    .swiperSlide{
      height: 100vh;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
}
    // use ::after to create an overlay over the image
    .swiperSlide::after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100%;
      background-image: radial-gradient(rgba(0,0,0,0), 55%, rgba(0,0,0,.7));
}
`;