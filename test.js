

class Movie {
  constructor(name, date, genre, duration){
    this.name = name;
    this.date = date;
    this.genre = genre;
    this.duration = duration;
  }
  // console.log()
}


function menu () {
}

function displayList(array){
  let orgArray = [];

  }


function makeList(name, date, genre, duration){
  let list = [];
  // let movie = new Movie(prompt('Name: '),prompt( 'Date Released'),prompt('genre: '), prompt('duration'));
  let movie = new Movie(name, date, genre, duration);
  list.push(movie);
  list.sort(function(a, b) {
    return a.date - b.date;
    // if (a.date < b.date
    //   ) return -1;
    // if (a.date > b.date
    //   ) return 1;
  });

   return list;
}
// let cat = makeList.name;

console.log(makeList('Ant', 1992, 'Comedy', 90));
console.log(makeList('Dog', 1997, 'Drama', 60));

// make a lot of