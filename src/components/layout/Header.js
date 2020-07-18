import React from 'react'
import { Typography, AppBar, Toolbar, makeStyles, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        background: "black"
    },
    
    nav: {
        color: "black",
        backgroundColor: "blue",
    },
    logo: {
        fontWeight: "bold",
        fontFamily: "'Yellowtail', cursive",
        flexGrow: 1,
        color: "white",
        textDecoration: "none",
        
    },
    navLink: {
        fontFamily: "'Ubuntu', sans-serif",
        color: "white",
        textDecoration: "none",
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "white",
        paddingRight: "1rem",
        cursor: "pointer",
        "&:hover": {
            fontWeight: "bolder",
            color: "white",
            textDecoration: "none",
            transform: "rotate(-10deg)"
        }
    },
    navIcon: {
        cursor: "pointer",
        color: "white",
        "&:hover": {
            transform: "rotate(-10deg)",
        }
    }
}))


function Header() {
    const classes = useStyles()
    return (
        <Grid container className={classes.root}>
            <AppBar className={classes.nav} position="sticky">
                <Toolbar>
                    <Link className={classes.logo} to="/">                    
                        <Typography className={classes.logo} variant="h5">
                            SHOPPING
                        </Typography>
                    </Link>
                    
                     <Typography >
                        <Link to="/" className={classes.navLink} component="button">Home</Link>{" "}
                        
                        <Link to="/about" className={classes.navLink} component="button">About</Link>
                     </Typography>
                    
                    <ShoppingCartIcon className={classes.navIcon} />
                </Toolbar>
            </AppBar>
        </Grid>
    )
}

export default Header