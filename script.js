document.getElementById('like').addEventListener('click', function () {
	if (localStorage.length == 0) {
		document.getElementById('like').src = 'img/redLike.svg'
		localStorage.setItem('isLike', 'red')
	} else {
		document.getElementById('like').src = 'img/like.svg'
		localStorage.clear()
	}
})
