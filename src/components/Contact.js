import React from "react";
import { useCallback, useMemo, useState } from 'react';
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import { contacts } from "../data/data";

const Contact = () => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );
  const [data, setData] = useState(defaultData);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;

    const fieldData = { [name]: value };

    setData({ ...data, ...fieldData });
  },
    [data],
  );
  const handleSendMessage = useCallback(
    async (event) => {
      event.preventDefault();
      /**
       * This is a good starting point to wire up your form submission logic
       * */
      console.log('Data to send: ', data);
    },
    [data],
  );
  const inputClasses =
    'bg-neutral-500 pl-2 border-0 rounded-md placeholder:text-neutral-400 placeholder:text-md text-neutral-200 text-md resize-none';

  return (
    <section id="contact" className="px-4 py-16 md:py-24 lg:px-8">
      <div className='mx-auto max-w-screen-lg'>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <EnvelopeIcon className="hidden w-14 md:block" />
            <h2 className="text-3xl font-bold">Get in touch</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="order-2 col-span-1 md:order-1 ">
              <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
                <input
                  className={inputClasses}
                  name="name"
                  onChange={onChange}
                  placeholder="Name"
                  required
                  type="text"
                />
                <input
                  autoComplete="email"
                  className={inputClasses}
                  name="email"
                  onChange={onChange}
                  placeholder="Email"
                  required
                  type="email"
                />
                <textarea
                  className={inputClasses}
                  maxLength={368}
                  name="message"
                  onChange={onChange}
                  placeholder="Message"
                  required
                  rows={6}
                />
                <button
                  aria-label="Submit contact form"
                  className="w-max rounded bg-blue-300 px-4 py-2 text-md font-medium shadow-md outline-none hover:bg-blue-700"
                  type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="order-1 col-span-1 flex flex-col gap-y-4 md:order-2">
              <p className="prose leading-6">Feel free to send me a mail or contact me over these socials!</p>
              <dl className="flex flex-col space-y-4 text-base sm:space-y-2">

                {contacts.map(({ type, text, href }) => {
                  return (
                    <div key={type}>
                      <dt className="sr-only">{type}</dt>
                      <dd className="flex items-center">
                        <a
                          className=
                          '-m-2 flex rounded-md p-2 hover:text-sky-300'
                          href={href}>
                          {/* <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" /> */}
                          <span className="ml-3 text-sm sm:text-base">{text}</span>
                        </a>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
