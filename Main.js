var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');

var usersList;
if (localStorage.getItem('mywebSite') != null) {
    usersList = JSON.parse(localStorage.getItem('mywebSite'))
    showinfo()
}
else {
    usersList = [];
}
function sendData() {
    if(validateName() || validateUrl() ==true ){
        var user = {
            name: bookmarkName.value,
            url: bookmarkURL.value
        }
        usersList.push(user)
        localStorage.setItem('mywebSite', JSON.stringify(usersList))
        validateUrl()
        showinfo()
        clearForm()
    }
    else{
        alert('Site Name or Url is not valid, Please follow the rules below :Site name must contain at least 3 characters Site URL must be a valid one        ')
    }
  

}
function clearForm() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
}
function showinfo() {
    var cartona = ``;
    for (var i = 0; i < usersList.length; i++) {
        cartona += `
        <tr>
        <td>${usersList[i].name}</td>
        <td>${usersList[i].url}</td>
        
        <td> <a href="${usersList[i].url}" target="_blank"><button class="btn btn-visit">
        <i class="fa-solid fa-eye pe-2"></i>Visit
    </button> </a></td>
      
        <td> <button class="btn  btn-delete pe-2" onclick="deleteUrl(${i})">
            <i class="fa-solid fa-trash-can"></i>
            Delete</td>
        </tr>
        
        `
    }
    document.getElementById('tableList').innerHTML = cartona;
}
function deleteUrl(index) {
    usersList.splice(index, 1)
    localStorage.setItem('mywebSite', JSON.stringify(usersList))
    showinfo()
}


function validateName() {
    var nameRegex = /^\w{3,}(\s+\w+)*$/;
    return nameRegex.test(bookmarkName.value)


}
function validateUrl() {
    var urlRegex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    return urlRegex.test(bookmarkURL.value)
 

}

