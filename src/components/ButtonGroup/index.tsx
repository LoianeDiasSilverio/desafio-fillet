import { ButtonRound, ContainerList } from "./styles";
import { OptionButton } from "./types";

export interface IButtonGroupProps {
  options: OptionButton[];
  position: "flex-start" | "flex-end" | "center";
}

const ButtonGroup = ({ options, position }: IButtonGroupProps) => {
  return (
    <ContainerList $position={position}>
      {options.map((item, index) => (
        <ButtonRound
          key={index}
          $color={item.color}
          $backgroundColor={item.backgroundColor}
          $height={item.height}
          $width={item.width}
          $marginRight={options.length === index + 1 ? 60 : undefined}
          role="button"
        >
          {item.title}
        </ButtonRound>
      ))}
    </ContainerList>
  );
};
export default ButtonGroup;
