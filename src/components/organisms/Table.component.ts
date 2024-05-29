import styled from "styled-components";
import { TableTr } from "../molecules/TableTr.component";

export const Table = styled.table`
  width: 80%;
  display: table;
  margin: 0px auto;
  text-align: left;
  overflow: hidden;
  padding: 0px 0px 2em 0px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  ${TableTr}:hover {
    color: #403e10;
    cursor: pointer;
    font-weight: bold;
    transition-delay: 0s;
    transition-property: all;
    transition-duration: 0.4s;
    background-color: #fff842;
    transition-timing-function: line;
    transform: translate3d(6px, -6px, 0px);
    box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px,
      #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
  }
`;
