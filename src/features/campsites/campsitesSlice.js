import { CAMPSITES } from "../../app/shared/CAMPSITES"
import {createSlice} from '@reduxjs/toolkit';

const initialState={
    campsitesArray: CAMPSITES
   
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;


export const selectAllCampsites=() =>{
    return CAMPSITES;
}
export const selectRandomCampsite = () =>{
    const index=Math.floor(Math.random()*CAMPSITES.length);
    return CAMPSITES[index];
}
export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite)=> campsite.featured);
}

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

