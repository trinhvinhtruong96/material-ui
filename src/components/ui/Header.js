import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger,
    SwipeableDrawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
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
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
    },
    menuItem: {
        ...theme.typography.tab,
        color: "white",
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
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white"
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

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
        { name: "Services", link: "/material-ui/services", activeIndex: 1, selectedIndex: 0 },
        { name: "Custom Software Development", link: "/material-ui/customsoftware", activeIndex: 1, selectedIndex: 1 },
        { name: "iOS/Android App Development", link: "/material-ui/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: "Website Development", link: "/material-ui/websites", activeIndex: 1, selectedIndex: 3 },
    ];

    const routes = [
        { name: "Home", link: "/material-ui/", activeIndex: 0 },
        {
            name: "Services",
            link: "/material-ui/services",
            activeIndex: 1,
            ariaControls: anchorEl ? "simple-menu" : undefined,
            ariaHaspopup: anchorEl ? "true" : undefined,
            onMouseOver: (e) => handleClick(e)
        },
        { name: "The Revolution", link: "/material-ui/revolution", activeIndex: 2 },
        { name: "About Us", link: "/material-ui/about", activeIndex: 3 },
        { name: "Contact Us", link: "/material-ui/contact", activeIndex: 4 },
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case route.link:
                    setValue(route.activeIndex);
                    route.selectedIndex && setSelectedIndex(route.selectedIndex);
                    break;
                case "/material-ui/estimate":
                    setValue(5);
                    break;
                default:
                    break;
            }
        })
        // eslint-disable-next-line
    }, [value, selectedIndex])

    const tabs = (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabsContainer}
                indicatorColor="primary"
            >
                {routes.map((route, index) => (
                    <Tab
                        key={route.link + index}
                        aria-controls={route.ariaControls}
                        aria-haspopup={route.ariaHaspopup}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        onMouseOver={route.onMouseOver}
                    />
                ))}
            </Tabs>
            <Button
                component={Link}
                variant="contained"
                color="secondary"
                to="/material-ui/estimate"
                className={classes.button}
                onClick={() => setValue(5)}

            >
                Free Estimate
            </Button>
            <Menu
                style={{ zIndex: 1400 }}
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
                        key={el.link + index}
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
                open={openDrawer || false}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem
                            key={route.link + index}
                            component={Link}
                            to={route.link}
                            divider
                            button
                            selected={value === route.activeIndex}
                            onClick={() => { setOpenDrawer(false); setValue(route.activeIndex); }}
                        >
                            <ListItemText
                                className={value === route.activeIndex ? [classes.drawerItemSelected, classes.drawerItem].join(" ") : classes.drawerItem}
                                disableTypography
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        component={Link}
                        to="/material-ui/estimate"
                        divider
                        button
                        selected={value === 5}
                        className={classes.drawerItemEstimate}
                        onClick={() => { setOpenDrawer(false); setValue(5); }}
                    >
                        <ListItemText
                            className={value === 5 ? [classes.drawerItemSelected, classes.drawerItem].join(" ") : classes.drawerItem}
                            disableTypography
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
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
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to="/material-ui/"
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