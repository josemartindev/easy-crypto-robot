const axios = require('axios')
const colors = require('colors');
const url_BTC = "https://data.messari.io/api/v1/assets/btc/metrics"
const eur = 0.85202852 // Euro's price of 30/03/2021

const getData = async () => {
    console.log("Crypto Robot:".underline.yellow, "🕒 " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
    await axios.get(url_BTC, { headers: { "x-messari-api-key": "" }
    }).then((res) => {
        console.log("BTC: ".green, (res.data.data.market_data.price_usd * eur).toString().substr(0, 8).magenta);
    }).catch((err) => console.log("ERROR: ", err) )
}

getData();
setInterval(function () { getData(); }, 30000); // every 30 seconds
