import styled from "styled-components";
import styleGuide from "../../utils/globalColors";

interface IContainerListProps {
    $position: string;
  }

export const ContainerList = styled.div<IContainerListProps>`
  display: flex;
  justify-content: ${props => props.$position};
  word-break: break-all;
`;

interface IButtonRoundProps {
    $color?: string;
    $backgroundColor?: string;
    $width?: number;
    $height?: number;
    $marginRight?: number;
  }
  

export const ButtonRound = styled.button<IButtonRoundProps>`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${props => props.$color ?? styleGuide.colors.creme};
  background-color: ${props => props.$backgroundColor ?? styleGuide.colors.black};
  width: ${props => props.$backgroundColor ?? '100'}px;
  height: ${props => props.$backgroundColor ?? '50'}px;
  border-radius: 50px;
  border: none;
  margin-right: ${props => props.$marginRight ?? '20'}px;;
`;