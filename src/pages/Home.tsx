import { SiSpotify } from 'react-icons/si';
import { Button } from '../fragments/button/button/Button';
import { StyleBackgroundImage } from '../components/backgroundImage/StyleBackgroundImage';
import { StyleContainerMain } from '../components/containers/StyleContainerMain';
import logo from "../assets/logo.png"
import { SectionMainHome } from '../components/sections/sectionMainHome/SectionMainHome';

export function Home() {

  const handleLogin = () => {
    const authEndpoint = 'https://accounts.spotify.com/authorize';
    const clientId = "9a7621e58865473c8913e6d2f4835dd8";
    const redirectUri = "http://localhost:5173/dashboard";
    const scopes = ['user-read-private', 'user-read-email'];
    
    const url = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    window.location.href = url;

  }

  return (
    <StyleBackgroundImage>
      <StyleContainerMain>
        <figure>
          <img src={logo} alt="Logo da MusicLib" />
        </figure>
        <Button classButton="login" onClick={handleLogin}>
          <div>
            <SiSpotify />
            <p>Entre com o Spotify</p>
          </div>
        </Button>
        {/* <SectionMainHome /> */}
      </StyleContainerMain>
    </StyleBackgroundImage>
  );
}
