window.addEventListener('scroll', e => {
	document.querySelector('.background').style.backgroundSize = `${
		window.scrollY * 1.8 + 1600
	}px`
	document.querySelector('#H1').style.opacity = `${
		(-window.scrollY + 300) * 0.004
	}`
})





// -------------------------------------------/
window.addEventListener('scroll', () => {
	document.querySelector(
		'.backMountain'
	).style.marginTop = `${window.scrollY}px`
	document.querySelector('.Home h1').style.marginTop = `${
		window.scrollY * 1.7
	}px`
	document.querySelector('.rightCloud').style.marginRight = `-${
		window.scrollY * 0.7
	}px`
	document.querySelector(
		'.rightCloud-2'
	).style.marginRight = `-${window.scrollY}px`
	document.querySelector('.leftCloud').style.marginLeft = `-${window.scrollY}px`
})
