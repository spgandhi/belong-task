import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #333 !important;
    font-size: 14px !important;
  }

  body.fontLoaded {
    font-family: 'Lato', sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .main-container{
    margin: 0px;
  }

  hr{
    height: 2px;
    opacity: 0.1;
  }

  .pull-right {
    display: inline-block !important;
    float: right !important;
  }

  .pull-left {
    display: inline-block !important;
    float: left !important;
  }

  .full-width{
    width: 100% !important;
  }

  /* Buttons CSS */

  button.primary {
    background: #4b74ff;
    border-radius: 24px;
    padding: 6px 16px;
    color: white;
    font-weight: 100;
  }

  .material-icons{
    line-height: 1.5;
  }

  .color-white{
    color: white !important;
  }

  .font-14{
    font-size: 14px !important;
  }

  .vert-middle{
    vertical-align: middle;
  }

  select{
    border: 1px solid #c6cbd4;
    height: 32px;
    border-radius: 2px;
    font-size: 14px;
  }

  .overflow-auto{
    overflow: auto;
  }

  .table{
    margin: 0 60px;
  }
  .table-header{
    height: 48px;
  }

  table tr td{
    
  }

  .table-row{
    height: 64px;
  }

  thead td{
    opacity: .5;
  }

  table tr:nth-child(odd) {
    background: #fbfbfb;
  }
  table tr:nth-child(even) {

  }

  .text-center{
    text-align: center;
  }

`;
