if (localStorage.length == 0) {
	document.getElementById('like').src = 'img/like.svg'
} else {
	document.getElementById('like').src = 'img/redLike.svg'
}

document.getElementById('like').addEventListener('click', function () {
	if (localStorage.length == 0) {
		document.getElementById('like').src = 'img/redLike.svg'
		localStorage.setItem('isLike', true)
		console.log(localStorage)
	} else {
		document.getElementById('like').src = 'img/like.svg'
		localStorage.clear()
		console.log(localStorage)
	}
})
