
//the only reason i needed to make this file is because needmad was running before the config file could be loaded...
//so, i had to make them load in order: config THEN needmad...
//...its all because of texture resolutions having to be loaded before the game starts, so we need the correct 
//boolean to be loaded and set from our config file... otherwise the textures will be MAD... the BAD KIND!

if (typeof whatConfig != 'undefined') {
	var script_tag = document.createElement('script'); //we load whatever is in the "game" url
	script_tag.type = 'text/javascript';               //paramater checked in index.html
	script_tag.src = "configs/" + whatConfig + ".js";
	document.head.appendChild(script_tag);
	
	var script_tag = document.createElement('script');
	script_tag.type = 'text/javascript';
	script_tag.src = "needmad.js";
	document.head.appendChild(script_tag);
}