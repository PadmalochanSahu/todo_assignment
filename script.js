function getDataPost() {
  let url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let tableHead = `<tr>
        <th>Srl no.</th>
        <th>Title</th>
        <th>Body</th>
         </tr>`;
      document.getElementById("tableHead").innerHTML = tableHead;
      let tableData = "";
      data.map((element, index) => {
        tableData += ` <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.body}</td>
        </tr>`;
            document.getElementById("first").innerHTML = tableData;
        
        });
      });
}

getDataPost();

function getDataTodo() {
  let url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response2) => {
      return response2.json();
    })
    .then((data) => {
      let tableHead = `<tr>
        <th>Srl no.</th>
        <th>Title</th>
        <th>Completed</th>
         </tr>`;
      document.getElementById("tableHead").innerHTML = tableHead;
      let tableData = "";
      data.map((element) => {
        tableData += ` <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.completed}</td>
        </tr>`;
        document.getElementById("first").innerHTML = tableData;
      });
    });
}

function getDataAlbum() {
  let url = "https://jsonplaceholder.typicode.com/albums";
  fetch(url)
    .then((response3) => {
      return response3.json();
    })
    .then((data) => {
      let tableHead = `<tr>
        <th>Srl no.</th>
        <th>Title</th>
         </tr>`;
      document.getElementById("tableHead").innerHTML = tableHead;
      let tableData = "";
      data.map((element) => {
        tableData += ` <tr>
            <td>${element.id}</td>
            <td>${element.title}</td>
        </tr>`;
        document.getElementById("first").innerHTML = tableData;
      });
    });
}

let btn = document.getElementById("btn");
btn.addEventListener("click", function click() {
  let inputValue = document.getElementById("input").value.toLowerCase();
  console.log("In", inputValue);
  let tr = document.getElementsByTagName("tr");
  for (let i = 1; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1].textContent;
    if (td == inputValue) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
});
let one = document.getElementById("one");
one.addEventListener("click", function clickOne() {
    let record = document.getElementById('first')
    let records = record.getElementsByTagName('tr');
    console.log(records);
    let records_per_page = 10;
    let page = 1;
    let total_records = records.length;
    let total_page =  total_records/records_per_page;
    
    function DisplayRecords(){
        let start_index = (page -1) * records_per_page;
        let end_index = start_index + (records_per_page)
        let displayScreen = "";
        for(let i =start_index; i<end_index; i++){
            displayScreen += records[i].innerHTML;
            console.log(records[i]);
            
        }
       record.innerHTML = displayScreen;
    }
    DisplayRecords()
});


let two = document.getElementById("two");
two.addEventListener("click", function clickOne() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let tableHead = `<tr>
          <th>Srl no.</th>
          <th>Title</th>
          <th>Body</th>
           </tr>`;
        document.getElementById("tableHead").innerHTML = tableHead;

    let tableData = "";
    data.map((element, index) => {
      tableData += ` <tr>
          <td>${element.id}</td>
          <td>${element.title}</td>
          <td>${element.body}</td>
      </tr>`;
    let page = 2;
    let perPage = 10;
    if (index < page * perPage && index >= (page - 1) * perPage) {
      let pageData = element;
      console.log(pageData);
      document.getElementById("first").innerHTML = tableData;
    }
  });
});
});


function fetchApi() {
  getDataPost();
}
function fetchApi2() {
  getDataTodo();
}
function fetchApi3() {
  getDataAlbum();
}
