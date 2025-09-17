function InputFieldById(id){
 
        return document.getElementById(id).value ;

}

function TextFieldById (id) {

        const InputBalance = parseFloat(document.getElementById(id).innerText.replace(/,/g, ''));
        return InputBalance ;

}