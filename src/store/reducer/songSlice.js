import { createSlice } from "@reduxjs/toolkit"

const songDataSlice = createSlice({
    name: "songData",
    initialState: {
        song: null,
        songs: [],
        songList: null,
        songLists: []
    },
    reducers: {
        setSong(state, action) {
            state.song = action.payload || ''
        },
        setSongs(state, action) {
            state.songs = action.payload || []
        },
        setSongList(state, action) {
            state.songList = action.payload || ''
        },
        setSongLists(state, action) {
            state.songLists = action.payload || []
        }
    }
})

export const { setSong, setSongList, setSongLists, setSongs } = songDataSlice.actions
export const { reducer: songDataReducer } = songDataSlice