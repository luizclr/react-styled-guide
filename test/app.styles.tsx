import styled from "styled-components";

import {
  getStyleGuide,
  getColor,
  getColorByTheme,
  getFontSize,
  getFontWeight,
  getSize,
} from "../src";

export const Container = styled.div`
  background-color: ${getColorByTheme(
    ({ neutral }) => neutral.lighter,
    ({ neutral }) => neutral.darker
  )};
  width: ${getSize(({ giant }) => giant)};
  height: ${getStyleGuide((styleGuide) => styleGuide.sizes.giant)};
`;

export const Title = styled.h1`
  color: ${getColor(({ primary }) => primary.medium)};
  font-size: ${getFontSize(({ xl }) => xl)};
`;

export const Text = styled.p`
  color: ${getColor(({ primary }) => primary.medium)};
  font-weight: ${getFontWeight(({ bold }) => bold)};
`;
