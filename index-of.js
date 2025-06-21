function indexOf(arr , c , isindex) {
    let index = isindex || 0;
    if (index < 0) { index = arr.length + index;}
    if (index >= arr.length || index < 0) { return -1;}
	for (let i = index; i < arr.length ; i++){
		if (arr[i] === c){
			return i	
		}	
	}
return -1
}

//console.log("Test1 :", indexOf([1,2,3,4], 5))


function lastIndexOf(arr, l , indexX){
    let index = indexX || 0 ;
    if (index < 0 ) {
        index = arr.length + index
    }
    if ( index >= arr.length || index < 0) {return -1}

	let i = arr.length
		while(i >= 0) {
			if (arr[i] === l){
				return i
			}	
		i--		
		}
//console.log("i :", i)
return -1
}


//console.log("Test1 :", lastIndexOf([1,2,3,4], 3))


function includes(arr ,v){

	for(let i = 0; i <= arr.length; i++ ){
		if (v === arr[i]){
			return true
		} 
	}
return false
}


//console.log("test :", includes(["a" ," b" ," c"]," s"))

