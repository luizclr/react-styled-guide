/* eslint-disable max-lines-per-function */
import React, { ReactElement, useEffect, useMemo, useState } from "react";

import {
  Container,
  Content,
  LinksWrapper,
  Section,
  Span,
  Subtitle,
  Text,
  Title,
  TokenWrapper,
} from "./welcome.styles";

import { useTheme } from "../../../src/state";
import { ThemeTypes } from "../../../src/types";
import { Col, Link, Row } from "../common-styles/index.styles";
import { Button } from "../components/button/button";
import { List } from "../components/list/list";
import initialStyleGuide from "../style-guide";

export const Welcome = (): ReactElement => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  const [fontSize, setFontSize] = useState<string[]>([]);
  const [fontWeight, setFontWeight] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const colorGroups = Object.keys(initialStyleGuide.styleGuide.colors);

  useEffect(() => {
    checkLocalTheme();
    getTokens();
  }, []);

  const getColorTokens = (): Record<string, string[]> => {
    const colorKeys = Object.keys(initialStyleGuide.styleGuide.colors.primary);

    const colorTokens: Record<string, string[]> = {};

    colorGroups.forEach((color) => {
      const temp: string[] = [];
      colorKeys.forEach((key) => temp.push(`colors.${color}.${key}`));
      colorTokens[color] = temp;
    });

    return colorTokens;
  };

  const getTokensByGroup = (group: string): string[] => {
    const keys = Object.keys(initialStyleGuide.styleGuide[group]);

    const values: string[] = [];

    keys.forEach((key) => values.push(`${group}.${key}`));

    return values;
  };

  const getTokens = (): void => {
    setFontSize(getTokensByGroup("fontSizes"));
    setFontWeight(getTokensByGroup("fontWeights"));
    setSizes(getTokensByGroup("sizes"));
  };

  const memorizedColorTokens = useMemo(() => getColorTokens(), []);

  const changeTheme = (): void => {
    if (theme === ThemeTypes.light) {
      localStorage.setItem("theme", ThemeTypes.dark);
      setDarkTheme();
    } else {
      localStorage.setItem("theme", ThemeTypes.light);
      setLightTheme();
    }
  };

  const checkLocalTheme = (): void => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme === ThemeTypes.dark) setDarkTheme();
    else setLightTheme();
  };

  return (
    <Container>
      <Content>
        <Title>React Styled Guide</Title>
        <Subtitle>Example page</Subtitle>
        <Section className="mt-2">
          <Subtitle>
            Theme: <Span>{theme.toLocaleLowerCase()}</Span>
          </Subtitle>
          <Button text="Change Theme" onClick={changeTheme} />
        </Section>
        <Section>
          <Row>
            <Col>
              <Subtitle>Style Guide</Subtitle>
              {/* colors */}
              <Row>
                <Col>
                  <Text>Colors:</Text>
                  <Row isWrapped={true}>
                    {colorGroups.map((color) => (
                      <Col md={3} lg={2} key={color} hasPadding={true}>
                        <TokenWrapper>
                          <Text centered={true}>{color}</Text>
                          <List items={memorizedColorTokens[color]} type="color" />
                        </TokenWrapper>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
              {/* front */}
              <Row isWrapped={true}>
                <Col lg={4}>
                  <Row isWrapped={true}>
                    <Col md={3} lg={3} hasPadding={true}>
                      <Text>Font size:</Text>
                      <TokenWrapper>
                        <List items={fontSize} type="text" />
                      </TokenWrapper>
                    </Col>
                    <Col md={3} lg={3} hasPadding={true}>
                      <Text>Font weight:</Text>
                      <TokenWrapper>
                        <List items={fontWeight} type="text" />
                      </TokenWrapper>
                    </Col>
                  </Row>
                </Col>
                <Col lg={2}>
                  <Col>
                    <Col hasPadding={true}>
                      <Text>Sizes:</Text>
                      <TokenWrapper>
                        <List items={sizes} type="size" />
                      </TokenWrapper>
                    </Col>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
        {/* footer */}
        <Section>
          <Row>
            <Col>
              <Subtitle>Reference:</Subtitle>
              <LinksWrapper>
                <Row isWrapped={true}>
                  <Text>Source code: </Text>
                  <Link
                    href="https://github.com/luizclr/react-styled-guide/tree/main/example"
                    target="_blank"
                  >
                    github.com/luizclr/react-styled-guide/tree/main/example
                  </Link>
                </Row>
                <Row isWrapped={true}>
                  <Text>Documentation: </Text>
                  <Link href="https://github.com/luizclr/react-styled-guide" target="_blank">
                    github.com/luizclr/react-styled-guide
                  </Link>
                </Row>
                <Row isWrapped={true}>
                  <Text>NPM: </Text>
                  <Link href="https://www.npmjs.com/package/react-styled-guide" target="_blank">
                    npmjs.com/package/react-styled-guide
                  </Link>
                </Row>
              </LinksWrapper>
            </Col>
          </Row>
        </Section>
      </Content>
    </Container>
  );
};
