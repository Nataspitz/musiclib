import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
   :root {
    --gray-100: #f7f7f7; 
    --gray-200: #e0e0e0; 
    --gray-300: #b3b3b3; 
    --gray-400: #9e9e9e; 
    --gray-500: #757575; 
    --gray-600: #424242;
    --gray-700: #1F1D19; 
    --primary-color: #6c5ce7;
    --secondary-color: #E44B4B;  
    --accent-color: #48dbfb; 
    --text-color: #333;
    --background-color: var(--gray-100); 

    --green-color: #00c24a;
    --yellow-color: #f39c12;
    --cyan-color: #00b5ad;

    --title-1: 2rem;
    --title-2: 1.5rem;
    --title-3: 1.25rem;
    --text-1: 1rem;
    --text-2: 0.875rem;
    --text-3: 0.75rem;
  }

  /* Reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Tauri', sans-serif;
  }

  footer{
    margin-top: auto;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1{
    font-size: var(--title-1);
    font-weight: 700;
  }

  h2{
    font-size: var(--title-2);
    font-weight: 700;
  }

  h3{
    font-size: var(--title-3);
    font-weight: 500;
  }

  button{
    cursor: pointer;
    border: none;
  }

` 