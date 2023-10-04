import {Routes,Route, BrowserRouter} from 'react-router-dom';
import { Top } from '../pages/Top';
import { IndividualCharacterPage } from '../pages/IndividualCharacterPage';
import { CharacterPages } from '../pages/CharacterPages';
import { DefaultLayout } from '../templetes/DefaultLayout';
import { HeaderOnly } from '../templetes/HeaderOnly';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout><Top /></DefaultLayout>} />
                <Route path="/character" element={<HeaderOnly><CharacterPages /></HeaderOnly>} />
                <Route path="/character/:id" element={<HeaderOnly><IndividualCharacterPage /></HeaderOnly>} />
            </Routes>
        </BrowserRouter>
    )
}