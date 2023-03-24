import { Colors } from "./tokens/colors";
import { FontSizes } from "./tokens/font-sizes";
import { FontWeights } from "./tokens/font-weights";
import { Sizes } from "./tokens/sizes";

export enum ThemeTypes {
  dark = "DARK",
  light = "LIGHT",
}

export type StyleGuide = {
  colors: Colors;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  sizes: Sizes;
};
