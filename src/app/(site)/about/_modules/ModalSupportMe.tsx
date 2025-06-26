import { RefObject, SyntheticEvent, useState } from "react";
import {
  BtnSubmit,
  Form,
  FormInputText,
  FormInputTextArea,
  Modal,
} from "@/components/elements";
import useModal, { ModalAction } from "@/hooks/useModal";
import { NumericFormat } from "react-number-format";
import scrollintoFirstError from "@/utils/scrollintoFirstError";
import dynamic from "next/dynamic";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const ModalUnexpectedError = dynamic(
  () => import("../../../../components/commons/ModalUnexpectedError")
);

interface Props {
  modalRef: RefObject<ModalAction>;
  username: string;
  goal_id?: number;
  isGoalDonation: 1 | 0;
  handleRefreshData?: () => void;
  success_redirect_url: string;
  failure_redirect_url: string;
  handleOpenConfirm: (x: any, y: any) => void;
}

const ModalSupportMe = ({
  modalRef,
  goal_id,
  handleOpenConfirm,
}: Props) => {
  const [modal, createModal] = useModal();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    message: "",
    amount: "",
  });

  const [errorField, setErrorField] = useState<{
    [x: string]: string[];
  } | null>(null);

  const handleChange = ({ n, v }: { n: string; v: string }) => {
    if (errorField) {
      setErrorField({
        ...errorField,
        [n]: [""],
      });
    }
    setForm((curr) => ({
      ...curr,
      [n]: v,
    }));
  };

  const handleChangeAmount = (value: string) => {
    if (errorField) {
      setErrorField(null);
    }
    setForm((curr) => ({
      ...curr,
      amount: value.replace(/[^.\d]/g, ""),
    }));
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSubmit = {
      username: "aprameya",
      supporter_name: form.name,
      supporter_message: form.message,
      amount: form.amount,
      source: "epaygames",
      success_redirect_url: `https://aprameya-portfolio.com/about`,
      failure_redirect_url: `https://aprameya-portfolio.com/about`,
      is_anonymous: 1,
    };

    if (parseFloat(form.amount.replace(/[^.\d]/g, "") || "0") < 20) {
      setErrorField((curr) => ({
        ...curr,
        amount: ["The amount field must be at least 20."],
      }));
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/v1/donate/${goal_id}`,
        dataToSubmit
      );

      handleOpenConfirm(dataToSubmit, data.data);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      const errData = err.response?.data;
      if (errData?.errors) {
        scrollintoFirstError(errData.errors);
        return setErrorField(errData.errors);
      }
      return createModal(ModalUnexpectedError, {
        errorMessage: errData?.message,
      });
    }
  };

  return (
    <Modal
      ref={modalRef}
      title="CONTRIBUTE TO GOAL"
      initialFocus="#input_amount"
    >
      {modal}
      <div className="rounded-3xl flex flex-col space-y-4 max-w-[700px] w-full mx-auto py-8">
        <Form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div>
            <NumericFormat
              thousandSeparator
              name="amount"
              prefix="₱"
              id="input_amount"
              type="text"
              allowNegative={false}
              decimalScale={2}
              value={form.amount}
              className={[
                "text-24 font-bold bg-[transparent] outline-none w-full p-4 border bg-secondary dark:bg-secondary-dark",
                errorField?.amount?.[0]
                  ? "border-red-500"
                  : "border-gray focus:border-accent",
                loading ? "opacity-50 cursor-progress" : "",
              ].join(" ")}
              allowLeadingZeros={false}
              onChange={(e) => handleChangeAmount(e.target.value)}
              placeholder={"₱0.00"}
              autoComplete="off"
              disabled={loading}
              maxLength={11}
              autoFocus
            />

            <AnimatePresence>
              {errorField?.amount?.[0] && (
                <motion.div
                  initial={{ height: "0px" }}
                  animate={{ height: "auto" }}
                  exit={{ height: "0px" }}
                  transition={{
                    ease: "easeIn",
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-xs mt-2 text-red-500">
                    {errorField?.amount?.[0]}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <FormInputText
            name="name"
            label="Name (Optional)"
            onChange={(e) => handleChange({ n: "name", v: e.target.value })}
            value={form.name}
            disabled={loading}
            maxLength={16}
          />
          <FormInputTextArea
            name="message"
            maxLength={120}
            rows={5}
            label="Message (Optional)"
            onChange={(e) => handleChange({ n: "message", v: e.target.value })}
            value={form.message}
            disabled={loading}
          />

          <div className="pt-2 w-full">
            <BtnSubmit
              title="Submit"
              className="py-2 w-full"
              disabled={loading}
            />
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalSupportMe;
