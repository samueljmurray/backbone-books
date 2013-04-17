var AppRouter = Backbone.Router.extend({

	routes: {
		""			: "home",
		"books"		: "books",
		"books/page/:page"		: "books",
		"books/:id"	: "booksOne"
	},

	initialize : function() {
		this.headerView = new HeaderView();
		$('.header').html(this.headerView.el);
	},

	home : function() {
		if (!this.homeView) {
			this.homeView = new HomeView();
		}
		$('#content-feed').html(this.homeView.el);
	},

	books: function(page) {
		var p = page ? parseInt(page, 10) : 1;
		var bookList = new BookCollection();
		bookList.fetch({success: function() {
			$('#content-feed').html(new BookView({
				model:bookList,
				page: p
			 }).el);
		}});
	},

	booksOne: function(id) {
		var book = new Book({_id:id});
		book.fetch({success:function() {
			$('#content-feed').html(new BookItemView({
				model:book
			}).el);
		}});
	}

});

utils.loadTemplate(['HomeView', 'HeaderView', 'BookView', 'BookViewItemView', 'BookItemView'], function() {
	router = new AppRouter();
	Backbone.history.start();
})