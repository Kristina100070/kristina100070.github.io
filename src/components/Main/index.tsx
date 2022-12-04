import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearPosts, createdNewPost, getAll, getById, sortPosts } from '../../app/dataSlice'
import { Button } from '../ui/Button'
import { Post } from '../Post'
import Styles from './styles.module.css'

export const Main = () => {
const posts = useSelector((state) => state.data.posts)
const status = useSelector((state) => state.data.status)
const dispatch = useDispatch()
const [value, setValue] = useState('')
const [activeLoadCount, setActiveLoadCount] = useState(10)
const [pageCount, setPageCount] = useState(1)
const [texrSerchResult, setTextSerchResult] = useState('')
const [name, setName] = useState({
  title: '', 
  body: '',
})
const param = {limit: activeLoadCount, page: pageCount}

const searchById = (e) => {
    setValue(e.target.value)
    const postId = parseInt(e.target.value)
    if (postId && postId <= 100) {
      dispatch(getById(parseInt(postId)))
      setTextSerchResult(`id найденного поста ${postId}`)
    }
      else if (postId > 100) {
        setTextSerchResult('Статьи доступны от 1 до 100')
      }
      else if (!postId) {
        dispatch(clearPosts())
        setTextSerchResult('')
        dispatch(getAll(param))
    }
}

const sortHandler = (e) => {
  dispatch(sortPosts(e.target.value))
} 

const loadPostsHandler = (e) => {
  const param = {limit: Number(e.target.value), page: 1}
  console.log(Number(e.target.value));
  dispatch(clearPosts())
  dispatch(getAll(param))
  setActiveLoadCount(Number(e.target.value))
}

const showMore = () => {
  setPageCount((prev => prev + 1))
  const param = {limit:activeLoadCount, page: pageCount + 1}
  dispatch(getAll(param))
}

const namedPost = (e) => {
  setName({ ...name, [e.target.name]: e.target.value})
}

const createdPost = () => {
  const newPost = {
    title: name.title, 
    body: name.body,
    id: (new Date()).getTime()
  }
  dispatch(createdNewPost(newPost))
 }

useEffect(() => {
  dispatch(getAll(param))
}, [])

  return (
    <> <div className={Styles.container}>
    <div className={Styles.wrap}> 
      <h2>Создание поста</h2>
      <input className={Styles.input} name='title' onChange={namedPost} />
      <input className={Styles.input} name='body' onChange={namedPost} />
      <Button value='Создать пост' onClick={createdPost} />
    </div>
   
    <div className={Styles.wrap}>
      <input className={Styles.input} type='number' onChange={searchById} value={value} placeholder='Поиск' />
      <p>{texrSerchResult}</p>
      <select name='sort' id='sort-select'>
        <option value=''>Сортировка</option>
        <option value='up' onClick={sortHandler}>По возрастанию</option>
        <option value='down' onClick={sortHandler}>По убыванию</option>
      </select>
      <select name='loadPosts' id='loadPosts-select'>
        <option value='10' onClick={loadPostsHandler}>10</option>
        <option value='20' onClick={loadPostsHandler}>20</option>
        <option value='50' onClick={loadPostsHandler}>50</option>
      </select>
    </div>
    </div>
    <h1>Посты про JS</h1>
    {status === 'success' && posts.map((post, i) => (
        <Post key={i} post={post} mainPage />
     ))}
    {status === 'loading' && <p>Загрузка...</p>} 
    {status === 'error' && <p>Что-то пошло не так...</p>} 
    {posts.length < 100 && texrSerchResult === '' && 
        <Button value='показать еще' onClick={showMore} />
    }    
   </>
  
  )
}

export default React.memo(Main);
