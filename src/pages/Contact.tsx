import ContactBrandPanel from "../features/contact/components/ContactBrandPanel";
import ContactFormPanel from "../features/contact/components/ContactFormPanel";
import { useContactForm } from "../features/contact/hooks/useContactForm";
import { SITE } from "../constants/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Contact = () => {
  const { formRef, status, sendEmail, prefillMessage } = useContactForm();
  useDocumentTitle(`Contact | ${SITE.shortName}`);

  return (
    <div className="lg:grid lg:min-h-screen lg:grid-cols-2">
      <ContactBrandPanel onSelectService={prefillMessage} />
      <ContactFormPanel formRef={formRef} status={status} onSubmit={sendEmail} />
    </div>
  );
};

export default Contact;
