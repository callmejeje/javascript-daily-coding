let fib = [0, 1];

function fibonacci(n) {
  // TODO: 여기에 코드를 작성합니다.
  if (fib[n] !== undefined) return fib[n];
  else {
    fib.push(fibonacci(n - 1) + fibonacci(n - 2));
    return fib[n];
  }
}
