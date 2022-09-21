function playlistScrollPane(){ 
	
	// scroll
		  	$('.playlist-scroll-pane').jScrollPane({
		  		showArrows: false,
		  		verticalGutter: 12,
		  		verticalDragMinHeight: 67,
		  		verticalDragMaxHeight: 67
		  	});	
			
};

$(document).ready(function(){
	////// player	
	var user_agent = navigator.userAgent.toLowerCase();
	var mobile = false;
	if ((/up.browser|up.link|mmp|symbian|smartphone|midp|wap|vodafone|o2|pocket|kindle|mobile|pda|psp|treo|blackberry|opera mini|android|iphone|ipod|ipad/.test(user_agent))) {	mobile = true;}
	//////////
	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [

		{
			title:"Feliz - Después de Viejos",
			// free:true,
			mp3:"audio/Feliz.mpg"
		},
		{
			title:"Dulce Princesa - Limbo Tecno Rock ft. Lula Bertoldi",
			mp3:"audio/Dulce Princesa-ft.Lula Bertoldi.mp3"
		},
		{
			title:"A Venado Tuerto - Angel Heavy Metal",
			mp3:"audio/A-Venado-Tuerto.mpeg"
		},
		{
			title:"Bussi - Santos Mundanos",
			// free:true,
			mp3:"audio/Bussi.mpeg"
		},
		{
			title:"La Sangre - El No Conocido",
			// free:true,
			mp3:"audio/la-sangre-ENC.mpeg"
		},
		{
			title:"Del ser - Inura",
			// free:true,
			mp3:"audio/Del-ser-inura.mpeg"
		},
	
	], {
		
		ready: function () {			
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
				if (mobile) {
					$("#jquery_jplayer_1").jPlayer("play");
            		document.documentElement.removeEventListener(click, kickoff, true);
				}
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
			
			playlistScrollPane();
			//console.log('ready');
		},
		swfPath: "js",
		supplied: "mp3",
		wmode: "window"						
		
	});
});

$(window).load(function() {
	
	playlistScrollPane();
	var qwe = setTimeout(function () {$("#jquery_jplayer_1").jPlayer("pause");}, 2000);
	//console.log('load');
	
}); 