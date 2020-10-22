import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Login from '../../Views/Dialog/Login';
import Register from '../../Views/Dialog/Register'; 

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

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const handleOpen = (typeModal) => {
    switch (typeModal) {
        case 'register':
            setOpenRegister(true);
            setOpen(false);
            break;
        default:
            setOpen(true);
            setOpenRegister(false);
            break;
    }
  };

  const handleClose = (typeModal) => {
    switch (typeModal) {
        case 'register':
            setOpenRegister(false);
            break;
        default:
            setOpen(false);
            break;
    }
  };

  return (
    <>
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.profile}
                onClick={() => handleOpen('login')}
            >
                <AccountCircle />
            </IconButton>
        </div>
        <Modal
            open={open || openRegister}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {
                openRegister 
                    ? <Login handleOpen={handleOpen} handleClose={handleClose} /> 
                    : <Login handleOpen={handleOpen} handleClose={handleClose} />
            }
        </Modal>
    </>
  );
}