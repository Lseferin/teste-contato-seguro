import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 3px;
  padding: 20px;
  background-image: linear-gradient(
    to left,
    rgba(255, 0, 0, 0),
    rgb(255 255 255)
  );

  h1 {
    font-size: 40px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  z-index: 9;
`;
