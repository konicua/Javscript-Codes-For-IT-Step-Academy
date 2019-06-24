var LottArr=[12,44,22,76,32,11]
    var UserArr=[12,44,5,76,32,11]

    var WinNumber=0;

    for(var i=0;i<LottArr.lenght;i++){
        if(LottArr[i]==UserArr[i])
        WinNumber++;
    }

        if(WinNumber==LottArr.lenght)
            alert("Jackpot");
        else if(WinNumber==LottArr.lenght-1)
            alert("Nice")
            else{
                alert("Lost")
            }

        //choose//
        document.querySelector("#ClickId");
        document.querySelector(".ClickClass");
        //choose//