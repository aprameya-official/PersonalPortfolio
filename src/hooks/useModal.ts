import { createElement, useEffect, useRef, useState } from "react";

export interface ModalAction {
  openModal(): void;
  closeModal(): void;
}

export type CreateModal = (element: any, props?: any) => void;

const useModal = () => {
  const [modal, setModal] = useState<any>(null);
  const ref = useRef<ModalAction | null>(null);

  const createModal = (element: any, props: any) => {
    if (!element) {
      return ref.current?.closeModal();
    }
    setModal(
      createElement(element, {
        ...props,
        modalRef: ref,
      })
    );
  };

  useEffect(() => {
    if (modal) {
      ref.current?.openModal();
    }
  }, [modal]);

  return [modal, createModal];
};

export default useModal;
