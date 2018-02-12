import React from 'react';

const VideoListItem = (props) => {
	const video = props.video; // inside of videolist, we passed in the video as a prop and I'm accessing it here
	const onVideoSelect = props.onVideoSelect;
	console.log(video);
	const imageUrl = video.snippet.thumbnails.default.url; // this just comes from the info we get back from the console log on video
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item col-md-3">
			<div className="video-list media">
				<div className="media-left">
					<img alt="" className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;