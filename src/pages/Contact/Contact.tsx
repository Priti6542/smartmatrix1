import ContactFinalCta from "../../features/contact/components/ContactFinalCta";
import ContactHero from "../../features/contact/components/ContactHero";
import ContactInformation from "../../features/contact/components/ContactInformation";
import SimpleContactProcess from "../../features/contact/components/SimpleContactProcess";
import StartAConversation from "../../features/contact/components/StartAConversation";
import WhatCanWeHelpWith from "../../features/contact/components/WhatCanWeHelpWith";
import { useContactForm } from "../../features/contact/hooks/useContactForm";

const Contact = () => {
  const { formRef, status, sendEmail, scrollToForm, prefillMessage } = useContactForm();

  return (
    <div>
      <ContactHero onScrollToForm={scrollToForm} />
      <StartAConversation formRef={formRef} status={status} onSubmit={sendEmail} />
      <ContactInformation />
      <WhatCanWeHelpWith onSelectService={prefillMessage} />
      <SimpleContactProcess />
      <ContactFinalCta onScrollToForm={scrollToForm} />
    </div>
  );
};

export default Contact;
