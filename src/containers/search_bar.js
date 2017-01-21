/**
 * Created by echosteg on 19/01/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return (
            <form  onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.state.term} onChange={event=>this.onInputChange(event)} placeholder="Get a five day forecast in your fav city"
                className="form-control"/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);