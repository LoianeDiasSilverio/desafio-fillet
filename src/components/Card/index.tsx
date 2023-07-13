import {
  ContainerCard,
  Icon,
  Subtitle,
  Title,
} from "./styles";

export interface ICardProps {
  title: string;
  icon?: string;
  subtitle?: string;
}

const Card = ({ title, icon, subtitle }: ICardProps) => {
  return (
    <ContainerCard>
      {icon && <Icon src={icon} />}
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ContainerCard>
  );
};
export default Card;
