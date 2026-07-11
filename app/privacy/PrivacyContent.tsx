export default function PrivacyContent() {
    return (
      <main className="min-h-screen bg-[#0b0b0b] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Legal
          </p>
  
          <h1 className="mt-3 text-5xl font-black">
            Privacy Policy
          </h1>
  
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Your privacy matters to us. AI Resume by EdgeLair is designed to help
            you create professional resumes while treating your personal
            information responsibly and securely.
          </p>
  
          <div className="mt-14 space-y-12">
  
            <section>
              <h2 className="text-2xl font-black">
                Information We Collect
              </h2>
  
              <ul className="mt-5 list-disc space-y-3 pl-6 text-zinc-300">
                <li>Your uploaded resume.</li>
                <li>Your email address.</li>
                <li>Your optional profile photo.</li>
                <li>Information you enter while creating a resume.</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-black">
                How We Use Your Information
              </h2>
  
              <ul className="mt-5 list-disc space-y-3 pl-6 text-zinc-300">
                <li>Generate your professional resume.</li>
                <li>Improve formatting and readability.</li>
                <li>Send your completed resume.</li>
                <li>Provide customer support when requested.</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-black">
                AI Processing
              </h2>
  
              <p className="mt-5 leading-8 text-zinc-300">
                Your resume may be securely processed using trusted AI services to
                generate improved content and formatting. We do not use your
                resume to train our own AI models.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-black">
                Data Security
              </h2>
  
              <p className="mt-5 leading-8 text-zinc-300">
                We take reasonable measures to protect your personal information
                during processing and storage. While no online service can
                guarantee absolute security, we continuously work to safeguard
                your data.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-black">
                Data Retention
              </h2>
  
              <p className="mt-5 leading-8 text-zinc-300">
                We retain your information only for as long as necessary to
                provide the service or comply with legal obligations. You may
                request deletion of your data at any time.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-black">
                Your Rights
              </h2>
  
              <ul className="mt-5 list-disc space-y-3 pl-6 text-zinc-300">
                <li>Request access to your personal information.</li>
                <li>Request correction of inaccurate information.</li>
                <li>Request deletion of your uploaded resume and personal data.</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-2xl font-black">
                Contact Us
              </h2>
  
              <p className="mt-5 leading-8 text-zinc-300">
                If you have any questions regarding this Privacy Policy or wish to
                request deletion of your information, please contact us at:
              </p>
  
              <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <p className="font-bold text-white">
                  support@edgelair.com
                </p>
              </div>
            </section>
  
          </div>
  
          <div className="mt-20 border-t border-zinc-800 pt-8">
            <p className="text-sm text-zinc-500">
              Last updated: July 2026
            </p>
          </div>
        </div>
      </main>
    );
  }