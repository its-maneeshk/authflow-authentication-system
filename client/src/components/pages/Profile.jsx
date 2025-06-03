import React from 'react';

function parseJwt(token) {
  if (!token) return null;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

const Profile = () => {
  const token = localStorage.getItem('token');
  const decoded = parseJwt(token);

  return (
    <div>
      <h1>Welcome, {decoded?.name || 'Guest'}!</h1>
      <p>Email: {decoded?.email || 'Not available'}</p>
    </div>
  );
};

export default Profile;
