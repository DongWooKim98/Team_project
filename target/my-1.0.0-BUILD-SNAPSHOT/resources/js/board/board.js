const searchForm = document.getElementById('searchForm');
const sortType = document.getElementById('sortMethod');

let hiddenBoardId;


document.addEventListener('DOMContentLoaded', () => {
	sortType.addEventListener("change",() => {
		searchForm.submit();
	})
	let boardId = document.getElementById('boardId');
	hiddenBoardId = boardId == null ? '' : boardId.value;
	
})

const updateBoard = () => {
	location.href = `/board/update/${hiddenBoardId}`;
}
const deleteBoard = () => {
	location.href = `/board/delete/${hiddenBoardId}`;
}





