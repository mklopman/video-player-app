import React, { Component } from 'react';

// define new class called SearchBar, give it access to all functionality that React.Component has
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}


	render() {   	
		return (		
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
		);
	}

	onInputChange(term){
		this.setState({term: term }); //abbreviated es6 syntax, sets state of component
		this.props.onSearchTermChange(term); // then it fires off callback function onSearchTermChange
	}
}

export default SearchBar;