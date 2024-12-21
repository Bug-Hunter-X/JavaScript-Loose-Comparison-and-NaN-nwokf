# JavaScript Loose Comparison and NaN Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose comparison (==) and the special value NaN (Not a Number).

The `bug.js` file contains code that incorrectly uses loose comparison to check if two values are equal.  This function fails when one of the values is NaN.

The `bugSolution.js` file provides a corrected version that uses strict equality (===) or Number.isNaN to accurately handle NaN comparisons.

## How to reproduce the bug:
1. Clone this repository.
2. Run `bug.js` in a JavaScript environment.
3. Observe the unexpected results when comparing NaN to NaN.

## Solution:
Always use strict equality (===) when comparing values in JavaScript. To specifically check for NaN, use the `Number.isNaN()` function.