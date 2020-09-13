function atomPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd");
  Logger.log(response.getContentText());
  
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(14,5).setValue([d.cosmos.usd]);
}
