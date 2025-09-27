document.getElementById('bonus-btn').addEventListener('click',function(event){
 
        event.preventDefault() ;
        let GetBonus = parseFloat(InputFieldById('bonus-coupon')) ;
        let CurrentBalance_bonus = parseFloat(TextFieldById('current-balance')) ;
        if(GetBonus === 123){
            alert('you got the bonus $${500}') ;
            let FinalBalance_bonus = CurrentBalance_bonus + 500 ;
            document.getElementById('current-balance').innerText = FinalBalance_bonus ;
            document.getElementById('bonus-form').classList.add('hidden') ;
            document.getElementById('bonus-form-reset').reset() ;
        }
        else{
            alert('Wrong ! Try again') ;
        }
})