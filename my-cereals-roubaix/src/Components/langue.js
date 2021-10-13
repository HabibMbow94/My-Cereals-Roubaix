import React from 'react';
import { useTranslation } from 'react-i18next';

const Langue = () => {
    const{t,i18n} = useTranslation();
    function handleClick(lang){
         i18n.changeLanguage(lang);
    }
    return (
        <div className="langues">
            <button onClick={() =>handleClick('en')}>fr</button>
            <button onClick={() =>handleClick('fr')}>en</button>
        </div>
    );
};

export default Langue;