import "./Comments.css"

interface ArticleProps {
    img: string;
    comments: string;
}

export function Comments({ img, comments }: ArticleProps) {

    return(
        <>
            <div id="comments">
                <img src={ img } alt="photo de perfil do usuário" />
                <p> {comments} </p>
            </div>
        </>
    )
}