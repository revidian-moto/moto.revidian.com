function toggleMainNav(){

	menu = document.getElementById( "main-nav" );
	menu2 = document.querySelector( "#section-nav ul" );

	if( menu.style.display == "none" || menu.style.display == "" ){

		menu.style.display = "block";
		menu2.style.display = "flex";
	}else{

		menu.style.display = "none";
		menu2.style.display = "none";
	}

	event.stopPropagation();
}
