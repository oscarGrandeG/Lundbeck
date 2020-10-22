import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright(props) {
    const { classCustom } = props
  return (
    <>
        <span className={classCustom.footerTextColor}>{'© '}</span>
        <Link 
            className={classCustom.footerTextColor}
            href="#"
        >
            Lundbeck
        </Link>
        {' '}
        <span className={classCustom.footerTextColor}>{new Date().getFullYear()}</span>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.layout,
    color: "#ffffff"
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 114,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    height: 38,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2)
  },
  iconSize: {
      fontSize: 35,
      color: '#737373'
  },
  footerTextColor: {
    color: '#737373',
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    color: '#737373'
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="#" className={classes.icon}>
                    <FacebookIcon className={classes.iconSize} />
                </a>
                <a href="#" className={classes.icon}>
                    <TwitterIcon className={classes.iconSize} />
                </a>
              </Grid>
              <Grid item>
                <Copyright classCustom={classes} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Typography className={classes.footerTextColor} variant="h6" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link color="inherit" href="/premium-themes/onepirate/terms/">Terminos y Condiciones</Link>
              </li>
              <li className={classes.listItem}>
                <Link color="inherit" href="/premium-themes/onepirate/privacy/">Contacto</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}