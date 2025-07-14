export const Whatsapp = () => {
  const phoneNumber = "582556227196"; // Reemplaza con tu número de teléfono
  const message = "Hola, estoy interesado en sus servicios."; // Mensaje opcional al iniciar la conversación

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Abrir chat en WhatsApp
    </a>
  );
};
