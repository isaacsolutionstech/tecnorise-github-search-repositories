import styled from "styled-components";

export const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.2);
`;

export const Avatar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const AvatarInfo = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    line-height: 1rem;
    margin-bottom: 8px !important;
  }

  h3 {
    color: #454545;
    font-size: 18px;
  }
`;