
var button = document.querySelector('.button');
button.onclick = function() {
	var n = document.getElementById('inputNum').value;
	var fnum = [1,1];
	var n0 = 1;
	var n1 = 1;
	var n2;
	for (var i = 3; i <= n; i++) {
		n2=n0+n1;
		fnum.push(n2);
		n0=n1;
		n1=n2;
	}
	console.log (fnum);
	var res = fnum.join(', ');	
	console.log (res);
	var container = document.body.children[0];	
	var block = container.children[2];
	var p = document.createElement('p');
	block.appendChild(p);
	p.insertAdjacentHTML("afterBegin", res);
}
