import React from "react";
import Hero from "../../components/Hero/Hero";

const Privacy = () => {
  // changing the webpage title dynamically
  document.title = `${process.env.REACT_APP_ApplicationName} | Privacy`;
  return (
    <div>
      <Hero></Hero>
      <section className="flex items-center justify-center">
        <div className="max-w-5xl p-4 md:p-20 rounded-xl border-2 border-whiteMid m-4 md:my-20 w-full">
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 px-4">
            <div className="bg-whiteHigh rounded-2xl min-h-80">
              <p className="text-transparent bg-clip-text bg-gradient-to-b from-getStartedGradientStart to-getStartedGradientEnd text-3xl md:text-5xl font-bold pb-8">
                Privacy Policy
              </p>
              <p className="text-start md:text-xl text-blackLow">
                Privacy Policy Effective Date: 19 April 2023 At{" "}
                {process.env.REACT_APP_ApplicationName}, we value your privacy
                and are committed to protecting your personal information.
                <br />
                <br />
                This Privacy Policy explains how we collect, use, and disclose
                your personal information when you use our{" "}
                {process.env.REACT_APP_ApplicationName}
                webapp. Information We Collect We collect personal information
                that you provide to us when you register for an account, such as
                your name, email address, and password. We may also collect
                information that you provide to us when you use the webapp, such
                as the topics you choose and the key points you provide. We may
                use cookies and similar technologies to collect information
                about how you use the webapp, such as your IP address, device
                information, and browsing history.
                <br />
                <br />
                How We Use Your Information We use your personal information to
                provide the webapp services to you, to communicate with you
                about the webapp, and to improve the webapp. We may also use
                your personal information for marketing purposes, such as
                sending you promotional emails or advertisements. We do not sell
                or rent your personal information to third parties. Disclosure
                of Your Information We may disclose your personal information to
                third-party service providers who assist us with providing the
                webapp services, such as hosting, payment processing, and
                analytics.
                <br />
                <br />
                We may also disclose your personal information if required by
                law or if we believe that such disclosure is necessary to
                protect our rights, your safety, or the safety of others. Data
                Retention and Security We retain your personal information as
                long as necessary to provide the webapp services to you and as
                required by law. We take reasonable measures to protect your
                personal information from unauthorized access, disclosure, and
                use. Your Rights You have the right to access, modify, or delete
                your personal information that we have collected. You may also
                have the right to object to or restrict our use of your personal
                information. To exercise these rights, please contact us at the
                email address below. Changes to This Privacy Policy We may
                update this Privacy Policy from time to time. If we make
                material changes to this Privacy Policy, we will notify you by
                email or by posting a notice on the webapp. Your continued use
                of the webapp after the effective date of the revised Privacy
                Policy constitutes your acceptance of the revised Privacy
                Policy.
                <br />
                <br />
                Contact Us If you have any questions or concerns about this
                Privacy Policy or our privacy practices, please contact us at
                <span className="font-black">
                  {process.env.REACT_APP_SupportEmail}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
