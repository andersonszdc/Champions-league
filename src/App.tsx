import { Route, Routes, Link, useMatch, useResolvedPath, LinkProps } from "react-router-dom";
import DeathGroup from "./components/DeathGroup";
import GroupStage from "./components/GroupStage";
import { NavBar } from "./styles/components";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return match ? (
    <Link className="navbar__item--active" to={to} {...props}>{children}</Link>
    ) : (
    <Link className="navbar__item" to={to} {...props}>{children}</Link>
  )
}

function App() {
  return (
      <>
        <NavBar>
          <CustomLink to="/">Fase de grupos</CustomLink>
          <CustomLink to="/oitavas">Oitavas</CustomLink>
          <CustomLink to="/quartas">Quartas</CustomLink>
          <CustomLink to="/semi">Semi</CustomLink>
          <CustomLink to="/final">Final</CustomLink>
        </NavBar>
        <Routes>
          <Route path="/" element={<GroupStage />} />
          <Route path="/oitavas" element={<DeathGroup />} />
          <Route path="/quartas" element={<DeathGroup />} />
          <Route path="/semi" element={<DeathGroup />} />
          <Route path="/final" element={<DeathGroup />} />
        </Routes>
      </>
  );
}

export default App;
