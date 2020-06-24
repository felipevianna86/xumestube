import React, {Component} from 'react';
import {connect} from 'react-redux'

import {List, Image, Dimmer, Loader} from 'semantic-ui-react'

import {playVideo} from '../store/actions/playVideo'

class VideoList extends Component{

    renderVideo(video){
        return(
            <List animated verticalAlign='middle' key={video.etag}>
                <List.Item onClick={() => this.props.playVideo(video)}>
                    <Image src={video.snippet.thumbnails.default.url}>

                    </Image>
                    <List.Content>
                        <List.Header>
                            {video.snippet.title}
                        </List.Header>
                    </List.Content>
                </List.Item>
            </List>
        )
    }    

    render(){
        return(
            <div className="video-list">
                { this.props.loading && (
                    <Dimmer active inverted>
                        <Loader size='medium'>Loading...</Loader>
                    </Dimmer>)
                }

                {this.props.videos.map(video => this.renderVideo(video))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playVideo: (video) => dispatch(playVideo(video))
    }
}

const mapStateToProps = (state) => {
    return{
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);