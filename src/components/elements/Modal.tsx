"use client";
import {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import Img from "./Img";

interface Props {
  children?: React.ReactNode;
  title: string;
  isSecondModal?: boolean;
  exitFunc?: () => void;
  isNoOutsideClick?: boolean;
  isNoCloseBtn?: boolean;
  initialFocus?: string;
  classNameTitle?: string;
}

const Modal = forwardRef(
  (
    {
      children,
      title,
      isSecondModal = false,
      exitFunc,
      isNoOutsideClick,
      isNoCloseBtn,
      initialFocus,
      classNameTitle,
    }: Props,
    ref
  ) => {
    const modalContentRef = useRef<HTMLDivElement>(null);
    const [display, setdisplay] = useState(true);
    const pathname = usePathname();

    const open = () => setdisplay(true);

    const close = () => {
      setdisplay(false);
      if (exitFunc) {
        return exitFunc();
      }
    };

    useEffect(() => {
      if (display) {
        document.body.style.overflow = "hidden";
      }

      const handleOnKeyUp = (e: KeyboardEvent) => {
        if (display && e.code === "Escape") {
          close();
        }
      };

      window.addEventListener("keyup", handleOnKeyUp);
      return () => {
        if (display && !isSecondModal) {
          document.body.style.overflowY = "scroll";
        }
        window.removeEventListener("keyup", handleOnKeyUp);
      };
    }, [display, isSecondModal, pathname]);

    useOnClickOutside(modalContentRef, () => {
      if (!isNoOutsideClick && !isNoCloseBtn && display) {
        close();
      }
    });

    useImperativeHandle(ref, () => {
      return {
        openModal: () => open(),
        closeModal: () => close(),
        isOpen: () => display,
      };
    });

    return ReactDOM.createPortal(
      <AnimatePresence>
        {display && (
          <FocusTrap
            focusTrapOptions={{
              initialFocus: initialFocus || false,
              fallbackFocus: "body",
            }}
          >
            <motion.div
              initial={{
                opacity: 0.5,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              style={{ backdropFilter: "blur(2px)" }}
              className="fixed lg:max-w-[calc(100vw-8px)] inset-0 transform-gpu flex  flex-col px-4 py-8 sm:px-8  items-center bg-[#000000] bg-opacity-50 z-[100] bg-clip-padding"
            >
              <motion.div
                ref={modalContentRef}
                initial={{
                  opacity: 0.5,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    ease: "easeOut",
                    duration: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    ease: "easeOut",
                  },
                }}
                className="relative shadow-xl z-[60]  md:max-w-[836px] w-full origin-center my-auto sm:px-4 py-4 bg-primary  flex flex-col "
              >
                {!isNoCloseBtn && (
                  <motion.button
                    type="button"
                    tabIndex={0}
                    onClick={() => close()}
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{
                      rotate: 0,
                      scale: 1,
                      transition: { delay: 0.6 },
                    }}
                    exit={{ rotate: 90 }}
                    className="absolute text-skin-base  top-4 z-[60] right-4  rounded-full grid place-items-center select-none"
                  >
                    <Img
                      src="/icons/x.svg"
                      className=" object-contain object-center w-6 h-6"
                      alt="x icon"
                      height="24"
                      width="24"
                    />
                  </motion.button>
                )}

                <div
                  className={[
                    "font-bold text-base md:text-xl lg:text-2xl text-center",
                    classNameTitle,
                  ].join(" ")}
                >
                  {title}
                </div>
                <div className="max-w-[80%] mx-auto w-full flex justify-center py-4 px-8">
                  <svg
                    height="1"
                    viewBox="0 0 299 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M149.5 0L0 0.5L149.5 1L299 0.5L149.5 0Z"
                      fill="#C778DD"
                    />
                  </svg>
                </div>

                <div className="scrollable-container w-full text-base font-normal px-4 sm:px-0 overflow-auto max-h-[calc(100vh-12rem)]">
                  {children}
                </div>
              </motion.div>
            </motion.div>
          </FocusTrap>
        )}
      </AnimatePresence>,
      document.body
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
