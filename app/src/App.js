import { useQuery, gql } from '@apollo/client'
import { HelloWorld } from './HelloWorld';

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
    </div>
  );
}

export default App;

