const addMovieModal = document.getElementById("add-modal");
const changeBackground = document.getElementById("backdrop");
// const addMovieModal = document.querySelector("#add-modal"); id는 고유하기에 getElementById를 사용하는 것이 명시적으로 좋을 수 있고, 성능도 더 좋다.
// const addMovieModal = document.body.children[1]; 도 가능하다.

const startAddMovieButton = document.querySelector(".myBtn");
// const startAddMovieButton = document.querySelector("header button"); 가능
// const startAddMovieButton = document.querySelector("header").lastElementChild(); 가능

// const cancelAddMovieButton = document.querySelector(".btn--passive");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive"); // 조상인 addMovieModal이 변수로 선언되었는데 굳이 document 전체를 탐색할 필요가 없다.
const submitAddMovieButton = addMovieModal.querySelector(".btn--success");

const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
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
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));

  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

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
  const imgUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // trim을 통해 의도하지 않은 공백을 제거한다.
  if (
    titleValue.trim() === "" ||
    imgUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid value (빈값 없이 1과 5사이로 쓰셈!)");
    return;
  }

  const newMovie = {
    // 원래 math.random은 똑같은 숫자가 나올 수 있기 때문에 선택 대상이 아니다.
    id: Math.random().toString(),
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleAddMovie();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", toggleMovieModal);
changeBackground.addEventListener("click", backdropClickHandler);
submitAddMovieButton.addEventListener("click", addMovieHandler);
