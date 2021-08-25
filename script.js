fetch("actors.JSON")
  .then((res) => res.json())
  //   .then((data) => console.log(data));
  .then((response) => {
    showActors(response);
  });
function showActors(actors) {
  const template = document.querySelector(".actortemplate").content;
  actors.forEach((actor) => {
    const copy = template.cloneNode(true);
    copy.querySelector(".fullname").textContent = actor.fullname;
    document.querySelector(".actorlist").appendChild(copy);
  });
}

// document.querySelector(".actortemplate").addEventListener("click", showDetails);
// function showDetails() {
//   document.querySelector(".detailbox").classList.remove("hidden");
//   document.querySelector("detailbox").classList.add("show");
// }
