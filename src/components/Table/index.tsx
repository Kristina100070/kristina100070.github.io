import React from 'react'
import { Header } from '../UI/Header'
import { Line } from '../UI/Line'
import Styles from './styles.module.css'

export const Table = ({ title, nameCheckAll, checkAll, select, data, add, button, company, head1, head2, head3 }) => {
  return (
   <div className={Styles.container}>
    <div className={Styles.first}>
        <h3>{title}</h3>
        <table border={1} cellPadding={0} cellSpacing={0} width="100%">
            <th colSpan={company ? 5 : 6}>
                <input type='checkbox' name={nameCheckAll} onClick={checkAll} checked={select.length === data.length} />
            </th>
            <Header head1={head1} head2={head2} head3={head3} company={company} />
            {data.map((item, i) => (
                <Line item={item} i={i + 1} company={company} />   
            ))}   
        </table>
        <button onClick={add}>{button}</button>
    </div>
   </div>
  )
}