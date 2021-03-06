import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import {
    Typography,
    Button,
    useMediaQuery,
} from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    specialText: {
        fontFamily: "pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
}))

const Services = ({ setValue, setSelectedIndex }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="column">

            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : "5em",
                    marginTop: matchesSM ? "1em" : "2em"
                }}
            >
                <Typography
                    variant="h2"
                    align={matchesSM ? "center" : undefined}
                    gutterBottom
                >
                    Services
                </Typography>
            </Grid>

            <Grid item> {/*-----iOs/Android Block-----*/}
                <Grid
                    container
                    direction="row"
                    className={classes.serviceContainer}
                    justify={matchesSM ? "center" : "flex-end"}
                    style={{ marginTop: matchesSM ? '1em' : '5em' }}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : '35em',
                        }}
                    >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button
                            component={Link}
                            to="/material-ui/mobileapps"
                            variant="outlined"
                            className={classes.learnButton}
                            onClick={() => { setValue(1); setSelectedIndex(2); }}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em", }}>
                        <img
                            className={classes.icon}
                            alt="mobile phone icon"
                            src={mobileAppsIcon}
                            width="250em"
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item> {/*-----Custom Software Block-----*/}
                <Grid
                    container
                    direction="row"
                    className={classes.serviceContainer}
                    justify={matchesSM ? "center" : "flex-start"}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : "5em",
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : '35em',
                        }}
                    >
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button
                            component={Link}
                            to="/material-ui/customSoftware"
                            variant="outlined"
                            className={classes.learnButton}
                            onClick={() => { setValue(1); setSelectedIndex(1); }}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img
                            className={classes.icon}
                            alt="custom software icon"
                            src={customSoftwareIcon}
                            width="250em"
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item> {/*-----Website Block-----*/}
                <Grid
                    container
                    direction="row"
                    className={classes.serviceContainer}
                    justify={matchesSM ? "center" : "flex-end"}
                    style={{ marginBottom: '10em' }}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : '35em',
                        }}
                    >
                        <Typography variant="h4">
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Optimized for Search Engines, build speed.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button
                            component={Link}
                            to="/material-ui/websites"
                            variant="outlined"
                            className={classes.learnButton}
                            onClick={() => { setValue(1); setSelectedIndex(3); }}
                        >
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        style={{ marginRight: matchesSM ? 0 : "5em", }}
                    >
                        <img
                            className={classes.icon}
                            alt="website icon"
                            src={websitesIcon}
                            width="250em"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

}

export default Services;