import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
   company: [
      {
          name: 'Компания 1',
          count: 5,
          address: 'Адрес компании 1',
          id: 1
      },
      {
          name: 'Компания 2',
          count: 5,
          address: 'Адрес компании 2',
          id: 2
      },
      {
          name: 'Компания 3',
          count: 5,
          address: 'Адрес компании 3',
          id: 3
      }
  ],
  staff: [
      {
          first_name: 'Иван',
          last_name:  'Иванов',
          job: 'manager',
          id: 4,
          company_id: 1
      },
      {
          first_name: 'Петя',
          last_name:  'Петров',
          job: 'manager',
          id: 5,
          company_id: 1
      },
      {
          first_name: 'Вася',
          last_name:  'Васильев',
          job: 'manager',
          id: 6,
          company_id: 2
      },
      {
        first_name: 'Тамара ',
        last_name:  'Иванова',
        job: 'manager',
        id: 7,
        company_id: 2
    }
  ],
  staffVisible: [],
  selectCompany: [],
  selectStaff: []
  },
  reducers: {
    pushToStuff: (state, action) => {
      const a = state.staff.filter((item) => item.company_id === action.payload)
      state.staffVisible = [...state.staffVisible, ...a]
      state.selectCompany = [...state.selectCompany, action.payload]
      return state 
    },
    popOutStuff: (state, action) => {
      const a = state.staffVisible.filter((item) => item.company_id !== action.payload)
      state.staffVisible = [...a]
      const del = state.selectCompany.filter((item) => item !== action.payload)
      state.selectCompany = [...del]
      return state 
    },
    setSelectAllCompany: (state, action) => {
      const reset = () => {
        state.selectCompany = [] 
        state.staffVisible = [] 
      }
      const addAllStaff = () => {
        state.selectCompany = [...state.company.map((item) => item.id)]
        state.staffVisible = [...state.staff]
      }
      !action.payload ? reset() : addAllStaff()
      return state 
    },
    setSelectStaff: (state, action) => {
      action.payload.checked ? 
      state.selectStaff = [...state.selectStaff, action.payload.id] :
      state.selectStaff = [...state.selectStaff.filter((item) => item !== action.payload.id)]
      return state 
    },
    setSelectAllStaff: (state, action) => {
      !action.payload ? 
      state.selectStaff = [] : 
      state.selectStaff = [...state.staffVisible.map((item) => item.id)]
      return state 
    },
    setChangeData: (state, action) => {
      const {id, value, key, company } = action.payload
      const arr = company ? state.company : state.staffVisible
      const a = arr.map((item) => {
        if (item.id === id) {
          item[key] = value
        }
        return item
      })
      company ? state.company = [...a] : state.staffVisible = [...a]
      return state 
    },
    setNewDataCompany: (state, action) => {
      state.company = [...state.company, action.payload]
      return state 
    },
    setNewDataStaff: (state, action) => {
      state.staffVisible = [...state.staffVisible, action.payload]
      return state 
    },
    deleteItemCompany: (state, action) => {
      state.company = [...state.company.filter((item) => item.id !== action.payload)]
      return state 
    },
    deleteItemStaff: (state, action) => {
      state.staffVisible = [...state.staffVisible.filter((item) => item.id !== action.payload)]
      return state 
    },
  }
})

export const {
  pushToStuff, 
  popOutStuff, 
  setSelectAllCompany, 
  setChangeData, 
  setSelectStaff, 
  setSelectAllStaff, 
  setNewDataCompany, 
  setNewDataStaff,
  deleteItemCompany,
  deleteItemStaff } = dataSlice.actions

export default dataSlice.reducer