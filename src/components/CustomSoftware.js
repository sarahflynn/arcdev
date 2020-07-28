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
import roots from "../assets/root.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    padding: "2em 5em 10em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setSelectedIndex } = props;

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
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
            <Typography variant="h2">Custom Software Development</Typography>
            <Typography paragraph variant="body1">
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography paragraph variant="body1">
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography paragraph variant="body1">
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography paragraph variant="body1">
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
        style={{ marginTop: "15em", marginBottom: "20em" }}
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
      <Grid item container justify="space-around">
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Digital Documents &amp; Data</Typography>
              <Typography paragraph variant="body1">
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography paragraph variant="body1">
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography paragraph variant="body1">
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4">
                Scale
              </Typography>
              <Typography align="right" paragraph variant="body1">
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ marginTop: "20em", marginBottom: "20em" }}
        >
          <Grid item>
            <img
              src={roots}
              alt="tree with roots extending out"
              height="450em"
              width="450em"
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography align="center" variant="h4" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography align="center" variant="body1" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container justify="space-around">
        <Grid item container className={classes.itemContainer} md>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4">Automation</Typography>
              <Typography paragraph variant="body1">
                Why waste time when you don’t have to?
              </Typography>
              <Typography paragraph variant="body1">
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography paragraph variant="body1">
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} md>
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align="right" variant="h4">
                User Experience Design
              </Typography>
              <Typography align="right" paragraph variant="body1">
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography align="right" paragraph variant="body1">
                So why are so many pieces of software complicated, confusing,
                and frustrating? So why are so many pieces of software
                complicated, confusing, and frustrating?
              </Typography>
              <Typography align="right" paragraph variant="body1">
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
