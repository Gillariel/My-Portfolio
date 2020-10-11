import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { Link } from 'gatsby'
import React from 'react'

interface IProps {
  title: string;
  icon: any;
  to: string;
  nested?: boolean
}

export default ({ title, icon, to, nested }: IProps) => {
  return (
    <ListItem className="color-hover">
      <ListItemIcon>{icon}</ListItemIcon>
      <Link className="no-link" to={to}>
        <ListItemText primary={title} />
      </Link>
      {nested !== undefined 
        ? nested === true
          ? <ExpandLess /> 
          : <ExpandMore />
        : null
      }
    </ListItem>
  )
}
