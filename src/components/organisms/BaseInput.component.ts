import styled from "styled-components";

import { Icon } from "../atom/Icon.component";
import { Input, InputTitle } from "../atom/Input.component";

const showState = `
  ${Input} {
    width: 100%;
    padding: 0px 1rem;
  }

  ${InputTitle} {
    width: 0px;
    opacity: 0;
    padding: 0px 1rem;
    visibility: hidden;
  }

  ${Icon} {
    opacity: 1;
    &:hover {
      background-color: #ffffff;
      text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const BaseInput = styled.div`
  width: 520px;
  padding: 10px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 4rem;
  background-color: #323c50;
  box-shadow: 0px 2px 2px -2px #0e1119;
  -moz-box-shadow: 0px 2px 2px -2px #0e1119;
  -webkit-box-shadow: 0px 2px 2px-2px #0e1119;

  &:hover {
    ${showState}
  }

  ${(props) => (props?.defaultValue ? showState : "")}
`;
