export default function DeleteDataPage() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Request Data Deletion – Capsoool</h1>

      <p className="mb-4">
        Capsoool values your privacy. If you would like to request the deletion of some or all of your personal data without deleting your account, please follow the steps below.
      </p>

      <h2 className="text-xl font-semibold mb-2">How to Request Data Deletion</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Send an email to <strong>support@capsoool.com</strong> from your registered email address.</li>
        <li>Include the subject: <strong>&quot;Delete My Data (Capsoool)&quot;</strong>.</li>
        <li>Specify exactly what data you would like deleted (e.g. activity history, saved content, preferences, etc.).</li>
      </ul>

      <p className="mb-4">
        We will process your request within 7 business days and confirm via email. Some data may be retained temporarily (up to 30 days) for legal or fraud prevention reasons.
      </p>

      <h2 className="text-xl font-semibold mb-2">What You Can Request to Delete</h2>
      <ul className="list-disc list-inside mb-4">
        <li>User activity and interaction history</li>
        <li>Uploaded media or saved content</li>
        <li>Location or usage metadata</li>
        <li>Other personal data (as applicable)</li>
      </ul>

      <p>
        Your account will remain active unless you also request full account deletion. For account deletion, visit our <a href="/deleteaccount" className="text-blue-600 underline">Delete Account</a> page.
      </p>
    </div>
  );
}
