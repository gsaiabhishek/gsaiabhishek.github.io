var id_file_map = {
	"nav_news": "./news.html"
}

$(document).ready(function () {
			$('.nav_link').click(function(){
				var id = $(el).data('id')
				$('#content_area').load(location_file_map["loc_"+id]);
			});
		});

// $(document).ready(function () {
// 			$('#navigation_link_1').click(function(){
// 				$('#content_area').load('location_1.html');
// 			});
// 		});	

// $(document).ready(function () {
// 			$('#navigation_link_1').click(function(){
// 				$('#content_area').load('location_1.html');
// 			});
// 		});

// $(document).ready(function () {
// 			$('#navigation_link_1').click(function(){
// 				$('#content_area').load('location_1.html');
// 			});
// 		});

// $(document).ready(function () {
// 			$('#navigation_link_1').click(function(){
// 				$('#content_area').load('location_1.html');
// 			});
// 		});

// $(document).ready(function () {
// 			$('#navigation_link_1').click(function(){
// 				$('#content_area').load('location_1.html');
// 			});
// 		});