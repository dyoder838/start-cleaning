return (

    <div className={classes.root}>

        <AppBar position="static" color="transparent">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to="/">
                        <MenuItem onClick={handleClose}>Main</MenuItem>
                    </Link>

                </Menu>
                <Typography variant="h6" className={classes.title}>

                </Typography>
                <Toolbar className={classes.logoMargin}>
                    <img src={Logo} alt="logo" className={classes.logo} />
                </Toolbar>

            </Toolbar>
        </AppBar>
    </div>

);