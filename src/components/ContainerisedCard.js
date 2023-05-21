import { Button, CardHeader, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import React from "react";

const ContainerisedCard = (props) => {
  return (
    <Container maxWidth={props.maxWidth} className="mt-6 px-4">
      <Card className="p-3" raised>
        <CardHeader
          title={
            <Typography variant="h4" align="center" gutterBottom>
              {props.title}
            </Typography>
          }
        ></CardHeader>
        <CardContent>{props.children}</CardContent>
        <CardActions className="float-right">
          {props.buttonText && (
            <Button
              variant="contained"
              color="primary"
              onClick={props.onSubmit}
            >
              {props.buttonText}
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
};

export default ContainerisedCard;
