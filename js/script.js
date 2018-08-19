const button = document.querySelector('.button');
button.onclick = () => {
	let n = document.getElementById('inputNum').value;
	const fnum = [1,1];
	let n0 = 1;
	let n1 = 1;
	let n2;
	for (let i = 3; i <= n; i++) {
		n2=n0+n1;
		fnum.push(n2);
		n0=n1;
		n1=n2;
	}
	let res = fnum.join(', ');	
	console.log (res);
	const container = document.body.children[0];	
	const block = container.children[2];
	let p = document.createElement('p');
	block.appendChild(p);
	p.insertAdjacentHTML("afterBegin", res);
}
