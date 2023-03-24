import styled from "styled-components";

import {
  getColor,
  getColorByTheme,
  getFontSize,
  getFontWeight,
  getSize,
} from "../../../../src/helpers/helpers";

export const Button = styled.button`
  width: ${getSize((sizes) => sizes.giant)};
  padding: ${getSize((sizes) => sizes.nano)} 0;
  border-radius: ${getSize((sizes) => sizes.nano)};
  font-weight: ${getFontWeight((fontWeights) => fontWeights.bold)};
  font-size: ${getFontSize((fontSizes) => fontSizes.m)};
  color: ${getColor(({ primary }) => primary.lightest)};
  border: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.dark,
      ({ secondary }) => secondary.dark
    )};
  background-color: ${getColorByTheme(
    ({ primary }) => primary.tinyDark,
    ({ secondary }) => secondary.medium
  )};

  :hover {
    cursor: pointer;
    border-color: ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ secondary }) => secondary.darker
    )};
    background-color: ${getColorByTheme(
      ({ primary }) => primary.dark,
      ({ secondary }) => secondary.tinyDark
    )};
  }
`;
