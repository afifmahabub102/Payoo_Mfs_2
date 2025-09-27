document.getElementById('transfer-money-btn').addEventListener('click',function(event){

        event.preventDefault() ;

        const UserNumber = InputFieldById('input-user-num') ;
        const TransferAmount = parseFloat(InputFieldById('input-transfer-amount')) ;
        const Pin_Transfer = parseFloat(InputFieldById('input-pin-transfer')) ; 
        const CurrentBalance_Transfer = parseFloat(TextFieldById('current-balance')) ;


        if(UserNumber.length === 11){
       
                        if( TransferAmount <= CurrentBalance_Transfer ){

                                if( Pin_Transfer === 1234){
                                        const FinalBalance_Transfer = CurrentBalance_Transfer - TransferAmount ;
                                        document.getElementById('current-balance').innerText = FinalBalance_Transfer ;
                                        document.getElementById('transfer-money-form').classList.add('hidden') ;
                                        document.getElementById('transfer-money-form-reset').reset(); 
                                }
                                else{
                                        alert('Wrong Pin.Try again');
                                } 

                        }
                        else{
                                alert('You do not have sufficient money') ;  
                        }

        }
        else{
                        alert('Please enter 11 digit valid number.') ;
        }

})

document.getElementById("input-user-num").addEventListener("input", function () {
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