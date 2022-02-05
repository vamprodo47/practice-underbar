'use strict';

/*
 * 자바스크립트를 보다 효율적으로 사용하기 위해서 만들어진 underscore.js 라이브러리를
 * 비슷하게 구현하면서 자바스크립트의 문법을 더욱 깊게 이해하는 시간을 가지게 됩니다.
 */

_.identity = function (val) {

    // _.identity는 전달인자(argument)가 무엇이든, 그대로 리턴합니다.

    return val;
};

/*
 * IMPORTANT NOTE!
 * ===========
 * 이번 스프린트에서 아래 예외를 제외하고 배열(Array), 집합(Set), 맵(Map)의 기본 메소드 사용은 금지되어 있습니다.
 * 사용 가능한 내장 메소드: Array.prototype 의 'pop', 'push', 'shift', 'sort'
 */


_.slice = function (arr, start, end) {

    // _.slice는 배열의 start 인덱스부터 end 인덱스 이전까지의 요소를 얕은 복사하여 새로운 배열을 리턴합니다.

    // 0. 음수가 들어와도 배열을 리턴할 수 있어야합니다.
    // 1. start가 없으면, 배열의 처음부터 리턴합니다.
    // 2. start가 배열의 길이를 넘으면, 빈 배열을 리턴합니다. 
    // 3. end가 없으면, 배열의 끝까지 리턴합니다.
    // 4. end가 배열의 길이를 넘으면, 배열의 끝까지 리턴합니다.

    let result = [];

    if(start < 0){ // 0. (1/2) complete
        start = start + arr.length;
    }
    if(end < 0){ // 0. (2/2) complete
        end = end + arr.length;
    }

    if (start === undefined){ // 1. complete
        result = arr;
    }
    else if (start > arr.length){ // 2. complete
        result = [];
    }
    else if (end === undefined || end > arr.length){ // 3. 4. complete
        for ( let i = start; i < arr.length; i++){
            result[i-start] = arr[i];
        }
    }
    else { // _.slice
        for ( let i = start; i < end; i++){
            result[i-start] = arr[i];
        }
    }
    return result;
}

_.take = function (arr, n) {

  // _.take는 배열의 처음 n개 element를 담은 새로운 배열을 리턴합니다.

  // 0. n이 undefined인 경우, 빈 배열을 리턴합니다.
  // 1. n이 음수인 경우, 빈 배열을 리턴합니다.
  // 2. n이 배열의 길이를 넘으면, 전체 배열을 얕은 복사한 새로운 배열을 리턴합니다.

  let result = [];

  if (n === undefined || n < 0){ // 0. 1. complete
      result = [];
  }
  if (n > arr.length){ // 2. complete
      result = arr;
  }
  else { // _.take
    for (let i = 0; i < n; i++){
        result[i] = arr[i];
    }
  }

  return result;
};


_.drop = function (arr, n) {

  // _.drop는 처음 n개의 element를 제외한 새로운 배열을 리턴합니다.

  // 0. n이 undefined인 경우, 전체 배열을 얕은 복사한 새로운 배열을 리턴합니다.
  // 1. n이 음수인 경우, 전체 배열을 얕은 복사한 새로운 배열을 리턴합니다.
  // 2. n이 배열의 길이를 넘으면, 빈 배열을 리턴합니다.

  let result = [];

  if (n === undefined || n < 0){ // 0. 1. complete
      result = arr;
  }
  if (n > arr.length){ // 2. complete
      result = [];
  }
  else { // _.drop
    for (let i = n; i < arr.length; i++){
        result[i-n] = arr[i];
    }
  }

  return result;
};


_.last = function (arr, n) {

  // _.last는 배열의 마지막 n개의 element를 담은 새로운 배열을 리턴합니다.

  // 0. n이 undefined인 경우, 배열의 마지막 요소만을 담은 배열을 리턴합니다.
  // 1. n이 음수인 경우, 배열의 마지막 요소만을 담은 배열을 리턴합니다.
  // 2. n이 배열의 길이를 넘으면, 전체 배열을 얕은 복사한 새로운 배열을 리턴합니다.

  let result = [];

  if (n === undefined || n < 0){ // 0. 1. complete
      result[0] = arr[arr.length - 1];
  }
  if (n > arr.length){ // 2. complete
      result = arr;
  }
  else { // _.last
    for (let i = arr.length - n; i < arr.length; i++){
        result[i-(arr.length-n)] = arr[i];
    }
  }

  return result;
};


_.each = function (collection, iteratee) {

};


_.indexOf = function (arr, target) {
  // 배열의 모든 요소에 접근하려면, 순회 알고리즘(iteration algorithm)을 구현해야 합니다.
  // 반복문을 사용하는 것이 가장 일반적이지만, 지금부터는 이미 구현한 _.each 함수를 활용하여야 합니다.
  // 아래 _.indexOf의 구현을 참고하시기 바랍니다.
  let result = -1;

  _.each(arr, function (item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });

  return result;
};


_.filter = function (arr, test) {

};

_.reject = function (arr, test) {
 
};


_.uniq = function (arr) {

};


_.map = function (arr, iteratee) {

};


_.pluck = function (arr, keyOrIdx) {
    
};

_.reduce = function (arr, iteratee, initVal) {

};