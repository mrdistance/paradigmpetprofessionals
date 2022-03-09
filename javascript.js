//Still needs to adjust view back upwards 100px
function search(ele){
	if(event.key === 'Enter'){
		let input = ele.value;
		input = input.toLowerCase();
		//Search Page Paragraphs
		let x = document.getElementsByTagName('p');
		//Search Page Headers
		let y = document.getElementsByTagName('h1');
		//Search Page List Items
		let z = document.getElementsByClassName('listedinfo')
		for(let i = 0; i < x.length; i++){
			if(input == ""){
				x[i].style.color = "";
				x[i].style.fontSize = "";
				continue;
			}
			if(x[i].innerHTML.toLowerCase().includes(input)){
				for(let q = 0; q < x.length; q++){
					x[q].style.color = "";
					x[q].style.fontSize = "";
				}
				for(let q = 0; q < y.length; q++){
					y[q].style.color = "";
					y[q].style.fontSize = "";
				}
				for(let w = 0; w < z.length; w++){
					z[w].style.color = "";
					z[w].style.fontSize = "";
				}
				const yOffset = -110;
				const r = x[i].getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({top: r, behavior: 'smooth'});
				
				x[i].style.color = "#6699CC";
				x[i].style.fontSize = "x-large";
				return;
			}
		}
		for(let i = 0; i < z.length; i++){
			if(input == ""){
				z[i].style.color = "";
				z[i].style.fontSize = "";
				continue;
			}
			if(z[i].innerHTML.toLowerCase().includes(input)){
				for(let q = 0; q < x.length; q++){
					x[q].style.color = "";
					x[q].style.fontSize = "";
				}
				for(let q = 0; q < y.length; q++){
					y[q].style.color = "";
					y[q].style.fontSize = "";
				}
				for(let w = 0; w < z.length; w++){
					z[w].style.color = "";
					z[w].style.fontSize = "";
				}
				const yOffset = -110;
				const r = z[i].getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({top: r, behavior: 'smooth'});
				
				z[i].style.color = "#6699CC";
				z[i].style.fontSize = "x-large";
				return;
			}
		}
		for(let i = 0; i < y.length; i++){
			if(input == ""){
				y[i].style.color = "";
				y[i].style.fontSize = "";
				continue;
			}
			if(y[i].innerHTML.toLowerCase().includes(input)){
				for(let q = 0; q < x.length; q++){
					x[q].style.color = "";
					x[q].style.fontSize = "";
				}
				for(let q = 0; q < y.length; q++){
					y[q].style.color = "";
					y[q].style.fontSize = "";
				}
				for(let w = 0; w < z.length; w++){
					z[w].style.color = "";
					z[w].style.fontSize = "";
				}
				const yOffset = -110;
				const r = y[i].getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({top: r, behavior: 'smooth'});
				
				y[i].style.color = "#6699CC";
				y[i].style.fontSize = "xx-large";
				
				return;
			}
		}
		
	}
}



function activateItem(){
	aObj = document.getElementById('nav').getElementsByTagName('a');
	for(i = 0; i < aObj.length; i++){
		if(document.location.href.indexOf(aObj[i].href)>=0){
			aObj[i].className = 'activeItem';
			setphonemenu();
		}
	}
}

function setphonemenu(){
	aObj = document.getElementById('selectmenu').getElementsByTagName('option');
	for(i = 0; i < aObj.length; i++){
		if(document.location.href.indexOf(aObj[i].value)>=0){
			aObj[i].setAttribute("selected", "true");
		}
	}
}

function changeWindows(value){
	window.location.assign(value);
}
