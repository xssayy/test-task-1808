import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66c0b4c6ba6f27ca9a5764f2.mockapi.io";

// GET @ /adverts
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    // Обновление для принятия параметров пагинации
    try {
      const res = await axios.get("/adverts", {
        params: {
          page,
          limit,
        },
      });
      // Получение общего количества элементов из заголовка
      const totalCount = res.headers["x-total-count"];

      // Возвращаем данные и общее количество элементов
      return {
        data: res.data,
        totalCount: totalCount,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
