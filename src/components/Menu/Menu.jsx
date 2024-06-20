import { useActiveLink } from '../../context/ActiveLinkContext';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import './Menu.css'

export const Menu = () => {
    const { i18n, t } = useTranslation();
    const { langCode, setLangCode} = useActiveLink();

    const onChangeLang = (selectedOption) => {
        const lang_code = selectedOption.value
        setLangCode(lang_code)
        i18n.changeLanguage(lang_code)
    }

    const options = [
        {
            value: 'en',
            label: (
                <div className="flex items-center">
                    <img src="image/english.webp" alt="Option 1" className="w-5 h-5 mr-2" />
                    {t('languages.english')}
                </div>
            )
        },
        {
            value: 'es',
            label: (
                <div className="flex items-center">
                    <img src="image/spanish.webp" alt="Option 2" className="w-5 h-5 mr-2" />
                    {t('languages.spanish')}
                </div>
            )
        }
    ];

      return (
        <Select
            defaultValue={options.find(option => option.value === i18n.language)}
            options={options}
            onChange={onChangeLang}
            classNamePrefix="react-select"
            className="react-select-container"
        />
    );
}