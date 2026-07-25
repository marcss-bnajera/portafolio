import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../../../shared/context/LanguageContext';
import FadeContent from '../../../shared/components/ui/FadeContent';
import { FaPaperPlane } from 'react-icons/fa';

function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const { t } = useLanguage();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      form.current.reset();
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/40 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 backdrop-blur-md focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300";

  return (
    <FadeContent delay={200} initialOpacity={1}>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              name="from_name"
              placeholder={t('contact.form.namePlaceholder')}
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              name="from_email"
              placeholder={t('contact.form.emailPlaceholder')}
              required
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            {t('contact.form.subject')}
          </label>
          <input
            type="text"
            name="subject"
            placeholder={t('contact.form.subjectPlaceholder')}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            {t('contact.form.message')}
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder={t('contact.form.messagePlaceholder')}
            required
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-cyan-500 hover:bg-cyan-400 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
        >
          {loading ? (
            t('contact.form.sending')
          ) : (
            <>
              <FaPaperPlane className="text-sm" />
              {t('contact.form.send')}
            </>
          )}
        </button>

        {status === 'success' && (
          <p className="text-center text-green-500 text-sm font-medium">{t('contact.form.success')}</p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-500 text-sm font-medium">{t('contact.form.error')}</p>
        )}
      </form>
    </FadeContent>
  );
}

export default ContactForm;
