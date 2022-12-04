import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getById, getCommentsByPostId } from '../../app/dataSlice'
import { Post } from '../Post'
import { Comment } from '../Comment'
import Styles from './styles.module.css'
import { Button } from '../ui/Button'

export const PostPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const posts = useSelector((state) => state.data.posts)
    const comments = useSelector((state) => state.data.comments)
    const status = useSelector((state) => state.data.status)
    type Params = {
        id: string
    }
    const { id } = useParams<Params>()
  useEffect(() => {
        const a = dispatch(getById((id)))
        const b = dispatch(getCommentsByPostId(id))
        Promise.all([a, b])
  }, [])
    
  return (
    <div className={Styles.container}>
      <Button value='На главную' onClick={() => navigate(-1)} />
      {status === 'success' && posts.map((post, i) => (
          <Post key={i} post={post} />
      ))}
      <h4>Комментарии</h4>
      {status === 'success' && comments.map((item, i) => (
          <Comment item={item} key={i} />
      ))}
      {status === 'loading' && <p>Загрузка...</p>} 
      {status === 'error' && <p>Что-то пошло не так...</p>}  
   </div>
  )
}
