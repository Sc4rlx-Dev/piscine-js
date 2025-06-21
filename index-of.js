function indexOf(arr , c) {

	for (let i = 0; i < arr.length ; i++){
		if (arr[i] === c){
			return i	
		}	
	}
return -1
}

//console.log("Test1 :", indexOf([1,2,3,4], 5))


function lastIndexOf(arr, l){
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


function include(arr ,v){

	for(let i = 0; i <= arr.length; i++ ){
		if (v === arr[i]){
			return true
		} 
	}
return false
}


console.log("test :", include(["a" ," b" ," c"]," s"))

