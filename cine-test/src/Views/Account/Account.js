import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

import Title from '../../Components/Title/Title';

import styles from './styles';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

function Content(props) {
  const { classes } = props;

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xl={12}>
          <Title
            title="Mi Cuenta"
            variant="h2"
            color="#d66544"
          />
        </Grid>
        <>
          <Grid item xl={2}>
            <Title
              title="Mi Cuenta"
              variant="h4"
              color="#d66544"
            />
          </Grid>
          <Grid item xl={5}>
            <Grid item xs={12}>
              <Title
                title="Nombre: Oscar Grande"
                variant="subtitle2"
              />
            </Grid>
            <Grid item xs={12}>
              <Title
                title="Correo electronico: ozzkr.obgg@gmail.com"
                variant="subtitle2"
              />
            </Grid>
            <Grid item xs={12}>
              <Title
                title="Contraseña: *******"
                variant="subtitle2"
              />
            </Grid>
          </Grid>
          <Grid
            item
            xl={5}
            container
            justify="flex-end"
            alignItems="center"
            spacing={1}
          >
            <Title
              title="Actualizar datos"
              variant="subtitle2"
            />
          </Grid>
        </>
        <Grid item xl={12}>
          <Divider/>
        </Grid>
        <>
          <Grid item xl={12}>
            <Title
                title="Mis juegos"
                variant="h4"
                color="#d66544"
            />
          </Grid>
          <>
            <Grid item xl={6}>
              <Title
                title="Sopa de letras"
                variant="subtitle2"
              />
            </Grid>
            <Grid item xl={6}>
                <Typography component="div">
                  <Grid
                    component="label"
                    container
                    justify="flex-end"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>Off</Grid>
                      <Grid item>
                        <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                      </Grid>
                    <Grid item>On</Grid>
                  </Grid>
                </Typography>
            </Grid>
          </>
          <>
            <Grid item xl={6}>
              <Title
                title="Crucigrama"
                variant="subtitle2"
              />
            </Grid>
            <Grid item xl={6}>
                <Typography component="div">
                  <Grid
                    component="label"
                    container
                    justify="flex-end"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>Off</Grid>
                      <Grid item>
                        <AntSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
                      </Grid>
                    <Grid item>On</Grid>
                  </Grid>
                </Typography>
            </Grid>
          </>
          <>
            <Grid item xl={6}>
              <Title
                title="Mapa Mental"
                variant="subtitle2"
              />
            </Grid>
            <Grid item xl={6}>
                <Typography component="div">
                  <Grid
                    component="label"
                    container
                    justify="flex-end"
                    alignItems="center"
                    spacing={1}
                  >
                    <Grid item>Off</Grid>
                      <Grid item>
                        <AntSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />
                      </Grid>
                    <Grid item>On</Grid>
                  </Grid>
                </Typography>
            </Grid>
          </>
        </>
        <Grid item xl={12}></Grid>
      </Grid>
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
