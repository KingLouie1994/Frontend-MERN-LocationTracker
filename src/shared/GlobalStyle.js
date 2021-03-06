import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
  background: #4d4d4d;
}

main {
  margin-top: 5rem;
}

.slide-in-left-enter {
  transform: translateX(-100%);
}

.slide-in-left-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 750ms;
}

.slide-in-left-exit {
  transform: translateX(0%);
  opacity: 1;
}

.slide-in-left-exit-active {
  transform: translateX(-100%);
  opacity: 0;
  transition: all 750ms;
}

.center {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;

export default GlobalStyle;
