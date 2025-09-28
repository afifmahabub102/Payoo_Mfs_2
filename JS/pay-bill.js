document.getElementById('pay-bill-btn').addEventListener('click',function(event){

        event.preventDefault() ;
        
        const BankNameBiller = InputFieldById('input-bank-biller') ;
        const BillerAccNumber = InputFieldById('input-biller-acc-num') ;
        const BillerAmount = parseFloat(InputFieldById('input-biller-ammount')) ;
        const BillerPin = parseFloat(InputFieldById('input-biller-pin')) ;
        const CurrentBalance_biller = parseFloat(TextFieldById('current-balance')) ;
        
         
        if( BankNameBiller === 'Bkash' || BankNameBiller === 'Nagad' || BankNameBiller === 'Rocket' ){

                if(BillerAccNumber.length === 5){
     
                        if( CurrentBalance_biller >= BillerAmount ){

                                if( BillerPin === 1234){
                                        const FinalBalance_biller = CurrentBalance_biller - BillerAmount ;
                                        document.getElementById('current-balance').innerText = FinalBalance_biller ;
                                        document.getElementById('pay-bill-form').classList.add('hidden') ;
                                        document.getElementById('pay-bill-form-reset').reset(); 
                                }
                                else{
                                        alert('Wrong Pin.Try again');
                                } 

                        }
                        else{
                                alert('Insufficient Balance to pay bill') ;  
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