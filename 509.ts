function fib(n: number): number {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// https://leetcode.com/problems/fibonacci-number