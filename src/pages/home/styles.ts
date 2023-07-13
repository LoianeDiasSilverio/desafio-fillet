import styled from "styled-components";
import styleGuide from "../../utils/globalColors";

export const Container = styled.div`
  display: grid;
  max-width: 100%;
`;

export const Footer = styled.div`
  background-color: ${styleGuide.colors.creme};
  padding: 30px;
`;

export const FooterText = styled.p`
  color: ${styleGuide.colors.black};
  font-size: 14px;
  line-height: 11.06px;
  font-weight: 300;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;
