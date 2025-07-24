// src/SkillList.jsx
import React from 'react';

const SkillList = ({ skills }) => {
  const styles = {
    container: {
      backgroundColor: '#1f1f2f',
      color: '#fdfdfd',
      padding: '20px',
      borderRadius: '14px',
      width: '320px',
      margin: '20px auto',
      boxShadow: '0 0 10px rgba(0,0,0,0.25)',
      fontFamily: 'Arial, sans-serif'
    },
    title: {
      fontSize: '1.4rem',
      marginBottom: '10px',
      textAlign: 'center'
    },
    list: {
      listStyleType: 'none',
      padding: 0
    },
    item: {
      fontSize: '1rem',
      padding: '6px 0'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>🧠 Skills</div>
      <ul style={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} style={styles.item}>🎯 {skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
