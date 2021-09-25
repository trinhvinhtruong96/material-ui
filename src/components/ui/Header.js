import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
        marginBottom: "3em"
    },
    logo: {
        height: "8em"
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
    }
}));

const Header = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(e.currentTarget);
        setOpen(false);
        setSelectedIndex(i);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
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
                            open={open}
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
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    );
}

export default Header;