function dotPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd");
  Logger.log(response.getContentText());
  
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(15,5).setValue([d.polkadot.usd]);
}
