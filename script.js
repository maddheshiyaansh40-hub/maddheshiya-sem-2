const form = document.getElementById('numberForm');
const numberInput = document.getElementById('numberInput');
const results = document.getElementById('results');
const primeResult = document.getElementById('primeResult');
const factorialResult = document.getElementById('factorialResult');

function isPrime(value) {
  if (value < 2) return false;
  for (let i = 2; i <= Math.sqrt(value); i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
}

function computeFactorial(value) {
  let factorial = 1n;
  for (let i = 2n; i <= value; i += 1n) {
    factorial *= i;
  }
  return factorial;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const value = Number(numberInput.value);
  if (Number.isNaN(value) || value < 0 || !Number.isInteger(value)) {
    primeResult.textContent = 'Please enter a whole number greater than or equal to 0.';
    factorialResult.textContent = '';
    results.classList.remove('hidden');
    return;
  }

  const primeText = value === 0 || value === 1
    ? `${value} is not a prime number.`
    : `${value} is ${isPrime(value) ? 'a prime number' : 'not a prime number'}.`;

  const factorial = computeFactorial(BigInt(value));
  const formattedFactorial = factorial.toString();

  primeResult.textContent = primeText;
  factorialResult.textContent = `${value}! = ${formattedFactorial}`;
  results.classList.remove('hidden');
});
