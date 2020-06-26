import React from 'react';
import {connect} from 'react-redux';
import {Advertisement, Embed} from 'semantic-ui-react';

const VideoPlayer = props =>{
    return(
        <div className="video-player">
            {
                !props.video && (
                <Advertisement
                    style={{'height': '433px'}} unit='top-banner' test='Choose a video'
                />)
            }
            {
                props.video && props.video.id && (
                    <div>
                        <Embed id={props.video.id.videoId} source='youtube' />
                        <p className='video-title'>{props.video.snippet.title}</p>
                    </div>
                )
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        video: state.playVideo.video
    }
}

export default connect(mapStateToProps, null)(VideoPlayer);