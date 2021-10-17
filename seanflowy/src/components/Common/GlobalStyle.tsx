import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('<https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Neuton:wght@700&display=swap>');

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  html {
    font: 112.5%/1.722 'Lato', sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }

  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  h1 {
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: hsla(0, 0%, 0%, 0.9);
    font-family: 'Neuton', sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
  }

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.722rem;
  }

  a {
    color: #4665b7;
    text-decoration: none;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
