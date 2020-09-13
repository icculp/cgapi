function linkPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=chainlink&vs_currencies=usd");
  Logger.log(response.getContentText());
    
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1,1).setValue([d.chainlink.usd]);
}
