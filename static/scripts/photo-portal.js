// Requirement 5.2
function validate_data() {
  // hint: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/value
  // Get the search_select value and search_input value
  // Use document.getElementById()
  // return false if the data validation checks fail. Also raise appropriate alert.
  // return true if the data validation checks pass.

  var search_select = document.getElementById("search_select").value;
  var search_input = document.getElementById("search_input").value.trim();

  if (search_select == "Date") {
    var date_pattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!date_pattern.test(search_input)) {
      alert("Date format should be MM/DD/YYYY");
      return false;
    }
  } else {
    if (search_input == "") {
      alert(search_select + " should not be empty");
      return false;
    }
  }

  return true;
}

function show_photo_details(photo_name, date_taken, tags) {
  alert("Photo:" + photo_name + " date_taken:" + date_taken + " tags:" + tags);
}


// Requirement 4.3 - Implement the preview_photo method that displays the photo in modal
function preview_photo(photo_name) {
    var modal_body = document.getElementById("image-modal-body");
    modal_body.innerHTML = '<img src="/static/images/photos/' + photo_name + '" class="img-fluid">';
}


function show_settings() {
  alert("Settings called.");
}

function logout() {
  document.getElementById("settings-and-logout-form").submit();
}
