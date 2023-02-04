import { toAuthor, toTasks } from "../routers"
import { StyledNavLink } from "./styled";
import { List, Item } from "./styled";

export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks}>Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor}>O autorze</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};