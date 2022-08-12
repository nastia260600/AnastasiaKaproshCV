$('.wrapper').addClass('loaded');

const scrollBtn = document.querySelector('.showBtn');
window.onscroll = () => {
	if (window.scrollY > 150){
		scrollBtn.classList.remove('showBtn__hide');
	} else if(window.scrollY < 150){
		scrollBtn.classList.add('showBtn__hide');
	}
};

scrollBtn.onClick = () => {
	window.scrollTo(0,0);
};