import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography,
    IconButton
} from '@material-ui/core';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import roots from '../assets/root.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data.js";


const useStyles = makeStyles((theme) => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    mainContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em"
    },
    itemContainer: {
        maxWidth: "40em"
    }
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
    const classes = useStyles();
    const documentOptions = {
        loop: true,
        autoplay: false,
        animationData: documentAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const scaleOptions = {
        loop: true,
        autoplay: false,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const automationOptions = {
        loop: true,
        autoplay: false,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const uxOptions = {
        loop: true,
        autoplay: false,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row">
                <Grid
                    item
                    className={classes.arrowContainer}
                    style={{
                        marginRight: "1em",
                        marginLeft: "-3.5em"
                    }}
                >
                    <IconButton
                        style={{
                            backgroundColor: "transparent"
                        }}
                        component={Link}
                        to={"/material-ui/services"}
                        onClick={() => setSelectedIndex(0)}
                    >
                        <img src={backArrow} alt="Back to Service" />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.heading}
                >
                    <Grid item>
                        <Typography variant="h2">Custom Software Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph>
                            Whether we’re replacing old software or inventing new solutions,
                            Arc Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Using regular commercial software leaves you with a lot of stuff
                            you don’t need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.arrowContainer}>
                    <IconButton
                        style={{
                            backgroundColor: "transparent"
                        }}
                        component={Link}
                        to={"/material-ui/mobileapps"}
                        onClick={() => setSelectedIndex(2)}
                    >
                        <img src={forwardArrow} alt="Forward to iOS/Android App Development Page" />
                    </IconButton>
                </Grid>

            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="center"
                style={{
                    marginTop: "15em",
                    marginBottom: "20em"
                }}
            >
                <Grid
                    md
                    item
                    container
                    direction="column"
                    style={{ maxWidth: "40em" }}
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h4">Save Energy</Typography>
                    </Grid>
                    <Grid item>
                        <img src={lightbulb} alt="lightbulb" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    md
                    container
                    direction="column"
                    style={{ maxWidth: "40em" }}
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h4">Save Time</Typography>
                    </Grid>
                    <Grid item>
                        <img src={stopwatch} alt="stopwatch" />
                    </Grid>
                </Grid>
                <Grid
                    item
                    md
                    container
                    direction="column"
                    style={{ maxWidth: "40em" }}
                    alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h4">Save Money</Typography>
                    </Grid>
                    <Grid item>
                        <img src={cash} alt="cash" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="space-around"
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Billions are spent annually on the purchasing, printing, and
                                distribution of paper. On top of the massive environmental
                                impact this has, it causes harm to your bottom line as well.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                By utilizing digital forms and documents you can remove these
                                obsolete expenses, accelerate your communication, and help the
                                Earth.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={documentOptions}
                            isStopped
                            style={{
                                maxHeight: 275,
                                maxWidth: 275,
                                minHeight: 250,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                >
                    <Grid item md>
                        <Lottie
                            options={scaleOptions}
                            isStopped
                            style={{
                                maxHeight: 260,
                                maxWidth: 280,
                            }}
                        />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align="right">
                                Whether you’re a large brand, just getting started, or taking
                                off right now, our application architecture ensures pain-free
                                growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                style={{
                    marginTop: "20em",
                    marginBottom: "20em"
                }}
            >
                <Grid item container direction="column" alignItems="center">
                    <Grid item className={classes.itemContainer}>
                        <img
                            src={roots}
                            alt="tree with roots extending out"
                            height="450em"
                            width="450em"
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align="center">Root-Cause Analysis</Typography>
                        <Typography variant="body1" paragraph align="center">
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            We can help you thoroughly examine all areas of your business to
                            develop a holistic plan for the most effective implementation of
                            technology.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="space-around"
            >
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4">
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph>
                                Why waste time when you don’t have to?
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We can help you identify processes with time or event based
                                actions which can now easily be automated.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Increasing efficiency increases profits, leaving you more time
                                to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie
                            options={automationOptions}
                            isStopped
                            style={{
                                maxHeight: 290,
                                maxWidth: 280,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    className={classes.itemContainer}
                    md
                >
                    <Grid item md>
                        <Lottie
                            options={uxOptions}
                            isStopped
                            style={{
                                maxHeight: 310,
                                maxWidth: 155,
                            }}
                        />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align="right">
                                User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align="right">
                                A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography variant="body1" paragraph align="right">
                                So why are so many pieces of software complicated, confusing,
                                and frustrating?
                            </Typography>
                            <Typography variant="body1" paragraph align="right">
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

export default CustomSoftware