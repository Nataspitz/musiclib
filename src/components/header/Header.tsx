import { StyleContainerMain } from "../containers/StyleContainerMain";
import { StyleHeader } from "./StyleHeader";
import logo from "../../assets/logo.png"
import { SearchInput } from "../searchInput/SearchInput";
import { useState } from "react";


export function Header() {
    const [isSearch, setIsSearch] = useState(false);

    return(
        <StyleHeader>
            <StyleContainerMain>
                <div className="header__container">
                    <figure>
                        <img src={logo} alt="Logo da MusicLib" />
                    </figure>
                    <SearchInput />
                </div>   
            </StyleContainerMain>
        </StyleHeader>
    )
}
