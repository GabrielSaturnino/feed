import styles from './sidebar.module.css'
import { PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40'>
      </img>

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src='https://avatars.githubusercontent.com/u/80297011?v=4' />

        <strong>Gabriel S.</strong>
        <span>conteudo aqui</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}


/* 

.avatar {
  box-sizing: initial;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
*/