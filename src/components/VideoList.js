import React, {Component} from 'react';
import {connect} from 'react-redux'

import {List, Image, Dimmer, Loader, Button} from 'semantic-ui-react'

import {playVideo} from '../store/actions/playVideo'
import {getNext, getPrev} from '../store/actions/searchVideo'

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

               { this.props.videos.length > 0 && (
               <div>
                <Button className="ui icon left labeled button" color='youtube' 
                        disabled={this.props.prevPage === undefined}
                        onClick={() => this.props.getPrev(this.props.prevPage)}>
                        <i aria-hidden="true" className="left arrow icon"></i>
                        Previous
                    </Button>
                    <Button className="ui icon right labeled button" color='youtube' 
                            disabled={this.props.nextPage === undefined}
                            onClick={() => this.props.getNext(this.props.nextPage)}
                            >
                        <i aria-hidden="true" className="right arrow icon"></i>
                        Next
                    </Button>
                </div>
                )
                }
            </div>            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playVideo: (video) => dispatch(playVideo(video)),
        getNext: (page) => dispatch(getNext(page)),
        getPrev: (page) => dispatch(getPrev(page))
    }
}

const mapStateToProps = (state) => {
    return{
        videos: state.search.videos,
        loading: state.search.loading,
        error: state.search.error,
        prevPage:state.search.prevPage,
        nextPage:state.search.nextPage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);