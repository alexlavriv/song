// Action creator, should return 
// a plain JS object    
export const selectSong = (song) =>{
 return{
    type:'SONG_SELECTED',
    payload: song
 };
};

