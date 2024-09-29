import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './global-styled.js'
// Importando as dependencias para criar as rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Sobre from './routes/Sobre/index.jsx'
import Login from './routes/Login/index.jsx'
import CadastrarProduto from './routes/CadastrarProduto/index.jsx'
import CriarUsuario from './routes/CriarUsuario/index.jsx'

const router = createBrowserRouter([
  {
    // Criando as Rotas Pai
    path: '/',
    element: <App/>,
    errorElement: <Error/>,

    // Criando as Rotas Filhas

    children: [
      { path: '/', element: <Home/> },
      { path: '/produtos', element: <Produtos/> },
      { path: '/sobre', element: <Sobre/>},
      { path: '/login', element: <Login/> },
      { path: '/cadastrarProduto', element: <CadastrarProduto/>},
      { path: '/criarUsuario', element: <CriarUsuario/>},

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </StrictMode>,
)
