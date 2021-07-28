import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 :root {
   --white-color: #ffffff;
   --background-color: #EFF6FF;
   --text-dark: #000000;
   --grey-dark: #c1c1c4;
   --grey-light: #bdbdbd;
   --orange-dark:#F9A109;
   --orange-light: #FFF0DE;
 }

 * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Quicksand', sans-serif;
 }

 body {
   min-height: 100vh;
   max-width: 100vw;
   background-color: var(--background-color);
 }

 button{
   border: none;
   outline: none;
   cursor: pointer;
 }

 input {
   outline: none;
 }

 a{
   text-decoration: none;
 }

 li {
  list-style: none;
 }

 ::-webkit-scrollbar {
    width: 8px;
 }
 
::-webkit-scrollbar-track {
   background-color: #fff;
}

 ::-webkit-scrollbar-thumb {
    background-color: #c1c1c4;
    border-radius: 30px;
 }

`;

export default GlobalStyle;
