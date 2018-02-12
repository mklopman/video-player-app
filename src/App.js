import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search'; // basically a function
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyAX9q7CV9RYC5hWlMgpCwouODiNODsh19o';

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('movie trailers');
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (data) => {
          // console.log(data)
            this.setState({ 
              videos: data,
              selectedVideo: data[0]
            });
        });
    }

  render() {
    // imported lodash, then created a function, passed it to debounce in es6, which takes the function and returns a new function that can only be called every 3 seconds
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300); // because this is the only way for searh bar to kick off a new search, it can only do so every 3 seconds
    return (
      <div className="App">
        <h1 className="app-header">QUICK VID</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} // passing a FUNCTION that updates selectedVideo state to VideoList
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

export default App;
