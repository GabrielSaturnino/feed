import styles from './sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=40'>
      </img>

      <div className={styles.profile}>
        <strong>Gabriel S.</strong>
        <span>conteudo aqui</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}