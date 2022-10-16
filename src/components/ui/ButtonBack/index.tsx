import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './styles.module.css';


export const ButtonBack = () => {
    const navigate = useNavigate();
  return (
    <button className={Styles.button} onClick={() => navigate(-1)}>Back in catalog</button>
  )
}