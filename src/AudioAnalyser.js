import React, { Component } from "react";

class AudioAnalyser extends Component {
  
  componentDidMount() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);
    this.source.connect(this.analyser)
  }
  
}

export default AudioAnalyser;
