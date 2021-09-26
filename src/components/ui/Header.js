import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger,
    SwipeableDrawer,
    IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    tabsContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: 50,
        marginRight: 25,
        marginLeft: 50,
        height: 45,
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
}));

const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false)
    }

    const menuOptions = [
        { name: "Services", link: "/services" },
        { name: "Custom Software Development", link: "/customsoftware" },
        { name: "Mobile App Development", link: "/mobileapps" },
        { name: "Website Development", link: "/websites" },
    ];

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setValue(0);
                break;
            case "/services":
                setValue(1);
                setSelectedIndex(0);
                break;
            case "/customsoftware":
                setValue(1);
                setSelectedIndex(1);
                break;
            case "/mobileapps":
                setValue(1);
                setSelectedIndex(2);
                break;
            case "/websites":
                setValue(1);
                setSelectedIndex(3);
                break;
            case "/revolution":
                setValue(2);
                break;
            case "/about":
                setValue(3);
                break;
            case "/contact":
                setValue(4);
                break;
            case "/estimate":
                setValue(5);
                break;
            default:
                break;
        }
    }, [])

    const tabs = (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabsContainer}
                indicatorColor="primary"
            >
                <Tab
                    className={classes.tab}
                    component={Link}
                    to="/"
                    label="Home" />
                <Tab
                    aria-controls={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? "true" : undefined}
                    className={classes.tab}
                    component={Link}
                    to="/services"
                    label="Services"
                    onMouseOver={handleClick}
                />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to="/revolution"
                    label="The Revolution" />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to="/about"
                    label="About Us" />
                <Tab
                    className={classes.tab}
                    component={Link}
                    to="/contact"
                    label="Contact Us" />
            </Tabs>
            <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/estimate"
                className={classes.button}>Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                classes={{ paper: classes.menu }}
                open={openMenu}
                MenuListProps={{ onMouseLeave: handleClose }}
                onClose={handleClose}
                onMouseLeave={handleClose}
                elevation={0}
            >
                {menuOptions.map((el, index) => (
                    <MenuItem
                        key={el.link}
                        component={Link}
                        to={el.link}
                        selected={index === selectedIndex && value === 1}
                        classes={{ root: classes.menuItem }}
                        onClick={(e) => { handleMenuItemClick(e, index); setValue(1); handleClose(); }}
                    >
                        {el.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );

    const drawer = (
        <>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                Example Drawer
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to="/"
                            disableRipple
                            className={classes.logoContainer}
                        >
                            <img src={logo} className={classes.logo} alt="logo" />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
}

export default Header;