import styled from "styled-components";

import { getColorByTheme, getFontWeight, getSize } from "../../../../src/helpers/helpers";
import { getKeyByToken } from "../../utils";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${getSize(({ nano }) => nano)};

  :last-child {
    margin-bottom: 0;
  }
`;

export const ColorBox = styled.div<{ token: string }>`
  width: ${getSize(({ xs }) => xs)};
  height: ${getSize(({ xs }) => xs)};
  border-radius: ${getSize(({ nano }) => nano)};
  border: ${getSize(({ quark }) => quark)} solid white;
  margin-left: ${getSize(({ nano }) => nano)};
  background-color: ${({ token, theme }) => getKeyByToken(token, theme)};
`;

export const TextBox = styled.p<{ token: string }>`
  font-weight: ${({ token, theme }) => getKeyByToken(token, theme)};;
  :after {
    content: '${({ token, theme }) => getKeyByToken(token, theme)}';
    font-size: ${({ token, theme }) => getKeyByToken(token, theme)};
    color: ${getColorByTheme(
      (colors) => colors.neutral.darkest,
      (colors) => colors.neutral.lighter
    )};
  }
`;

export const SizeBox = styled.div<{ token: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  :before {
    content: '${({ token, theme }) => getKeyByToken(token, theme)}';
    color: ${getColorByTheme(
      (colors) => colors.neutral.darkest,
      (colors) => colors.neutral.lighter
    )};
    font-weight: ${getFontWeight(({ bold }) => bold)};
  }
  
  div {
    width: ${getSize(({ xs }) => xs)};
    height: ${({ token, theme }) => getKeyByToken(token, theme)};
    border-radius: ${getSize(({ quark }) => quark)};
    margin-left: ${getSize(({ nano }) => nano)};
    background-color: ${getColorByTheme(
      (colors) => colors.neutral.tinyLight,
      (colors) => colors.neutral.medium
    )};
  }
`;
