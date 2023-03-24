import React, { ReactElement } from "react";

import { ColorBox, ListItem, SizeBox, TextBox } from "./list.styles";

import { Col, Row } from "../../common-styles/index.styles";
import { Span } from "../../pages/welcome.styles";

type ListProps = {
  items: string[];
  type?: "color" | "text" | "size";
};

export const List = ({ items, type = "color" }: ListProps): ReactElement => {
  const renderBox = (item: string): ReactElement => {
    if (type === "color") return <ColorBox token={item} />;
    if (type === "text") return <TextBox token={item} />;
    return (
      <SizeBox token={item}>
        <div />
      </SizeBox>
    );
  };

  return (
    <Row isWrapped={true}>
      {items.map((item) => (
        <Col key={item} hasPadding={true}>
          <ListItem>
            <>
              <Span>{item}</Span>
              {renderBox(item)}
            </>
          </ListItem>
        </Col>
      ))}
    </Row>
  );
};
