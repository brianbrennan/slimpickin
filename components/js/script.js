S.ready(function(){
	s('p').hover(function(){
		s('p').css('background-color', 'black');
	}, function(){
		s('p').css('background-color', 'white');
	});
});