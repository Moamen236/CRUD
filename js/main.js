var webName = document.getElementById('name');
var webUrl = document.getElementById('url');
var addbtn = document.getElementById('addBtn');
var inputs = document.getElementsByClassName('form-control')
var websites;

if (localStorage.getItem('websitesName') == null) {
    websites = [];
} else {
    websites = JSON.parse(localStorage.getItem('websitesName'));
    displayData()
}

addbtn.onclick = function () {
    // if (addbtn.innerHTML = 'Submit') {
    addDate()
    displayData()
    restForm()
    // } else {
    //     alert('else')
    //     updateRow()
    // }
}

function addDate() {
    var website = {
        name: webName.value,
        url: webUrl.value
    }
    console.log(website);
    websites.push(website)
}

function displayData() {
    var contents;
    for (var i = 0; i < websites.length; i++) {
        contents += `
        <div class="row my-3 py-4 px-5 bg-light">
            <h2 class="col-4">${websites[i].name}</h2>
            <a href="${websites[i].url}" class="btn btn-primary mr-2" target="_blank">visit</a>
            <button onclick="deleteRow(${i})" class="btn btn-danger mr-2">Delete</button>
            <!--<button onclick="EditeRow(${i})" class="btn btn-warning">Edit</button>-->
        </div>
        `
    }
    document.getElementById('list').innerHTML = contents;
    localStorage.setItem('websitesName', JSON.stringify(websites))
}

function restForm() {
    console.log('empty')
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = " "
    }
}

function deleteRow(index) {
    websites.splice(index, 1);
    displayData()
}

// function EditeRow(index) {
//     addbtn.innerHTML = 'Edit'
//     webName.value = websites[index].name
//     webUrl.value = websites[index].url
// }

// function updateRow() {
//     webName.value = website.name
//     webUrl.value = websit.url
//     displayData()
// }