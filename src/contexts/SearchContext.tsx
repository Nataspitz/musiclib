import React, { createContext, useContext, useState, ReactNode } from "react";
import axios from "axios";

const urlApi =  "https://api.spotify.com/"

interface Song {
    id: string;
    name: string;
    artists: { name: string }[];
    album: { images: { url: string }[] };
}

interface ISearchContext {
    setSelectedGenre: (genre: string | null) => void;
    genres: string[];
    songs: Song[];
    handleGenreClick: (genre: string) => void;
    getSongsByGenre: () => void;
}

export const SearchContext = createContext<ISearchContext>({
    setSelectedGenre: () => {}, // Corrigido aqui
    genres: [],
    songs: [],
    handleGenreClick: () => {},
    getSongsByGenre: () => {}
});

interface SearchProviderProps {
    children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [songs, setSongs] = useState<Song[]>([]);

    const getSongsByGenre = async () => {
        try {
            const response = await axios.get(`${urlApi}search?q=${selectedGenre}&type=track&limit=10`);
            setSongs(response.data.tracks.items);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    const handleGenreClick = (genre: string) => {
        setSelectedGenre(genre);
        getSongsByGenre();
    };

    const values: ISearchContext = {
        setSelectedGenre,
        genres: [], // Atualizar de acordo com suas necessidades
        songs,
        handleGenreClick,
        getSongsByGenre
    };

    return (
        <SearchContext.Provider value={values}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearchContext() {
    return useContext(SearchContext);
}
