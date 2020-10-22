import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Title from '../../Components/Title/Title';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 492,
      height: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    login: {
      marginTop: theme.spacing(1),
    },
    profile: {
      color: '#d66544',
    },
    or: {
        marginTop: 20,
    }
  }));

export default function Login(props) {
    const classes = useStyles();
    const { handleOpen, handleClose } = props;
    return (
        <div className={classes.paper}>
            <Grid
                item
                xs={12}
                container
                justify="flex-end"
                alignItems="center"
            >
                <IconButton onClick={() => {handleClose('login')}}>
                    <CloseIcon />
                </IconButton>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h2 id="simple-modal-title">Iniciar Sesion</h2>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-full-width-user"
                    label="Usuario"
                    style={{ margin: 8 }}
                    placeholder="Usuario"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-full-width-pass"
                    label="Contraseña"
                    style={{ margin: 8 }}
                    placeholder="Contraseña"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
            <Grid 
                item
                xs={12}
                container
                justify="flex-end"
                alignItems="center"
            >
                <Button color="primary" className={classes.login}>Olvidé mi contraseña</Button>
            </Grid>
            <Grid 
                item
                xs={12}
                container
                justify="center"
                alignItems="center"
            >
                <Button variant="contained" color="primary" className={classes.login}>
                    Iniciar Sesion
                </Button>
            </Grid>
            <Grid 
                item
                xs={12}
                container
                justify="center"
                alignItems="center"
                className={classes.or}
            >
                <Title
                    title="O"
                    variant="subtitle2"
                />
            </Grid>
            <Grid 
                item
                xs={12}
                container
                justify="center"
                alignItems="center"
            >
                <Button
                    color="primary"
                    className={classes.login}
                    onClick={() => handleOpen('register')}
                >
                        Registrate
                </Button>
            </Grid>
        </div>
    );
}