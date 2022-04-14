import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { MoviesContext } from "./contexts/MoviesContext"; 

function App() {
    const [movies, setMovies] = useState([]);

    return (
        <ThemeProvider theme={theme}>
            <MoviesContext.Provider value={{ movies, setMovies }}>
                <GlobalStyle />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies/:id" element={<Movie />} />
                    </Routes>
                </Router>
            </MoviesContext.Provider>
        </ThemeProvider>
    );
}

export default App;
