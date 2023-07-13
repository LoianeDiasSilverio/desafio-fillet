import { fireEvent, render, screen } from "@testing-library/react";
import "jest-styled-components";
import HomePage from ".";
import { OptionButton } from "../../components/ButtonGroup/types";
import { OptionCard } from "../../components/CardGroup/types";
import logo from "../../images/Logo.svg";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";
import backgroundTwo from "../../images/quadro1.svg";
import backgroundSeparator from "../../images/backgroundSeparator.svg";

const firstContentTest = {
  id: 1,
  title: "Transforme",
  titleTwo: "seus estudos",
  subtitle: "Conheça já o futuro da educação imersiva, esse",
  subtitle2: "é o Literaverso, uma plataforma única de conteúdo interativo",
  subtitle3: "com seu próprio metaverso.",
  buttonTitle: "Saiba Mais",
  optionsButton: [
    // { title: "Entrar" },
    { title: "Sobre" },
    { title: "Contato" },
  ],
  backgroundImage: logo1,
  logo: logo,
};

const secondContentTest = {
  id: 2,
  backgroundImage: logo2,
};

const thirdContentTest = {
  id: 3,
  title: "Feito para",
  titleTwo: "todos",
  backgroundImage: backgroundTwo,
  optionsCard: [
    {
      title: "Escolas",
      subtitle:
        "Crie planos de ensino complementares ao currículo escolar da sua instituição, todo mundo aprende junto.",
    },
    {
      title: "Estudantes",
      subtitle:
        "Consuma videos, textos informativos e muito conteúdo interativo para complementar seus estudos.",
    },
    {
      title: "Criadores de conteúdo",
      subtitle:
        "Crie e venda seus conteúdos aqui em um único lugar, você terá acesso a todas as ferramentas para criar experiências interativas e cativar sua base de alunos.",
    },
    {
      title: "Empreendedores",
      subtitle:
        "Tenha acesso a nossa gama de soluções educativas e faça com que sua empresa entre para o metaverso.",
    },
  ],
};

const fourContentTest = {
  id: 4,
  title: "Entre já no futuro",
  titleTwo: "da educação",
  backgroundImage: backgroundSeparator,
//   buttonTitle: "Entrar",
};

const testOptionsButton = (options: OptionButton[]) => {
  options.forEach((item) => {
    expect(
      screen.getByRole("button", {
        name: `${item.title}`,
      })
    ).toBeInTheDocument();
  });
};

const testOptionsCard = (options: OptionCard[]) => {
  options.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
    if (item.subtitle) {
      expect(screen.getByText(item.subtitle)).toBeInTheDocument();
    }
  });
};

const testBackgroundImage = async (id: number, backgroundImage: string) => {
  const image = await screen.findByTestId(`box${id}`);
  fireEvent.load(image);

  expect(image).toHaveStyleRule("background-image", `url(${backgroundImage})`);
};

describe("<Home />", () => {
  test("render first Content", async () => {
    await render(<HomePage />);
    expect(screen.getByText(firstContentTest.title)).toBeInTheDocument();
    expect(screen.getByText(firstContentTest.titleTwo)).toBeInTheDocument();
    expect(screen.getByText(firstContentTest.subtitle)).toBeInTheDocument();
    expect(screen.getByText(firstContentTest.subtitle2)).toBeInTheDocument();
    expect(screen.getByText(firstContentTest.subtitle3)).toBeInTheDocument();
    testOptionsButton(firstContentTest.optionsButton);
    expect(
      screen.getByRole("button", {
        name: firstContentTest.buttonTitle,
      })
    ).toBeInTheDocument();

    testBackgroundImage(firstContentTest.id, firstContentTest.backgroundImage);
  });
  test("render second Content", async () => {
    await render(<HomePage />);
    testBackgroundImage(
      secondContentTest.id,
      secondContentTest.backgroundImage
    );
  });
  test("render third Content", async () => {
    await render(<HomePage />);
    expect(screen.getByText(thirdContentTest.title)).toBeInTheDocument();
    expect(screen.getByText(thirdContentTest.titleTwo)).toBeInTheDocument();
    testOptionsCard(thirdContentTest.optionsCard);
    testBackgroundImage(thirdContentTest.id, thirdContentTest.backgroundImage);
  });
  test("render four Content", async () => {
    await render(<HomePage />);
    expect(screen.getByText(fourContentTest.title)).toBeInTheDocument();
    expect(screen.getByText(fourContentTest.titleTwo)).toBeInTheDocument();
    testBackgroundImage(fourContentTest.id, fourContentTest.backgroundImage);
  });
});
