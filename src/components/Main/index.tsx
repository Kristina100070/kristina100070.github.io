import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNewDataCompany, setNewDataStaff, setSelectAllCompany, setSelectAllStaff } from '../../app/dataSlice'
import { Table } from '../Table'
import Styles from './styles.module.css'

export const Main = () => {
const company = useSelector((state) => state.data.company)
const staffVisible = useSelector((state) => state.data.staffVisible)
const selectCompany = useSelector((state) => state.data.selectCompany)
const selectStaff = useSelector((state) => state.data.selectStaff)

const dispatch = useDispatch()
const checkAll = (e) => {
    if (e.target.name === 'company') {
        dispatch(setSelectAllCompany(e.target.checked))
    } else 
    if (e.target.name === 'staff') {
        dispatch(setSelectAllStaff(e.target.checked))
    } 
}
const addCompany = () => dispatch(setNewDataCompany({id: (new Date()).getTime()}))
const addStaff = () => dispatch(setNewDataStaff({id: (new Date()).getTime()}))

  return (
   <div className={Styles.container}>
        <Table 
            title='Список компаний' 
            nameCheckAll='company' 
            checkAll={checkAll} 
            select={selectCompany} 
            data={company}
            add={addCompany}
            button='добавить компанию'
            head1='Название компании' 
            head2='Кол-во сотрудников'
            head3='Адрес'
            company
        />
        
        {staffVisible.length > 0 &&
            <Table 
                title='Список сотрудников'
                nameCheckAll='staff'
                checkAll={checkAll}
                select={selectStaff}
                data={staffVisible}
                add={addStaff}
                button='добавить сотрудника' 
                head1='Фамилия' 
                head2='Имя'
                head3='Должность'
                company={false} 
            />}
            
   </div>
  )
}


