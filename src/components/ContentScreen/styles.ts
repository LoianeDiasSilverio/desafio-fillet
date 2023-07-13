import styled from "styled-components";
import styleGuide from "../../utils/globalColors";
import px2vw from "../../utils/px2vw";

interface IBoxProps {
  $bgColor?: string;
  $svg?: string;
  $svgPositionY?: number;
}

export const Box = styled.div<IBoxProps>`
  display: inline-flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${(props) => props.$bgColor};
  height: 100vh;
  background-image: ${(props) => props.$svg && `url(${props.$svg})`};
  background-repeat: no-repeat;
  justify-content: center;
  background-position-y: ${props => props.$svgPositionY ?? 0}px;
  background-size: cover;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const Image = styled.img`
  position: absolute;
  position: absolute;
  left: 90px;
  top: 45px;
`;

interface ITextProps {
  $color?: string;
}

export const BoxTitle = styled.p<ITextProps>`
  color: ${(props) => props.$color};
  font-size: 100px;
  font-weight: 700;
  line-height: 101.2px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 100px;
  }
`;

export const BoxTitle2 = styled.p<ITextProps>`
  color: ${(props) => props.$color};
  font-size: 110px;
  font-weight: 700;
  line-height: 101.2px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 110px;
  }
`;

export const BoxText = styled.p`
  color: ${styleGuide.colors.creme};
  font-size: 14px;
  line-height: 16.94px;
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const ContainerMain = styled.div`
  align-self: center;
  margin-top: ${px2vw(100)};
`;

export const ContainerMainButton = styled.div`
  align-self: center;
  margin-top: ${px2vw(50)};
  @media (min-width: 1024px) {
    margin-top: ${px2vw(20)};
  }
`;

export const ContainerSubtitle = styled.div`
  margin-top: ${px2vw(20)};
  text-align: center;
`;

export const Button = styled.button`
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  color: ${styleGuide.colors.black};
  background-color: ${styleGuide.colors.creme};
  width: 166px;
  height: 62px;
  border-radius: 15px;
  border: none;
`;

export const ContainerMargin = styled.div`
  margin-top: ${px2vw(5)};
  margin-right: 40px;
`;
