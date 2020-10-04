import React from 'react'
import Sidebar from './sidebar/sidebar'
import { Simple } from './Simple'

interface IProps { children: any }

export default function Layout({ children }: IProps) {
  return needSidebar(window.location.href)
    ? <Sidebar>{children}</Sidebar>
    : <Simple>{children}</Simple>
}

const needSidebar = (url: string) => {
  if(url.includes("about")){
    return true;
  }
  return false;
}
