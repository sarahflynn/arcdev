import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

import {
  facebook,
  footerAdornment,
  instagram,
  twitter,
} from "../../assets/index";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1300,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();

  return (
    <>
      <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(0)}
                  to="/"
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(2);
                    setSelectedIndex(0);
                  }}
                  to="/services"
                >
                  Services
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(2);
                    setSelectedIndex(1);
                  }}
                  to="/customsoftware"
                >
                  Custom Software Development
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(2);
                    setSelectedIndex(2);
                  }}
                  to="/mobileapps"
                >
                  iOS/Android App Development
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => {
                    setValue(2);
                    setSelectedIndex(3);
                  }}
                  to="/websites"
                >
                  Website Development
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/revolution"
                >
                  The Revolution
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/revolution"
                >
                  Vision
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/revolution"
                >
                  Technology
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(3)}
                  to="/revolution"
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(4)}
                  to="/about"
                >
                  About Us
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(4)}
                  to="/about"
                >
                  History
                </Grid>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(4)}
                  to="/about"
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  className={classes.link}
                  component={Link}
                  onClick={() => setValue(5)}
                  to="/contact"
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
        <img
          alt="black decorative slash"
          src={footerAdornment}
          className={classes.adornment}
        ></img>
        <Grid
          container
          className={classes.socialContainer}
          justify={"flex-end"}
          spacing={2}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebook} alt="facebook logo" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter logo" className={classes.icon} />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={instagram}
              alt="instagram logo"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </footer>
    </>
  );
}
