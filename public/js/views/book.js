window.BookView = Backbone.View.extend({

	initialize: function() {

		this.render();

	},

	render: function() {

		var books = this.model.models;
		var len = books.length;
		console.log(books);

		$(this.el).html('<ul class="bookslist"/>');

		for (var i = 0; i < len; i++) {
			$('.bookslist', this.el).append(new BookViewItemView({model: books[i]}).render().el);
		}

		$(this.el).append('End of Page ... Insert Paginator!');

		return this;

	}

});

window.BookViewItemView = Backbone.View.extend({

	tagName: "li",

	initialize: function() {
		this.model.bind("change", this.render, this); //!!! IMPORTANT! Re-renders the item if it changes on the server
		this.model.bind("destroy", this.close, this);//!!! IMPORTANT! Removes the item if it has been deleted from the server
	},

	render: function () {
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}

});