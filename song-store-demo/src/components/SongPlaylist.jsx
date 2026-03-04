import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";

function SongPlaylist() {
  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    return state.sange;
  });

  const handleSongAdd = (song) => {
    dispatch(addSong(song));           //Dispatcheren vil kalde 'addSong' reduceren i Slicen 'song' med action-objektet returneret fra action creator 'addSong' som argument 
    console.log(addSong(song));        //{type: 'song/addSong', payload: 'Andreas Odberg - I morgen er der også en dag'}
  };
  const handleSongRemove = (songToBeRemoved) => {
    dispatch(removeSong(songToBeRemoved));
    console.log(removeSong(songToBeRemoved)); //{type: 'song/removeSong', payload: 'Andreas Odberg - I morgen er der også en dag'}
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
