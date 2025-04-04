import { BtnAction, Modal } from "@/components/elements";
import { RefObject } from "react";
import { useRouter } from "next/navigation";
import { ModalAction } from "@/hooks/useModal";
interface Props {
  errorMessage: string;
  modalRef: RefObject<ModalAction>;
  title: string;
  linkTo?: string;
  btnTitle: string;
  exitFunc: () => void;
  isSecondModal?: boolean;
}

const ModalUnexpectedError = ({
  errorMessage,
  modalRef,
  title = "Error",
  linkTo,
  btnTitle = "",
  exitFunc,
  isSecondModal,
}: Props) => {
  const { push } = useRouter();
  const handleLinkTo = () => {
    modalRef.current?.closeModal();
    if (linkTo) {
      push(linkTo);
    }
  };
  return (
    <Modal
      title={title}
      ref={modalRef}
      exitFunc={exitFunc}
      isSecondModal={isSecondModal}
    >
      <div className="max-w-xl w-full mx-auto pb-8 px-4">
        <div className="flex flex-col pt-4 pb-12 text-center  mx-auto">
          {errorMessage || "An unexpected error has occurred. Try again later."}
        </div>
        <div className=" max-w-sm mx-auto">
          {linkTo ? (
            <BtnAction
              disabled={false}
              className="w-full"
              title={btnTitle}
              runAction={() => handleLinkTo()}
            />
          ) : (
            <BtnAction
              disabled={false}
              className="w-full"
              title="Close"
              runAction={() => modalRef.current?.closeModal()}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalUnexpectedError;
