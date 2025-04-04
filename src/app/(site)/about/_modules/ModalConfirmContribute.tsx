import { RefObject } from "react";
import { BtnLink, Modal } from "@/components/elements";
import amountFormatter from "@/utils/amountFormatter";
import { ModalAction } from "@/hooks/useModal";

interface Props {
  modalRef: RefObject<ModalAction>;
  dataToSubmit: {
    username: string;
    supporter_name: string;
    supporter_message: string;
    amount: number;
    source: string;
    success_redirect_url: string;
    failure_redirect_url: string;
    is_anonymous: 1 | 0;
  };
  paymentData: {
    reference_no: string;
    link_url: string;
    link_expires_at: string;
  };
}

const ModalConfirmContribute = ({
  modalRef,
  dataToSubmit,
  paymentData,
}: Props) => {
  return (
    <Modal ref={modalRef} title="CONFIRM" isNoOutsideClick>
      <div className=" max-w-lg w-full mx-auto items-center flex flex-col space-y-8 py-4">
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center justify-between">
            <div className="text-gray">Name</div>
            <div>
              {dataToSubmit.supporter_name ? (
                dataToSubmit.supporter_name
              ) : (
                <em className="opacity-50">Anonymous</em>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray">Amount</div>
            <div>
              <p>
                {amountFormatter({
                  amount: dataToSubmit.amount,
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-gray">Message</div>
            <div>
              {dataToSubmit.supporter_message || (
                <em className="text-gray">-</em>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-8 items-center w-full">
          <p className="text-center text-sm text-gray">
            <span className="text-red-500">Attention</span>: Clicking
            &quot;CONFIRM&quot; will take you to the{" "}
            <span className="text-white">Eplayment Payment Gateway</span>, where
            you can complete your secure payment.
          </p>
          <BtnLink href={paymentData.link_url} title="Confirm" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirmContribute;
