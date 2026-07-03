import { useState } from 'react';
import { copy } from '../content';
import { Icon } from './Icon';
import { openWhatsapp } from '../utils/whatsapp';

const WhatsappIcon = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.61.844 5.027 2.27 7L4.5 28.5l6.68-1.727A11.93 11.93 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10a9.94 9.94 0 0 1-4.75-1.203l-.383-.211-3.965 1.023 1.047-3.828-.25-.398A9.93 9.93 0 0 1 6 15C6 9.465 10.465 5 16 5zm-4.281 5.02c-.211 0-.547.078-.836.39-.285.313-1.094 1.07-1.094 2.61 0 1.539 1.121 3.027 1.277 3.234.156.211 2.164 3.457 5.34 4.71 2.641 1.043 3.18.836 3.754.782.574-.051 1.848-.754 2.11-1.485.257-.726.257-1.351.183-1.484-.078-.13-.285-.207-.598-.363-.312-.156-1.847-.914-2.132-1.02-.286-.101-.496-.156-.704.157-.207.312-.804 1.02-.988 1.226-.183.211-.363.235-.675.079-.313-.157-1.32-.489-2.516-1.555-.93-.828-1.559-1.852-1.742-2.164-.18-.313-.02-.481.136-.637.14-.14.313-.363.47-.547.155-.183.206-.312.312-.52.101-.207.05-.39-.028-.546-.078-.156-.687-1.703-.968-2.328-.235-.535-.485-.52-.704-.528-.183-.007-.39-.011-.597-.011z" />
  </svg>
);

export function WhatsappFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wa-float">
      {open && (
        <div className="wa-float__menu" role="menu">
          {copy.whatsappFloat.options.map((option) => (
            <button
              key={option.key}
              role="menuitem"
              onClick={() => {
                setOpen(false);
                openWhatsapp(option.key, 'float_button');
              }}
            >
              <Icon name="chat" className="wa-float__item-icon" />
              {option.label}
            </button>
          ))}
        </div>
      )}
      <button
        className="wa-float__toggle"
        aria-label={copy.whatsappFloat.label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : <WhatsappIcon />}
      </button>
    </div>
  );
}
