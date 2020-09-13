function xlmPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=stellar&vs_currencies=usd");
  Logger.log(response.getContentText());
  
  
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1,2).setValue(d.stellar.usd);
}
