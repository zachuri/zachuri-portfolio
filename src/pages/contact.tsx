import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '../components/Layouts/Motion';

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [inputs, setInputs] = useState({
    companyName: '',
    email: '',
    message: ''
  });

  const handleOnChange = useCallback(
    (e: { persist: () => void; target: { id: any; value: any } }) => {
      e.persist();
      setInputs(prev => ({
        ...prev,
        [e.target.id]: e.target.value
      }));

      setStatus({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
      });
    },
    []
  );

  const handleServerResponse = useCallback((ok: any, msg: any) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });

      setInputs({
        companyName: '',
        email: '',
        message: ''
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
      axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs
      }).then(_response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <Layout>
      <div className="dark:bg-black text-white flex flex-col justify-center items-center min-h-screen -my-10">
        <div className="flex-1 flex flex-col justify-center items-center ">
          <div className="pb-5 pt-5 md:pt-0">
            <Image src="/logo.png " width={30} height={30} alt="logo" />
          </div>
          <h2 className="text-black dark:text-[#bd93f9] text-4xl font-bold">
            Contact
          </h2>
          <div className="container mx-auto flex items-center justify-between my-4 px-10 py-2">
            <div className="border-black dark:border-white border-2 shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/zachary-punsalang/"
                aria-label="link to linkden"
              >
                <FaLinkedin className="fill-black dark:fill-white" />
              </a>
            </div>
            <div className="border-black dark:border-white border-2 shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://github.com/zachuri" aria-label="link to github">
                <FaGithub className="fill-black dark:fill-white" />
              </a>
            </div>
            <div className="border-black dark:border-white border-2 shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://twitter.com/zachurii"
                aria-label="link to twitter"
              >
                <FaTwitter className="fill-black dark:fill-white" />
              </a>
            </div>
            <div className="border-black dark:border-white border-2 shadow-lg  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="mailto:punsalang.zachary.work@gmail.com?body="
                aria-label="link to my email"
              >
                <AiOutlineMail className="fill-black dark:fill-white" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-5 px-10 min-w-full lg:min-w-[500px]"
          >
            {status.info.error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative"
                role="alert"
              >
                <strong className="font-bold">Error</strong>:{' '}
                <span className="block sm:inline">{status.info.msg}</span>
              </div>
            )}

            {status.submitted ? (
              <div className="text-white text-xl font-bold px-4 py-3 relative">
                {' '}
                Your message has been successfully sent. We will contact you
                very soon!
              </div>
            ) : (
              <>
                <input
                  id="companyName"
                  name="companyName"
                  required
                  maxLength={128}
                  type="text"
                  placeholder="Company name"
                  className="border-black text-black dark:bg-black dark:border-white dark:text-white outline-none border-2 px-8 py-2 ease-in duration-300"
                  onChange={handleOnChange}
                  value={inputs.companyName}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={128}
                  placeholder="Your E-mail"
                  className="border-black text-black dark:bg-black dark:border-white dark:text-white outline-none border-2 px-8 py-2 ease-in duration-300"
                  onChange={handleOnChange}
                  value={inputs.email}
                />

                <textarea
                  name="message"
                  id="message"
                  required
                  maxLength={1048576}
                  placeholder="Additional information"
                  className="border-black text-black dark:bg-black dark:border-white dark:text-white border-2 px-8 py-6 min-h-[16em] ease-in duration-300"
                  onChange={handleOnChange}
                  value={inputs.message}
                ></textarea>
                <div className="text-center mt-5">
                  <button
                    type="submit"
                    className="bg-[#bd93f9] text-black px-8 py-2"
                  >
                    {!status.submitting
                      ? !status.submitted
                        ? 'Submit'
                        : 'Submitted'
                      : 'Submitting...'}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
