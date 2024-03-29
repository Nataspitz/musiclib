
interface Music {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
}

interface Props {
  musics: Music[];
}

export function ListHome({ musics }: Props) {
  return (
    <ul>
      {musics.map(music => (
        <li key={music.id}>
          <img src={music.album.images[0].url} alt={music.name} />
          <div>
            <h3>{music.name}</h3>
            <p>{music.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
