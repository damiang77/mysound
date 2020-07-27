import React, { Component, createContext } from "react";

export const PlayerContext = createContext();

class PlayerContextProvider extends Component {
    state = {
      isOpen: false,
      audioSource: 'https://api.gar.ovh/uploads/fs_13b435f0da.mpga',
    };
  
    togglePlayer = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };
  
    render() {
      return (
        <PlayerContext.Provider
          value={{ ...this.state, togglePlayer: this.togglePlayer }}>
          {this.props.children} 
        </PlayerContext.Provider>
      );
    }
  }
  
  export default PlayerContextProvider;