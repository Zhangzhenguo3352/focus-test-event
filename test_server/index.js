		setInterval(function(){
			var xhr=new XMLHttpRequest;
			xhr.open('GET','/data',true)
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 ){
					document.querySelector('#dateTime').innerHTML = xhr.responseText;
				}
			}
			xhr.send();
		},5000)