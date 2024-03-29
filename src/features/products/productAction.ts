import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  // чтобы иметь доступ ко второму параметру, не используя первый
  // используем запись с нижним подчеркиванием
  async (_, thunkAPI) => {
    //оборачиваем запрос к api в try/catch
    try {
      // в axios (аналог fetch) одной строкой забираем данные по продуктам
      const res = await axios.get('https://fakestoreapi.com/products')
      return res.data
    } catch (error: any) {
      // обрабатываем ошибку через thunkAPI
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id: number|undefined, thunkAPI)=> {
      try {
          const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
          return res.data
      } catch (error: any) {
          return thunkAPI.rejectWithValue(error.message)
      }
  }
)
