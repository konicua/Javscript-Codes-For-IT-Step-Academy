var massive=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]    
            var arrowTwo=[]

            for(var i=0;i<massive.length;i++){
                if(massive[i]%3==0){
                    arrowTwo.push(massive[i])
                }
            }

            var result=massive.filter(i=>i%3==0);
//or//
            var massive.filter(n => !(n%3));

            for(var i=0;i<arrowTwo.length;i++){
                console.log(arrowTwo[i]);
            }