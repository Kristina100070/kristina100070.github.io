import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";


export const getAll = createAsyncThunk('data/getAll', async function (param) {
  
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
        _limit: param.limit,
        _page: param.page
    }
})
return response.data;
})

export const getById = createAsyncThunk('data/getById', async function (id) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  return response.data;
})
export const getCommentsByPostId = createAsyncThunk('data/getCommentsByPostId', async function (id) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return response.data;
}) 
export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    status: '',
    posts: [],
    comments: []
  },
  reducers: {
    sortPosts: (state, action) => {
      if (action.payload === 'down') {
        state.posts = state.posts.sort((prev, next) => next.id - prev.id)
      } else if (action.payload === 'up') {
        state.posts = state.posts.sort((prev, next) => prev.id - next.id)
      }
      return state 
    },
    clearPosts: (state) => {
      state.posts = []
      return state 
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload)
      return state 
    },
    createdNewPost: (state, action) => {
      state.posts = [...state.posts, action.payload]
      return state 
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload]
      state.status = 'success'
    })
    builder.addCase(getAll.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getAll.rejected, (state) => {
      state.status = 'error'
    })
    builder.addCase(getById.fulfilled, (state, action) => {  
      state.posts = [action.payload]
      state.status = 'success'
    })
    builder.addCase(getById.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getById.rejected, (state) => {
      state.status = 'error'
    })
    builder.addCase(getCommentsByPostId.fulfilled, (state, action) => {
      state.comments = action.payload
      state.status = 'success'
    })
    builder.addCase(getCommentsByPostId.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getCommentsByPostId.rejected, (state) => {
      state.status = 'error'
    })
  },
})

export const { sortPosts, clearPosts, deletePost, createdNewPost } = dataSlice.actions

export default dataSlice.reducer