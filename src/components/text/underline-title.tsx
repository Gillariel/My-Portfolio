import blue from '@material-ui/core/colors/blue';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';
import MuiTypography from '@material-ui/core/Typography/Typography';
import { TypographyProps } from '@material-ui/core/Typography/Typography'
import React from 'react'

const Typography = withStyles((theme: Theme) => ({
  root: {
    color: /*blue[500]*/ "black",
    // TODO could do something kina cool here
    // '&:hover': {
    //   backgroundColor: blue[500],
    // },
    borderBottom: "2px " + blue[500] + "line"
  },
}))(MuiTypography);

interface IUnderlineTitleProps extends TypographyProps {
  text: string
}

const UnderlineTitle = ({
  variant,
  text
}: IUnderlineTitleProps) => {
  return (
    <Typography variant={variant} style={{ textAlign: "center", marginBottom: "10px" }}>
      <div className="centered-underline">
        <b>{text}</b>
      </div>
    </Typography>
  )
}

export default UnderlineTitle
