const express=require('express');
const app=express();
const port=3000;
app.set('view engine','hbs');

var msg;

const accountSid = 'AC46b57e0da99ba73a09394e9cf4638e19';
const authToken = '81d999fb1e6e1fea101b65ede727f916';
const twilio=require('twilio');

app.get("/",(req,res)=>{
    res.render("index");
});

app.use(express.urlencoded({
    extended:true
}));

app.post("/send-message",(req,res)=>{
    const msg=req.body.username;
    console.log(msg);
    message(msg);
    res.end();
});

function message(msg){
    const client = new twilio(accountSid, authToken);
    client.messages.create({
        body: msg,
        to: '+919182387304',
        from: '+18184084586',
    }).then((message) => console.log(message.sid));
}



    // app.get("/",(req,res)=>{
    //     msg=req.body.username;
    //     console.log(msg);
    //     const client = new twilio(accountSid, authToken);
    //     client.messages.create({
    //         body: msg,
    //         to: '+919182387304',
    //         from: '+18184084586',
    //     }).then((message) => console.log(message.sid));
    //     // res.send("SMS send");
    //     // res.render("index");
    // })

app.listen(port,()=>{
    console.log("Running on port 3000");
})