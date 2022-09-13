const nativeSelectionSort = (array) => {
    array.forEach((element, index, array) => {
        let slicedArray = array.slice(index);
        let minNumerOfList = Math.min(...slicedArray);
        let minNumerIndexOfList = slicedArray.indexOf(minNumerOfList);
    
        array.splice(index + minNumerIndexOfList, 1);
        array.unshift(minNumerOfList);
    });
    return array;
}
