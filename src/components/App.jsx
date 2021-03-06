import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: exampleVideoData[0],
      list: exampleVideoData
    };
  }

  clickHandler(video) {
    this.setState({info: video.video});
    console.log(video);
  }

  render() {
    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.info} />
          </div>
          <div className="col-md-5">
<<<<<<< HEAD
            <VideoList videos={this.state.list}/>
=======
            <VideoList videos = {this.state.list} clickFx = {this.clickHandler.bind(this)}/>
>>>>>>> 66d4f22f088259a024eab1698da3a61df5c96f6c
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
