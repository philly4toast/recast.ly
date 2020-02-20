import VideoListEntry from './VideoListEntry.js';
<<<<<<< HEAD
var VideoList = (props) => (
  <div className="video-list">
    <VideoListEntry video={props.videos[0]} />
    {console.log(props)}

  </div>
);
=======

var VideoList = (props) => {
  var mappedList = props.videos.map(function(currentVideo, index) {
    return <VideoListEntry video = {currentVideo} selected = {props.clickFx} vidId={currentVideo.id.videoId} />;

  }


  );

  return (
    <div className="video-list">
      {mappedList}
    </div>
  );
};
>>>>>>> 66d4f22f088259a024eab1698da3a61df5c96f6c






// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
