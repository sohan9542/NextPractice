import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";
import { data } from "../utills/data";
import NextLink from "next/link"
export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {
            data.products.map((item, ind) => (
              <Grid item md={4} key={ind}>
                <Card>
                  <NextLink href={`/product/${item.id}`} passHref>
                    <CardActionArea>
                      <div style={{ height: "350px", overflow: "hidden" }}>
                        <CardMedia component="img" image={item.image} title={item.name}>
                        </CardMedia>
                      </div>

                      <CardContent>
                        <Typography>
                          {item.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>

                  <CardActions>
                    <Typography>${item.price}</Typography>
                    <Button>Add To Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </Layout >
  )
}
