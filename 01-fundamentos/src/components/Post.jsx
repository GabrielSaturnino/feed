import { Comment } from './Comment'
import style from './post.module.css'

export function Post() {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img
            className={style.avatar}
            src='https://avatars.githubusercontent.com/u/80297011?v=4' />
          <div className={style.authorInfo}>
            <strong>Gabriel S.</strong>
            <span>conteudo aqui</span>
          </div>
        </div>

        <time title='20 de Janeiro' dateTime='2023-01-31 17:41:38'>Publicado há 1h</time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Sequi temporibus tempore quam animi minima dicta necessitatibus nemo, voluptatum aliquid ut eligendi quidem in porro vel debitis dignissimos exercitationem libero ratione?</p>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}