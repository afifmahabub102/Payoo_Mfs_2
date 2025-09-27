document.getElementById('logout-btn').addEventListener('click',function(){

        window.location.href = './index.html';
})


document.getElementById('add-money-menu').addEventListener('click' , function(){
 
        document.getElementById('add-money-form').classList.remove('hidden');
        document.getElementById('cash-out-form').classList.add('hidden') ; 
        document.getElementById('transfer-money-form').classList.add('hidden') ;       
})

document.getElementById('cash-out-menu').addEventListener('click',function(){

        document.getElementById('cash-out-form').classList.remove('hidden') ;   
        document.getElementById('add-money-form').classList.add('hidden') ;
        document.getElementById('transfer-money-form').classList.add('hidden') ;
})

document.getElementById('transfer-money-menu').addEventListener('click',function(){

        document.getElementById('transfer-money-form').classList.remove('hidden') ;
        document.getElementById('add-money-form').classList.add('hidden') ;
        document.getElementById('cash-out-form').classList.add('hidden') ;
})

document.getElementById('bonus-menu').addEventListener('click',function(){
        document.getElementById('bonus-form').classList.remove('hidden') ;
        document.getElementById('add-money-form').classList.add('hidden') ;
        document.getElementById('cash-out-form').classList.add('hidden') ;
        document.getElementById('transfer-money-form').classList.add('hidden') ;
})