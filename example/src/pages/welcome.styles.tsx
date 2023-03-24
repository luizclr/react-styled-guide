import styled from "styled-components";

import { getColorByTheme, getFontSize, getSize } from "../../../src/helpers/helpers";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  background-color: ${getColorByTheme(
    (colors) => colors.neutral.lightest,
    (colors) => colors.neutral.darkest
  )};
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${getSize((sizes) => sizes.xxxs)};
`;

export const Section = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${getSize((sizes) => sizes.xxxs)};
  margin-bottom: ${getSize((sizes) => sizes.xxxs)};
  border-radius: ${getSize((sizes) => sizes.nano)};
  background-color: ${getColorByTheme(
    (colors) => colors.neutral.lighter,
    (colors) => colors.neutral.darker
  )};
`;

export const TokenWrapper = styled.div`
  padding: ${getSize((sizes) => sizes.xxxs)};
  border-radius: ${getSize((sizes) => sizes.nano)};
  background-color: ${getColorByTheme(
    (colors) => colors.neutral.light,
    (colors) => colors.neutral.dark
  )};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${getColorByTheme(
    (colors) => colors.neutral.darkest,
    (colors) => colors.neutral.lightest
  )};
  margin: ${getSize((sizes) => sizes.xxs)};
  font-size: ${getFontSize(({ xxxl }) => xxxl)};
`;

export const Subtitle = styled.h2`
  font-size: ${getFontSize(({ xxl }) => xxl)};
  color: ${getColorByTheme(
    (colors) => colors.neutral.darker,
    (colors) => colors.neutral.lighter
  )};
`;

export const Text = styled.p<{ centered?: boolean }>`
  color: ${getColorByTheme(
    (colors) => colors.neutral.darkest,
    (colors) => colors.neutral.lighter
  )};
  font-size: ${getFontSize(({ m }) => m)};
  text-align: ${({ centered }) => (centered ? "center" : "start")};
  margin-bottom: ${getSize((sizes) => sizes.nano)};
`;

export const Span = styled.span`
  color: ${getColorByTheme(
    (colors) => colors.neutral.tinyDark,
    (colors) => colors.neutral.tinyLight
  )};
  margin-left: ${getSize((sizes) => sizes.nano)};
`;

export const LinksWrapper = styled.div`
  margin-top: ${getSize((sizes) => sizes.xxxs)};
`;
