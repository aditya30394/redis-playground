const client = require('./client');

async function init() {
    await client.lpush("messages", 1);
    await client.lpush("messages", 2);
    await client.lpush("messages", 3);
    await client.lpush("messages", 4);
    await client.lpush("messages", 5);
     
    var result = await client.rpop("messages");
    console.log("Result -> ", result);

    result = await client.rpop("messages");
    console.log("Result -> ", result);

    result = await client.rpop("messages");
    console.log("Result -> ", result);
    
    result = await client.brpop("messages", 40);
    console.log("Result -> ", result);
}

init();