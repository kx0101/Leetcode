function findDifference(nums1: number[], nums2: number[]): number[][] {
  const setOne = new Set<number>(nums1);
  const setTwo = new Set<number>(nums2);

  const subsetOfOne = Array.from(setOne).filter(num => !setTwo.has(num));
  const subsetOfTwo = Array.from(setTwo).filter(num => !setOne.has(num));

  return [subsetOfOne, subsetOfTwo];
}
