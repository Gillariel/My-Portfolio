import { blue } from '@material-ui/core/colors'
import React from 'react'

interface IColoredProps { children: any }
const Colored = ({ children }: IColoredProps) =>  <span style={{ color: blue[500] }}> {children} </span>

export default Colored
