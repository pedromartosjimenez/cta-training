import { useQuery, gql } from '@apollo/client'
import { HelloWorld } from './HelloWorld';
import { Expenses } from './Expenses';

const QUERY = gql`
  query getMyUsers {
    users {
      name
      expenses {
        amount
      }
    }
  }
`;

function App() {
  const res = useQuery(QUERY);
  console.log(res.data)

  return (
    <div>
      <HelloWorld />
      {res.data && (
        <ul>
          {res.data.users.map(user => (
            <li>
              {user.name}
              ({user.expenses.length} expenses)
            </li>
          ))}
        </ul>
      )}
      <Expenses/>
    </div>
  );
}

export default App;

