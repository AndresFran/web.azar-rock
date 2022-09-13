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
			free:true,
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
			free:true,
			mp3:"audio/La bacanal de los Andrios.mpeg"
		},
		{
			title:"No preguntes",
			mp3:"audio/No-preguntes.mpeg"
		},
		{
			title:"Quieta",
			mp3:"audio/Quieta.mpeg"
		},
		{
			title:"Papá",
			free:true,
			mp3:"audio/Papa.mp4"
		},
		{
			title:"Suero",
			mp3:"audio/Suero.mpeg"
		},
		// {
		// 	title:"Thin Ice",
		// 	mp3:"audio/Miaow-10-Thin-ice.mp3"
		// },
		// {
		// 	title:"The Separation",
		// 	free:true,
		// 	mp3:"audio/Miaow-05-The-separation.mp3"
		// },
		// {
		// 	title:"Lismore",
		// 	mp3:"audio/Miaow-04-Lismore.mp3"
		// },
		// {
		// 	title:"Thin Ice",
		// 	mp3:"audio/Miaow-10-Thin-ice.mp3"
		// },
		// {
		// 	title:"The Separation",
		// 	free:true,
		// 	mp3:"audio/Miaow-05-The-separation.mp3"
		// },
		// {
		// 	title:"Lismore",
		// 	mp3:"audio/Miaow-04-Lismore.mp3"
		// },
		// {
		// 	title:"Thin Ice",
		// 	mp3:"audio/Miaow-10-Thin-ice.mp3"
		// },
		// {
		// 	title:"The Separation",
		// 	free:true,
		// 	mp3:"audio/Miaow-05-The-separation.mp3"
		// },
		// {
		// 	title:"Lismore",
		// 	mp3:"audio/Miaow-04-Lismore.mp3"
		// },
		// {
		// 	title:"Thin Ice",
		// 	mp3:"audio/Miaow-10-Thin-ice.mp3"
		// },
		// {
		// 	title:"The Separation",
		// 	free:true,
		// 	mp3:"audio/Miaow-05-The-separation.mp3"
		// },
		// {
		// 	title:"Lismore",
		// 	mp3:"audio/Miaow-04-Lismore.mp3"
		// },
		// {
		// 	title:"Thin Ice",
		// 	mp3:"audio/Miaow-10-Thin-ice.mp3"
		// },
		// {
		// 	title:"The Separation",
		// 	free:true,
		// 	mp3:"audio/Miaow-05-The-separation.mp3"
		// },
		// {
		// 	title:"Lismore",
		// 	mp3:"audio/Miaow-04-Lismore.mp3"
		// },
		// {
		// 	title:"Thin Ice",
		// 	mp3:"audio/Miaow-10-Thin-ice.mp3"
		// }
		
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
	var qwe = setTimeout(function () {$("#jquery_jplayer_1").jPlayer("play");}, 2000);
	//console.log('load');
	
}); 