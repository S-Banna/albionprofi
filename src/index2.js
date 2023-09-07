function get_information(link, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", link, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

let dump = document.getElementById("dump");

get_information(
  "https://west.albion-online-data.com/api/v2/stats/view/T6_CAPEITEM_FW_FORTSTERLING,T6_CAPEITEM_FW_LYMHURST,T6_CAPEITEM_FW_BRIDGEWATCH,T6_CAPEITEM_FW_MARTLOCK,T6_CAPEITEM_FW_THETFORD,T6_CAPEITEM_FW_CAERLEON,T6_CAPEITEM_FW_BRECILIEN,T6_CAPEITEM_AVALON,T6_CAPEITEM_HERETIC,T6_CAPEITEM_UNDEAD,T6_CAPEITEM_KEEPER,T6_CAPEITEM_MORGANA,T6_CAPEITEM_DEMON?locations=blackMarket,Lymhurst&qualities=2",
  function (text) {
    dump.innerHTML = text;
  }
);
