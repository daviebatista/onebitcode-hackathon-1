import CompanyLogo from "./CompanyLogo/CompanyLogo";
import styles from "./styles.module.scss";

function CompanyLogos   ()  {

    const companies = [
        '/src/assets/images/companies/company-logo-google.svg',
        '/src/assets/images/companies/company-logo-microsoft.svg',
        '/src/assets/images/companies/company-logo-airbnb.svg',
        '/src/assets/images/companies/company-logo-axure.svg',
        '/src/assets/images/companies/company-logo-apple.svg',
        '/src/assets/images/companies/company-logo-facebook.svg',
        '/src/assets/images/companies/company-logo-nokia.svg',
        '/src/assets/images/companies/company-logo-oracle.svg',
    ]
    
    const companyImgs = companies.map(companyImages => <CompanyLogo url={companyImages} />)

    return  (
            <div className={styles.companiesDiv}>
                {companyImgs}
            </div>
    )
}

export default CompanyLogos