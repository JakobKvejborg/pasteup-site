import { ref } from 'vue';

export const email = ref('');
export const messageError = ref('');

export function validateForm(e) {
  e.preventDefault(); // stop default form submission

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    messageError.value = 'Skriv korrekt email';
  } else {
    messageError.value = '';
    e.target.submit(); // submit if valid
  }
}