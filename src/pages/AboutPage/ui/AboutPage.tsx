import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('Про сайт')}
        </div>
    );
};
export default AboutPage;
