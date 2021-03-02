import './App.css';
import Layout from '../src/hoc/Layout/Layout'
import SearchRecipes from './container/SearchRecipes/SearchRecipes';

function App() {
  return (
   <Layout>
     <SearchRecipes />
   </Layout>
  );
}

export default App;
