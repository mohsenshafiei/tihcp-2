// MY Solution
const f = (arr) => {
  let max = 0;
  if (arr.length === 0) return [];
  for (let i = 0; i < arr.length; i++) {
    let pivot = arr[i];
    let total = pivot;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] >= pivot) total += pivot;
      else break;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] >= pivot) total += pivot;
      else break;
    }
    if (total > max) {
      max = total;
    }
  }
  return max;
};


// Divide and Conquer Solution
const g = (arr) => {
  const calculateArea = (heights, start, end) => {
    if (start > end) return 0;
    let minIndex = start;
    for (let i = start; i <= end; i++) {
      if (heights[minIndex] > heights[i]) minIndex = i;
    }
    return Math.max(
      heights[minIndex] * (end - start + 1),
      calculateArea(heights, start, minIndex - 1),
      calculateArea(heights, minIndex + 1, end)
    );
  };

  const largestRectangleArea = (heights) => {
    return calculateArea(heights, 0, heights.length - 1);
  };
  return largestRectangleArea(arr);
};

// Best Solution


console.log(f([2, 1, 5, 6, 2, 3]));
console.log(g([2, 1, 5, 6, 2, 3]));
