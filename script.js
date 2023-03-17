let output = document.getElementById("output");
function Hello(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		}, 1000);
	});
}

Hello().then((data) => {
   output.textContent = data;
});
