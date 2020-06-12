import React from 'react';
import './VideoItem.css';

const VideoItem=({video,onSelectVideo})=>{
    return(
        <div onClick={()=>onSelectVideo(video)} class=" video-item item">
        <img  class="ui image" src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <div class="content">
        <div class="header">{video.snippet.title}</div>
        </div>
        </div>
    );
};

export default VideoItem;