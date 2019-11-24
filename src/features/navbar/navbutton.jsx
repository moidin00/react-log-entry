import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SimpleDialog from './'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const emails = ['username@gmail.com', 'user02@gmail.com'];


export default function SimpleDialogDemo() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [ selectedValue,setSelectedValue] = React.useState(emails[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };
    return (
      <div className={classes.root}>
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                Add Product
              </Button>
              <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
            </Typography>
          </Toolbar>
        </AppBar>
        </div>
    </div>
    )
}