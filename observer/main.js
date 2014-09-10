+(function($, window, document, undefined) {

  // Extend an object with an extension
  function extend(extension, obj) {
    for (var key in extension) {
      obj[key] = extension[key];
    }
  }

  // References to our DOM elements
  var addBtn = $('#addNewObserver'),
    controlCheckbox = $('#addNewObserver'),
    container = $('#observersContainer thead'),
    broadcast = $('#BroadCast'),
    observers = [];


  // Create Subject
  var subject = new pattern.Subject();

  function extend(extension, obj) {
    for (var key in extension) {
      obj[key] = extension[key];
    }
  }

  /*
   *   Creates new Observer
   */
  addNewObserver = function addNewObserver() {
    var count = subject.observers.count();
    var newObserver = "Observer-" + count;

    var check = $('<tr>', {
      id: newObserver,
      html: observerHTML(1, newObserver),
      "data-recieve": true
    })

    // Override with custom update behaviour
    check.update = function(value) {
      $(this).find('.notification').html($('#message').val())
    }

    // Extend the checkbox with the Observer class
    extend(new pattern.Observer(), check);

    // Add new observer
    subject.addObserver(check);

    // Append the item to the container
    container.append(check);
  }

  observerHTML = function(place, name) {
    var html = "<th><input type='checkbox' checked/> </th><th>" + name + "</th><th class='notification'></th> ";
    return html;
  }

  /*
   *   Click event for broadcast button
   */
  broadcast.click(function(e) {
    e.preventDefault();
    var isNotified = $('#observersContainer tr');

    // Syncs notification box with recieve data value
    isNotified.each(function(index, value) {
      var observing = $(this).find('input').is(':checked');
      if(!observing) {
        $(this).data('recieve', false);
      } else {
        $(this).data('recieve', true);
      }
    })

    subject.notify(subject);

  });

  /*
   *  Create New Observer on Click Event
   */
  controlCheckbox.click(function(e) {
    e.preventDefault();
    addNewObserver();
  });

  // For testing
  window.pattern;

})(jQuery, window, document);