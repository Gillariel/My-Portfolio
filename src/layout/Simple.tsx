import { Typography } from '@material-ui/core'
import React from 'react'

interface IProps { children: any }

export const Simple = ({ children }: IProps) => <div>
  <Typography>Gillariel</Typography>
  {children}
</div>
