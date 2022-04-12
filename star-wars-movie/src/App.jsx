import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Home } from "./pages/Home";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
