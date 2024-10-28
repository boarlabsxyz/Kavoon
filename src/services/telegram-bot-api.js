import * as Sentry from '@sentry/browser';

const sendOrderMessage = async ({
  senderName,
  senderTel,
  messenger,
  country,
  comment,
  desiredColor,
  orderedProducts,
  totalSum,
  language,
  howDiscover,
}) => {
  const data = {
    senderName,
    senderTel,
    messenger,
    country,
    comment,
    desiredColor,
    orderedProducts,
    totalSum,
    language,
    howDiscover,
  };
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    Sentry.captureException(error);
    return error;
  }
};

const sendChatMessage = async (senderName, senderTel, messenger, message) => {
  const data = {
    senderName,
    senderTel,
    messenger,
    message,
  };
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    Sentry.captureException(error);
    return error;
  }
};

const telegramApi = { sendOrderMessage, sendChatMessage };
export default telegramApi;
