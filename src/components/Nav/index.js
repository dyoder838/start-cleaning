import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Logo from '../../assets/SCLogo.png';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,    
    },
    appBar: {
        boxShadow: "none",
        position: 'static',
        backgroundColor: "transparent",    
    },
    logoPos: {
        position: 'absolute',
        left: '50%',
        top: 50,
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    logo: {
        maxHeight: '100px',
        display: 'flex',
        background: 'transparent',
        top: '10px',
    },
    toolbar: {

    },
    sectionMenuIcon: {
        position: 'static',
        right: '0px',
    },
    sectionMobile: {
        marginLeft: theme.spacing(2),
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
            position: 'absolute',
            right: '0px',
            
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            position: 'absolute',
            right: '0px',
        },
    },
    button: {
        fontWeight: 'bold'
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            
        >
            <MenuItem>
                <Button aria-label="home" href='/' >Home</Button>

            </MenuItem>

            {/* <MenuItem>
                <Button aria-label="about us" href='/about'>About Us</Button>

            </MenuItem> */}

            <MenuItem
            >
                <Button aria-label="services" href='/services'>Services</Button>

            </MenuItem>

        </Menu>
    );

    return (
        <div className={classes.grow}>

            <AppBar className={classes.appBar}>

                <div className={classes.logoPos}>

                    <img src={Logo} alt="Start Cleaning logo" className={classes.logo} />

                </div>

                <Toolbar className={classes.toolbar}>

                    <IconButton
                        edge="start"
                        className={classes.sectionMobile}
                        aria-label="open drawer" aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                    >
                        <MenuIcon className={classes.sectionMenuIcon}/>
                    </IconButton>

                    <div className={classes.sectionDesktop}>

                        <Button className={classes.button} aria-label="Home" size='large' href='/'>Home</Button>

                        {/* <Button className={classes.button} aria-label="about us" href='/about'>About Us</Button> */}

                        <Button className={classes.button} aria-label="services" size='large' href='/services'>Services</Button>
                        

                    </div>

                </Toolbar>

            </AppBar>
            {renderMobileMenu}
        </div>
    );
}