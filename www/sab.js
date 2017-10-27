	function save(){
		window.localStorage.memo=document.getElementById("memo").value;
	}
	function remember(){
		document.getElementById("memo").value=window.localStorage.memo;
	}
