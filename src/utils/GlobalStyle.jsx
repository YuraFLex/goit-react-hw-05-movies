import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
   box-sizing: border-box;
   width: 100vw;
   overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
   box-sizing: inherit;
  }

  body{
    background: #f3f6f9;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    color: ${p => p.theme.colors.darkBlue};
    line-height: 1.2;
 }

  ul{
   padding: 0;
   margin: 0;
   list-style: none;
 }

  h1, h2 {
   margin-top: 0;
   margin-bottom: 20px;
 }
 h3{
    margin-top: 10px;
    margin-bottom: 10px;
 }
 p{
    margin: 0;
 }

 button{
    border: none;
    cursor: pointer;
 }

 img{
  display: block;
  width: 100%;
  height: auto;
 }
`;

export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1200px;
  width: 100%;
`;
