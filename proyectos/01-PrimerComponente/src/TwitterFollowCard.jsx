import { useState } from "react"

export default function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    // Children contiene el objeto que se pasa como contenido del componente
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const texto = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    function manejarClic() {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="Avatar del usuario"
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>
                        {children}
                    </strong>
                    <span className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={manejarClic}>
                    <span className='tw-followCard-text'>
                        {texto}
                    </span>
                    <span className='tw-followCard-stopFollow'>
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}