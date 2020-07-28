import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  nameContainer: {
    padding: "2em 5em 10em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setSelectedIndex } = props;

  return (
    <Grid container direction="column" className={classes.nameContainer}>
      <Grid item container>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: "1.5em", marginLeft: "-3.5em" }}
        >
          <IconButton
            onClick={() => setSelectedIndex(0)}
            component={Link}
            to="/services"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={backArrow} alt="back to services page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">
              Custom Software Development
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="body1">
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="body1">
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="body1">
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography style={{ marginBottom: "1em" }} variant="body1">
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton
            onClick={() => setSelectedIndex(2)}
            component={Link}
            to="/mobileapps"
            style={{ backgroundColor: "transparent" }}
          >
            <img src={forwardArrow} alt="forward to app development page" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="center"
        style={{ marginTop: "5em", marginBottom: "5em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt={lightbulb} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt={stopwatch} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt={cash} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
