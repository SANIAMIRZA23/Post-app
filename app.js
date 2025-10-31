
var firstName, lastName;
const profilePhotoImg = document.getElementById("profilePhotoImg");
const profilePhotoInput = document.getElementById("profilePhotoInput");

profilePhotoImg.addEventListener("click", () => {
  profilePhotoInput.click();
});

profilePhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    profilePhotoImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();
  firstName = document.getElementById("inputFirstName").value;
  lastName = document.getElementById("inputLastName").value;
  console.log(firstName, lastName);

  const signUpFormContainer = document.getElementById("signUpFormContainer");
  var postApp = document.getElementById("postApp");

  signUpForm.reset();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Account created successfully!",
    showConfirmButton: false,
    timer: 1500,
  });
  signUpFormContainer.classList.add("hidden");
  postApp.classList.remove("hidden");
});

var backgroundImg;
function post() {
  var title = document.getElementById("title");
  var description = document.getElementById("description");
  console.log(firstName, lastName);
  var currentTime = new Date().toLocaleTimeString();
  if (title.value.trim() && description.value.trim()) {
    var post = document.getElementById("post");
    post.innerHTML += `
   <div class="card p-2 mb-2">
       <div class="card-header d-flex">
       <img class="profile-photo" src="${profilePhotoImg.src}" />
       <div class="name-time d-flex flex-column">
        ${firstName} ${lastName}
        <div class="time">${currentTime}</div>
      </div>
    </div>
      <div style="background-image: url(${backgroundImg})" class="card-body">
        <blockquote class="blockquote mb-0">
           <p>${title.value}</p>
           <footer class="blockquote-footer">${description.value}</footer>
         </blockquote>
      </div>
       <div class="card-footer d-flex justify-content-end">
         <button type="button" onclick="editpost(this)" class="ms-2 btn  editBtn">Edit</button>
         <button type="button" onclick="deletePost(this)" class="ms-2 btn btn-danger deleteBtn">Delete</button>
       </div>
  </div>`;
    title.value = "";
    description.value = "";
  } else {
    Swal.fire({
      title: "Empty Post",
      text: "Can't publish post without Title or Description",
      icon: "question",
    });
  }
}
function selectImg(src) {
  backgroundImg = src;
  var bgImg = document.getElementsByClassName("bg-img");

  for (var i = 0; i < bgImg.length; i++) {
    bgImg[i].className = "bg-img";
  }
  event.target.className += " selectedImg";
}
function deletePost(button) {
  button.parentNode.parentNode.remove();
}
function editpost(button) {
  var card = button.parentNode.parentNode;
  var title = card.childNodes[3].childNodes[1].childNodes[1].innerHTML;
  var description = card.childNodes[3].childNodes[1].childNodes[3].innerHTML;
  document.getElementById("title").value = title;
  document.getElementById("description").value = description;
  card.remove();
}


//
var titleInput = document.getElementById('exampleFormControlInput1');
var messageInput = document.getElementById('exampleFormControlTextarea1');
var editingPostDiv = null;

titleInput.classList.add('hidden');
messageInput.classList.add('hidden');

function createPost(title, message) {
    var postDiv = document.createElement('div');
    postDiv.className = 'card p-3 mb-3 post-card';
    postDiv.innerHTML = `
        <h5>${title}</h5>
        <p>${message}</p>
        <button class="btn btn-warning edit-btn">Edit</button>
    `;
    document.body.appendChild(postDiv);
      
    postDiv.querySelector('.edit-btn').onclick = function () {
        titleInput.value = postDiv.querySelector('h5').innerText;
        messageInput.value = postDiv.querySelector('p').innerText;
        editingPostDiv = postDiv;
    };
}

function addOrUpdatePost() {
    var title = titleInput.value.trim();
    var message = messageInput.value.trim();

    if (!title || !message) {
        alert('Please fill both Title and Description');
        return;
    }

    if (editingPostDiv) {
        editingPostDiv.querySelector('h5').innerText = title;
        editingPostDiv.querySelector('p').innerText = message;
        editingPostDiv = null;
    } else {
        createPost(title, message);
    }

    titleInput.value = '';
    messageInput.value = '';
}

titleInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addOrUpdatePost();
    }
});

messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addOrUpdatePost();
    }
});


var signUpForm = document.getElementById('signUpForm');
var signUpContainer = document.getElementById('signUpFormContainer');

if (signUpForm) {
    signUpForm.onsubmit = function(e) {
        e.preventDefault();

        signUpContainer.classList.add('hidden');

        titleInput.classList.remove('hidden');
        messageInput.classList.remove('hidden');
    };
}
var titleInput = document.getElementById('exampleFormControlInput1');
var messageInput = document.getElementById('exampleFormControlTextarea1');
var editingPostDiv = null;

titleInput.classList.add('hidden');
messageInput.classList.add('hidden');

function createPost(title, message) {
    var postDiv = document.createElement('div');
    postDiv.className = 'card p-3 mb-3 post-card';
    postDiv.innerHTML = `
        <h5>${title}</h5>
        <p>${message}</p>
        <button class="btn btn-warning edit-btn">Edit</button>
    `;
    document.body.appendChild(postDiv);
      
    postDiv.querySelector('.edit-btn').onclick = function () {
        titleInput.value = postDiv.querySelector('h5').innerText;
        messageInput.value = postDiv.querySelector('p').innerText;
        editingPostDiv = postDiv;
    };
}

function addOrUpdatePost() {
    var title = titleInput.value.trim();
    var message = messageInput.value.trim();

    if (!title || !message) {
        alert('Please fill both Title and Description');
        return;
    }

    if (editingPostDiv) {
        editingPostDiv.querySelector('h5').innerText = title;
        editingPostDiv.querySelector('p').innerText = message;
        editingPostDiv = null;
    } else {
        createPost(title, message);
    }

    titleInput.value = '';
    messageInput.value = '';
}

titleInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addOrUpdatePost();
    }
});

messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addOrUpdatePost();
    }
});


var signUpForm = document.getElementById('signUpForm');
var signUpContainer = document.getElementById('signUpFormContainer');

if (signUpForm) {
    signUpForm.onsubmit = function(e) {
        e.preventDefault();

        signUpContainer.classList.add('hidden');

        titleInput.classList.remove('hidden');
        messageInput.classList.remove('hidden');
    };
}
//
