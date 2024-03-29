import { FaSearch } from "react-icons/fa";
import { Input } from "../../fragments/Input";
import { StyleSearchInput } from "./StyleSearchInput";


export function SearchInput() {
    return(
        <StyleSearchInput>
            <FaSearch />
            <Input type="text" placeholder="Procure sua música"/>
        </StyleSearchInput>
    )
}