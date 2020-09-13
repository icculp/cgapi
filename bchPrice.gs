function bchPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin-cash&vs_currencies=usd");
  Logger.log(response.getContentText());
  
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(12,5).setValue([d['bitcoin-cash'].usd]);
}
