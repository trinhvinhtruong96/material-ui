import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import footerAdornment from '../../assets/Footer Adornment.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid
                container
                className={classes.mainContainer}
                justify="center"
            >
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
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
                            to="/services"
                        >
                            Services
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/customsoftware"
                        >
                            Custom Software Development
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/mobileapps"
                        >
                            Mobile App Development
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/website"
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
                            to="/revolution"
                        >
                            The Revolution
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/revolution"
                        >
                            Vision
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/revolution"
                        >
                            Technology
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
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
                            to="/about"
                        >
                            History
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/about"
                        >
                            Team
                        </Grid>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/about"
                        >
                            About Us
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid
                            item
                            className={classes.link}
                            component={Link}
                            to="/contact"
                        >
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <img
                alt="black decorative slash"
                src={footerAdornment}
                className={classes.adornment}
            />
        </footer>
    )
}

export default Footer;