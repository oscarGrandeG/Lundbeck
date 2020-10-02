import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 80
    },

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    floatButton: {
        float: 'right',
    },
}));


export default function Dashboard() {
  const classes = useStyles();
  return (

        <main className={classes.root}>
            <Grid container spacing={10} className={classes.toolbar}>
                <Grid item xs={8}>
                <Typography variant="h5" component="h2">
                    Peliculas                
                </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button className={classes.floatButton} variant="contained" color="primary">
                        Nueva Pelicula
                    </Button>
                </Grid>
            </Grid>
        </main>
  );
};