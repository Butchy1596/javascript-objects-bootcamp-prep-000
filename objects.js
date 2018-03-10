var playlist =
  {
    artistName:"Madonna",
    songTitle:"like a virgin",
  }


function updatePlaylist(playlist, artistName, songTitle){
    playlist([artistName] = songTitle);

   return playlist
}
