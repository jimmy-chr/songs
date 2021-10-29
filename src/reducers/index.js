import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'En Vind Av Sorg', duration: '4:05' },
        { title: 'Hvis Lyset Tar Oss', duration: '8:22' },
        { title: 'Vinterriket', duration: '3:45' },
        { title: 'Kronet Til Konge', duration: '5:32' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});