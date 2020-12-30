// API Key: dc7d76692b192b772ecce4d938dfa475 for tmdb
$(".dropdown-trigger").dropdown();
// navigator.geolocation.getCurrentPosition(function(position){
//   console.log(position.coords.latitude)
//   console.log(position.coords.longitude)
// })
$(".restaurants").hide();
$(".location").hide();

var nextButton = $(".send-button");
var displayMovie = $(".movie-display");

///////////CLEAR FUNCTION USED TO EMPTY ELEMENTS BEFORE PRODUCING NEW CONTENT. CALLED RIGHT AFTER EVENTLISTENER///////////////////
function clear() {
  $(".movie-title").empty();
  $(".movie-poster").empty();
  $(".movie-synopsis").empty();
  $(".movie-rating").empty();
  $(".movie-stream").empty();
  $(".movie-rent").empty();
}
//////////////FUNCTION FOR GRABING CITY ID FROM COURT//////////////////////
function cityIdSnatcher() {
  $(".cityOptions").on("click", function (event) {
    var cityId = $(event.target).val();
    console.log(cityId);
  });
}

var objectStreem = {
  "HBO Max": "https://www.hbomax.com/",
  "HBO Now": "https://play.hbonow.com/page/urn:hbo:page:home",
  DIRECTV: "https://www.directv.com/",
  "Sling TV": "https://watch.sling.com/",
  FXNow: "https://fxnow.fxnetworks.com/",
  "Disney Plus": "https://www.disneyplus.com/",
  Netflix: "https://www.netflix.com/",
  "Spectrum On Demand": "https://www.spectrumondemand.com/",
  fuboTV: "https://www.fubo.tv/welcome",
  Starz: "https://www.starz.com/us/en/",
  Hulu: "https://www.hulu.com/",
  IndieFlix: "https://www.indieflix.com/",
  "Max Go": "https://play.maxgo.com/page/urn:hbo:page:home",
  "Amazon Prime Video": "https://www.amazon.com/Amazon-Video/",
  TNT: "https://www.tntdrama.com/",
  TBS: "https://www.tbs.com/",
  "USA Network": "https://www.usanetwork.com/",
};

var objectRent = {
  "Apple iTunes": "https://tv.apple.com/",
  "Google Play Movies": "https://play.google.com/store/movies?hl=en_US&gl=US",
  "Amazon Video":
    "https://www.amazon.com/gp/video/storefront/ref=atv_scout_redirect#ace-g7448806443",
  YouTube: "https://www.youtube.com/",
  Vudu: "https://www.vudu.com/",
  "Microsoft Store": "https://www.microsoft.com/en-us/store/movies-and-tv",
  Redbox: "https://www.redbox.com/",
  DIRECTV: "https://www.directv.com/",
  "AMC on Demand": "https://www.amctheatres.com/on-demand",
};
//////////////////// DISPLAYCONTROL PRODUCES ELEMENTS TO THE SCREEN IF CLASS === YES//////////////////
function displayControlMovie() {
  $(".movieDrop").on("click", function (event) {
    if ($(event.target).attr("class") === "yes") {
      $(".showMovie").css("display", "block");
      $(".random-button-1").css("display", "flex");
      $(".random-button-1").css("justify-content", "center");
      $(".phase1IfYes").css("display", "none");
    }
    if ($(event.target).attr("class") === "no") {
      $(".movie").hide();
      $(".movie-display").hide();
      $(".container").prepend($(".location").show());
    }
    nextButton.removeClass("hide");
  });
}
displayControlMovie();

/////////////////////EVENT LISTENER SELECTS RANDOM GENRE AND PLUGS IT INTO STREEM FUNCTION////////////////////////////
$(".rando").on("click", function () {
  clear();
  var randomGenre = [
    "28",
    "12",
    "16",
    "35",
    "99",
    "18",
    "10751",
    "14",
    "27",
    "10402",
    "9648",
    "10749",
    "878",
    "53",
    "10752",
    "37",
  ];
  var randomNumber = Math.floor(Math.random() * 15);
  var genre = randomGenre[randomNumber];
  var movieList =
    "https://api.themoviedb.org/3/discover/movie?api_key=dc7d76692b192b772ecce4d938dfa475&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=" +
    genre;
  $.ajax({
    url: movieList,
    method: "GET",
  }).then(function (movies) {
    console.log(movies);
    var genreRandomMovie = Math.floor(Math.random() * 19);
    var movieId = movies.results[genreRandomMovie].id;
    ///calls streem function with movieId as variable
    streem(movieId);
  });
  displayMovie.removeClass("hide");
});
///////////////////Click Event Targets Genre and plugs in streem Function///////////////////////////
$(".genreDropdown").on("click", function (event) {
  clear();
  var textContent = $(event.target).text(); //line 99 + 100 change placholder to clicked on text.
  $(".dropdown-genres").text(textContent);
  var genre = $(event.target).attr("data-id");
  console.log(genre);
  var movieList =
    "https://api.themoviedb.org/3/discover/movie?api_key=dc7d76692b192b772ecce4d938dfa475&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=" +
    genre;
  $.ajax({
    url: movieList,
    method: "GET",
  }).then(function (movies) {
    var genreRandomMovie = Math.floor(Math.random() * 19);
    var movieId = movies.results[genreRandomMovie].id;
    ///calls streem function with movieId as variable
    streem(movieId);
  });
  displayMovie.removeClass("hide");
});

// Function For Streeming Data//Insert movieId where x is.
function streem(x) {
  var streemLocation =
    "https://api.themoviedb.org/3/movie/" +
    x +
    "?api_key=dc7d76692b192b772ecce4d938dfa475&language=en-US&append_to_response=watch%2Fproviders";
  $.ajax({
    url: streemLocation,
    method: "GET",
  }).then(function (streeming) {
    console.log(streeming);
    var poster = streeming.poster_path; // For poster
    var title = streeming.title; //For title
    var synops = streeming.overview; //For Synopsys
    var voterRate = streeming.vote_average; // For voteer rating
    $(".movie-title").text(title);
    $(".movie-poster").append(
      $("<img>").attr("src", "https://image.tmdb.org/t/p/w500" + poster)
    );
    $("img").attr("height", "320vw");
    $(".movie-synopsis").append(synops);
    $(".movie-rating").append("Voter Rating: " + voterRate);
    /////////////////////Streeming And Rental Results/////////////////////////////////
    var subscription = streeming["watch/providers"].results.US.flatrate;
    try {
      for (var i = 0; i < subscription.length; i++) {
        for (
          var index = 0;
          index < Object.entries(objectStreem).length;
          index++
        ) {
          if (
            subscription[i].provider_name ===
            Object.entries(objectStreem)[index][0]
          ) {
            $(".streaming-header").text("Subscription Availability");
            $(".movie-stream").append(
              $("<ul>").append(
                $("<a>")
                  .attr("href", Object.entries(objectStreem)[index][1])
                  .text(subscription[i].provider_name)
                  .css({ "margine-left": "1vw", "margin-right": "1vw" })
                  .attr("target", "_blank")
              )
            );
            console.log(Object.entries(objectStreem)[index][1]);
          }
        }
      }
    } catch (err) {
      $(".movie-stream").append(
        $("<div>").text("No known subscription service.")
      );
    }
    var rental = streeming["watch/providers"].results.US.rent;
    try {
      for (var i = 0; i < 4; i++) {
        // $(".movie-display").append($("<a>").text("RENT: " + rental[i].provider_name))
        for (
          var index = 0;
          index < Object.entries(objectRent).length;
          index++
        ) {
          if (
            rental[i].provider_name === Object.entries(objectRent)[index][0]
          ) {
            $(".rental-header").text("Rental Availability");
            $(".movie-rent").append(
              $("<ul>").append(
                $("<a>")
                  .attr("href", Object.entries(objectRent)[index][1] + title)
                  .text(rental[i].provider_name)
                  .css({ "margine-left": "1vw", "margin-right": "1vw" })
                  .attr("target", "_blank")
              )
            );
            // $("ul").append($("<a>").attr( "href", Object.entries(objectRent)[index][1]).text(rental[i].provider_name).attr("target", "_blank"))
            console.log(Object.entries(objectRent)[index][1]);
          }
        }
      }
    } catch (erro) {
      $(".movie-rent").append(
        $("<div>").text("No known subscription service.")
      );
    }
  });
}

////////////////////////////FUNCTION FOR DIRECT MOVIE SEARCH/////////////////////////////
//   $(".search").on("click", function(){
// var movieSearch = $("#prompt1").val()
// var searchName = "https://api.themoviedb.org/3/search/movie?api_key=dc7d76692b192b772ecce4d938dfa475&query=" + movieSearch
//   $.ajax({
//       url: searchName,
//       method: "GET"
//   }).then(function(movieName){
//     movieName.results[i].id

//   })

// })

// Restaurant Code Here

$(".city-search-btn").on("click", function (event) {
  $(".city-search-btn").hide();
  $(".city-drop").show();
  var searchedCity = $(".search-city").val();
  var cityUrl =
    "https://developers.zomato.com/api/v2.1/cities?q=" + searchedCity;

  $.ajax({
    method: "GET",
    url: cityUrl,
    headers: {
      "user-key": "b23ce13853bea993b459518ec134302f",
      "content-type": "application/json",
    },
    //<li><a href="#!" data-foodid="1">American</a></li>
  }).then(function (city) {
    for (var i = 0; i < city.location_suggestions.length; i++) {
      $(".city-option").append(
        $("<li>")
          .attr("href", "#!")
          .text(city.location_suggestions[i].name)
          .addClass("cityOptions")
          .val(city.location_suggestions[i].id)
      );
    }
    $(".cityOptions").on("click", function (event) {
      $(".container").prepend($(".restaurants").show());
      // $(".location").hide();
      var cityId = $(event.target).val();
      $(".food-option").on("click", function (event) {
        $(".restaurant-display").removeClass("hide")
        var cuisineid = $(event.target).attr("data-foodid");
        var cuisineurl =
          "https://developers.zomato.com/api/v2.1/search?entity_id=" +
          cityId +
          "&entity_type=city&count=20&radius=20%2C000&cuisines=" +
          cuisineid +
          "&sort=rating&order=desc";
        $.ajax({
          method: "GET",
          url: cuisineurl,
          headers: {
            "user-key": "b23ce13853bea993b459518ec134302f",
            "content-type": "application/json",
          },
        }).then(function (response) {
          try{
            var randomeRestaurant = Math.floor(Math.random() * response.restaurants.length)
            console.log(response)
            $(".restaurant-name").text(response.restaurants[randomeRestaurant].restaurant.name);
            $(".restaurant-cuisines").text(response.restaurants[randomeRestaurant].restaurant.cuisines);
            $(".restaurant-city").text(response.restaurants[randomeRestaurant].restaurant.location.city);
            $(".restaurant-address").text(response.restaurants[randomeRestaurant].restaurant.location.address);
            $(".restaurant-rating").text(response.restaurants[randomeRestaurant].restaurant.user_rating.aggregate_rating);
            $(".restaurant-menu").attr("href", response.restaurants[randomeRestaurant].restaurant.menu_url)
            $(".restaurant-menu").text("View Menu")
            $(".restaurant-menu").attr("target","_blank")
            $(".restaurant-featuredimage").attr("src", response.restaurants[randomeRestaurant].restaurant.featured_image)////broken?
            // $(".restaurant-featuredimage").attr("height", "320vw")
            $(".restaurant-contact").text(response.restaurants[randomeRestaurant].restaurant.phone_number);
          }catch(err){
            $(".restaurant-name").text("No Restaurants Found!")
          }
          
           
        });
      });
    });
  });
});

function cityIdSnatcher() {
  $(".cityOptions").on("click", function (event) {
    var cityId = $(event.target).val();
    console.log(cityId);
  });
}
