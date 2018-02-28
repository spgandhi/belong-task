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
    margin: 0;
    padding: 0;
    
  }

  body.fontLoaded {
    font-family: 'Lato', sans-serif;
  }

  #app {
    // background-color: #fff;
    background: #fbfbfb;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, textarea {
    font-size: 14px !important;
  }

  .main-container{
    margin: 0px;
  }

  hr{
    height: 2px;
    opacity: 0.1;
  }

  select{
    border: 1px solid #c6cbd4;
    height: 32px;
    border-radius: 2px;
    font-size: 14px;
    background: white;
    -webkit-border-radius: 0px;
  }

  /* Helper Classes */

  .error{
    margin-top: 10px;
    text-align: center;
    color: red;
  }

  .white-bg{
    background: #fff;
  }

  .text-center{
    text-align: center;
  }

  .color-white{
    color: white !important;
  }

  .pos-absolute{
    position: absolute !important;
  }

  .pos-relative{
    position: relative !important;
  }

  .font-14{
    font-size: 14px !important;
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

  .material-icons{
    line-height: 1.5;
    vertical-align: middle;
    cursor: pointer;
  }

  .header-icon{
    margin-left: 10px;
  }

  .label {
    padding-bottom: 5px;
  }

  .icon-margin-right {
    margin-right: 5px;
    vertical-align: middle;
  }
  

  .vert-middle{
    vertical-align: middle;
  }

  .overflow-auto{
    overflow: auto;
  }

  /* Buttons CSS */

  button.primary {
    background: #4b74ff;
    border-radius: 24px;
    padding: 6px 16px;
    color: white;
    font-weight: 100;
    cursor: pointer;
  }

  /* Table CSS */

  .table{
    padding: 16px 60px;
    background: #fbfbfb;
    min-height: calc(100% - 107px);
  }
  

  .table-header{
    height: 48px;
  }

  .table-header td {
    font-weight: 600;
  }

  tr.table-row:hover {
    background: rgba(75,116,255,.1);
  }

  .table-row{
    height: 64px;
  }

  table td{
    line-height: 24px
  }

  thead td{
    opacity: .5;
  }

  table thead:hover{
    background: #fbfbfb;
  }

  table tbody tr:nth-child(odd) {
    background: #fff;
  }
  table tbody tr:nth-child(even) {
    background: #c6cbd4;
  }

  .table-header td:hover{
    color: #4b74ff;
    cursor: pointer;
  }

  tr:hover td.first-cell {
    border-left: 4px solid #4b74ff;
  }

  a.narcissus_n3sdvf {
    right: 10px !important;
    left: auto;
    top: 10px !important;
  }

  /* Modal CSS */

  .dd-menu.dd-menu-right {
    position: absolute;
    right: 40px;
    background: white;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
    width: 160px;
    z-index: 9;
  }

  .dd-items-right div:first-child{
    margin-bottom: 12px;
  }

  .dd-items-right {
    padding: 16px 12px !important;
    margin: 0 !important;
  }

  .dd-items-right div{
    line-height: 1.5;
    cursor: pointer;
  }
`;
