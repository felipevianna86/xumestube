import React, {Component} from 'react'
import {Segment, Input} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {searchVideo} from '../store/actions/searchVideo'

class SearchBar extends Component {

    constructor(props){
        super(props)

        this.props.search('Flamengo 2020')
    }

    searchVideo = e => {

        if(e.keyCode === 13){
            const name = e.target.value;
            this.props.search(name);
        }
    }

    render(){
        return (
            <div className="search-bar">
                <Segment stacked>
                    <Input icon='search' size='large'
                    placeholder='Search' 
                    onKeyDown={(e) => this.searchVideo(e)}
                    ></Input>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.search.loading,
        error: state.search.error,
        videos: state.search.videos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        search: (word) => dispatch(searchVideo(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);