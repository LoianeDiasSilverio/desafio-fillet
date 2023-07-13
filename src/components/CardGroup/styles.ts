import styled from "styled-components";

interface IContainerListProps {
  $position: string;
}

export const ContainerList = styled.div<IContainerListProps>`
  display: flex;
  justify-content: ${(props) => props.$position};
  word-break: break-all;
  margin-left: 10px;
  margin-right: 10px;
`;
