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