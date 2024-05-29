import styled from "styled-components";

export const Input = styled.input`
  width: 0px;
  opacity: 1;
  height: 2rem;
  border: none;
  outline: none;
  color: #f7f7f7;
  background: none;
  font-size: 1.5rem;
  border-radius: 2rem;
  transition: all 0.75s ease-in;

  &::placeholder {
    color: #f7f7f7;
  }
`;

export const InputTitle = styled.span`
  opacity: 1;
  height: 2rem;
  color: #f7f7f7;
  line-height: 2rem;
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  width: calc(100% - 32px);
  transition: all 0.75s ease-in;
`;
