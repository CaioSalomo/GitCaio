function Po(valor){
    var Vit=0
    var Der=0
    var option = parseInt(Math.random()*(4-1)+ 1)
    document.getElementById("ImgP").src=`/Assets/Images/${valor}.png`;
    document.getElementById("ImgE").src=`/Assets/Images/${option}.png`;
    console.log(option)
    document.getElementById("result").innerHTML="Empate"
    switch(valor){
        case 1:
            switch(option){
            case 2:
                document.getElementById("result").innerHTML="Derrota"
                break
            case 3:
                document.getElementById("result").innerHTML="Vitoria"
            }
            break;
        case 2:
             switch(option){
                case 1:
                    document.getElementById("result").innerHTML="Vitoria"
                    break
                case 3:
                    document.getElementById("result").innerHTML="Derrota"
                }
                break;
        case 3:
            switch(option){
                case 1:
                    document.getElementById("result").innerHTML="Derrota"
                    break
                case 2:
                    document.getElementById("result").innerHTML="Vitoria"
                    break
                }
                break;
        }


}

