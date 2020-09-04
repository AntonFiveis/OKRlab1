//1
function arr(N){
    let answer=[];
    for(let i=0;i<N;i++){
        answer.push(i);
    }
    return answer;
}
console.log(arr(8));

//2
function division(first,second,third) {
    if (first%second===0&& first%third===0)
        return true;
    else
        return false;
}
console.log(division(12,3,4))
console.log(division((12,5,3)));

//3
function capitalize(str) {
    let ans = str.charAt(0).toUpperCase() + str.slice(1);
    return ans;
}
console.log(capitalize('upper'))