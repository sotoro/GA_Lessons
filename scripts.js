$(function(){
	var includes = $('[data-include]');
	jQuery.each(includes, function(){
		var file = 'https://sotoro.github.io/GA_Lessons/' + $(this).data('include') + '.html';
		$(this).load(file);
	});
});
