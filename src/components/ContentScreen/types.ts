import { OptionButton } from "../ButtonGroup/types";
import { OptionCard } from "../CardGroup/types";

export interface OptionContentScreen {
    id: number;
    backgroundImage: string;
    title?: string;
    bgColor?: string;
    titleTwo?: string;
    colorTitle?: string;
    subtitle?: string;
    subtitle2?: string;
    subtitle3?: string;
    logo?: string;
    buttonTitle?: string;
    optionsButton?: OptionButton[];
    backgroundImagePositionY?: number;
    optionsCard?: OptionCard[];
  }