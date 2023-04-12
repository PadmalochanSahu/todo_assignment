function getDataPost(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let tableData = "";
        data.map((element) =>{
            tableData += ` <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
        </tr>`;
            document.getElementById('first').innerHTML = tableData;
        }) 
    })
};
getDataPost();

function getDataTodo(){
    let url = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url).then((response2) => {
        return response2.json();
    }).then((data) => {
        let tableData = "";
        data.map((element) =>{
            tableData += ` <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
        </tr>`;
            document.getElementById('first').innerHTML = tableData;
        }) 
    })
};
getDataTodo();

function getDataAlbum(){
    let url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url).then((response3) => {
        return response3.json();
    }).then((data) => {
        let tableData = "";
        data.map((element) =>{
            tableData += ` <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
        </tr>`;
            document.getElementById('first').innerHTML = tableData;
        }) 
    })
};
getDataAlbum();

let btn = document.getElementById('btn');
btn.addEventListener('click', function click() {
 let inputValue = document.getElementById('input').value.toLowerCase();
 console.log('In',inputValue);
 let tr = document.getElementsByTagName('tr');
 for(let i =1;i<tr.length;i++){
    let td = tr[i].getElementsByTagName('td')[1].textContent;
    if(td == inputValue){
        tr[i].style.display = "";
    }else{
        tr[i].style.display = "none";
    }
     
}

})

function fetchApi(){
    getDataPost();
};
function fetchApi2(){
    getDataTodo();
}
function fetchApi3(){
    getDataAlbum();
}


