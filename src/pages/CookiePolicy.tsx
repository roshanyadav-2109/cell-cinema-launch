import PageLayout from "@/components/PageLayout";

const sections = [
  { title: "1. Introduction", content: "This Cookie Policy explains how Precigenetics, Inc. (\"we\", \"our\", \"us\") uses cookies and similar tracking technologies when you visit our website www.precigenetics.com." },
  { title: "2. What Are Cookies?", content: "Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners.", list: ["First-party cookies are set by the website you are visiting.", "Third-party cookies are set by a service other than the website you are visiting, typically for analytics or functionality purposes."] },
  { title: "3. Types of Cookies We Use", subsections: [
    { subtitle: "Essential Cookies", text: "Required for the basic functionality and security of our website. These cookies cannot be disabled." },
    { subtitle: "Performance and Functionality Cookies", text: "Help us improve the performance and functionality of our website. They are not strictly necessary but enhance your browsing experience." },
    { subtitle: "Analytics and Customization Cookies", text: "Allow us to gather aggregate data about website traffic, usage patterns, and the effectiveness of our marketing campaigns." },
  ] },
  { title: "4. Managing Cookies", content: "You can accept or reject cookies through the opt-out links in our cookie banner or by adjusting your browser settings. Please note that rejecting cookies may limit some features of our website." },
  { title: "5. Changes to This Policy", content: "We reserve the right to update this Cookie Policy at any time. We recommend reviewing it periodically for changes." },
  { title: "6. Contact Us", content: "For questions about our use of cookies, please contact us at: hello@precigenetics.com" },
];

const CookiePolicy = () => (
  <PageLayout title="Cookie Policy" description="Precigenetics Cookie Policy — how we use cookies and tracking technologies.">
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-accent">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h1 className="font-heading font-bold text-4xl md:text-[56px] leading-[1.1] tracking-tight mb-3">Cookie Policy</h1>
        <p className="text-slate-muted text-sm">Last Updated: March 21, 2025</p>
      </div>
    </section>

    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-6 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="font-heading font-semibold text-xl mb-3">{s.title}</h2>
            {s.content && <p className="text-slate-body leading-relaxed mb-3">{s.content}</p>}
            {s.list && (
              <ul className="list-disc list-inside space-y-1.5 text-slate-body text-sm">
                {s.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {s.subsections && (
              <div className="space-y-4 mt-3">
                {s.subsections.map((sub) => (
                  <div key={sub.subtitle}>
                    <h3 className="font-heading font-semibold text-base mb-1">{sub.subtitle}</h3>
                    <p className="text-slate-body text-sm leading-relaxed">{sub.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default CookiePolicy;
