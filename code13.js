<body>

    <h1 id="ClickId" class="ClickClass">Click On Me</p></h1>
    <p class="HideText"></p>


    <script>

        function TestFunction()
        {
            document.getElementById("HideText").innerHTML="jjksdahdhkj";                         
        }

        var result=document.getElementById("ClickId").addEventListener("click",TestFunction)
        


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
        </script>
    
</body>