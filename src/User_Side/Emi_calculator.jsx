import React, { useState } from 'react';

const EmiCalculator = () => {
    const [amount, setamount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalPayable, setTotalPayable] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);
    const [error, setError] = useState('');

    const calculateMonthlyPayment = () => {
        if (!amount || !interestRate || !loanTerm) {
            setError('Please fill in all fields.');
            alert('Please fill all the fields !!!')
            setMonthlyPayment('');
            return;
        }


        const loanAmount = parseFloat(amount) - (downPayment ? parseFloat(downPayment) : 0);

        const r = parseFloat(interestRate) / 100 / 12;
        const n = parseFloat(loanTerm) * 12;

        const numerator = loanAmount * r * Math.pow(1 + r, n);
        const denominator = Math.pow(1 + r, n) - 1;

        const monthlyPayment = (numerator / denominator).toFixed(2);
        setMonthlyPayment(monthlyPayment);

        const totalPayable = (monthlyPayment * n).toFixed(2);
        setTotalPayable(totalPayable);

        const totalInterest = (totalPayable - loanAmount).toFixed(2);
        setTotalInterest(totalInterest);
        setError('');
    };

    return (
        <>
        <div className='container-fluid mt-5  h-100' style={{ backgroundColor: '#FFFFE0', height:"100vh%" }}> {/* Light yellow background */}
        <div className='container mt-5'>
      <h1 className='text-center'>Mortgage Calculator</h1>
      <div className='card card-body bg-light'>
        <form>
          <div className='form-group'>
            <label htmlFor='loanAmount'>Loan Amount (₹):</label>
            <input
              type="number"
              className='form-control'
              id='loanAmount'
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              placeholder='Enter amount'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='downPayment'>Down Payment (₹):</label>
            <input
              type="number"
              className='form-control'
              id='downPayment'
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder='Enter down payment'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='interestRate'>Rate of Interest (%):</label>
            <input
              type="number"
              className='form-control'
              id='interestRate'
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder='Enter interest rate'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='loanTerm'>Loan Term (years):</label>
            <input
              type="number"
              className='form-control'
              id='loanTerm'
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder='Enter loan term'
            />
          </div>
          <button type='button' className='btn btn-primary' onClick={calculateMonthlyPayment}>
            Calculate
          </button>
        </form>
        {error && <div className='alert alert-danger'>{error}</div>}
        {monthlyPayment && (
          <div className='results'>
            <h3>Monthly Payment: ₹ {monthlyPayment}</h3>
            <h3>Total Loan Payment: ₹ {totalPayable}</h3>
            <h3>Total Interest Amount: ₹ {totalInterest}</h3>
          </div>
        )}
      </div>
    </div>
    </div>

        
        
        </>
    )

        }
export default EmiCalculator;
