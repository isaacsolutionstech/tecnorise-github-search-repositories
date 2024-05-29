import styled, { css } from "styled-components";
import { ModalType } from "@/types/components/modal";

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vmax;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalClose = styled.div`
  top: 10px;
  right: 10px;
  z-index: 9999;
  position: absolute;

  i {
    color: #ff0000;
    font-size: 1.7rem;
  }
`;

export const Modal = styled.div<ModalType>`
  top: 50%;
  left: 50%;
  opacity: 0;
  width: 70%;
  z-index: 9999;
  position: fixed;
  overflow: hidden;
  visibility: hidden;
  border-radius: 10px;
  transition: all 0.3s;
  transform: scale(0.7) translate(-50%, -50%);
  box-shadow: 3px 3px 16px rgba(0, 0, 0, 0.5);

  ${(props) =>
    props?.open &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1) translate(-50%, -50%);
    `}

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ModalContent = styled.div`
  padding: 32px;
  position: relative;
  background: #ffffff;

  h1 {
    margin: 0px;
    padding: 0px;
    color: #1f1f1f;
    font-size: 22px;
    text-align: left;
  }
`;
