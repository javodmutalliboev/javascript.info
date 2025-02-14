async function loadJson(url) {
    let response = await fetch(url);

    if (response.status === 200) {
        return await response.json();
    }

    throw new Error(response.status.toString());
}

/*
*
(async function () {
    try {
        let object = await loadJson("https://javascript.info/no-such-user.json");
    } catch (err) {
        alert(err);
    }
})();
* */

loadJson("https://javascript.info/no-such-user.json")
    .catch(alert); // Error: 404