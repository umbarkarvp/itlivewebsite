import React, { useState } from "react";

const Balance = (props) => {
  let currentAmount = 10000;
  const [amount , setamount] = useState(currentAmount);
  const [cost , setcost] = useState();

  const reduceAmount = () => {
    if (amount < cost) {
      alert("Insufficient Balance");
    }
    else{
      setamount(amount - cost);
    }
  }
  
  const costChange = (event) => {
      setcost(event.target.value)
  }

  return (
    <>
      <div className='sheetBalance d-flex justify-content-between m-5'>
            <h5>Mini Sheet Balance</h5>
            <h5>Total Balance : {amount}</h5>
            <h5>{props.uname}</h5>
      </div>
      <div className="balanceAmount container">
      <div className="row">
        <div className="col-md-4">
            <lable>Expense name</lable>
            <input
						type='text'
						className='form-control mb-3'
						id='cost' required
					></input>
          <lable>Date</lable>
            <input
						type='date'
						className='form-control mb-3'
						id='cost' required
					></input>
          <lable>Amount</lable>
            <input
						type='number'
						className='form-control'
						id='costItem'
            onChange={costChange} required
					></input>
          <button type="submit" className="btn btn-success mt-3" onClick={reduceAmount}>Save</button>
        </div>
      </div>

      </div>
    </>
  );
};

export default Balance;
