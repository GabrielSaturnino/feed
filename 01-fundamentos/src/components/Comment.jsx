import style from './Comment.module.css'
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={style.comment}>
      <img src='https://avatars.githubusercontent.com/u/80297011?v=4' alt='' />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Autor do comment</strong>
              <time title='20 de Janeiro' dateTime='2023-01-31 17:41:38'>Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Parabens</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}