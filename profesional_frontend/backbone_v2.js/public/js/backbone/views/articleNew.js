Puls3.Views.ArticleNewView = Backbone.View.extend({
	events:{
    "click button" : "create"
	},
	className:"",
	initialize : function($el){
    this.$el = $el;
    //this.template = _.template($("#ArticleNew_tpl").html());
	},
  create: function(){
    console.log("button fue clickeado");

    var title = this.$el.find("#title").val();
    var tag = this.$el.find("#tag").val();
    var content = this.$el.find("#content").val();
    
    console.log(title, tag, content);

    var model = new Puls3.Models.Article({
      title: title,
      tag: tag,
      content: content
    });

    var xhr = model.save();

    xhr.done(function(data){
      Backbone.history.navigate('article/'+data.id,{trigger: true});
    });
  },
	render: function(data) {
		//var self = this;
		//var locals ={};

		//this.$el.html(this.template({data:locals}));

		//return this;
	}
});
