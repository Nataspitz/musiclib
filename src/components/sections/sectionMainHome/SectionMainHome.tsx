import { useSearchContext } from "../../../contexts/SearchContext";
import { Button } from "../../../fragments/button/button/Button";
import { ListHome } from "../../lists/listHome/ListHome";
import { StyleSectionMainHome } from "./StyleSectionMainHome";

export function SectionMainHome() {
    const { setSelectedGenre, songs, getSongsByGenre } = useSearchContext(); // Utilize o hook useSearchContext para acessar o contexto
    const genres = ['Rock', 'Pop', 'Hip Hop', 'Electronic', 'Jazz', 'Reggae'];

    const handleClick = (genre: string) => {
        setSelectedGenre(genre);
        getSongsByGenre();
    }
    
    return(
        <StyleSectionMainHome>
            <div>
                <ul>
                    {genres.map(genre => (
                        <li key={genre}>
                            <Button classButton="genre" onClick={() => handleClick(genre)}> 
                                <span>{genre}</span>
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ListHome musics={songs} />
            </div>
        </StyleSectionMainHome>
    )
}
