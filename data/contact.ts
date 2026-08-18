export interface RegionalContact {
  region: string;
  email: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappNumber: string; // digits only, no + or spaces — required format for wa.me links
}

export const worldwideContact: RegionalContact = {
  region: 'Worldwide Business',
  email: 'eaunoit@yahoo.com',
  phoneDisplay: '+91 89103 64287',
  phoneTel: '+918910364287',
  whatsappNumber: '918910364287',
};

export const northAmericaContact: RegionalContact = {
  region: 'North America',
  email: 'stephendoucette8@gmail.com',
  phoneDisplay: '+1-902-307-8447',
  phoneTel: '+19023078447',
  whatsappNumber: '19023078447',
};

export const bangladeshContact: RegionalContact = {
  region: 'Bangladesh Business',
  email: 'tuhin863@gmail.com',
  phoneDisplay: '+880 1811-545040',
  phoneTel: '+8801811545040',
  whatsappNumber: '8801811545040',
};

export function contactLinksFor(contact: RegionalContact) {
  return {
    email: `mailto:${contact.email}`,
    phone: `tel:${contact.phoneTel}`,
    whatsapp: `https://wa.me/${contact.whatsappNumber}`,
  };
}

// Kept for backward compatibility with existing usages (Footer) — defaults to worldwide.
export const contactInfo = worldwideContact;
export const contactLinks = contactLinksFor(worldwideContact);
