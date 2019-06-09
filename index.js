const produceDrivingRange= (n)=>{
    return (start,stop)=>{
        start=start.substring(0,start.length-2)
        stop=stop.substring(0,stop.length-2)
        //debugger
        return (stop-start-n)>0 ? (stop-start-n) + ' blocks out of range' : 'within range by ' + Math.abs((stop-start-n)) 
        
    }
}

const produceTipCalculator= (rate)=>{
    return (bill)=>{
        return bill*rate
    }
}

let id=0

const createDriver = ()=>{
    return class Driver {
        constructor(name){
            this.name=name
            this.id+=id
        }
    }
}