import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import MuiButton from '@material-ui/core/Button/Button';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';
import withStyles from '@material-ui/core/styles/withStyles';

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: blue[500],
    backgroundColor: "white",
    '&:hover': {
      color: "white",
      backgroundColor: blue[500],
    },
    borderRadius: "0px",
    webkitTransition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out",
    transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out"
  },
}))(MuiButton);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

interface IButtonProps {
  text?: string;
  iconSettings?: {
    icon: any;
    position: "start" | "end"
  }
  link?: string
  onClick?: () => void;
}

const Button = ({
  text,
  iconSettings,
  link,
  onClick
}: IButtonProps) => {
  const classes = useStyles()
  return (
      <ColorButton 
        variant="outlined" 
        color="primary" 
        startIcon={iconSettings && iconSettings.position === "start" ? iconSettings.icon : null}
        endIcon={iconSettings && iconSettings.position === "end" ? iconSettings.icon : null}
        className={classes.margin} 
        href="#outlined-buttons"
        onClick={onClick}
      >
        {text}
      </ColorButton>
  )
}

export default Button
