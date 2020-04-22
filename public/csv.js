function getRating(csv, fileName) {
  var file;
  var link;

  // CSV file
  file = new Blob([csv], { type: "text/csv" });

  // Download link
  link = document.createElement("a");

  // File name
  link.download = fileName;

  // Create a link to the file
  link.href = window.URL.createObjectURL(file);

  // Hide download link
  link.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(link);

  // Click download link
  link.click();
}

function createCSV(fileName) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

  // Download CSV file
  getRating(csv.join("\n"), fileName);
}
