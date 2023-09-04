import styled from "styled-components";
import { Colors } from "./variables";

export const BoxGrey = styled.div`
  background-color: ${Colors.primaryColor};
  padding: 30px;
`;
export const Content = styled.div``;

export const Container = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  input {
    width: 100%;
  }
`;
export const GreyBox = styled.form`
  width: 100%;
  background-color: ${Colors.primaryColor};
`;

export const Image = styled.img`
  height: auto;
  z-index: 9;
`;
