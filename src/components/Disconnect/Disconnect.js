import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export const Disconnect = (props) => {
  const history = useHistory();
  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return history.push('/')
    }
  }
  return (
  <Button onClick={() => handleLogout()} >
    {props.content}
    <HighlightOffIcon />
  </Button>
  )
};