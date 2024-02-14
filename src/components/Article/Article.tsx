import "./Article.css";

import { Comments } from "../../components/Comments/Comments";
import perfilImg from "../../assets/images/mokey_logo.png"
import { useEffect, useState } from "react";

interface ArticleProps {
    thumbnail: string;
    title: string;
    provider: string;
    description: string;
}

export function Article( { thumbnail, title, provider, description}: ArticleProps) {

    const [isCommentsOpened, setIsCommentsOpened] = useState(false)
    const [comments, setComments] = useState([])

    function handleToggleComments() {
        setIsCommentsOpened(!isCommentsOpened)
    }

    function handleCreateComment() {
        const newImg = perfilImg
        const newComment = window.prompt("Digite seu comentário aqui!")
        const commentObject = {
            img:newImg,
            text: newComment
        }

        setComments([...comments, commentObject])
    }

    useEffect(() => {
        console.table(comments)
    }, [comments])

    return(
        <>
            <article onClick={ handleToggleComments }>
                <a href="#">
                    <img src={ thumbnail } alt={ title } />
                </a>

                <a href="#">
                    <div className="article-infos">
                        <h2> { title } </h2>
                        <h3> { provider } </h3>
                        <p> { description } </p>
                    </div>
                </a>
            </article>
            { isCommentsOpened &&
            <div id="section-comments">
                { comments.map(comment => <Comments key={new Date().getTime()} img={ comment.img } comments={ comment.text } />) }
                <div id="comments-buttons">
                    <button onClick={ handleCreateComment }>Comment</button>
                    <button>Ler Mais</button>
                </div>
            </div>
            }
        </>
    )
}