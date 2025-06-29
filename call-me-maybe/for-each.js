function forEach(arr, fucn) {
    for (let i = 0; i < arr.length ; i++) {
        fucn(arr[i], i, arr)
    }
}
