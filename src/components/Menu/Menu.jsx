import { useActiveLink } from '../../context/ActiveLinkContext';
import { useTranslation } from 'react-i18next';

export const Menu = () => {
    const { i18n, t } = useTranslation();
    const { langCode, setLangCode} = useActiveLink();

    const onChangeLang = (e) => {
        const lang_code = e.target.value
        setLangCode(lang_code)
        i18n.changeLanguage(lang_code)
    }

    return (
            <select defaultValue={i18n.language} onChange={onChangeLang} >
                        <option value={'en'}>{t('languages.english')}</option>
                        <option value={'es'}>{t('languages.spanish')}</option>
            </select>
    )
}