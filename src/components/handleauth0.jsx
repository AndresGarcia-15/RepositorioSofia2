import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthHandler = () => {
  const { user, isAuthenticated, getIdTokenClaims } = useAuth0();

  useEffect(() => {
    const handleAuth = async () => {
      try {
        if (isAuthenticated && user) {
          const idTokenClaims = await getIdTokenClaims();
          const idToken = idTokenClaims.__raw;

          const apiUrl = "http://127.0.0.1:8000/api/register";

          // Realiza la solicitud POST a la API con el ID Token en los headers
          const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${idToken}`,
            },
            body: JSON.stringify({
              // Ajusta según lo que necesites en tu backend
              username: user.nickname,
              email: user.email,
              idClient: user.sub,
            }),
          });

          if (response.ok) {
            console.log("Usuario registrado exitosamente en la API.");

            // Puedes realizar acciones adicionales después de un registro exitoso
            // Por ejemplo, puedes redirigir al usuario a una página especial o realizar otras operaciones.
          } else {
            console.error("Error al registrar usuario en la API:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error al procesar autenticación:", error);
      }
    };

    handleAuth();
  }, [isAuthenticated, user, getIdTokenClaims]);

  return null; // Puedes retornar algún contenido aquí si es necesario
};

export default AuthHandler;
