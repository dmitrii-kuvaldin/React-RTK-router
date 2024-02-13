import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { deleteProduct, loadProducts } from './productAction'
import MyButton from '../../components/myButton/MyButton'
// import cn from 'classnames'
// import styles from './Products.module.css'

const Products: FC = () => {
  // готовим хук useDispatch()
  const dispatch = useAppDispatch()

  const { products, error, isLoading } = useAppSelector(state => state.products)

  useEffect(() => {
    // для асинхронных действий
    // передаем в dispatch action из asyncThunk()
    // и не забываем вызвать его
    dispatch(loadProducts())
  }, [])

  const updateState = () => {
    dispatch(loadProducts())
  }


  return (
    <div>
      <h1>Products</h1>
      {/* <MyButton text='обновить стейт' onClick={updateState} /> */}
      {/* {(isLoading) ? <h1>Еще загрузка</h1> : <h1>Уже нет</h1>} */}
      {isLoading && <h4>Loading....</h4>}
      {error && <h4 style={{ color: 'red' }}>Error {error}</h4>}
      <div>
        {products.map(el => (
          <div key={el.id}>
            <span key={el.id}>{el.title}</span>
            <button onClick={() => dispatch(deleteProduct(el.id))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
