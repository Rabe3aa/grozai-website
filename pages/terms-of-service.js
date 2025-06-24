import Head from 'next/head';
import { motion } from 'framer-motion';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const LegalSection = ({ title, children }) => (
  <motion.div variants={fadeInUp} className="mb-8">
    <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
    <div className="prose prose-lg max-w-none text-accent-gray-700">
      {children}
    </div>
  </motion.div>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function TermsOfServicePage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Terms of Service - GrozAI</title>
        <meta name="description" content="Read the official Terms of Service for using the GrozAI website and services."
        />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-accent-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary text-center">Terms of Service</h1>
          <p className="text-lg text-accent-gray-600 text-center mt-4">Last Updated: June 14, 2025</p>
        </div>
      </motion.section>

      {/* Terms Content Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

          <LegalSection title="1. Agreement to Terms">
            <p>By using the services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, do not use the services. We may amend the Terms at any time by posting a revised version on our website. The revised version will be effective at the time we post it.</p>
          </LegalSection>

          <LegalSection title="2. Intellectual Property Rights">
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
          </LegalSection>

          <LegalSection title="3. User Representations">
            <p>By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Use; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.</p>
          </LegalSection>

          <LegalSection title="4. Prohibited Activities">
            <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to:</p>
            <ul>
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Term and Termination">
            <p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.</p>
          </LegalSection>

          <LegalSection title="6. Governing Law">
            <p>These Terms of Use and your use of the Site are governed by and construed in accordance with the laws of the State of California applicable to agreements made and to be entirely performed within the State of California, without regard to its conflict of law principles.</p>
          </LegalSection>

          <LegalSection title="7. Disclaimer">
            <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          </LegalSection>

          <LegalSection title="8. Limitation of Liability">
            <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          </LegalSection>

          <LegalSection title="9. Contact Us">
            <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
            <p>GrozAI Inc.<br/>Venice Business Tower, Zahraa El Maadi<br/>Cairo, Egypt<br/>Email: <a href="mailto:legal@groz.ai" className="text-primary hover:underline">legal@groz.ai</a></p>
          </LegalSection>

        </div>
      </motion.section>

    </motion.div>
  );
}
