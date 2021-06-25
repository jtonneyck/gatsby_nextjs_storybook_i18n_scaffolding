import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const Homepage = (props) => {

  const { t } = useTranslation('common')
  return (
    <>
      <main>
        <h1>{t('welcome')}</h1>
        <h1>{t('bye')}</h1>
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage;