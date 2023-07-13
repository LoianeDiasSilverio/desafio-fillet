import Card from "../Card";
import { ContainerList } from "./styles";
import { OptionCard } from "./types";

export interface ICardGroupProps {
  options: OptionCard[];
  position: "flex-start" | "flex-end" | "center";
}

const CardGroup = ({ options, position }: ICardGroupProps) => {
  return (
    <ContainerList $position={position}>
      {options.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
        />
      ))}
    </ContainerList>
  );
};
export default CardGroup;
