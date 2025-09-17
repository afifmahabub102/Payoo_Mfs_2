document.getElementById('login-btn').addEventListener('click',function(event){
   
        event.preventDefault() ;
        const InputNum = document.getElementById('input-num').value ;    
        const InputPin = document.getElementById('input-pin').value ;
        
        if(InputNum.length===11){
            if(parseInt(InputPin)===1234){
                alert('Login Successful.') 
                window.open("./home.html" , '_blank') ;   
            }
            else{
                alert('Incorrect pin.Please try again.') ;
            }
        }
        else{
                alert('Number is not valid.Please try again.') ;
        }

})