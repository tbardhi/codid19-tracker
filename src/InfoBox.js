import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, active, isRed, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" className="infoBox__title">
          {title}
        </Typography>
      </CardContent>

      <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
        {cases}
      </h2>

      <Typography color="textSecondary" className="infoBox__title">
        {total} Total
      </Typography>
    </Card>
  );
}

export default InfoBox;
