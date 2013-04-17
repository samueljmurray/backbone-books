window.Book = Backbone.Model.extend({

	urlRoot: '/booksdbcol',

	idAttribute: '_id',

	initialize: function() {
		//Validation
	},

	defaults: {
		_id			: null,
		title		: "",
		author		: "",
		location	: ""
	}

});

window.BookCollection = Backbone.Collection.extend({

	model: Book,

	url: "/booksdbcol"

});