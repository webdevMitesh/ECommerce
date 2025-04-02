import React from 'react';

const Profile = ({ loguser }) => {
  if (!loguser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="profile">
      <h2>Profile Details</h2>
      <div>
        <h3>Name: {loguser.name.firstname} {loguser.name.lastname}</h3>
        <p><strong>Email:</strong> {loguser.email}</p>
        <p><strong>Username:</strong> {loguser.username}</p>
        <p><strong>Phone:</strong> {loguser.phone}</p>

        <h4>Address</h4>
        <p><strong>Street:</strong> {loguser.address.street} {loguser.address.number}</p>
        <p><strong>City:</strong> {loguser.address.city}</p>
        <p><strong>Zipcode:</strong> {loguser.address.zipcode}</p>
        <p><strong>Geolocation:</strong> Lat: {loguser.address.geolocation.lat}, Long: {loguser.address.geolocation.long}</p>
      </div>
    </div>
  );
};

export default Profile;
