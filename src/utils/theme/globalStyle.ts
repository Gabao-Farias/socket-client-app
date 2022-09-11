import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: sans-serif;
    
    @media (max-width: 720px) {
      font-size: 0.7rem;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  button,
  input,
  select {
    border: none;
    outline: none;
  }
`;
