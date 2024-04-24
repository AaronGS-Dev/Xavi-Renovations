import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Menu = () => {
    const { i18n, t } = useTranslation();

    const onChangeLang = (e) => {
        const lang_code = e.target.value
        i18n.changeLanguage(lang_code)
    }

    return (
        <nav>
            <select defaultValue={i18n.language} onChange={onChangeLang} >
                        <option value={'en'}>en</option>
                        <option value={'de'}>de</option>
                        <option value={'es'}>es</option>
            </select>
        </nav>
    )
}