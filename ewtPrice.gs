function ewtPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=energy-web-token&vs_currencies=usd");
  Logger.log(response.getContentText());
  
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(11,5).setValue([d['energy-web-token'].usd]);
}
