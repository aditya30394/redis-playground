const client = require('./client');

async function init() {
    var result = await client.get("msg:3");
    console.log("Result -> ", result);

    await client.set("msg:js", "Hello from JS");
    console.log("Message saved");
    result = await client.get("msg:js");
    console.log("Result -> ", result);

    // expire in 10 seconds
    await client.expire("msg:js", 10);
}

init();