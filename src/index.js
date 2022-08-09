
//1. first we will fetch the dog image
fetch("http://localhost:3000/images/1")
  .then((res) => res.json())
  .then((data) => renderContent(data));

//2. create variables thatall are referencing some html element that we want to change later when we build a function for it. 
let renderTitle = document.getElementById("card-title");
let renderImage = document.getElementById("card-image");
let renderLikes = document.querySelector(".likes-section");
let renderlikeBtn = document.getElementById("like-count");
let renderComment = document.getElementById("comments-list");
let inputForm = document.getElementById("comment");
let likeBtn = document.getElementById("like-button");

//3. this functon is rendering the title, image, and likes from the dog
function renderContent(data) {
  renderTitle.innerText = data.title;
  renderImage.src = data.image;
  renderlikeBtn.innerHTML = data.likes;
}
//4. this is a fetch request for the comments list
fetch("http://localhost:3000/comments")
  .then((res) => res.json())
  .then((data) => renderComments(data));
//5. this is rendering all the comments and also allow users to crete one and show up on the html page.
  function renderComments(data){
    renderComment.innerHMTL = data.content;
    for (const item of data) {
    let newComment = document.createElement("li");
    newComment.innerText = item.content;
    renderComment.append(newComment);
  }
}
//6. this is a variable for the form 
mainForm = document.getElementById("comment-form");
//7. this is an event listener for when the form is submitted, we want to see a new comment poste on to the html page. 
mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let newInput = document.createElement("li");
  newInput.innerText = comment.value;
  renderComment.append(newInput);
  e.target.reset();
});
//8. this is a variable for the like count field
let num = 0;
//9. this is an event listener for when heart icon is cliked and like count goes up by one number.
likeBtn.addEventListener("click", function(){
  num = num + 1;
  renderlikeBtn.innerText = num + " likes";
});


