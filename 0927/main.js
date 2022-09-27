
// Using class in real world setting
class UrlBuilder {
    constructor(base) {
        this.base = base;
        this.params = {};
    }

    addParam(key, value) {
        this.param[key] = value;
    }
}


// Very explicit using request and response (Fetch API)

/** This also works with constant
 * const request = new Request("httlps://meowfacts.herokuapp.com/");
 * fetch(request)
 */

// get resource from this server
 fetch("https://meowfacts.herokuapp.com/?count=3", {
    method: "GET",
    headers: {"Content-Type": "application/json"}
})
// using promises
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((json) => {
        console.log(json.data[0]);
        })
    .catch((error) => {
        console.error(error);
    }); // this is the end of line 5

