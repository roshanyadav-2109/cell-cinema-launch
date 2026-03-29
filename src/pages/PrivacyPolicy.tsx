import PageLayout from "@/components/PageLayout";

const sections = [
  { title: "1. Overview", content: 'Precigenetics, Inc. ("we", "our", "us") respects your privacy and is committed to protecting the personal data we collect through our website www.precigenetics.com.' },
  { title: "2. Information We Collect", content: "We may collect the following categories of personal information:", list: ["Identity Data: Names, usernames, professional titles", "Contact Data: Email addresses, phone numbers, mailing addresses", "Technical Data: IP addresses, browser type and version, device information, operating system", "Usage Data: Information about how you use our website and services"] },
  { title: "3. How We Use Your Information", content: "We only use your personal data when the law allows us to. Most commonly, we use it where:", list: ["We need to perform a contract with you", "It is necessary for our legitimate business interests (and your rights do not override those interests)", "We need to comply with a legal obligation"] },
  { title: "4. Data Security", content: "We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way." },
  { title: "5. Data Retention", content: "We retain personal data only as long as necessary for the purposes stated in this policy, and in compliance with legal, regulatory, and accounting requirements." },
  { title: "6. Your Rights", content: "Under applicable data protection laws, you may have the right to:", list: ["Request access to your personal data", "Request correction of your personal data", "Request erasure of your personal data", "Request restriction of processing", "Request data portability", "Withdraw consent at any time"] },
  { title: "7. Changes to This Policy", content: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date." },
  { title: "8. Contact Us", content: "For questions about this Privacy Policy, please contact us at: hello@precigenetics.com" },
];

const PrivacyPolicy = () => (
  <PageLayout title="Privacy Policy" description="Precigenetics Privacy Policy — how we collect, use, and protect your personal data.">
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-slate-muted text-sm">Last Updated: March 21, 2025</p>
      </div>
    </section>

    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading font-semibold text-xl mb-3">{s.title}</h2>
            <p className="text-slate-body leading-relaxed mb-3">{s.content}</p>
            {s.list && (
              <ul className="list-disc list-inside space-y-1.5 text-slate-body text-sm">
                {s.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
