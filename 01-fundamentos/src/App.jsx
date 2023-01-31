import { Header } from './components/Header';
import { Post } from './Posts';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>

    </div>
  )
}