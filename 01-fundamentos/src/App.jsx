import { Header } from './components/Header';
import { Post } from './Posts';
import './global.css';

export function App() {

  return (
    <div>
      <Post
        autor='Gabriel'
        content='Conteudo aleatorio!'
      />
      <Header />
    </div>
  )
}