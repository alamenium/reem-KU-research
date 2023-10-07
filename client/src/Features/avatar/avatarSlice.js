import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    face: "../images/avatar/default/default.png",
    hair: "none",
    eyes: "none",
    clothes: "none",
    skin: "none",
    glasses: "none",
    mouth: "none",
    nose: "none",
}

const avatarSlice = createSlice({
    name: 'avatar',
    initialState,
    reducers: {
        setFace(state, action) {
                    state.face = action.payload;
        },
        setHair(state, action) {
                    state.hair = action.payload;
        },
        setEyes(state, action) {
                    state.eyes = action.payload;
        }
        ,
        setClothes(state, action) {
                    state.clothes = action.payload;
        },
        setSkin(state, action) {
                    state.skin = action.payload;
        },
        setGlasses(state, action) {
                    state.glasses = action.payload;
        },
        setMouth(state, action) {
                    state.mouth = action.payload;
        },
        setNose(state, action) {
                    state.nose = action.payload;
        },
    }
});

export const { setFace, setHair, setEyes, setClothes, setSkin, setGlasses, setMouth, setNose } = avatarSlice.actions;
export default avatarSlice.reducer;