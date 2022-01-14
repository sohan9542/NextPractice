import React from 'react'
import Head from "next/head"
import NextLink from "next/link"
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utills/styles'
const Layout = ({ children, title }) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - Next Amazona`: 'Next Amazona'}</title>
            </Head>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <NextLink  href="/">
                       Amazona!
                    </NextLink>
                    <div className={classes.grow}>
                   
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:"10px"}}>
                    <NextLink href="/login">
                       Login
                    </NextLink>
                    <NextLink href="/login">
                       Cart
                    </NextLink>
                    </div>
                </Toolbar>

            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved. Next Amazona</Typography>
            </footer>
        </div>
    )
}

export default Layout
