"use client";
import {
  BtnSubmit,
  Form,
  FormInputText,
  FormInputTextArea,
  Img,
} from "@/components/elements";
import useModal from "@/hooks/useModal";
import contactFormValidation from "@/utils/validations/contactFormValidation";
import axios from "axios";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import ModalUnexpectedError from "@/components/commons/ModalUnexpectedError";
import { motion } from "framer-motion";
import { fadeIn, swivelVariants, zoomIn } from "@/utils/motion";

const EMAILJS_SERVICE_ID = "service_c7qcuq5";
const EMAILJS_USER_ID = "_9ZNA19N3t29RcXV3";
const EMAILJS_TEMPLATE_ID = "template_chztu2c";

const Contact = () => {
  const [modal, createModal] = useModal();
  const [loading, setLoading] = useState(false);

  const initForm = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const [form, setForm] = useState(initForm);

  const [errorField, setErrorField] = useState<{
    [x: string]: string[];
  } | null>(null);

  const hndChange = ({ n, v }: { n: string; v: string }) => {
    setForm((curr) => ({
      ...curr,
      [n]: v,
    }));

    if (errorField) {
      setErrorField((curr) => ({
        ...curr,
        [n]: [""],
      }));
    }
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const valideets = contactFormValidation(form);
    if (valideets) {
      setErrorField(valideets);
      return;
    }
    setLoading(true);
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", {
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_USER_ID,
        template_params: form,
      });
      setLoading(false);
      setForm(initForm);
      createModal(ModalUnexpectedError, {
        title: "Thanks for Reaching Out!",
        errorMessage:
          "I've received your message and appreciate you getting in touch. I'll review your inquiry and respond as soon as possible. In the meantime, feel free to check out more of my work.",
      });
    } catch (err: any) {
      createModal(ModalUnexpectedError, {
        errorMessage: err.response?.message,
      });
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      id="contacts"
      className=" scroll-mt-[6rem] relative"
    >
      {modal}
      <motion.div
        variants={zoomIn(0.2, 0.6)}
        className=" absolute top-24 left-[-14rem]"
      >
        <Img
          src="/images/accent-grid-3.png"
          alt="grid"
          width="80"
          height="103"
        />
      </motion.div>

      <div className="flex items-center max-w-[317px] w-full text-32 font-medium pb-8">
        <h1>
          <Link href="/#contacts" scroll>
            <span className="text-accent">#</span>contacts
          </Link>
        </h1>
        <div className="h-[1px] w-full flex-1 bg-accent ml-3"></div>
      </div>
      <div className="flex flex-col gap-8">
        <motion.p
          variants={swivelVariants}
          className="text-gray max-w-[515px] w-full"
        >
          I&apos;m open to freelance opportunities and would love to
          collaborate! If you have any requests or questions, feel free to reach
          out—I&apos;m here to help!
        </motion.p>

        <Form onSubmit={handleSubmit}>
          <motion.div
            variants={fadeIn("up", "tween", 0.1, 0.4)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
          >
            <FormInputText
              onChange={(e) => hndChange({ n: "from_name", v: e.target.value })}
              name="from_name"
              value={form.from_name}
              label="Name"
              error={errorField?.from_name?.[0]}
              disabled={loading}
            />

            <FormInputText
              onChange={(e) =>
                hndChange({ n: "from_email", v: e.target.value })
              }
              name="from_email"
              value={form.from_email}
              label="Email"
              error={errorField?.from_email?.[0]}
              disabled={loading}
            />

            <FormInputTextArea
              onChange={(e) => hndChange({ n: "message", v: e.target.value })}
              name="message"
              value={form.message}
              label="Message"
              rows={4}
              error={errorField?.message?.[0]}
              disabled={loading}
              className="md:col-span-2"
            />

            <div className="md:col-span-2 flex">
              <BtnSubmit
                title="Send"
                className="self-start"
                disabled={loading}
              />
            </div>
          </motion.div>
        </Form>
      </div>
    </motion.section>
  );
};

export default Contact;
