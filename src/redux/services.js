import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
    method: 'GET',
    url: 'https://api.chimoney.io/v0.2/info/assets',
    headers: {
      accept: 'application/json',
      'X-API-KEY': `${process.env.CHIMONEY_API_KEY}`
    }
};

export const getDatasAsync = createAsyncThunk(
    'basket/getDatasAsync',
    async () => {
        const res = await axios
            .request(options)
            .then(response => response.data);
        
        return res.data.ecommerce.filter(item => item.category === 'Gift Cards');
    }
);
