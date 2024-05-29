import styled from "styled-components";

export const TableTd = styled.td`
  font-size: 1em;
  padding-top: 1%;
  max-width: 320px;
  padding-left: 1%;
  padding-bottom: 1%;
  font-weight: normal;
  word-wrap: break-word;
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  &:first-child {
    color: #fb667a;
  }

  &:last-child {
    border-right-color: transparent;
  }
`;