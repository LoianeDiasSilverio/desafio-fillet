import {
  Container,
  Footer,
  FooterText,
} from "./styles";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import backgroundTwo from "../../images/quadro1.svg";
import ChildCare from "../../images/childCare.svg";
import Diversity from "../../images/diversity.svg";
import School from "../../images/school.svg";
import Voice from "../../images/voice.svg";
import backgroundSeparator from "../../images/backgroundSeparator.svg";
import logo from "../../images/Logo.svg";
import ContentScreen from "../../components/ContentScreen";
import styleGuide from "../../utils/globalColors";

const HomePage = () => {
  const data = [
    {
      id: 1,
      title: "Transforme",
      titleTwo: "seus estudos",
      bgColor: styleGuide.colors.purple,
      backgroundImage: logo1,
      colorTitle: styleGuide.colors.creme,
      subtitle: "Conheça já o futuro da educação imersiva, esse",
      subtitle2: "é o Literaverso, uma plataforma única de conteúdo interativo",
      subtitle3: "com seu próprio metaverso.",
      logo: logo,
      buttonTitle: "Saiba Mais",
      optionsButton: [
        { title: "Entrar" },
        { title: "Sobre" },
        { title: "Contato" },
      ],
    },
    {
      id: 2,
      backgroundImage: logo2,
    },
    {
      id: 3,
      title: "Feito para",
      titleTwo: "todos",
      backgroundImagePositionY: -200,
      bgColor: styleGuide.colors.creme,
      backgroundImage: backgroundTwo,
      colorTitle: styleGuide.colors.black,
      optionsCard: [
        {
          title: "Escolas",
          subtitle:
            "Crie planos de ensino complementares ao currículo escolar da sua instituição, todo mundo aprende junto.",
          icon: ChildCare,
        },
        {
          title: "Estudantes",
          subtitle:
            "Consuma videos, textos informativos e muito conteúdo interativo para complementar seus estudos.",
          icon: School,
        },
        {
          title: "Criadores de conteúdo",
          subtitle:
            "Crie e venda seus conteúdos aqui em um único lugar, você terá acesso a todas as ferramentas para criar experiências interativas e cativar sua base de alunos.",
          icon: Voice,
        },
        {
          title: "Empreendedores",
          subtitle:
            "Tenha acesso a nossa gama de soluções educativas e faça com que sua empresa entre para o metaverso.",
          icon: Diversity,
        },
      ],
    },
    {
      id: 4,
      title: "Entre já no futuro",
      titleTwo: "da educação",
      backgroundImage: backgroundSeparator,
      bgColor: styleGuide.colors.purple,
      colorTitle: styleGuide.colors.creme,
      buttonTitle: "Entrar",
    },
  ];

  return (
    <Container>
      <ContentScreen data={data}/>
      <Footer>
        <FooterText>Literaverso - Todos os direitos reservados 2023</FooterText>
      </Footer>
    </Container>
  );
};

export default HomePage;
