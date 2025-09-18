document.getElementById('cash-out-btn').addEventListener('click',function(event){

        event.preventDefault() ;

        const AgentNumber = InputFieldById('input-agent-num') ;
        const CashOutAmount = parseFloat(InputFieldById('input-cashout-ammount')) ;
        const Pin_Cash_Out = parseFloat(InputFieldById('input-pin-cashout')) ; 
        const CurrentBalance_Cash_Out = parseFloat(TextFieldById('current-balance')) ;


        if(AgentNumber.length === 11){
       
                        if( CashOutAmount <= CurrentBalance_Cash_Out ){

                                if( Pin_Cash_Out === 1234){
                                        const FinalBalance_Cash_Out = CurrentBalance_Cash_Out - CashOutAmount ;
                                        document.getElementById('current-balance').innerText = FinalBalance_Cash_Out ;
                                        document.getElementById('cash-out-form').classList.add('hidden') ;
                                        document.getElementById('cash-out-form-reset').reset(); 
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