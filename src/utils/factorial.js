

export default function factorial(n){
  return [0, 1].includes(n) ? 1 : n * factorial(n - 1);
  // if ([0, 1].includes(n))
  //   return 1;
  // else
  //   return n * factorial(n - 1);
}
