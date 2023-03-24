import { Colors } from "../tokens/colors";
import { FontSizes } from "../tokens/font-sizes";
import { FontWeights } from "../tokens/font-weights";
import { Sizes } from "../tokens/sizes";
import { StyleGuide, ThemeTypes } from "../types";
import { StyledGuideProps } from "../state";

type BasicProps = Record<string, any>;
type PropsWithTheme = BasicProps & {
  theme: StyledGuideProps;
};

/**
 * @param {function} callback - It should return the entire StyleGuide object to you chose directly which StyleGuide key you prefer.
 * @returns {string} value from some StyleGuide key (e.g.: fontSize.m // '18px').
 * @example
 * getStyleGuide((styleGuide) => styleGuide.colors.secondary.darker);
  // returns 'darker' from secondary color object (e.g.: '#444').
 * @example
 * getStyleGuide((styleGuide) => styleGuide.fontWeight.light);
  // returns 'light' from fontWeight object (e.g.: 300).
 */
export const getStyleGuide = (callback: (styleGuide: StyleGuide) => string | number) => (
  props: PropsWithTheme
): string | number => {
  return callback(props.theme.styleGuide);
};

/**
 * @param {function} lightCallback - It will be executed if theme is 'light' and it should a return a color.
 * @param {function} darkCallback - It will be executed if theme is 'dark' and it should a return a color.
 * @returns {string} color value (e.g.: '#FFF').
 * @example
 * getColorByTheme(
    (colors) => colors.primary.tinyDark,
    (colors) => colors.primary.medium
  );
  // returns 'tinyDark' if theme is 'light' or 'medium' if theme is 'dark'
 */
export const getColorByTheme = (
  lightCallback: (colors: Colors) => string,
  darkCallback: (colors: Colors) => string
) => (props: PropsWithTheme): string => {
  if (props.theme.theme === ThemeTypes.light) return lightCallback(props.theme.styleGuide.colors);
  return darkCallback(props.theme.styleGuide.colors);
};

/**
 * @param {function} callback - It should return a desired color value.
 * @returns {string} color value (e.g.: '#FFF').
 * @example
 * getColor((colors) => colors.primary.tinyDark);
  // returns 'tinyDark' from primary color.
 */
export const getColor = (callback: (colors: Colors) => string) => (
  props: PropsWithTheme
): string => {
  return callback(props.theme.styleGuide.colors);
};

/**
 * @param {function} callback - It should return a desired font size value.
 * @returns {string} font size value (e.g.: '24px').
 * @example
 * getFontSize((fontSizes) => fontSizes.xl);
  // returns 'xl' from fontSize.
 */
export const getFontSize = (callback: (fontSizes: FontSizes) => string) => (
  props: PropsWithTheme
): string => {
  return callback(props.theme.styleGuide.fontSizes);
};

/**
 * @param {function} callback - It should return a desired font weight value.
 * @returns {string} font weights value (e.g.: '600').
 * @example
 * getFontWeight((fontWeights) => fontWeights.bold);
  // returns 'bold' from fontWeight.
 */
export const getFontWeight = (callback: (fontWeights: FontWeights) => number) => (
  props: PropsWithTheme
): number => {
  return callback(props.theme.styleGuide.fontWeights);
};

/**
 * @param {function} callback - It should return a desired size value.
 * @returns {string} font weight value (e.g.: '8px').
 * @example
 * getSize((sizes) => sizes.xxxs);
  // returns 'xxxs' from sizes.
 */
export const getSize = (callback: (sizes: Sizes) => string) => (props: PropsWithTheme): string => {
  return callback(props.theme.styleGuide.sizes);
};
