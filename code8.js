function myfucntion(a){
    var massive=[12,33,23,534,323,1,23,3,4,4534,234]

    massive.push(23);
    massive.push(234);
    massive.push(541);
       massive.splice(1,false,234);

    massive.pop();         

    for(var i=0;i<massive.length;i++){
        console.log(massive[i]);
    }
}
