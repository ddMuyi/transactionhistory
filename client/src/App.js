import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Transactions from './views/transactionsData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <div className="w-full h-auto">
        <Transactions/>
      </div>
    </ApolloProvider>
  );
}

export default App;
