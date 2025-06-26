"use client";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  name?: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  error?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  label?: string;
  className?: string;
  classNameInput?: string;
}

const FormInputText = ({
  name,
  value = "",
  onChange,
  error = "",
  disabled,
  maxLength,
  minLength,
  label,
  className,
  classNameInput,
}: Props) => {
  const isValid = error?.length < 1;
  return (
    <div className={["w-full", className].join(" ")}>
      <label htmlFor={name} className="relative">
        <input
          type="text"
          id={name}
          name={name}
          maxLength={maxLength}
          minLength={minLength}
          onChange={onChange}
          value={value}
          disabled={disabled}
          autoComplete="off"
          className={[
            "h-11 border border-gray focus:border-accent bg-secondary dark:bg-secondary-dark outline-none flex-1 px-4 text-16 w-full peer",
            !isValid ? "!border-red-500" : "",
            disabled && "cursor-progress opacity-50",
            classNameInput,
          ].join(" ")}
        />
        {label && (
          <span
            className={[
              "absolute left-2 translate-y-1/2 px-2 transition-all ease-linear cursor-text select-none",
              "peer-focus:opacity-100 peer-focus:text-[12px] peer-focus:font-bold peer-focus:translate-y-[-0.7rem]",
              value.length > 0
                ? "opacity-100 text-[12px] font-bold translate-y-[-0.7rem]"
                : "text-16 opacity-80",
            ].join(" ")}
          >
            {label}
          </span>
        )}
      </label>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ height: "0px" }}
            animate={{ height: "auto" }}
            exit={{ height: "0px" }}
            transition={{
              ease: "easeIn",
            }}
            className="overflow-hidden"
          >
            <p className="text-xs mt-2 text-red-500">{error}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormInputText;
