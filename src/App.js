import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";
import { toAuthor, toTask, toTasks } from "./routers";


export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </li>
            </ul>
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);