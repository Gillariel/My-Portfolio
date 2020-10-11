import React from 'react'
import Sidebar from './sidebar/sidebar'
import { Simple } from './Simple'
import "../styles/css.css"
import '@brainhubeu/react-carousel/lib/style.css';

interface IProps { children: any }

export default function Layout({ children }: IProps) {
  return needSidebar(window.location.pathname)
    ? <Sidebar>{children}</Sidebar>
    : <Simple>{children}</Simple>
}

const needSidebar = (url: string) => {
  /*if(url === "/" || url === ""){
    return false;
  }*/
  return true;
}
