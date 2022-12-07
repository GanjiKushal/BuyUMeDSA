let arr = []
let N=15
let k=5
let arr2=[]

if(N>1 && N<=100){
    for(let i=0;i<N;i++){
        arr[i]=i+1
    }
     for(let i=k;i<arr.length;i++){
        arr2.push(arr[i])
    }
    for(let i=0;i<k;i++){
        arr2.push(arr[i])
    }
    console.log(arr2);
}
else{
    console.log("N should be in range on 1<N<=100");
}
