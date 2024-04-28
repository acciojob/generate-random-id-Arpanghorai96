function getCharCode(params) {
	let n=parseInt(Math.random()*100);
	if((48<=n&& n<=57)||(65<=n && n<90)||(97<=n&&n<99))
	{
		return n;
	}
	return parseInt(n/5)+100;
	
}
function makeid(l) {
  // write your code here
	let str="";
	for(let i=1;i<=l;i++)
		{
			let charCode=getCharCode();
			str+=String.fromCharCode(charCode)
		}
	return str;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
