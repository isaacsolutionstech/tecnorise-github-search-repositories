import styled from "styled-components";

export const TableTr = styled.tr`
  &:nth-child(odd) {
    background-color: #323c50;
  }
  &:nth-child(even) {
    background-color: #2c3446;
  }

  @media (max-width: 800px) {
    &:nth-child(4) {
      display: none;
    }
  }
`;