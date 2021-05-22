import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
    return (
        <div className="App">
            <Route path="/" component={PostListPage} exact={true} />
            <Route path="/:id" component={PostPage} />
        </div>
    );
}

export default App;
