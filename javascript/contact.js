function verificaSursa(sursa,a,b, who)
        {
            if(sursa.length < a)
            {
                return [false, who + " nu poate avea mai putin de "+ a + " caractere"]
            }
            else if(sursa.length > b)
            {
                return [false,  who + " nu poate avea mai mult de "+ b +" caractere"]
            }

            return [true, null]
        }
        
        function handleForm(e){
            let name = document.getElementById("field1").value
            let text = document.getElementById("field2").value

            if(name == "" || name == " ")
            {
               return  window.alert("numele nu poate fi gol")
            }
            let checkNume = verificaSursa(name,5,10, "Numele")

            if(checkNume[0] == false)
            {
                return window.alert(checkNume[1])
            }
            let checkText = verificaSursa(text,10,20, "Mesajul")
            if(checkText[0] == false)
            {
                return window.alert(checkText[1])
            }
            if(text == "" || text == " ")
            {
                return window.alet("textul nu poate fi gol")
            }
        }