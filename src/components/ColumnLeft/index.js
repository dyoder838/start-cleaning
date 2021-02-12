import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        float: "right",
        boxShadow: "none",
        backgroundColor: 'transparent',
        
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(prop) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>

            <CardActionArea>

                <CardMedia
                    component="img"
                    src={prop.image}
                    className={classes.media}
                    title={prop.title}
                />
                <CardContent>

                    <Typography gutterBottom variant="h5" component="h2">
                        {prop.title}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {prop.description}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="ul">
                        
                    </Typography>

                </CardContent>

            </CardActionArea>

        </Card>
    );
}