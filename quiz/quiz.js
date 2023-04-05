var leastInterval = function (tasks, n) {
  // 작업 별로 빈도수를 세기 위해 객체 생성한다.
  const frequency = {};

  //taks 배열의 각 작업을 순회하면서 빈도 수를 객체에 저장한다.
  //가장 높은 빈도수를 가진 작업의 빈도 수를 maxFruency에 저장한다.
  let maxFrequency = 0;
  for (const task of tasks) {
    frequency[task] = (frequency[task] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequency[task]);
  }

  // 객체를 순회하며 가장 높은 빈도 수를 가진 작업이 몇 개인지 계산한다.
  //maxCount 변수에 저장한다.
  let maxCount = 0;
  for (const task in frequency) {
    if (frequency[task] === maxFrequency) {
      maxCount++;
    }
  }

  // 최소 시간 계산하여서 반환한다. taks.length는 모든 작업을 처리하는데 걸리는 시간을 반환한다.
  return Math.max((maxFrequency - 1) * (n + 1) + maxCount, tasks.length);
};
