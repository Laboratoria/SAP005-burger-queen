import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../src/images/logo.png';

export const useStyles = makeStyles((theme) => ({
  displayPanding: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  displayHPanding: {
    backgroundColor: '#64b5f6',
    padding: '10px',
    borderRadius: '10px',
  },
  buttonCancel: {
    margin: '10px',
    backgroundColor: '#d32f2f',
    color: 'white',
  }, 
  buttonOk: {
    color: 'white',
    backgroundColor: '#29772b',
  },
  displayMenu: {
    display: 'flex',
    flexFlow: 'wrap',
  }, 
  displayOrder: {
    maxHeight : '80vh',
    marginTop: '2vh',
    width: '40vw',
    backgroundColor : '#64b5f6',
    borderRadius: '10px', 
    minWidth: '250px'
  },
  displayMenuButton: {
    marginTop: '1vh',
    display: 'flex',
    flexWrap: 'wrap',
    width: '50vw',
  },
  displayItensButton: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50vw'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paperTable: {
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 0,
    textAlign: 'center', 
  },
  submitHall: {
    fontSize: '1rem',
    height: '20vh',
    width: '40vw',
    margin: theme.spacing(4, 2, 2),
    backgroundColor: theme.palette.warning.dark,
    color: '#fafafa',
    
  },
  submitMenuType: {
    height: '10vh',
    width: '14.5vw',
    minWidth: '100px',
    borderRadius: '10px',
    margin: theme.spacing(1, 1, 1),
    backgroundColor: theme.palette.warning.dark,
    color: '#fafafa',
    marginLeft:'15px'
  },
  inputTableName: {
    fontSize: '1rem',
    height: '5vh',
    width: '40vw',
    margin: theme.spacing(3, 2, 2),
    backgroundColor: theme.palette.text.primary,
    color: 'white',
    position:'absolut'
  },
  inputAlert: {
    fontSize: '1rem',
    backgroundColor: theme.palette.error.dark,
    color: '#C9CDCB',
    position:'absolut'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa'
  },
  submitMenu: {
    display:'inline',
    margin: theme.spacing(2, 0, 0),
    backgroundColor: theme.palette.text.primary,
    color: '#fafafa',
  },
  submitOrderItems: {
    background: 'linear-gradient(45deg, #78909c 30%, #455a64 90%)',
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 500,
    width:370,
    paddingTop: '20px',
    marginTop:'20px',
    paddingRight:'5px',
    marginLeft:'420px',
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize:'15px'
  },
  submitMenuItems: {
    minWidth: '90px',
    minHeight: '100px',
    background: '#3e7088',
    borderRadius: 8,
    color: 'white',
    height: '9vh',
    width:'14.5vw',
    paddingTop: '10px',
    marginTop:'1vh',
    paddingRight:'5px',
    marginLeft:'1vw',
    display: 'flex',
    justifyContent: 'center',
  },
  submitMenuItemsPending: {
    background: '#f57c00',
    borderRadius: 10,
    border: 0,
    color: 'white',
    width:'25vw',
    paddingTop: '10px',
    marginTop:'10px',
    paddingBottom:'10px',
    marginLeft:'16px',
    marginRight:'16px',
    justifyContent: 'space-betspace-evelin'
  },
  submitMenuCardsModal: {
    background: '#3e7088',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: '',
    width:390,
    padding: '20px',
    textAlign: 'center',
    fontFamily:"Monospace",
  },
  logo: {
    maxWidth: 200,
  },
}));

export function Logo() {
  const classes = useStyles();
  return (
    <img className={classes.logo} src={logo} alt='logo'/>
  )
};