//your code here
function shuffleArray(array) {
	for(i=0;i<array.length;i++){
      let j=Math.floor(Math.random()*i+1);
	  [array[i],array[j]]=[array[j],array[i]];	
	}
	return array;
}
 function randomImage() {
 	const container=document.getElementById('container');
	const images=Array.from(container.querySelectorAll("img"));
   
	 const shuffle=shuffleArray(images);

	 shuffle.forEach(img=>{
       container.appendChild(img);
	 })
	 
 }

window.addEventListener('load', shuffleImages);