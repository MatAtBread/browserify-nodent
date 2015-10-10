async function sleep(t) {
    setTimeout(function () {
         async return null;
    }, t);
}

/* Async http GET */
async function httpGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status < 400) {
             async return xhr.responseText;
        } else {
             async throw new Error("HTTP "+xhr.status+"\n"+xhr.statusText);
        }
    };
    xhr.open("get", url, true);
    xhr.send();
}

window.onload = function () {
    var ping = document.createElement("button");
    ping.innerText = "ping";
    ping.onclick = function () {
				try {
							document.body.innerHTML = await httpGet("http://www.example.com/fail-404");
		    } catch (ex) {
		        alert(ex);
		    }
    };
    document.body.appendChild(ping);
    await sleep(1000);
    var pong = document.createElement("button");
    pong.innerText = "pong";
    pong.onclick = function () {
        document.body.innerHTML = await httpGet("http://www.example.com/");
    };
    document.body.appendChild(pong);
};
