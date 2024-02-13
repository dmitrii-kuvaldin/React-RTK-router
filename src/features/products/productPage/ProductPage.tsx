import { FC, useEffect, useState } from 'react'
// import cn from 'classnames'
import styles from './ProductPage.module.css'

import { Link } from 'react-router-dom'
import MyButton from '../../../components/myButton/MyButton'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { loadProducts } from '../productAction'

const ProductPage: FC = () => {
  const dispatch = useAppDispatch()

  const { products, error, isLoading } = useAppSelector(state => state.products)

  useEffect(() => {
    dispatch(loadProducts())
  }, [])

  return (
    <div>
      <ul className={styles.productList}>
        {products.map(el => (
          <li key={el.id} className={styles.productCard}>
            <span className={styles.title}>{el.title}</span>
            <div className={styles.imgWrapper}>
              <img src={el.image} alt="" />
            </div>
            <Link to={String(el.id)}><MyButton text='To product' /></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductPage
