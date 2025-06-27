export default function DeleteAccountPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Delete Your Capsoool Account</h1>
      
      <p className="mb-4">
        If you wish to delete your Capsoool account and all associated data, you can request deletion by contacting us directly.
      </p>

      <h2 className="text-xl font-semibold mb-2">How to Request Account Deletion</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Send an email to <strong>support@capsoool.com</strong> from the email associated with your account.</li>
        <li>Include the subject line: <strong>"Delete My Capsoool Account"</strong>.</li>
        <li>We will process your request within 7 business days and confirm via email.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">What Data Will Be Deleted</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Your account credentials and profile data</li>
        <li>All user-generated content and preferences</li>
        <li>Associated subscription or usage logs</li>
      </ul>

      <p className="mb-4">
        Some data may be retained temporarily (up to 30 days) for legal or security reasons as required by law.
      </p>

      <p>
        If you have any questions, please email us at <strong>support@capsoool.com</strong>.
      </p>
    </div>
  );
}
