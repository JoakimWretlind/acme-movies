import { createGlobalStyle } from 'styled-components';

/** CREATE THEME-PROVIDER **/
export const movieTheme = {
  // colors
  black: "hsl(240, 5%, 4%)",
  gray: "rgb(121, 121, 121)",
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
@font-face {
  font-family: "yellowtail";
  src: local("yellowtail"), url('/fonts/Yellowtail.ttf') format("truetype");
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
    .swiper {
      height: 100%;
    }
    .slider{
      display: flex;
      justify-content: center;
    }
`;