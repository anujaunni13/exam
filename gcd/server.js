const express = require('express');
const app = express();
app.use(express.json);
function gcd(a,b){
    
        while(b!==0) 
        {[a,b] =[b,a%b];}
    return a;
}

app.post('/gcd',req,res)=> {const {a,b} = req.body;
res.json({gcd:gcd(a,b)});

};

app.listen(3000,()=> console.log());