var redis = require("redis");
//var client = redis.createClient();


const client = redis.createClient({
    host: 'some-redis',
    port: 2880
});

client.set("my_key", "hello world")
client.get("my_key", function(err, reply){
    console.log(reply)

})