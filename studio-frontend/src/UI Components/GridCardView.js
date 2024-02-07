import * as React from 'react';
import { Card, Grid, Paper } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function GridCardView(itemCount) {
    return (
        <Grid container spacing={4}>
            {[...Array(100).keys()].map((item) => (
                <Grid item key={item} xs={2.5} sm={2} md={1.5} lg={1.5}
                sx={{ marginLeft:'0px'}}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Card sx={{ maxWidth: '120px' }} square={true}>
                            <CardMedia
                                sx={{ width: '80px', height: '80px' }}
                                image="https://t4.ftcdn.net/jpg/01/42/24/05/360_F_142240507_ym9QcB560bySzJiTEJ1IJy3auBMFETn2.jpg"
                                title="green iguana"
                            />
                        </Card>
                        <Typography variant="caption" color="text.primary">
                            IMG312312.jpg
                        </Typography>
                    </Box >

                </Grid>
            ))}

        </Grid>
    );
}
