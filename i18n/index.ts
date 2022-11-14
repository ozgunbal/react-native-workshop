import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome_message: "Welcome to the App",
          login_identityNo_input_label: 'Identity No',
          login_password_input_label: 'Password',
          general_continue_button: 'Continue',
          general_required_field_errorMessage: 'Required field',
          login_identityNo_length_errorMessage: 'Identity No should be 11 characters',
          login_password_length_errorMessage: 'Password should be 6 characters',
          language_change_button: 'Change Language'
        },
      },
      tr: {
        translation: {
          welcome_message: "Uygulamaya hoşgeldiniz",
          login_identityNo_input_label: 'TCKN',
          login_password_input_label: 'Parola',
          general_continue_button: 'Devam',
          general_required_field_errorMessage: 'Zorunlu Alan',
          login_identityNo_length_errorMessage: 'TCKN 11 karakter olmalıdır',
          login_password_length_errorMessage: 'Parola 6 karakter olmalıdır',
          language_change_button: 'Dili Değiştir'
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    compatibilityJSON: 'v3',
  });

export default i18n;