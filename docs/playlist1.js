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
			title:"Desaparecer - Mad Sigma",
			// free:true,
			mp3:"audio/desaparecer-mad-sigma.mpeg"
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
		{
			title:"Recetas - La Mangarda",
			// free:true,
			mp3:"audio/recetas-la-mangarda.mpeg"
		},
		{
			title:"Gas - Moire",
			// free:true,
			mp3:"audio/gas-moire.mpeg"
		},
		{
			title:"Invisible - Efe4",
			// free:true,
			mp3:"audio/invisible-efe4.mpeg"
		},
		{
			title:"Desaparecer - Post20",
			// free:true,
			mp3:"audio/desaparecer-post20.mp3"
		},
		{
			title:"Volviendo al ruedo - Daño Vertical",
			// free:true,
			mp3:"audio/volviendo.ruedo-d.vertical.mpeg"
		},
		{
			title:"Viendome volar - Handal",
			// free:true,
			mp3:"audio/viendome-volar-handal.wav"
		},
		{
			title:"Nunca llueve eternamente - Espejo de Almas",
			// free:true,
			mp3:"audio/llueve-espejo.de.almas.mpg"
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