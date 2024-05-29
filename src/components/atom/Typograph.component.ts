import styled from "styled-components";
import ParticleImage from "@/assets/particles.png";

export const Title = styled.h1`
  color: #ffffff;
  font-size: 48px;
  text-align: center;
  line-height: 3.5rem;
  margin-bottom: 50px;
  font-family: "Poppins", sans-serif;
`;

export const SubTitle = styled.h3`
  color: #ffffff;
  font-size: 28px;
  font-family: "Poppins", sans-serif;
`;

export const ParticleText = styled.span`
  font-weight: 800;
  position: relative;
  color: transparent;
  font-family: sans-serif;
  background-position: 50% 50%;
  background-color: #1e80db !important;
  animation: slideParticle 2s linear infinite;
  background: url(${ParticleImage}) repeat-y;

  background-clip: text;
  -webkit-background-clip: text;

  @keyframes slideParticle {
    0% {
      background-position: 50% 50%;
    }
    100% {
      background-position: 60% 100%;
    }
  }
`;

export const Link = styled.a`
  color: #1e80db;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    font-weight: 700;
  }
`;
