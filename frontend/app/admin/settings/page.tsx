export default function SettingsPage() {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl'>Settings</h2>
      <div className='bg-card p-4 rounded'>
        <h3 className='font-semibold mb-2'>Admin Profile</h3>
        <p>Name: P.O.S.E. Admin</p>
        <p>Email: admin@poseplus.com</p>
      </div>
      <div className='bg-card p-4 rounded'>
        <h3 className='font-semibold mb-2'>Dashboard Preferences</h3>
        <p className='text-sm text-gray-300'>Dark mode and notifications are enabled by default for this student demo project.</p>
      </div>
    </div>
  );
}
