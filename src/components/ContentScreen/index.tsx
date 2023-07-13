import ButtonGroup from "../ButtonGroup";
import CardGroup from "../CardGroup";
import {
  Box,
  BoxText,
  BoxTitle2,
  Button,
  ContainerMain,
  ContainerMainButton,
  ContainerMargin,
  ContainerSubtitle,
  Image,
} from "./styles";
import { OptionContentScreen } from "./types";

export interface IContentScreenProps {
  data: OptionContentScreen[];
}

const ContentScreen = ({ data }: IContentScreenProps) => {
  return (
    <>
      {data.map((box) => (
        <div key={box.id}>
          <Box
            $svgPositionY={box.backgroundImagePositionY}
            $svg={box.backgroundImage}
            key={box.id}
            $bgColor={box.bgColor}
            data-testid={`box${box.id}`}
          >
            <Image src={box.logo} />
            {box.optionsButton && (
              <ButtonGroup position="flex-end" options={box.optionsButton} />
            )}
            <ContainerMain>
              <ContainerMargin>
                <BoxTitle2 $color={box.colorTitle}>{box.title}</BoxTitle2>
              </ContainerMargin>
              <ContainerMargin>
                <BoxTitle2 $color={box.colorTitle}>{box.titleTwo}</BoxTitle2>
              </ContainerMargin>

              <ContainerSubtitle>
                <BoxText>{box.subtitle}</BoxText>
                <BoxText>{box.subtitle2}</BoxText>
                <BoxText>{box.subtitle3}</BoxText>
              </ContainerSubtitle>
            </ContainerMain>
            {box.optionsCard && (
              <CardGroup position="center" options={box.optionsCard} />
            )}
            {box.buttonTitle && (
              <ContainerMainButton>
                <Button>{box.buttonTitle}</Button>
              </ContainerMainButton>
            )}
          </Box>
        </div>
      ))}
    </>
  );
};
export default ContentScreen;
