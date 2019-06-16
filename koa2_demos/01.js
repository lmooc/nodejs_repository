const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
    ctx.body = 'Hello Koa2'
})

async function testAsync() {
    return 'Hello async';
}
const result = testAsync();
console.log(result);


///////////////////////////////
function getData() {
    return 'zhangsan';
}
async function testAsync() {
    return 'Hello async';
}


async function test1() {
    const v1 = await getData();
    const v2 = await testAsync();
    console.log("========> " + v1, v2);
}
test1();
///////////////////////////////

function findData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}
async function test2() {
    const v = await findData();
    console.log("========> " + v);
    console.log("========> 11111");
}
test2()


app.listen(3000)
console.log('app is starting at port 3000')