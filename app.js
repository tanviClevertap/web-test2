var clevertap = {
    event: [],
    profile: [],
    account: [],
    onUserLogin: [],
    notifications: [],
    privacy: []
};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
 clevertap.account.push({ id: "R74-K9K-R55Z" });
//clevertap.account.push({id: "WWW-WWW-WWRZ"});
// clevertap.onUserLogin.push({
//     Site: {
//         // Email: `${Math.ceil(Math.random() * 100)}@gmail.com`
//         Email: "luffy25@gmail.com"
//     }
// });
// clevertap.profile.push({
//     Site: {
//         // Email: `${Math.ceil(Math.random() * 100)}@gmail.com`
//         // Email: "luffy24@gmail.com"
//     }
// });
// clevertap.event.push("Hello")
//set the flag to true, if the user agrees to share their IP data
(function () {
    console.log(clevertap);
    var wzrk = document.createElement("script");
    wzrk.type = "text/javascript";
    wzrk.async = true;
    wzrk.src = "https://frost060.github.io/a.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wzrk, s);
})();

function onClickOUL() {
    clevertap.onUserLogin.push({
        Site: {
            Email: `qw${Math.ceil(Math.random() * 10002312)}@gmail.com`
            // Email: "799726789@gmail.com"
        }
    });
    getLS();
}

function onClickOULSame() {
    let value = document.getElementById("constantOUL").value;
    clevertap.onUserLogin.push({
        Site: {
            // Email: `${Math.ceil(Math.random() * 100012)}@gmail.com`
            Email: `${value}@gmail.com`
        }
    });
    getLS();
}

function onClickPP() {
    clevertap.profile.push({
        Site: {
            Email: `as${Math.ceil(Math.random() * 10002320)}@gmail.com`
        }
    })
    getLS();
}

function onClickPPSame() {
    let value = document.getElementById("constantPP").value;
    clevertap.profile.push({
        Site: {
            Email: `${value}@gmail.com`
        }
    })
}

function onClickEP() {
    clevertap.event.push("Product Eaten");
    clevertap.event.push("Message Received");
    clevertap.event.push("Message Viewed");
    clevertap.event.push("Product add to cart");
    getLS();
}

function pushSelectedEvents() {
    var adc = document.getElementById("adc").checked;
    var ps = document.getElementById("ps").checked;
    var pv = document.getElementById("pv").checked;

    if(!adc && !ps && !pv) {
        alert("Select atleast one event");
        return;
    }
    if(adc) clevertap.event.push("Added to Cart");
    if(ps) clevertap.event.push("Product Sold");
    if(pv) clevertap.event.push("Product Viewed");

    document.getElementById("adc").checked = false;
    document.getElementById("ps").checked = false;
    document.getElementById("pv").checked = false;
    getLS();
}

function getLS() {
    var LRU_CACHE = decodeURIComponent(localStorage["LRU_CACHE"]);
    var WZRK_K = decodeURIComponent(localStorage["WZRK_K"]);
    var WZRK_G = decodeURIComponent(localStorage["WZRK_G"]);
    var WZRK_EV = decodeURIComponent(localStorage["WZRK_EV"]);
    var WZRK_ARP = decodeURIComponent(localStorage["WZRK_ARP"]);

    var data = `<div>WZRK_K: ${WZRK_K}</div><br /><div>WZRK_G: ${WZRK_G}</div><br /><div>LRU_CAHCE: ${LRU_CACHE}</div><br /><div>WZRK_EV: ${WZRK_EV}</div><br /><div>LRU_CACHE_LENGTH: ${LRU_CACHE !== "undefined" ? (JSON.parse(LRU_CACHE)).cache.length : 0}</div><br /><div>WZRK_ARP: ${WZRK_ARP}</div>`;

    document.getElementById("lsData").innerHTML = data;
}

function clearLS() {
    localStorage.clear();
    getLS();
}
