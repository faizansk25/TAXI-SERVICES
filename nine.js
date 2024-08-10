// Replace with your Google Sheet URL
var sheetURL = "YOUR_GOOGLE_SHEET_URL";

function doPost(e) {
  var sheet = SpreadsheetApp.openByUrl(sheetURL).getActiveSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var newRow = headers.map(function(header) {
    return e.parameter[header] || "";
  });
  sheet.appendRow(newRow);
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
