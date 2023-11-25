import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const registerUser = async () => {
      try {
        if (isAuthenticated && user) {
          const idTokenClaims = await getIdTokenClaims();
          const idToken = idTokenClaims.__raw;

          const apiUrl = "http://127.0.0.1:8000/api/register";
          const registerResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify({
              idClient: user.sub,
              email: user.email,
              username: user.nickname,
            }),
          });

          if (registerResponse.ok) {
            const responseData = await registerResponse.json();
            console.log("Respuesta del servidor:", responseData);
          } else {
            console.error("Error al registrar usuario en la API:", registerResponse.statusText);
          }
        }
      } catch (error) {
        console.error("Error al procesar autenticación:", error);
      }
    };

    registerUser();
  }, [isAuthenticated, user, getIdTokenClaims]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      
    </div>
  );
};

export default Profile;
