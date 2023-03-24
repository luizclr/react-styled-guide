import styled from "styled-components";

import { getColorByTheme, getFontSize, getSize } from "../../../src/helpers/helpers";

type ColSize = 1 | 2 | 3 | 4 | 5 | 6;

type RowProps = {
  isWrapped?: boolean;
  hasPadding?: boolean;
  isColumnDirection?: boolean;
};

type ColProps = RowProps & {
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
};

const getColSize = (size?: ColSize): number => {
  if (size === 1) return 16.66;
  if (size === 2) return 33.33;
  if (size === 3) return 50;
  if (size === 4) return 66.66;
  if (size === 5) return 83.33;
  return 100;
};

export const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: ${({ isColumnDirection }) => (isColumnDirection ? "column" : "row")};
  margin: 0;
  padding: 0 ${({ hasPadding }) => getSize(({ quark }) => (hasPadding ? quark : "0"))};
  flex-wrap: ${({ isWrapped }) => (isWrapped ? "wrap" : "nowrap")};
`;

export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  width: ${({ lg }) => getColSize(lg)}%;
  padding: ${({ hasPadding }) => getSize(({ nano }) => (hasPadding ? nano : "0"))};

  @media (max-width: 1300px) {
    width: ${({ lg }) => getColSize(lg)}%;
  }

  @media (max-width: 980px) {
    width: ${({ md }) => getColSize(md)}%;
  }

  @media (max-width: 740px) {
    width: ${({ sm }) => getColSize(sm)}%;
  }

  @media (max-width: 740px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  font-size: ${getFontSize(({ l }) => l)};
  margin-left: ${getSize(({ nano }) => nano)};
  text-decoration: none;
  color: ${getColorByTheme(
    ({ primary }) => primary.tinyDark,
    ({ primary }) => primary.medium
  )};

  :hover {
    color: ${getColorByTheme(
      ({ primary }) => primary.dark,
      ({ primary }) => primary.light
    )};
  }
`;
