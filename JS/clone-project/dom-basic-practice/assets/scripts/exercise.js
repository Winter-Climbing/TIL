const changeBackground = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");

const startAddMovieBtn = document.querySelector(".myBtn");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const submitAddMovieButton = document.querySelector(".btn--success");

const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const toggleAddMovie = () => {
  addMovieModal.classList.toggle("visible");
};

const toggleBackdrop = () => {
  changeBackground.classList.toggle("visible");
};

const toggleMovieModal = () => {
  toggleAddMovie();
  toggleBackdrop();
  clearMovieInput();
};

const backdropClickHandler = (e) => {
  if (e.target === changeBackground) {
    toggleAddMovie();
    toggleBackdrop();
  }
};

const clearMovieInput = () => {
  for (const usrInputs of userInputs) {
    usrInputs.value = "";
  }
};

const addMovieHandler = (e) => {
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("값이 없거나 또는 rating value에 1이상 5이하의 수를 입력해주세요");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  movieEntryToggle();
};

const movieEntryToggle = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie--element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
};

startAddMovieBtn.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", toggleMovieModal);
changeBackground.addEventListener("click", backdropClickHandler);
submitAddMovieButton.addEventListener("click", addMovieHandler);
