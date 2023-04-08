import React from "react";
import { Button } from "react-bootstrap";
export default function OrangeButton({ content, itemUrl }) {
  return (
    <Button
      href={itemUrl ? itemUrl : "#"}
      className="orange-btn"
      target="_blank"
    >
      {content}
    </Button>
  );
}
