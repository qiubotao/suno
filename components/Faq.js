import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';



const FaqSection = () => {
  const { t } = useTranslation('common');

  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mb-8 text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Frequently Asked <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
          </p>
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16">
          {/* FAQ Item 1 */}
          <div className="mb-6 rounded-xl border border-solid border-black p-8">
            <div className="mb-4 flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">{t('faq_q_1')}</p>
              <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
                <div className="absolute h-4 w-0.5 bg-white"></div>
                <div className="h-0.5 w-4 border border-solid border-white"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">{t('faq_a_1')}</p>
          </div>

          {/* FAQ Item 2 */}
          <div className="mb-6 rounded-xl border border-solid border-black p-8">
            <div className="mb-4 flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">{t('faq_q_2')}</p>
              <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
                <div className="absolute h-4 w-0.5 bg-white"></div>
                <div className="h-0.5 w-4 border border-solid border-white"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">{t('faq_a_2')}</p>
          </div>

          {/* FAQ Item 3 */}
          <div className="mb-6 rounded-xl border border-solid border-black p-8">
            <div className="mb-4 flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">{t('faq_q_3')}</p>
              <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
                <div className="absolute h-4 w-0.5 bg-white"></div>
                <div className="h-0.5 w-4 border border-solid border-white"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">{t('faq_a_3')}</p>
          </div>

          {/* FAQ Item 4 */}
          <div className="mb-6 rounded-xl border border-solid border-black p-8">
            <div className="mb-4 flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">{t('faq_q_4')}</p>
              <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
                <div className="absolute h-4 w-0.5 bg-white"></div>
                <div className="h-0.5 w-4 border border-solid border-white"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">{t('faq_a_4')}</p>
          </div>



          {/* FAQ Item 5 */}
          <div className="mb-6 rounded-xl border border-solid border-black p-8">
            <div className="mb-4 flex cursor-pointer items-start justify-between">
              <p className="text-xl font-semibold">{t('faq_q_5')}</p>
              <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
                <div className="absolute h-4 w-0.5 bg-white"></div>
                <div className="h-0.5 w-4 border border-solid border-white"></div>
              </div>
            </div>
            <p className="mb-4 text-[#636262]">{t('faq_a_5')}</p>
          </div>
        </div>


        <p className="text-center">
          Can’t find the answer you’re looking for? Reach out to our
          <Link href="/support">
            <span className="font-bold text-[#1353fe]"> customer support team</span>
          </Link>.
        </p>
      </div>
    </section >
  );
};

export default FaqSection;
