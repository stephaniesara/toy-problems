// originally written in google doc, mock with Maryem

// [1, 3, 5, 4, 2] would be triangle sorted

// Find the minimum element. - Time complexity O(1)

// [1,2,3,2,1] NO
// [1, 3, 6, 7, 8, 9, 4]
// [4] NO
// No negative numbers


Const findMinOfTriangle = arr => {
  Let first = arr[0];
  Let last = arr[arr.length - 1];
  Return Math.min(first, last);
}

// 2. Find the maximum element. - Time complexity O(log n)

Const isSorted = (arr, start, end, asc) {
  If (asc) {
    Return arr[start] <= arr[end];
  } else {
    Return arr[start] >= arr[end];
  }
}

Const findMaxOfTriangle = (arr, start = 0, end = arr.length - 1) => {
  If (start > end) {
    Return; //
  }
  Let mid = Math.ceil((start + end) / 2);
  Let isSortedLeft = isSorted(arr, start, mid, true); // should be mid-1 & mid
  Let isSortedRight = isSorted(arr, mid+1, end, false); // should be mid & mid+1?
  If (isSortedLeft && isSortedRight) {
    Return Math.max(arr[mid], arr[mid+1]);
  } else if (isSortedLeft) {
    Return findMaxOfTriangle(arr, mid+1, end);
  } else {
    Return findMaxOfTriangle(arr, start, mid);
  }
}

// empty invalid; always asc + desc; all nums unique




Const isArrayTriangle = arr => {
  If (arr.length < 3) {
    Return false;
  }
  Let isAsc = true;
  Let prev = arr[0];
  Let elems = {};
  Elems[prev] = true;
  For (let i = 1; i < arr.length; i++) {
    Let curr = arr[i];
    If (elems[curr]) {
      Return false;
    }
    Elems[curr] = true;
    If (isAsc) {
      If (curr < prev) {
        isAsc = false;
      }
    } else {
      If (curr > prev) { 
        Return false;
      }
    }
    Prev = curr;
  }
  Return true;
}
