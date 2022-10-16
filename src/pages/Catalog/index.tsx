import React from 'react';
import Styles from './styles.module.css';
import { catalogList } from '../../mock-data'
import { Wrapper } from '../../components/Wrapper';
import { Item } from './components/Item';


export const Catalog = () => {

  return (
        <Wrapper> 
            <div className={Styles.container}>
              {catalogList.map((item, id) => (
              <Item key={id} item={item} />
              ))}
            </div>
        </Wrapper>
  )
}
