import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemCompany, deleteItemStaff, popOutStuff, pushToStuff, setChangeData, setSelectStaff } from '../../../app/dataSlice'
import Styles from './styles.module.css'



export const Line = ({ item, company, i }) => {
    const dispatch = useDispatch()
    const selectCompany = useSelector((state) => state.data.selectCompany)
    const selectStaff = useSelector((state) => state.data.selectStaff)

    const select = (e, id) => {
        company ?
            e.target.checked ? dispatch(pushToStuff(id)) : dispatch(popOutStuff(id))
            : dispatch(setSelectStaff({id, checked: e.target.checked}))
    }

    const changeHandler = (id, key, e) => {
        dispatch(setChangeData({id, key, value: e.target.value, company}))
    }
    const deleteHandler = (id) => {
        company ?
        dispatch(deleteItemCompany(id)) :
        dispatch(deleteItemStaff(id))
    }

return (
    <tr key={company ? item.id : item.id + 's'} className={(selectCompany.includes(item.id) || selectStaff.includes(item.id)) && Styles.active}>
            <td>
                <button onClick={() => deleteHandler(item.id)} className={Styles.button__delete} />
            </td>
            <td>
                <input 
                    type='checkbox' 
                    onChange={(e) => select(e, item.id)} 
                    checked={company ? selectCompany.includes(item.id) : selectStaff.includes(item.id)} />
            </td>
            {!company &&  <td>
                {i}
            </td>}
            <td>
                <input 
                    className={Styles.input}
                    value={company ? item.name : item.first_name} 
                    onChange={(e) => changeHandler(item.id, company ? 'name' : 'first_name', e)} />
                </td>
            <td>
                <input 
                    className={Styles.input}
                    value={company ? item.count : item.last_name}
                    onChange={(e) => changeHandler(item.id, 'count', e)} />
            </td>
            <td>
                <input 
                    className={Styles.input}
                    value={company ? item.address: item.job}
                    onChange={(e) => changeHandler(item.id, 'address', e)} />
            </td>
        </tr>
)
}
