localStorage.setItem('redLike', 'img/redLike.svg')
localStorage.setItem('like', 'img/like.svg')

document.getElementById('like').addEventListener('click', function () {
	if (document.getElementById('like').getAttribute('src') == 'img/like.svg') {
		document.getElementById('like').src = localStorage.getItem('redLike')
	} else {
		document.getElementById('like').src = localStorage.getItem('like')
	}
})
