function calculate(){
    
            
            
              
    var c=Math.floor(Math.random() * (100 - 90) ) + 90;
     var  a=c.toString();
     document.getElementById('total').innerHTML = a+"%";
 }
 
    
 document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  calculate();
}, false);
