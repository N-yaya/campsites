import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { PROMOTIONS } from '../../app/shared/PROMOTIONS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchPromotions = createAsyncThunk(
    'promotions/fetchPromotions',
    async () =>{
        const response = await fetch(baseUrl + 'promotions');
        if(!response.ok){
            return Promise.reject('unable to fetch, Status:' + response.status);
        }
        const data = response.json();
        return data;
    }
)
const initialState = {
    promotionsArray:[],
    isloading: true,
    errMsg:''
};

const promotionsSlice = createSlice({
    name: 'promotions',
    initialState,
    reducer:{},
    extraReducers:{
        [fetchPromotions.pending]:(state) =>{
            state.isloading= true;
        },
        [fetchPromotions.fulfilled]: (state, action) => {
            state.isloading= false;
            state.errMsg= '';
            state.promotionsArray= mapImageURL(action.payload);
        },
        [fetchPromotions.rejected]: (state, action) =>{
          state.isloading= false;
          state.errMsg= action.arror? action.arror.message: 'Fetch failed'
        }
    }
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
    return state.promotions.promotionsArray.find((promotion) => promotion.featured);
};