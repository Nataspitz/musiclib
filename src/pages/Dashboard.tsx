import { useEffect } from "react";
import { Header } from "../components/header/Header";
import { StyleContainerMain } from "../components/containers/StyleContainerMain";

export function Dashboard() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = params.get("access_token");

        if (accessToken) {
            window.localStorage.setItem("@TOKEN", accessToken);
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <StyleContainerMain>
                    <h1>ola</h1>
                </StyleContainerMain> 
            </main>
        </>
    );
}
