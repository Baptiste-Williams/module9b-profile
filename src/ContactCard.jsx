// src/ContactCard.jsx
import React from 'react';

const ContactCard = ({ email, phone, location, skills }) => {
  const styles = {
    container: {
      backgroundColor: 'rgba(12, 12, 31, 0.9)',
      color: '#fdfdfd',
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'left',
      maxWidth: '360px',
      width: '100%',
      margin: '20px auto',
      boxShadow: '0 0 20px rgba(0,0,0,0.5)',
      fontFamily: 'Verdana, sans-serif',
      backdropFilter: 'blur(6px)',
      lineHeight: '1.6'
    },
    heading: {
      fontSize: '1.5rem',
      marginBottom: '10px',
      borderBottom: '2px solid #fdfdfd',
      paddingBottom: '5px'
    },
    info: {
      marginBottom: '10px',
      color: '#ccc'
    },
    skillList: {
      paddingLeft: '0',
      marginTop: '10px',
      listStyleType: 'none'
    },
    skillItem: {
      paddingLeft: '18px',
      position: 'relative',
      marginBottom: '8px'
    },
    bullet: {
      content: '"💣"',
      position: 'absolute',
      left: '0',
      top: '0'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact</h2>
      <p style={styles.info}>📧 {email}</p>
      <p style={styles.info}>📞 {phone}</p>
      <p style={styles.info}>📍 {location}</p>

      <h2 style={styles.heading}>Skills</h2>
      <ul style={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.skillItem}>
            <span style={styles.bullet}>💣</span> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactCard;
