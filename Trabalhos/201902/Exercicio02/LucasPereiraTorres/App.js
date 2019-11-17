function tsbasico(){

    var timestampT1 = 1;
    var timestampT2 = 2;

    var h = document.getElementById("h1").value;
    var t = new String(h);
    console.log(t);
    var arrayOfStrings = t.split(";");
    console.log('O array tem ' + arrayOfStrings.length + ' elementos: ' + arrayOfStrings.join(' / '));

    tA = new TimeStamp('A',0,0)
    tB = new TimeStamp('B',0,0)
    console.log(tA)
    console.log(tB)

    for(var i = 0, len = arrayOfStrings.length; i < len; ++i) {
        console.log( arrayOfStrings[i]);
        var str = arrayOfStrings[i];
        var op = str.substr(-5,1)
        var ts = str.substr(-4,1)
        var data = str.substr(-2,1)

        console.log(data)
        console.log(op)
        console.log(ts)

        function add(op,data,ts) {
            if(op === 'r'){
                console.log("read")
                if(ts === '1'){
                    console.log(ts)
                    if(data === 'a'){
                        console.log(data)
                        if(timestampT1 < tA.tsW){
                            console.log("inválida") // restart
                            timestampT1 = timestampT1+1;
                            add(op,data,ts);
                        }else{
                            if(tA.tsR < timestampT1){
                                tA.tsR = timestampT1;
                            }
                        }
                    }else{
                        console.log(data)
                        if(timestampT1 < tB.tsW){
                            console.log("invalida") // restart
                            timestampT1 = timestampT1+1;
                            add(op,data,ts);
                        }
                        else{
                            if(tB.tsR < timestampT1){
                                tB.tsR = timestampT1;
                            }
                        }
                    }
                }else if(ts === '2'){
                    console.log(ts)
                    if(data === 'a'){
                        console.log(data)
                        if(timestampT2 < tA.tsW){
                            console.log("pass") // restart
                            timestampT2 = timestampT2+1;
                            add(op,data,ts);
                        }else{
                            if(tA.tsR < timestampT2){
                                tA.tsR = timestampT2;
                            }
                        }
                    }
                    else{
                        console.log(data)
                        if(timestampT2 < tB.tsW){
                            timestampT2 = timestampT2+1;
                            add(op,data,ts);
                        }
                        else{
                            if(tB.tsR < timestampT2){
                                tB.tsR = timestampT2;
                            }
                        }
                    }
                }
            }else{
                console.log("write")
                if(ts === '1'){
                    console.log(ts)
                    if(data === 'a'){
                        console.log(data)
                        if(timestampT1 < tA.tsW || timestampT1 < tA.tsR){
                            console.log("inválida") // restart
                            timestampT1 = timestampT1+1;
                            add(op,data,ts);
                        }else{
                            if(tA.tsW < timestampT1){
                                tA.tsW = timestampT1;
                            }
                        }
                    }else{
                        console.log(data)
                        if(timestampT1 < tB.tsW || timestampT1 < tB.tsR){
                            console.log("invalida") // restart
                            timestampT1 = timestampT1+1;
                            add(op,data,ts);
                        }
                        else{
                            if(tB.tsW < timestampT1){
                                tB.tsW = timestampT1;
                            }
                        }
                    }
                }else if(ts === '2'){
                    console.log(ts)
                if(data === 'a'){
                    console.log(data)
                        if(timestampT2 < tA.tsW || timestampT2 < tA.tsR){
                            console.log("pass") // restart
                            timestampT2 = timestampT2+1;
                            add(op,data,ts);
                        }else{
                            if(tA.tsW < timestampT2){
                                tA.tsW = timestampT2;
                            }
                        }
                    }
                    else{
                        console.log(data)
                        if(timestampT2 < tB.tsW || timestampT2 < tB.tsR){
                            console.log("pass") // restart
                            timestampT2 = timestampT2+1;
                            add(op,data,ts);
                        }
                        else{
                            if(tB.tsW < timestampT2){
                                tB.tsW = timestampT2;
                            }
                        }
                    }
                }
            }
        }
        add(op,data,ts);
    }

console.log(tA)
console.log(tB)

}