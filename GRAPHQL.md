Today:

```gql
query getUsers {
  users {
    id
    name
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
        max {
          amount
        }
        min {
          amount
        }
      }
    }
  }
  expenses {
    id
    notes
    amount
    created_at
    user {
      name
      id
    }
  }
}

mutation addUser {
  insert_users_one(object: {name: "antonio"}) {
    id
    name
  }
}

mutation deleteUser {
  delete_users_by_pk(id: 1) {
    id
    name
  }
}
```

Get a specific user:

```gql
query getUser (
  $userId: Int!
) {
  user: users_by_pk(id: $userId) {
    id
    name
    all_expenses: expenses {
      id
      amount
      notes
    }
    top_expense: expenses (
      order_by:{
        amount: desc_nulls_last
      }
      limit: 1
    ) { 
      id
      amount
    }
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
}
```

variables:

```json
{
  "userId": 3
}
```

Fetch User's data form session:

headers:
```
x-hasura-admin-secret   hasura
x-hasura-role           user
x-hasura-user-id.       2
```

query:

```gql
query getSessionUser {
  users {
    id
    name
    all_expenses: expenses {
      id
      amount
      notes
    }
    top_expense: expenses (
      order_by:{
        amount: desc_nulls_last
      }
      limit: 1
    ) { 
      id
      amount
    }
    expenses_aggregate {
      aggregate {
        sum {
          amount
        }
      }
    }
  }
}
```