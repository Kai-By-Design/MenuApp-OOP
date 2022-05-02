class Movie {
  constructor(name, genre, duration){
    this.name = name;
    this.genre = genre;
    this.duration = duration;
  }
  // Classes only get a constructor and methods
  describe(){
    return `${this.name}`;
  }
}
// let testMovie = new Movie('Cat', 'Comedy', 90);
// console.log(testMovie.describe('Cat'));
// console.log(testMovie);


// function orderMovies(list) {
//   // order list
// }

class Menu {
  constructor(){
    this.movieList = [];
  }
  // console.log(this.movieList);
  // orderMovies() {
  //   //access this.movieList
  // }

  open(){
    // calls a method we have yet to write
    let selection = this.showMenuOptions();
    while(selection != 0){
      switch(selection){
        case '1':
          this.addMovie();
          break;
        default:
          selection = 0;
      }
    selection = this.showMenuOptions();
    }
  }

  showMenuOptions(){
    // show prompt
    return prompt(`
    1) Add Movie
    `)
  }

  addMovie(){
    console.log('at the top of addmovie function')
    // let name = prompt('Enter Movie Name');
    // let genre = prompt('Enter Movie Genre');
    let duration = prompt('Enter Movie Duration in Minutes');
    console.log(this.duration);
    this.movieList.push('these');
    // this.movieList.push(new Movie(name, genre, '12121'));
    // console.log(this.movieList.map( movie => movie.name));
    console.log(this.movieList);
  }
  // console.log(this.movieList);
}

const newMenu = new Menu();
newMenu.open();
