console.log('JavaScript linked');
// Please refer to the "Required Tasks in the assignments PDF"

// html for the add cheep create function
/*
  <div class="col">
    <div class="card shadow-sm">
      <img class="bd-placeholder-img card-img-top" src="ALBUM IMAGE SELECTION HERE"/>
      <div class="card-body">
        <h5 class="card-title">ALBUM DESCRIPTION HERE</h5>
        <p class="card-text">ALBUM TITLE HERE</p>
      </div>
    </div>
  </div>
*/

// an event listener to the "submit" event on the form
document.getElementById('album-form').addEventListener('submit', function (evt) {
  // prevent the default form submission
  evt.preventDefault();

  // get form inputs
  let title = evt.target.elements['album-title'];
  let description = evt.target.elements['album-description'];
  let albumArt = evt.target.elements['album-art'];
  let errMsg = '';

  // validate title
  if (title.length === 0 || title.length > 60) {
    errMsg += '<p>Album Title must be between 1 and 60 characters</p>';
    evt.target.elements['album-title'].classList.add('is-invalid');
} else {
    evt.target.elements['album-title'].classList.remove('is-invalid');
}

});