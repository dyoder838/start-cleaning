import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SplashText from "../../components/SplashText";
import "./style.css";
import ColumnLeft from "../../components/ColumnLeft";
import ColumnRight from "../../components/ColumnRight";
import ColumnLeftDb from "../../ColumnLeftDb.json";
import ColumnRightDb from "../../ColumnRightDb.json";



const useStyles = makeStyles((theme) => ({

    root: {
        direction: "row",
        justify: "center",
        alignItems: "stretch",
    },
    info: {
        marginTop: 10,
    },
    buttonsGrid: {

        marginTop: 10,

    },
  

}));

export default function MainPage() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            
           
            <Grid item xs={12}>
                <SplashText  />
            </Grid>


            {ColumnLeftDb.map((card, index) =>
                <Grid item xs={12} md={6} lg={6} key={index}>
                    <ColumnLeft
                        key={index}
                        id={card.id}
                        title={card.title}
                        image={card.image}
                        repository={card.repository}
                        liveLink={card.liveLink}
                        description={card.description}>
                    </ColumnLeft>
                </Grid>)}

            {ColumnRightDb.map((card, index) =>
                <Grid item xs={12} md={6} lg={6} key={index}>
                    <ColumnRight
                        key={index}
                        id={card.id}
                        title={card.title}
                        image={card.image}
                        repository={card.repository}
                        liveLink={card.liveLink}
                        description={card.description}>
                    </ColumnRight>
                </Grid>)}


        </Grid>

    )
}