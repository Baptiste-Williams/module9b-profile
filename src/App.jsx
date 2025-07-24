import React from 'react';
import UserProfile from './UserProfile';
import ContactCard from './ContactCard';
import djKidAvatar from './assets/dj-kid.png';

function App() {
  const skills = [
    'React and Vite development',
    'Troubleshooting and debugging',
    'Laravel and Blade templating',
    'Creative web design'
  ];

  return (
    <>
      <UserProfile
        nickname="Baptiste Williams"
        bio="Spinning rhythms and coding beats to electrify creative spaces."
        image={djKidAvatar}
      />
      <ContactCard
        email="baptiste@example.com"
        phone="(555) 123-4567"
        location="Los Angeles, CA"
        skills={skills}
      />
    </>
  );
}

export default App;
