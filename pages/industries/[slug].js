import { useRouter } from "next/router";
import industries from "../../data/industries";
import Head from "next/head";
import Link from "next/link";

export default function IndustryDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <Head><title>Industry Not Found | GrozAI</title></Head>
        <h1 className="text-3xl font-bold mb-4 text-primary">Industry Not Found</h1>
        <p className="mb-6">Sorry, we couldn&apos;t find details for this industry.</p>
        <Link href="/" legacyBehavior>
          <a className="text-blue-600 hover:underline">Back to Home</a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{industry.title} | GrozAI</title>
        <meta name="description" content={industry.shortDescription} />
      </Head>
      <section className="min-h-screen bg-accent-gray-50 py-16 px-4 md:px-0">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <Link href="/" legacyBehavior>
            <a className="text-primary text-sm hover:underline mb-6 inline-block">&larr; Back to Industries</a>
          </Link>
          <div className="flex items-center mb-6">
            <span className="text-5xl text-primary mr-4"><industry.icon /></span>
            <h1 className="text-3xl sm:text-4xl font-bold text-primary">{industry.title}</h1>
          </div>
          <p className="text-lg text-accent-gray-700 mb-8">{industry.details.overview}</p>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Key AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industry.details.solutions.map((solution, idx) => (
                <div key={idx} className="bg-accent-gray-50 rounded-lg p-6 flex">
                  <span className="text-3xl text-primary mr-4 mt-1"><solution.icon /></span>
                  <div>
                    <h3 className="font-bold text-lg text-accent-gray-800 mb-1">{solution.title}</h3>
                    <p className="text-accent-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-accent-gray-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-primary mb-2">How GrozAI Delivers</h2>
            <p className="text-accent-gray-700">{industry.details.howWePerform}</p>
          </div>
        </div>
      </section>
    </>
  );
}
