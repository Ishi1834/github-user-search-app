const textArea = document.getElementById("githubSearch");
const button = document.getElementById("search");
const errorMessage = document.getElementById("noResult");

getGithubData("octocat");

button.addEventListener("click", function () {
  if (textArea.value == "") {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    getGithubData(textArea.value);
  }
});
/* work on textarea validation */

textArea.addEventListener("click", function () {
  errorMessage.style.display = "none";
});

function getGithubData(userName) {
  var user = userName;
  const Http = new XMLHttpRequest();
  const url = "https://api.github.com/users/";
  Http.open("GET", url + user);
  Http.send();
  Http.onreadystatechange = (e) => {
    let json = Http.responseText;
    changeHTML(JSON.parse(json));
  };
}
function changeHTML(data) {
  console.log(data);
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("userName").innerHTML = data.login;
  document.getElementById("joinedDate").innerHTML = data.created_at;
  document.getElementById("avatarUrl").src = data.avatar_url;
  document.getElementById("bio").innerHTML = data.bio;
  document.getElementById("repos").innerHTML = data.public_repos;
  document.getElementById("followers").innerHTML = data.followers;
  document.getElementById("following").innerHTML = data.following;
  document.getElementById("location").innerHTML = data.location;
  document.getElementById("website").innerHTML = data.website;
  document.getElementById("twitter").innerHTML = data.twitter_username;
  document.getElementById("work").innerHTML = data.company;
}
// https://api.github.com/users/:username
