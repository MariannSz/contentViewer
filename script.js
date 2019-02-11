	var modal = document.getElementById('myModal');

	var span = document.getElementsByClassName("close")[0];

	var id = 0;

	var image = document.getElementById('img');
	var paragraph = document.getElementById('par');

	// Set content of modal
	function setContent() {
		var openImage = document.getElementById(id).children[0].children[0];
		var openPar = document.getElementById(id).children[1];
		image.src = openImage.src;
		paragraph.innerHTML = openPar.innerHTML;
		modal.style.display = "flex";

	}

	// Open modal
	function openModal(event) {
		var div = event.target.parentElement.parentElement;
		id = div.id;
		setContent();
	}

	// Open previous modal
	function prevModal(event) {
		if (id > 0) {
			id--;
		}
		setContent();
	}

	// Open next modal
	function nextModal(event) {
		if (id < 7) {
			id++;
		}
		setContent();
	}

	// When the user clicks on x, close the modal
	span.onclick = function() {
		 modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close modal
	window.onclick = function(event) {
		 if (event.target == modal) {
		   modal.style.display = "none";
		  }
	}