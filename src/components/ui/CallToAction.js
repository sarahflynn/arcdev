import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { ButtonArrow } from "../index";

import { background, mobileBackground } from "../../assets/index";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
    marginTop: 5,
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
}));

export default function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setValue } = props;

  return (
    <Grid
      container
      style={{ height: "60em" }}
      alignItems="center"
      className={classes.background}
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid item container justify={matchesSM ? "center" : undefined}>
              <Button
                onClick={() => setValue(2)}
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButton}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          to="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
