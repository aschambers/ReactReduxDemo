import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
			);
		})
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// iterate through books array and show list
function mapStateToProps(state) {
	// whatever gets returned will show up as props inside of BookList
	return {
		books: state.books
	};
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
	// whenever select book is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote booklist from a component to a container 
// It needs to know about this new dispatch method, selectbook
// Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);







