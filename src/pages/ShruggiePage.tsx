import LegalPage from '../components/LegalPage';

export default function ShruggiePage() {
  return (
    <LegalPage
      title="Shruggie Chrome Extension — Privacy Policy & Terms"
      pageTitle="Shruggie Extension — Privacy & Terms | Max Struever"
      updated="September 25, 2026"
    >
      <p>
        Shruggie is a Chrome extension that copies the text <code>¯\_(ツ)_/¯</code> to your clipboard when you click its
        icon. That is all it does.
      </p>

      <h2>Privacy Policy</h2>
      <p>
        <strong>Data collection: none.</strong> The extension does not collect, store, transmit, or share any personal
        or sensitive user data of any kind. It makes no network requests, runs no analytics, sets no cookies, and has no
        accounts.
      </p>
      <p>
        <strong>Permissions.</strong> The extension requests the <code>clipboardWrite</code> permission. It is used
        solely to write the <code>¯\_(ツ)_/¯</code> text to your clipboard when you click the extension icon. Nothing
        else is read from or written to your clipboard.
      </p>
      <p>
        <strong>Contact.</strong> Questions about this policy: shruggie@madmaxlax.com.
      </p>

      <h2>Terms of Use</h2>
      <p>
        The extension is provided as-is, without warranties of any kind. It is a tiny utility for copying a text
        emoticon; use it at your own discretion.
      </p>
      <p>I may update this page at any time by posting the new version at this same address.</p>
    </LegalPage>
  );
}
