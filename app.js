const movieContainer = document.querySelector(".movieContainer");
const btn = document.querySelector("#btn");
// inputs
const titleInput = document.querySelector("#title");
const releasedInput = document.querySelector("#released");
const castInput = document.getElementsByClassName("cast");
const ratingInput = document.querySelector("#rating");
const durationInput = document.querySelector("#duration");
const plotInput = document.querySelector("#plot");
const submitBtn = document.querySelector(".submitBtn");

let movieData = [
    {
      title: "The Darjeeling Limited",
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
    },
    {
      title: "The Royal Tenenbaums",
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
    },
    {
      title: "Fantastic Mr. Fox",
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
    },
    {
      title: "The Grand Budapest Hotel",
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
];

function createRecord(){	
	event.preventDefault();
	
}

function clearForm(){
    titleInput.value = "";
    releasedInput.value = "";
    ratingInput.value = "";
    durationInput.value = "";
    plotInput.value = "";
    castInput[0].value = "";
    castInput[1].value = "";
    castInput[2].value = "";
}



const newMovie = (title, plot, runtime, rating, year) => {
    let cast = [];
    // castInput.value.forEach((currCast => {
    // castList.push(currCast);
    // }))

    for(let i = 0; i<castInput.length; i++){
        cast.push(castInput[i].value)
    };
    return {title, plot, runtime, rating, year, cast};
  };

  submitBtn.addEventListener("click", function(){
    if(titleInput.value == 0 || releasedInput.value == 0 || ratingInput.value == 0 || durationInput.value == 0 || plotInput.value == 0){

    }
    else{
    let newObj = newMovie(titleInput.value, plotInput.value, durationInput.value, ratingInput.value, releasedInput.value);
    renderMovie(newObj);
    movieData.push(newObj);
    clearForm();
    }
  })






function renderMovie(curr){
let card = document.createElement("div");
card.id = curr.title;
let movieTitle = document.createElement("h2");
let deleteBtn = document.createElement("button");
deleteBtn.id = curr.title;
deleteBtn.innerHTML = "X"
deleteBtn.classList.add("deleteBtn");
card.appendChild(deleteBtn);
movieTitle.innerHTML = curr.title;
card.appendChild(movieTitle)
card.classList.add("movie")
movieContainer.appendChild(card)
let movieInfo = document.createElement("div");
movieInfo.classList.add("movieInfo");
card.appendChild(movieInfo);
let released = document.createElement("p");
released.innerHTML = "Released: ";
movieInfo.appendChild(released);
let releasedDate = document.createElement("span");
releasedDate.classList.add("released");
releasedDate.innerHTML = curr.year;
released.appendChild(releasedDate);
let duration = document.createElement("p");
movieInfo.appendChild(duration);
duration.innerHTML = `${curr.runtime} minutes long`;
let moviePlot = document.createElement("p");
moviePlot.innerHTML = curr.plot
moviePlot.classList.add("plot")
card.appendChild(moviePlot);
let casts = document.createElement("p");
card.appendChild(casts);
casts.innerHTML = "Cast:"
let castList = document.createElement("ul");
card.appendChild(castList);
for(let i = 0; i < curr.cast.length; i++){
    let list = document.createElement("li");
    list.innerHTML = curr.cast[i];
    castList.appendChild(list);
}
let movieRating = document.createElement("p");
card.appendChild(movieRating)
movieRating.innerHTML = `Ratings: ${curr.rating}`;

deleteBtn.addEventListener("click", function(){
movieData.forEach((currMovie => {
if(deleteBtn.id == currMovie.title){
    let index = movieData.indexOf(currMovie);
    movieData.splice(index, 1)
    card.remove();
}
}))
})
}

movieData.forEach((currMovie => {
    renderMovie(currMovie);
}))