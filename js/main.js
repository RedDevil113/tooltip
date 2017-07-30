function ToolTip(options){

	let init = function(){
		for(let i = 0; i < options.parent.length; i++){
			let tip = document.createElement('div');
			tip.classList.add('tooltip');
			tip.innerHTML = options.parent[i].getAttribute('data-message');
			options.parent[i].appendChild(tip);
			options.parent[i].style.position = 'relative';
			options.parent[i].addEventListener('click', function(){
				tip.classList.toggle('active');
			});
		}
	}
	init();
	
}