var express = require("express");
var app = express();
var expressWs = require("express-ws")(app);
var bodyParser  =  require("body-parser");


app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
 });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*
app.use(function(req, res, next){
    console.log("middleware");
    req.testing = "testing";
    return next();
});
*/

app.get('/', function(req, res, next){
  console.log('get route', req.testing);
  res.end();
});

 app.ws('/wsapi/getCurrentStockSummary', function(ws,req){
   
    ws.on("message" , function (data) {
        console.log(data);
    });
   
    setInterval(function updateStockSummary() {
      try{
        ws.send(JSON.stringify(getStockSummaryData()));
        console.log("sending message");
      }catch(e){
          console.log(e);
      }
    } ,1000);
});

app.get("/getStocksSummary" , function (req, res) {
    res.send(JSON.stringify(getStockSummaryData()));
})

app.get("/getStocks" , function(req, res){
   res.send(JSON.stringify(getStockList()));
});

app.get("/getStocks/:symbol" , function(req, res){
   var thisStock =  getStockList().filter(function(stock){
        return stock.symbol === req.params.symbol;
    })[0];
    res.send(JSON.stringify(thisStock));
});


app.post("/saveStock" , function(req, res){
      var stock = req.body.stock;
      saveStock(stock);
      res.send(stock);
})


//var wsInstance = wsAppInstance.getWss();
var listStockSummary = [  { symbol: "THYO", change: 0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "TRCB", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "TAV", change: 0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "BOSCH", change: 0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "ADEL", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "PETKIM", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "TURKC", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "TMAT", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "DEMAN", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 },
      { symbol: "ASYA", change: -0.05, changeInPercent: 22, lastTradePriceOnly: 12.2 }]

  var stocklist = [
      { symbol: "THYO", open:5.18, prevClose:6, volume: 12000 , name:"Turk hava yolları"},
      { symbol: "TRCB", open:5.18, prevClose:6, volume: 15000 ,name:"TRCB"},
      { symbol: "TAV", open:5.18, prevClose:6, volume: 12400 ,name:"TAV havalimanları"},
      { symbol: "BOSCH", open:5.18, prevClose:6, volume: 14000 ,name:"Bosch"},
      { symbol: "ADEL", open:5.18, prevClose:6, volume: 120060 ,name:"Adel Kırtasiye"},
      { symbol: "PETKIM", open:5.18, prevClose:6, volume: 120700 ,name:"Petkim Petrol A.Ş"},
      { symbol: "TURKC", open:5.18, prevClose:6, volume: 12007 ,name:"Turkcell Telekom"},
      { symbol: "TMAT", open:5.18, prevClose:6, volume: 120440 ,name:"TEMAT Kırtasiye"},
      { symbol: "DEMAN", open:5.18, prevClose:6, volume: 12000 ,name:"DEMAN teksil"},
      { symbol: "ASYA", open:5.18, prevClose:6, volume: 12000 ,name:"Asya İnsaatt"}
    ];
  


function getStockSummaryData() {
    
    return  listStockSummary.map(function(stock){
           var  x = Math.random()*(6-0) -0
          stock.change = Math.random() * (x - 2) -2;
          stock.changeInPercent = Math.random() * (50 - 0) + 0;
          stock.lastTradePriceOnly = Math.floor(Math.random() * (100 - 10) + 10);
          return stock;
      })
    
}

function getStockList(){
    return stocklist;
}

function saveStock(stock){
   for(var i = 0; i < stocklist.length; i++){
       if(stocklist[i].symbol === stock.symbol){
           stocklist[i] = stock;
           return stock;
       }
   }

   stocklist.push(stock)
   addStokSummary(stock.symbol);
   return stock;
   
}

function addStokSummary(symbol){
          var stock = {}
          stock.symbol = symbol; 
          var  x = Math.random()*(6-0) -0
          stock.change = Math.random() * (x - 2) -2;
          stock.changeInPercent = Math.random() * (50 - 0) + 0;
          stock.lastTradePriceOnly = Math.floor(Math.random() * (100 - 10) + 10);
          listStockSummary.push(stock);
}

app.listen(3100);  