const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.use(express.static("ssuccessF"));
app.use(express.static("Failure"));
app.get("/",function(req,res){
  res.sendfile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
  const firstname=req.body.firstname;
  const lastname=req.body.lastname;
  const email=req.body.email;


  const data={
  members: [
    {
      email_address:email,
      status:"subscribed",
      merge_fields:{
        FNAME: firstname,
        LNAME: lastname
      }
    }
  ]
}
const jsondata=JSON.stringify(data);

const url="https://us9.api.mailchimp.com/3.0/lists/c80a747af7";
const options={
  method:"POST",
  auth:"sharath:56c9df7fb5b030efd20948266ba8b27c-us9"
}

const request= https.request(url,options, function(response){
  if(response.statusCode===200){
    res.sendfile(__dirname+"/success.html");
  }
  else{
    res.sendfile(__dirname+"/failure.html");
  }
  response.on("data",function(data){
    console.log(JSON.parse(data));
  })
})
request.write(jsondata);
request.end();

})
app.listen(3000,function(req,res){
console.log("running on server 3000");
})
// 56c9df7fb5b030efd20948266ba8b27c-us9

//c80a747af7
