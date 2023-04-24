function lastStoneWeight(stones: number[]): number {
  const maxPQueue = new MaxPriorityQueue();

  stones.map(stone => maxPQueue.enqueue(stone));

  while (maxPQueue.size() > 1) {
    let first: number = maxPQueue.dequeue().element;
    let second: number = maxPQueue.dequeue().element;

    if (first !== second) {
      maxPQueue.enqueue(first - second);
    }
  }

  return maxPQueue.dequeue()?.element ?? 0;
};
