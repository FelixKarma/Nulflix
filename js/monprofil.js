let nextId = 1;

const comments = [];


const commentInput = document.getElementById('avis');
const button = document.getElementById('valider');
const commentList = document.getElementById('listeavis');
button.addEventListener('click', () => {
  const object = {};
  if (commentInput.value != '') {
      comments.push({ id: nextId++, text: commentInput.value });
      localStorage.setItem('listComm',JSON.stringify(comments));
      console.log(localStorage.getItem('listComm'));
  }
  createElement();
  commentInput.value = '';
});

function createElement() {
    let listComm = [];
    listComm = localStorage.getItem('listComm');
    for (let comment of listComm) {
        const newComment = document.createElement('div');
        newComment.setAttribute('id', comment.id);
        console.log(comment);
        newComment.innerText = `${comment.text}`;
        commentList.appendChild(newComment);   
    }
}