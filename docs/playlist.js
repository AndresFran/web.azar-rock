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
			title:"Reina del Bestiario",
			// free:true,
			mp3:"audio/Reina del Bestiario.mpeg"
		},
		{
			title:"Talismán",
			mp3:"audio/Talisman.mpg"
		},
		{
			title:"Karma",
			mp3:"audio/Karma.mp3"
		},
		{
			title:"La bacanal de los Andrios",
			// free:true,
			mp3:"audio/La bacanal de los Andrios.mpeg"
		},
		{
			title:"Papá",
			// free:true,
			mp3:"audio/papa.mpeg"
		},
		{
			title:"Blues del Renacimiento",
			// free:true,
			mp3:"audio/renacimiento.mpeg"
		},
		{
			title:"Quieta",
			mp3:"audio/Quieta.mpeg"
		},
		{
			title:"Encerrada",
			mp3:"audio/encerrada.mpeg"
		},
		{
			title:"Suero",
			mp3:"audio/Suero.mpeg"
		},
		{
			title:"No preguntes",
			mp3:"audio/No-preguntes.mpeg"
		},
	
	], {
		
		ready: function () {			
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
				if (mobile) {
					$("#jquery_jplayer_1").jPlayer("pause");
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