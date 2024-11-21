document.getElementById('like').addEventListener('click', function () {
	if (document.getElementById('like').getAttribute('src') == 'img/like.svg') {
		document.getElementById('like').src = 'img/redLike.svg'
	} else {
		document.getElementById('like').src = 'img/like.svg'
	}
})

console.log(document.getElementById('like').getAttribute('src'))
