import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Meetings from './components/meetingsData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  })
  return (
    <ApolloProvider client={client}>
      <div className="w-full h-auto">
        <Meetings/>
      </div>
    </ApolloProvider>
  );
}

export default App;
