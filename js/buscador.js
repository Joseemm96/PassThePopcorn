
//te decepcioné Jorge
$(document).ready(() => {
  $("#searchForm").on('submit', (e) => {
    e.preventDefault();
    let searchText = $("#searchText").val();
    getMovies(searchText);
  });
});

function getMovies(searchText){
  //haciendo request con axios
  // haciendo request para un user 
  axios.get("https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=" + searchText)
    .then(function (response) {
      let movies = response.data.results;
      let output = '';
      $.each(movies, (index, movie) => {
        output+=`
          <div class="col-md-3">
            <div class="well text-center">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
              <h5>${movie.title}</h5>
              <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Detalles de la película</a>
            </div>
          </div>
        `;
      });
      $('#movies').html(output);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');
  // haciendo request
  axios.get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=98325a9d3ed3ec225e41ccc4d360c817")
    .then(function (response) {
    let movie = response.data;
    //console.log(movie); para ver si funcionaba
    let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Género:</strong> ${movie.genres[0].name}, ${movie.genres[1].name}</li>
              <li class="list-group-item"><strong>Lanzamiento:</strong> ${movie.release_date}</li>
              <li class="list-group-item"><strong>Rating:</strong> ${movie.vote_average}</li>
              <li class="list-group-item"><strong>Duración:</strong> ${movie.runtime} min.</li>
              <li class="list-group-item"><strong>Productora:</strong> ${movie.production_companies[0].name} min.</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.overview}
            <hr>
            <a href="http://imdb.com/title/${movie.imdb_id}" target="_blank" class="btn btn-primary">Ver en IMDB</a>
            <a href="buscador.html" class="btn btn-default">Volver a la búsqueda</a>
          </div>
        </div>
    `;
    $('#movie').html(output);
    })
    .catch(function (error) {
      console.log(error);
    });
}



//Funcion de validar

function validar (){
  var  nombre, email, expresion, texto;
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  texto = document.getElementById("message").value;

  expresion = /\w+@\w+\.+[a-z]/;


  if(nombre === ""){
    alert("El campo nombre está vacío");
    return false;
  }
  else if(email === ""){
    alert("El campo correo está vacío");
    return false;
  }
  else if(texto === ""){
    alert("El campo de texto está vacío")
    return false;
    }
  else if(nombre.length>30){
    alert("El nombre es muy largo");
    return false;
  }
  else if(correo.length>100){
    alert("El correo es muy largo");
    return false;
  }
  else if(texto.length<4){
    alert("Mensaje muy corto");
    return false;
  }
  else if(!expresion.text(correo)){
    alert("El correo tiene un formato válido")
    return false;
  }
}