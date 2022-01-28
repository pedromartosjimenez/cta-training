import React, { useState } from 'react';
import { gql , useMutation } from '@apollo/client'

const ADD_EXPENSE = gql`
    mutation addExpense (
    $userId: Int!
    $amount: Int!
    $notes: String!
    ) {
        insert_expenses_one(object: {user_id: $userId, notes: $notes, amount: $amount}) {
        id
        }
    }
`;

export const Expenses = () => {
    const [addExpense, { data, loading, error }] = useMutation(ADD_EXPENSE)

    const initialState = {
      userId: 0,
      amount: '',
      notes: '',
    }
  
    const [formState, setFormState] = useState(initialState)
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  
    const handleSubmit = event => {
  
      event.preventDefault();
  
      addExpense({
        variables: formState,
      });
  
      setFormState(initialState)
  
    }
  
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>User</span>
            <input value={formState.userId} onChange={(e) => setFormState({ ...formState, userId: parseInt(e.target.value, 10) })} type="number" step={1} />
          </label>
          <label>
            <span>Amount</span>
            <input value={formState.amount} onChange={(e) => setFormState({ ...formState, amount: parseInt(e.target.value, 10) })} type="number" step={1} />
          </label>
          <label>
            <span>Notes</span>
            <textarea onChange={(e) => setFormState({ ...formState, notes: e.target.value })} value={formState.notes}></textarea>
          </label>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
}
