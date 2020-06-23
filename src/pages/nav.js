import React from 'react';
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom'


function Nav(){

    const classes = useStyles();
    return(
        <div className={classes.navbar}>
            <Link className={classes.logo} to="/"><h3>Logo</h3></Link>

            <ul className={classes.navbarUl}>
                <Link className={classes.navbarli} to="/shop" ><li>Shop</li></Link>
                <Link className={classes.navbarli} to="/about" ><li>About</li></Link>
                <Link className={classes.navbarli} to="/faq" ><li>FAQ</li></Link>
            </ul>
        </div>
    )
}

const useStyles = makeStyles({
    navbar:{
        color:"#fff",
        display:"flex",
        justifyContent:"space-around",
        alignContent:"center",
        minHeight:"10vh",
        backgroundColor:"#212529"
    },
    navbarUl:{
        width:"40%",
        display:"flex",
        justifyContent:'space-around',
        alignItems:"center",
        listStyle:"none"
    },
    logo:{
        textDecoration:"none",
        fontSize:"20px",
        color:"#fff"
    },
    navbarli:{
        color:"#fff",
        textDecoration:"none"
    }

})


export default Nav;