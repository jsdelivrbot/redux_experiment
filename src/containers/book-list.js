import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">
					{book.title}
				</li>
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

function mapStateToProps(state) {
	// whatewver is returnes will show up as props
	// inside of Booklist
	// every time the list of books change the DOM is
	// re-rendered
	// the component serve as a props the list to
	// the book-list class
	return {
		books: state.books
	};
}


// connect function imported on top from react-redux library
export default connect(mapStateToProps)(BookList);