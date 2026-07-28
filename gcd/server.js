const express = require('express');
const app = express();
app.use(express.json);
function gcd(a,b){
    
        while(b!==0) 
        {[a,b] =[b,a%b];}
    return a;
};