import { StyledHeader } from "./styles";
import { Link } from "react-router-dom";
import LinkHeader from "components/NavMenu";

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <img src="/images/logo.png" alt="Logo Casa Verde" />
            </Link>
            <LinkHeader />
        </StyledHeader>
    )
}

export default Header;