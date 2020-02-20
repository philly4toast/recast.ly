var VideoListEntry = (props) => (
  <div className="video-list-entry media" onClick= {()=>(props.selected(props))}>;
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt=''/>

    </div>
    <div className="media-body">
<<<<<<< HEAD
      <div className="video-list-entry-title">{props.videos[0].snippet.title}</div>
      <div className="video-list-entry-detail"></div>
=======
      <div className="video-list-entry-title">
        {props.video.snippet.title}
      </div>
      <div className="video-list-entry-detail">
        {props.video.snippet.description}
      </div>
>>>>>>> 66d4f22f088259a024eab1698da3a61df5c96f6c
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
