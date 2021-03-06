import React from 'react';
import {
    Grid,
    makeStyles,
    Hidden,
} from '@material-ui/core';
import footerAdornment from '../../assets/Footer Adornment.svg';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

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
    }
}));

const Footer = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
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
                                to="/material-ui/"
                                onClick={() => setValue(0)}
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
                                to="/material-ui/services"
                                onClick={() => { setValue(1); setSelectedIndex(0) }}
                            >
                                Services
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/customsoftware"
                                onClick={() => { setValue(1); setSelectedIndex(1) }}
                            >
                                iOS/Android App Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/mobileapps"
                                onClick={() => { setValue(1); setSelectedIndex(2) }}
                            >
                                Mobile App Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/website"
                                onClick={() => { setValue(1); setSelectedIndex(3) }}
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
                                to="/material-ui/revolution"
                                onClick={() => setValue(2)}
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/revolution"
                                onClick={() => setValue(2)}
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/revolution"
                                onClick={() => setValue(2)}
                            >
                                Technology
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/revolution"
                                onClick={() => setValue(2)}
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
                                to="/material-ui/about"
                                onClick={() => setValue(3)}
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/about"
                                onClick={() => setValue(3)}
                            >
                                Team
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                component={Link}
                                to="/material-ui/about"
                                onClick={() => setValue(3)}
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
                                to="/material-ui/contact"
                                onClick={() => setValue(4)}
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
            />

            <Grid 
                container  
                justify="flex-end" 
                className={classes.socialContainer}
                spacing={2}
            >
                <Grid
                    item
                    component={"a"}
                    href="https://www.facebook.com/profile.php?id=100005490255315"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img alt="facebook logo" src={facebook} className={classes.icon} />
                </Grid>
                <Grid
                    item
                    component={"a"}
                    href="https://www.facebook.com/profile.php?id=100005490255315"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img alt="twitter logo" src={twitter} className={classes.icon} />
                </Grid>
                <Grid
                    item
                    component={"a"}
                    href="https://www.facebook.com/profile.php?id=100005490255315"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img alt="instagram logo" src={instagram} className={classes.icon} />
                </Grid>
            </Grid>

        </footer>
    )
}

export default Footer;