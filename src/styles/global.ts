import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  body {
    background: #dfe7fd;
  }

  button, a {
    cursor: pointer;
  }
`;
