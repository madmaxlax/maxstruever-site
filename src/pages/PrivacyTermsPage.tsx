import LegalPage from '../components/LegalPage';

export default function PrivacyTermsPage() {
  return (
    <LegalPage
      title="Privacy Policy & Terms of Use"
      pageTitle="Privacy & Terms | Max Struever"
      updated="September 25, 2026"
    >
      <p>This page covers how maxstruever.com handles your data, and the terms under which you may use this site.</p>

      <h2>Privacy Policy</h2>
      <p>
        This is a personal website. It does not have user accounts, and it does not ask you for personal information.
      </p>
      <p>
        <strong>Analytics.</strong> This site uses Google Analytics to understand aggregate usage: which pages are
        visited, how long visitors stay, what browser and device types are used, and approximate geographic location.
        This data is anonymized and is not tied to your identity.
      </p>
      <p>
        <strong>Cookies.</strong> Google Analytics sets cookies in your browser to distinguish visits and measure usage.
        You can block or delete cookies in your browser settings; the site will still work.
      </p>
      <p>
        <strong>Data sharing.</strong> Analytics data is processed by Google under its own privacy policy. I do not
        sell, rent, or share any data collected on this site with third parties for marketing purposes.
      </p>
      <p>
        <strong>Contact.</strong> If you have questions about this policy, reach me at max@madmaxlax.com.
      </p>

      <h2>Terms of Use</h2>
      <p>
        <strong>Content.</strong> Everything on this site is my personal work and opinion, provided as-is for
        informational purposes. It is not professional, legal, financial, or medical advice.
      </p>
      <p>
        <strong>No warranties.</strong> The site and its content are provided without warranties of any kind. I am not
        liable for any damages arising from your use of this site.
      </p>
      <p>
        <strong>External links.</strong> This site links to third-party websites. I do not control or endorse their
        content, and I am not responsible for their practices.
      </p>
      <p>
        <strong>Acceptable use.</strong> Do not misuse this site, attempt to disrupt it, or use its content in ways that
        infringe on others&apos; rights.
      </p>
      <p>
        <strong>Changes.</strong> I may update these terms at any time by posting the new version on this page.
      </p>
    </LegalPage>
  );
}
