import { generateReturnsArray } from './src/investimentsGoals';

const form = document.getElementById('investment-form');

function renderProgression(evt) {
  evt.preventDefault();
  // const startingAmount = Number(form['starting-amount'].value);
  const startingAmount = Number(
    document.getElementById('starting-amount').value
  );
  const additionalContribution = Number(
    document.getElementById('additional-contribution').value
  );
  const timeAmount = Number(document.getElementById('time-amount').value);
  const timeAmountPeriod = document.getElementById('time-amount-period').value;
  const returnRate = Number(document.getElementById('return-rate').value);
  const returnRatePeriod = document.getElementById('evaluation-period').value;
  const taxRate = Number(document.getElementById('tax-rate').value);

  try {
    const returnsArray = generateReturnsArray(
      startingAmount,
      timeAmount,
      timeAmountPeriod,
      additionalContribution,
      returnRate,
      returnRatePeriod
    );

    console.log(returnsArray);
  } catch (error) {
    console.error(error.message);
  }
}
const returnsArray = generateReturnsArray(
  startingAmount,
  timeAmount,
  timeAmountPeriod,
  additionalContribution,
  returnRate,
  returnRatePeriod
);
console.log(returnsArray);

form.addEventListener('submit', renderProgression);
