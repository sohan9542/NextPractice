import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';
import { data } from '../../utills/data';
import { Grid, Typography } from '@material-ui/core';
const CartDetails = () => {
    const router = useRouter();
    const id = router.query;
    const item = data.products.filter(item => item.id == id.id)
    const product = item[0]
    return (
        <Layout title={product.name}>
            <Grid style={{ marginTop: "20px", minHeight: "100vh", display: "flex", alignItems: "Center", justifyContent: "Center" }} container spacing={1}>
                <Grid item md={6} xs={12}>
                    <img src={product.image} height={560} width={560} layout='responsive' />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography>{product.name}</Typography>
                    <Typography>Category: {product.category}</Typography>
                    <Typography>Price: ${product.price}</Typography>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default CartDetails
