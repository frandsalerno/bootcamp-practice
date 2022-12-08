var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Add Autocomplete widget here
//
var availableTags = [
  'jQuery',
  'Vue JS',
  'React',
  'PHP',
  'Python',
  'Swift',
  'Ruby',
  'C++',
  'Java',
  'Vanilla JS'
];

$('#skill-name').autocomplete({
  source: availableTags
});


// Add Datepicker widget here
//

$( function() {
  $( "#datepicker" ).datepicker();
} );
