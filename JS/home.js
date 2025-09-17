document.getElementById('logout-btn').addEventListener('click',function(){

        window.location.href = './index.html';
})


document.getElementById('add-money-menu').addEventListener('click' , function(){
 
        document.getElementById('add-money-form').classList.remove('hidden');        
})

document.getElementById('add-money-btn').addEventListener('click',function(event){

        event.preventDefault() ;
        
        const BankName = InputFieldById('input-bank') ;
        const BankAccNumber = InputFieldById('input-acc-num') ;
        const Ammount = parseFloat(InputFieldById('input-ammount')) ;
        const Pin = parseFloat(InputFieldById('input-pin')) ;
        const CurrentBalance = parseFloat(TextFieldById('current-balance')) ;
        
         
        if( BankName === 'Bkash' || BankName === 'Nagad' || BankName === 'Rocket' ){

                if(BankAccNumber.length === 11){
     
                        if( Ammount > 0 ){

                                if( Pin === 1234){
                                        const FinalBalance = CurrentBalance + Ammount ;
                                        document.getElementById('current-balance').innerText = FinalBalance ; 
                                }
                                else{
                                        alert('Wrong Pin.Try again');
                                } 

                        }
                        else{
                                alert('To add money in your account enter your amount please') ;  
                        }  

                }
                else{
                        alert('Invalid Bank Account Number.Try again') ;  
                }                      
 
        }
        else{
                alert('Please select your bank.')      
        }
})

// document.getElementById("input-acc-num").addEventListener("input", function () {
//     if (this.value.length > 11) {
//         this.value = this.value.slice(0, 11); 
//     }
// });

document.getElementById("input-acc-num").addEventListener("input", function () {
    let digitsOnly = "";

for (let i = 0; i < this.value.length; i++) {
        
        if (!isNaN(this.value[i]) && this.value[i] !== " ") {  

            digitsOnly += this.value[i];
        }
    }


    if (digitsOnly.length > 11) {
        digitsOnly = digitsOnly.slice(0, 11);
    }

       this.value = digitsOnly;
});