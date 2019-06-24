<body>
        <div id="ClickId" style="width: 700px; height: 100px"></div>
        <div id="ClickId2" style="width: 700px; height: 100px"></div>
        <div id="ClickId3" style="width: 700px; height: 100px"></div>

        <p id="HideText"></p>
<script>
        var Colors=["black","red","yellow"];
        var One = 0;
        var Two = 0;
        var Three = 0;

        function myFunciton(){
            if(One==3)
            One=0;
            document.getElementById("ClickId").style.backgroundColor=Colors[One]
            One++;
        }

        function myFunciton2(){
            if(Two==3)
            Two=0;
            document.getElementById("ClickId2").style.backgroundColor=Colors[Two]
            Two++;
        }


        function myFunciton3(){
            if(Three==3)
            Three=0;
            document.getElementById("ClickId3").style.backgroundColor=Colors[Three]
            Three++;
        }


        var result=document.getElementById("ClickId").addEventListener("click",myFunciton)
        var result=document.getElementById("ClickId2").addEventListener("click",myFunciton2)
        var result=document.getElementById("ClickId3").addEventListener("click",myFunciton3)        
    </script>
</body>