import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './styles.module.css'

export const Comment = ({item}) => {

  return (
   <div className={Styles.container}>
    <h4>{item.name}</h4>
    <p>{item.body}</p>
    <Link to='#' onClick={(e) => {
                window.location.href = `mailto:${item.email}`
                e.preventDefault();
                }}
    >
        {item.email}
    </Link>

   </div>
  )
}


