import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const PrivacySection = ({ title, children }) => (
  <motion.div variants={fadeInUp} className="mb-8">
    <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
    <div className="prose prose-lg max-w-none text-accent-gray-700">
      {children}
    </div>
  </motion.div>
);

export default function PrivacyPolicyPage() {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Privacy Policy - GrozAI</title>
        <meta name="description" content="Understand how GrozAI collects, uses, and protects your personal data by reading our official Privacy Policy." />
      </Head>

      {/* Hero Section */}
      <motion.section variants={fadeInUp} className="bg-accent-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary text-center">Privacy Policy</h1>
          <p className="text-lg text-accent-gray-600 text-center mt-4">Last Updated: June 14, 2025</p>
        </div>
      </motion.section>

      {/* Policy Content Section */}
      <motion.section variants={fadeInUp} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          <PrivacySection title="1. Introduction">
            <p>Welcome to GrozAI. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
          </PrivacySection>

          <PrivacySection title="2. Information We Collect">
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="3. How We Use Your Information">
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="4. Disclosure of Your Information">
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul>
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="5. Security of Your Information">
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
          </PrivacySection>

          <PrivacySection title="6. Your Rights and Choices">
            <p>You have certain rights regarding your personal information. You may at any time review or change the information in your account or terminate your account by:</p>
            <ul>
                <li>Logging into your account settings and updating your account.</li>
                <li>Contacting us using the contact information provided below.</li>
            </ul>
            <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</p>
          </PrivacySection>

          <PrivacySection title="7. Changes to This Privacy Policy">
            <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the “Last Updated” date.</p>
          </PrivacySection>

          <PrivacySection title="8. Contact Us">
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>GrozAI Inc.<br/>Venice Business Tower, Zahraa El Maadi<br/>Cairo, Egypt<br/>Email: <a href="mailto:privacy@groz.ai" className="text-primary hover:underline">privacy@groz.ai</a></p>
          </PrivacySection>

        </div>
      </motion.section>

    </motion.div>
  );
}
