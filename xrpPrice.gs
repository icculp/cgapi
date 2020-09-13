function xrpPrice() {
  var response = UrlFetchApp.fetch("https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd");
  Logger.log(response.getContentText());
  
  
  var fact = response.getContentText();
  var d = JSON.parse(fact)
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(1,2).setValue([d.ripple.usd]);
}
