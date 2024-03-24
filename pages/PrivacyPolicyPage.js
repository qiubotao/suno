
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation('common');

  return (
    <div>
      <NavBar />

      <div className="container px-10 py-25 mx-auto text-left">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">

            {t('whoWeAre_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('whoWeAre_content')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">

            {t('comments_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('comments_content_1')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">

            {t('media_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('media_content')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">

            {t('cookies_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('cookies_content_1')}
          </p>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('cookies_content_2')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">
            {t('content_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('content_content_1')}
          </p>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('content_content_2')}
          </p>


          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">
            {t('dataShared_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('dataShared_content')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">
            {t('howLong_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('howLong_content')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">
            {t('rights_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('rights_content')}
          </p>

          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-10xl">
            {t('dataSend_title')}
          </h1>
          <p className="mt-6 mb-4 text-gray-500 dark:text-gray-300 text-left">
            {t('dataSend_content')}
          </p>

        </div>
      </div>
      <Footer/>


    </div>
  );
}


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
}