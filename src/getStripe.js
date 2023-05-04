import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_live_51JmiSDSHDNuFGNWQMvyQWid2EgEGJn1lSk0OAJtATfb6uQ0Yz1rUq26ATeOr5QKjI5hh0pjoJWZkDxvBftwFVTXM001G9NOBfP');
  }
  return stripePromise;
};

export default getStripe;