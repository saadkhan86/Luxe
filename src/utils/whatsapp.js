import { WHATSAPP_NUMBER } from "../constants";

export const generateWhatsAppLink = (product) => {
  const message = `Hello, I want to buy this product:\n\nProduct Name: ${product.name}\nPrice: $${product.price}\nCategory: ${product.category}\n\nPlease confirm availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
