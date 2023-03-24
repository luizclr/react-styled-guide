/* eslint-disable max-lines-per-function */
import { fireEvent, render, screen } from "@testing-library/react";
import "jest-styled-components";
import React from "react";

import { App } from "./app";

import initialStyleGuide from "../example/src/style-guide";
import { StyledGuideProvider, ThemeTypes } from "../src";

describe("<App />", () => {
  describe("# Initial Theme", () => {
    it("should render with default 'ThemeType' as 'light'", () => {
      // given
      render(
        <StyledGuideProvider value={initialStyleGuide}>
          <App />
        </StyledGuideProvider>
      );

      // then
      expect(screen.getByTestId("theme").innerHTML).toBe("LIGHT");
    });

    it("should render passing 'light' theme", () => {
      // given
      render(
        <StyledGuideProvider value={{ ...initialStyleGuide, theme: ThemeTypes.light }}>
          <App />
        </StyledGuideProvider>
      );

      // then
      expect(screen.getByTestId("theme").innerHTML).toBe("LIGHT");
    });

    it("should render passing 'light' theme", () => {
      // given
      render(
        <StyledGuideProvider value={{ ...initialStyleGuide, theme: ThemeTypes.dark }}>
          <App />
        </StyledGuideProvider>
      );

      // then
      expect(screen.getByTestId("theme").innerHTML).toBe("DARK");
    });
  });
  describe("# State handling", () => {
    describe("- setDarkTheme()", () => {
      it("should change theme to 'light'", async () => {
        // given
        render(
          <StyledGuideProvider value={{ ...initialStyleGuide, theme: ThemeTypes.dark }}>
            <App />
          </StyledGuideProvider>
        );
        const button = screen.getByText("CHANGE THEME");
        const span = screen.getByTestId("theme");

        // then
        expect(span.innerHTML).toBe("DARK");

        // when
        fireEvent.click(button);

        // then
        expect(span.innerHTML).toBe("LIGHT");
      });
    });
    describe("- setLightTheme()", () => {
      it("should change theme to 'dark'", async () => {
        // given
        render(
          <StyledGuideProvider value={{ ...initialStyleGuide, theme: ThemeTypes.light }}>
            <App />
          </StyledGuideProvider>
        );
        const button = screen.getByText("CHANGE THEME");
        const span = screen.getByTestId("theme");

        // then
        expect(span.innerHTML).toBe("LIGHT");

        // when
        fireEvent.click(button);

        // then
        expect(span.innerHTML).toBe("DARK");
      });
    });
  });
  describe("# Style helpers", () => {
    describe("- getStyleGuide()", () => {
      it("should return correct height size", async () => {
        // given
        render(
          <StyledGuideProvider value={initialStyleGuide}>
            <App />
          </StyledGuideProvider>
        );
        const container = screen.getByTestId("container");

        // then
        const { sizes } = initialStyleGuide.styleGuide;
        expect(container).toHaveStyleRule("height", sizes.giant);
      });
    });
    describe("- getColor()", () => {
      it("should return correct color", async () => {
        // given
        render(
          <StyledGuideProvider value={initialStyleGuide}>
            <App />
          </StyledGuideProvider>
        );
        const title = screen.getByTestId("title");

        // then
        const { primary } = initialStyleGuide.styleGuide.colors;
        expect(title).toHaveStyleRule("color", primary.medium);
      });
    });
    describe("- getColorByTheme()", () => {
      it("should return correct color when theme is 'light'", async () => {
        // given
        render(
          <StyledGuideProvider value={initialStyleGuide}>
            <App />
          </StyledGuideProvider>
        );
        const container = screen.getByTestId("container");

        // then
        const { neutral } = initialStyleGuide.styleGuide.colors;
        expect(container).toHaveStyleRule("background-color", neutral.lighter);
      });
      it("should return correct color when theme is 'dark'", async () => {
        // given
        render(
          <StyledGuideProvider value={{ ...initialStyleGuide, theme: ThemeTypes.dark }}>
            <App />
          </StyledGuideProvider>
        );
        const container = screen.getByTestId("container");

        // then
        const { neutral } = initialStyleGuide.styleGuide.colors;
        expect(container).toHaveStyleRule("background-color", neutral.darker);
      });
    });
    describe("- getFontSize()", () => {
      it("should return correct fontSize", async () => {
        // given
        render(
          <StyledGuideProvider value={initialStyleGuide}>
            <App />
          </StyledGuideProvider>
        );
        const title = screen.getByTestId("title");

        // then
        const { fontSizes } = initialStyleGuide.styleGuide;
        expect(title).toHaveStyleRule("font-size", fontSizes.xl);
      });
    });
    describe("- getFontWeight()", () => {
      it("should return correct fontWeight", async () => {
        // given
        render(
          <StyledGuideProvider value={initialStyleGuide}>
            <App />
          </StyledGuideProvider>
        );
        const text = screen.getByTestId("text");

        // then
        const { fontWeights } = initialStyleGuide.styleGuide;
        expect(text).toHaveStyleRule("font-weight", fontWeights.bold.toString());
      });
    });
    describe("- getSize()", () => {
      it("should return correct size", async () => {
        // given
        render(
          <StyledGuideProvider value={initialStyleGuide}>
            <App />
          </StyledGuideProvider>
        );
        const container = screen.getByTestId("container");

        // then
        const { sizes } = initialStyleGuide.styleGuide;
        expect(container).toHaveStyleRule("width", sizes.giant);
      });
    });
  });
});
