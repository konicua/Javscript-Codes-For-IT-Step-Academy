<body>
        <style type="text/css">
            #para{
                text-align: center;
                font-size: 20px;
                color: white;
            }
    
            #link{
                text-align: center;
                font-size: 20px;
                }
    
    
        </style>
        <title>lab13</title>
        <script type="text/javascript">
    
            document.write('<br>'); document.write('<br>');
            document.write('<p id = "para">' + 'BACKGROUND-COLOR IS RANDOMLY GENERATED' + '</p>');
    
    
    
            function random_bg_color(){
    
            var rgbcolor;
            red = Math.floor(Math.random() * 250 + 0 );
            green = Math.floor(Math.random() * 250 + 0);
            blue = Math.floor(Math.random() * 250 + 0);
    
            rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            document.body.style.background = rgbColor;
    
            document.write('<p id = "para">RGB(' + red + ', ' + green +  ', ' + blue + ')</p>');
    
            red = ("0" + red.toString(16)).substr(-2).toUpperCase();
            green = ("0" + green.toString(16)).substr(-2).toUpperCase();
            blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
    
            document.write("<p id = 'para'>HEX: #" + red + '' + green + '' + blue + '</p>');
    
            }
    
            random_bg_color();
    
            function randomize() { 
            random_bg_color();
            document.body.style.background = rgbColor;
            }
    
    
        </script>
    </head>
    <body>
    
        <a id="a1" href="#" onclick="randomize()"> CLICK TO RANDOM </a>
    
</body>