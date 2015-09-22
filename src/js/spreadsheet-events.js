var RiseVision = RiseVision || {};
RiseVision.SpreadsheetEvents = {};

RiseVision.SpreadsheetEvents = (function() {
  "use strict";

  var events = [];

  /*
   *  Private Methods
   */

  /* Return total number of columns in data. */
  function getNumColumns(cells) {
    var len = cells.length,
      currentRow = 0,
      previousRow = 0,
      totalCols = 0;

    for (var i = 0; i < len; i++) {
      currentRow = parseInt(cells[i].gs$cell.row, 10);

      if (i === 0) {
        previousRow = currentRow;
      }

      if (currentRow === previousRow) {
        totalCols++;
      }
      else {
        break;
      }
    }

    return totalCols;
  }

  /* Return a single cell of data. */
  function getCell(index, cells) {
    return cells[index] ? cells[index].gs$cell.$t : "";
  }

  /* Return an individual donor as an object. */
  function getEvent(index, numCols, cells) {
    var individualEvent = {};

    individualEvent.title = getCell(index, cells);
    individualEvent.date = getCell(++index, cells);
    individualEvent.details = getCell(++index, cells);

    return individualEvent;
  }

  /* Add each donor to the donors array. */
  function addEvents(cells) {
    var numCols = getNumColumns(cells),
      len = cells.length,
      individualEvent;

    // Skip header and start at first cell of data.
    for (var i = numCols; i < len; i += numCols) {
      individualEvent = getEvent(i, numCols, cells);
      events.push(individualEvent);
    }
  }

  /* Display the donors. */
  function displayEvents() {
    var template = null,
      slide = null,
      title = null,
      date = null,
      details = null,
      numEvents = 8;

    if ("content" in document.createElement("template")) {
      slide = document.querySelectorAll(".slide");
      title = document.querySelector(".title");
      date = document.querySelector(".date");
      details = document.querySelector(".details");

      for (var i = 0; i < numEvents; i++) {
        title.textContent = events[i].title;
        date.textContent = events[i].date;
        details.textContent = events[i].details;

        sections[i].innerHTML = "";
        sections[i].appendChild(template.content.cloneNode(true));
        sections[i].classList.add("fade-in");
      }
    }
    else {
      console.info("The HTML template element is not supported by your browser.");
    }
  }

  /*
   *  Public Methods
   */
  function init(e) {
    var googleSheet = document.getElementById("googleSheet");

    googleSheet.addEventListener("rise-google-sheet-response", function(e) {
      addEvents(e.detail.cells);
      displayEvents();
    });

    googleSheet.go();
  }

  return {
    "init": init
  };
})();
