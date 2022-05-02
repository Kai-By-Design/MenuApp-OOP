/*
Coding Steps:
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements.
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/


// create a menu
// Menu of movie Titles
// Admin:
//// Prompt User to add movie Titles
//// Display Top 3 Movie Titles of List
//// Display All Movie Titles
//// Delete Movie Titles

// User:
//// Prompt User to Select A movie Title
//// Search through titles (flip through 3 movies at a time until end of list)
//// Hit Play (Display a message) - toast and Modal Review

/*
class Modal {
  constructor (message) {
    this.message = message;
    this.isOpen = false;
  }

  dismiss() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
    this.setText();
  }

  setText() {
    document.getElementById('modalText').innerHtml(this.message);
  }
}
*/
/*
const modal = new Modal('enjoy your movie');
// button onclick calls modal.open()
document.getElementById('whateverId').innerHtml = modal.isOpen && <div>
  <p id='modalText'></p>
</div>
<div id="whateverId"></div>
Movie
class Movie {
  constructor (data) {
    this.title = data.title;
    this.image = data.image;
  }
}
const whatever = new Movie({ title:'title', year: 2000 })

User Class
  Admin Subclass
  */


  class Movie {
    constructor(name, genre, year, duration) {
      this.title = name;
      this.genre = genre;
      this.year = year;
      this.duration = duration;

    }

    describe() {
      console.log( `${this.name} | ${genre} | ${this.year} | ${this.duration} min. long`);
    }
  }

  class MovieList(){
    constructor(name){
      this.name = name;
      this.moiveList = [];
    }

    addMovie(movie) {
      if(movie instanceof Movie) {
        this.moive.push(movie);
      } else {
        throw new Error(`You can only add instance of Movie. Argument in not a movie: ${movie}`)
      }
    }

    describe(){
      return `Movie List: ${this.movieList}`;
    }

    // new Movie(prompt("What is the title of the movie?"), prompt("What year was it produced?"), prompt("What genre?"));
  }

  class Menu( ){
    constructor() {
      this.movieList = [];
      this.selectMovie = null;
    }

    //Top Down Development Approach
    start() {
      let selection = this.showMainMenuOptions();
      while (selection != 0) {
        switch(selesction) {
          case '1':
            this.createMovie();
            break;
          case '2':
            this.viewMovie();
            break;
          case '3':
            this.deleteMovie();
            break;
          case '4':
            this.displayAllMovies();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
      }

      alert('Goodbye!');
    }

    showMainMenuOptions() {
      return prompt(`
      0) exit
      1) Create New Movie
      2) View Movie
      3) Delete Movie
      4) Display Movie List
      `)
    }

    displayAllMovies() {
      let movieString = '';
      for (let i = 0; i < this.movieList.length; i++) {
        movieString += i + ') ' + this.movieList[i].name + '\n';
      }
      alert(movieList);
    }

    createMovie() {
      let name = prompt('Enter name of movie list: ')
      this.movieList.push(new MovieList(name));
    }

    viewMovie() {
      let index = prompt('Enter index of the movie List you wish to view: ');
      if (index > -1 && index < this.movieList.length) {
        this.selectedList = this.movieList[index];
        let description = 'Movie List Name: ' + this.selectedList.name + '\n';

        for (let i = 0; i < this.selectedList.movies.length; i++) {
          description += i + ') ' + this.selectedList.movies[i].name + ' - ' + this.selectedList.[i].duration + ' - ' + this.selectedList[i].year
        }
      }
    }



  }
/*
 function createList (){
   let movieList = [];
  while(movieList != [])
   const newMovie = new Movie(
     prompt("What is the title of the movie?"),
     prompt("What year was it produced?"),
     prompt("What genre?"),
     prompt("How long is it in minutes?"));
     movieList.push(newMovie);
    //  if(movieList.length === 0){
    //    return "-  No Movies Have Been Added  -"
    //  } else
     return movieList;

 }
 */
 console.log(createList());
//  console.log(createList());

  // class User {
  //   constructor(type) {
  //     this.type = type;
  //     // this.buildList =
  //   }
  // }
  // let movie = new Movie ();
  // const test = movies();
  // console.log(test);





  // ----------------  SUDO CODE  --------------
  // Generate a List of Movies
  // Each Movie has attributes: Title, Genre, Release Date, Duration (in minutes)
  // Movie List is sorted by Genre(alphabetical) and Release Date(new to old)
  //
  // Movie Genre Categories: Action, Comedy, Drama, Horror, Romance
  // List is filtered by Genre Categories:  Only showing movies in those categories

  //Prompt:
  // 1) Add a Movie
  // 2) Display Movie List
  // 3) Delete Movie
  // 4) Display Movie List of a specific Genre

  ////1) -> new movie, add to movie list
  /// ?) Return to Main Menu