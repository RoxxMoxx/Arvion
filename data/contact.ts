export const contactInfo = {
  email: 'eaunoit@yahoo.com',
  phoneDisplay: '+91 89103 64287',
  phoneTel: '+918910364287',
  whatsappNumber: '918910364287', // no + or spaces, required format for wa.me links
};

export const contactLinks = {
  email: `mailto:${contactInfo.email}`,
  phone: `tel:${contactInfo.phoneTel}`,
  whatsapp: `https://wa.me/${contactInfo.whatsappNumber}`,
};
