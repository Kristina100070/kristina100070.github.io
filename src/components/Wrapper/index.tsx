import React from 'react';
import Styles from './styles.module.css';
import { SideBar } from '../SideBar';

export const Wrapper = ({children}) => {

  return (
    <div className={Styles.container}>
        <div className={Styles.content}>{children}</div> 
        <div className={Styles.sidebar}>
          <SideBar />
        </div>
    </div>
  )
}
