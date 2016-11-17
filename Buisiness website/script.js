function myFunction() {
    var x = document.getElementById('hidden');
    if (x.style.display === 'none') {
        x.style.display = 'block';
		document.getElementById("expand").innerHTML = '-';
    } else {
        x.style.display = 'none';
		document.getElementById("expand").innerHTML = '+';
    }
}


