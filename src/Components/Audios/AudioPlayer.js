import React from 'react'
import yadayada from "../Audios/yadayada.mp3"
import "./AudioPlayer.css"

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio className='audiodiv' ref="audio_tag" src={yadayada} loop controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;