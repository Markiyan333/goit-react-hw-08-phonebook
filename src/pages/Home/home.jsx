import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `0 auto`,
    maxWidth: 1200,
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Please log in or sign up to get started{' '}
        <span role="img" aria-label="Greeting icon" color='blue'>
        </span>
      </h1>
    </div>
  );
}
