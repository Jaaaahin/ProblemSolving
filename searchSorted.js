var search = function(nums, target) {
    return rotatedSortedArray(nums, target);
};

function rotatedSortedArray(arr, target) {
    let start = 0, end = arr.length - 1;
    
    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        }

        // Check if the left half is sorted
        if (arr[start] <= arr[mid]) {
            if (arr[start] <= target && target < arr[mid]) {
                end = mid - 1; // Search in the left half
            } else {
                start = mid + 1; // Search in the right half
            }
        } else {
            // The right half is sorted
            if (arr[mid] < target && target <= arr[end]) {
                start = mid + 1; // Search in the right half
            } else {
                end = mid - 1; // Search in the left half
            }
        }
    }

    return -1; // Target not found
}
console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1
console.log(search([1, 3], 3)); // Output: 1
