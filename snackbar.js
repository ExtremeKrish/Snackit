
document.addEventListener('DOMContentLoaded', function() {

document.getElementsByTagName("body")[0].innerHTML+="<span id=\"snackbar\" ><\/span>";

}, false);
document.getElementsByTagName('head')[0].innerHTML+="<link rel=\"stylesheet\" href=\"https://rawcdn.githack.com/ExtremeKrish/Snackit/53631a1227b6f28a2b4ab69a9307edf77a74df4a/snackbar.css\">";
	function showMessage(string){
var el = document.getElementById('snackbar');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
document.getElementById("snackbar").style.display="inline-block";
document.getElementById('snackbar').innerHTML = string;
   }