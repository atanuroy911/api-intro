let commentCount = 2;
let nextInit = 0;

function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => loadComments(data))
}

getComments();

function loadComments(data) {
    const commentContainer = document.getElementById('comments');
    for (let i = nextInit; i < data.length && i < commentCount; i++) {
        const each = data[i];
        const div = document.createElement('div')
        div.classList.add('bg-slate-300', 'p-3', 'rounded-lg' , 'mb-3');
        div.innerHTML = `
        <h5 class="font-semibold">${each.name}</h5>
         <p>${each.body}</p>
         <a href="" class="mr-1 text-blue-500 p-1">Like</a><a href="#" class="mr-1 text-blue-500 p-1">Reply</a>
        `;
        commentContainer.appendChild(div);
        nextInit = i + 1;
        console.log(each.id);
    }
    if(commentCount == 2){
        commentCount = 5;
    }
    else{
        commentCount += 5;
    }
}