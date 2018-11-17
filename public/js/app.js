(async () => {

    var token = localStorage.getItem("jwt");

    var res = await fetch(`api/session/check`, {
        headers: {
            "jwt": token
        }
    });

    var el;

    if (res.ok) {

        el = '#wrap1';

        localStorage.setItem("jwt", res.headers.get("jwtToken"));

    } else {

        el = '#wrap';

    }

    var div = document.querySelector(el);
    div.style.display = "initial";

})();

var form = document.querySelector('#log');

form.addEventListener('submit', async function(e) {
    e.preventDefault();

    var v = new FormData(this);
    var data = {};

    for (const [key, value] of v.entries()) {
        data[key] = value;
    }

    var res = await fetch(`api/log/in`, {
        method: "post",
        body: JSON.stringify(data)
    });

    if (!res.ok) {

        var div = document.querySelector('#err');
        div.style.display = "initial";

        setTimeout(function() {
            div.style.display = "none";
        }, 3000);

        return;

    }

    localStorage.setItem("jwt", res.headers.get("jwtToken"));

    var div = document.querySelector('#wrap1');

    div.style.display = "initial";

    var div = document.querySelector('#wrap');

    div.style.display = "none";

    form.reset();

});

var form2 = document.querySelector('#out');

form2.addEventListener('submit', async function(e) {
    e.preventDefault();

    var token = localStorage.getItem("jwt");

    var res = await fetch(`api/log/out`, {
        headers: {
            "jwt": token
        }
    });

    localStorage.removeItem("jwt");

    var div = document.querySelector('#wrap');

    div.style.display = "initial";

    var div = document.querySelector('#wrap1');

    div.style.display = "none";

});