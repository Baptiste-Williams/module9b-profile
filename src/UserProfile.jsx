// src/UserProfile.jsx
import React from 'react';
import micBackground from './assets/rapbattlemic.png'; // Full-screen background

const UserProfile = ({ nickname, bio, image }) => {
  const styles = {
    pageWrapper: {
      backgroundImage: `url(${micBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    },
    container: {
      backgroundColor: 'rgba(12, 12, 31, 0.9)',
      color: '#fdfdfd',
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'center',
      maxWidth: '360px',
      width: '100%',
      boxShadow: '0 0 20px rgba(0,0,0,0.5)',
      fontFamily: 'Verdana, sans-serif',
      backdropFilter: 'blur(6px)'
    },
    avatar: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '15px',
      border: '3px solid #fdfdfd'
    },
    name: {
      fontSize: '1.8rem',
      margin: '10px 0',
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    bio: {
      fontSize: '1rem',
      lineHeight: '1.5',
      color: '#cccccc'
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <img src={image} alt="DJ Avatar" style={styles.avatar} />
        <h1 style={styles.name}>{nickname}</h1>
        <p style={styles.bio}>{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
