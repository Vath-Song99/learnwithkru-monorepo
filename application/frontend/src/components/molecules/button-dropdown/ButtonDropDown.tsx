import { Fragment, useState, useEffect, useRef } from "react";

const options = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 64 64"
      >
        <path fill="#ed4c5c" d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6h16z" />
        <path fill="#fff" d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32v4.6z" />
        <path
          fill="#ed4c5c"
          d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32v4.6z"
        />
        <path fill="#fff" d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32v4.6" />
        <path fill="#ed4c5c" d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32V25z" />
        <path fill="#fff" d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32v4.6" />
        <path
          fill="#ed4c5c"
          d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3c0-.8 0-1.6-.1-2.3"
        />
        <path
          fill="#fff"
          d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.4 3.1.7 4.6"
        />
        <path
          fill="#ed4c5c"
          d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6"
        />
        <path
          fill="#fff"
          d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6"
        />
        <path
          fill="#ed4c5c"
          d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6"
        />
        <path
          fill="#fff"
          d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6"
        />
        <path
          fill="#ed4c5c"
          d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7"
        />
        <path
          fill="#428bc1"
          d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6"
        />
        <path
          fill="#fff"
          d="m25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm20 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm12 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm2.8-14l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9l-.5 1.6m-8 12l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6l-.4 1.6"
        />
      </svg>
    ),
    value: "English",
  },
  {
    value: "Khmer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 64 64"
      >
        <path
          fill="#ed4c5c"
          d="M2 32c0 5.9 1.7 11.4 4.6 16h50.7c2.9-4.6 4.6-10.1 4.6-16s-1.7-11.4-4.6-16H6.6C3.7 20.6 2 26.1 2 32z"
        />
        <path
          fill="#2a5f9e"
          d="M57.4 16C52.1 7.6 42.7 2 32 2S11.9 7.6 6.6 16h50.8zM6.6 48c5.3 8.4 14.7 14 25.4 14s20.1-5.6 25.4-14H6.6z"
        />
        <path
          fill="#e2e2e2"
          d="M45.9 35.7v-3.1c.1-.4.4-.7.7-.8V29c-.3 0-.5.4-.5.5v-1.2c-.1-.1-.3-.1-.5 0v.3H45v-1.3c-.2 0-.2.6-.6.6c-.2 0-.2-.3-.1-.5s.2-.5.1-.9c-.1.3-.4.5-.4.2c.1-.4.4-.5.2-1.1c-.1.5-.4.5-.3.2c.1-.3.3-.5 0-1c-.1.5-.3.5-.3.2c0-.5 0-1-.6-1.2c0 0 0-.5-.3-.5s-.3.5-.3.5c-.6.2-.6.7-.6 1.2c0 .3-.2.4-.3-.2c-.2.5 0 .6 0 1c.1.3-.2.3-.3-.2c-.2.6.1.7.2 1.1c.1.2-.3.1-.4-.3c-.2.5 0 .8.1.9c.1.2.1.5-.1.5c-.4 0-.4-.6-.6-.6v2.4h-4.7v-2.1c-.3.1-.4.4-.4.4v.4H35s-.2 0-.2-.4s.1-.6.4-.6v-.8s-.7.1-.7.9v-.7c-.2 0-.2.3-.2 1h-.2V27c0-.4.4-.4.4-.7c0 0 .1-.5-.1-.7c-.2.6-.4.5-.4.2c0-.2.2-.4.5-1c.1-.2 0-.7-.1-.9c-.1.5-.1.7-.3.7c-.1 0-.2-.1-.2-.3c0-.3.2-.4.3-.7c.1-.3 0-.6-.1-.8c-.1.5-.1.6-.2.6c-.4-.1 0-.7.1-.9c.1-.3-.1-.5-.1-.5c-.1.4-.2.4-.3.4c-.2 0-.1-.3.1-.5c.1-.1.1-.3 0-.5c-.1.3-.4.3-.3.1l.1-.6h-.3v-1.3h-.4c0-.3-.2-.6-.6-.6c-.4 0-.5.4-.6.6H31v1.3h-.3l.1.7c0 .2-.2.2-.3-.1c-.1.2-.2.4 0 .5c.2.2.2.5.1.5s-.2 0-.3-.4c0 0-.2.3-.1.5c.1.1.5.7.1.9c-.2 0-.2-.2-.2-.6c-.2.2-.3.5-.1.8c.1.3.3.4.3.7c0 .2-.1.3-.2.3c-.2 0-.3-.2-.3-.7c-.1.2-.2.7-.1.9c.3.5.5.7.5 1c0 .2-.3.4-.4-.2c-.1.2-.1.7-.1.7c0 .3.4.3.4.7v.8h-.2c0-.7 0-1-.3-1v.7c0-.8-.7-.9-.7-.9v.8c.3 0 .4.2.4.6s-.2.4-.2.4h-.4v-.4s-.1-.3-.4-.4v2.1h-4.6v-2.4c-.2 0-.2.6-.6.6c-.2 0-.2-.3-.1-.5s.2-.5.1-.9c-.1.4-.4.5-.4.3c.1-.4.4-.5.2-1.1c-.1.5-.4.5-.3.2c.1-.3.3-.5 0-1c-.1.5-.3.5-.3.2c0-.5 0-1-.6-1.2c0 0 0-.5-.3-.5s-.4.3-.4.3c-.6.2-.6.7-.6 1.2c0 .3-.2.4-.3-.2c-.2.5 0 .6 0 1c.1.3-.2.3-.3-.2c-.2.6.1.7.2 1.1c.1.2-.3.1-.4-.3c-.2.5 0 .8.1.9c.1.2.1.5-.1.5c-.4 0-.4-.6-.6-.6v1.3h-.5v-.3c-.2-.1-.4-.1-.5 0v1.2s-.2-.5-.5-.5v2.9c.2.1.6.4.7.8v3.1c-.1.3-.4.7-.6.8h29.1c-.4-.1-.7-.4-.8-.8"
        />
        <g fill="#fff">
          <path d="M49.7 42.1v-1.9h-1v-1.6h-.9v-1.2h-.5v-.9H16.7v.9h-.5v1.2h-.9v1.6h-1v1.9h-.9V44h37.2v-1.9z" />
          <path d="M22.8 36.5c-.2-.1-.6-.4-.6-.8v-3.3l.3-.5h.1v-1c-.2.1-.3.2-.5.3c0-.1-.1-.2-.1-.3c.1-.1.5-.6.6-.8v-.8c-.1 0-.2.1-.3.1c.2-.2.3-.4.3-.6V28c-.2 0-.5.2-.6.5c0-.2-.1-.4-.2-.6c.1-.1.4-.4.4-.6v-.5c-.2 0-.3.1-.5.3c0-.1 0-.1-.1-.2l.3-.4V26c-.1 0-.2.1-.3.2c0-.1-.1-.2-.1-.3l.1-.3v-.4c-.1 0-.1 0-.2.1c0-.1-.1-.2-.1-.2h.1l.3-.2v-.3c-.1 0-.1 0-.2.1c-.1-.2-.2-.3-.4-.4c-.2.1-.3.2-.4.4c-.1-.1-.1-.1-.2-.1v.3l.3.2h.2c0 .1-.1.1-.1.2c-.1-.1-.1-.1-.2-.1v.4l.1.3c0 .1-.1.1-.1.2c-.1-.2-.2-.2-.3-.2v.5l.3.4c0 .1 0 .1-.1.2c-.1-.2-.3-.3-.5-.3v.5c0 .2.3.5.4.6c-.1.2-.1.4-.2.6c-.2-.3-.4-.5-.6-.5v.8c0 .1.2.4.3.6c-.1-.1-.2-.1-.3-.1v.8c.1.2.4.6.6.7c0 .1-.1.2-.1.3c-.1.1-.2 0-.4 0v1l.3.5v3.3c0 .3-.4.6-.6.8h.5V44h2.3v-7.5h.5m10.9-8.2v-1c-.4.1-.6.4-.7.6c0-.2-.1-.4-.2-.6c.1-.4.2-.6.4-.8h.1v-.9c-.3.1-.5.3-.6.5c0-.1-.1-.4-.2-.6l.3-.5h.4v-.9c-.3.1-.5.3-.5.5c0-.1-.1-.4-.2-.6l.5-.4V23c-.2.1-.5.1-.5.5c0-.2-.1-.4-.1-.5l.5-.4V22c-.2 0-.4.1-.4.3c0-.1-.1-.2-.1-.3l.3-.2v-.5c-.1 0-.3.1-.3.3c0-.3-.1-.3-.3-.4c-.1.1-.2.1-.3.4c0-.2-.2-.2-.3-.3v.5l.3.2c0 .1-.1.2-.1.3c0-.3-.2-.3-.4-.3v.5l.5.4c-.1.1-.1.3-.1.5c0-.4-.3-.4-.5-.5v.7l.4.4c-.1.2-.2.5-.2.6c-.1-.2-.3-.4-.5-.5v.9h.1l.3.5c-.1.2-.2.4-.2.6c-.1-.2-.3-.4-.6-.5v.9h.1c.2.1.4.4.4.8v.5c-.1-.2-.4-.5-.7-.6v1h.2c.3.4.4 1 .4 1.4l-.3-.3v1h1c-.2.3-.3.6-.3 1c-.3-.1-.3-.2-.6-.3v1l.2.3v3.5c0 .3-.4.6-.6.8h.5V44h2.3v-7.5h.5c-.2-.1-.6-.4-.6-.8v-3.5l.2-.3v-1c-.4.1-.4.2-.5.5c0-.3-.1-.7-.3-1h1v-1c-.1.1-.2.1-.3.2c0-.5.1-1 .4-1.4c.1.1.2.1.2.1m10.7 8.2c-.2-.1-.6-.4-.6-.8v-3.3l.3-.5h.1v-1c-.2.1-.3.2-.5.2c0-.1-.1-.2-.1-.3c.1-.2.5-.5.6-.7v-.8c-.1 0-.2.1-.3.1c.2-.2.3-.5.3-.6V28c-.2 0-.5.2-.6.5c0-.2-.1-.4-.2-.6c.1-.1.4-.4.4-.6v-.5c-.2 0-.3.1-.5.3c0-.1 0-.1-.1-.2l.3-.4V26c-.1 0-.2.1-.3.2c0-.1-.1-.2-.1-.2l.1-.3v-.4c-.1 0-.1 0-.2.1c0-.1-.1-.2-.1-.2h.1l.3-.2v-.3c-.1 0-.1 0-.2.1c-.1-.2-.2-.3-.4-.4c-.2.1-.3.2-.4.4c-.1-.1-.1-.1-.2-.1v.3l.3.2h.1c0 .1-.1.1-.1.2c-.1-.1-.1-.1-.2-.1v.4l.1.3c-.1.1-.1.1-.1.3c-.1-.2-.2-.2-.3-.2v.5l.3.4c0 .1 0 .1-.1.2c-.1-.2-.2-.2-.4-.3v.5c0 .2.3.5.4.6c-.1.2-.1.4-.2.6c-.2-.3-.4-.5-.6-.5v.8c0 .1.2.4.3.6c-.1-.1-.2-.1-.3-.1v.8c.1.2.5.6.6.8c0 .1-.1.2-.1.3c-.1-.1-.3-.2-.5-.3v1h.1l.3.5v3.3c0 .3-.4.6-.6.8h.5V44h2.3v-7.5h.5" />
        </g>
      </svg>
    ),
  },
];
interface ButtonDropDownProps {
  options: { icon?: React.ReactNode; value?: string }[];
  onChange: (value?: string) => void;
  className?: string;
}

const ButtonDropDown: React.FC<ButtonDropDownProps> = ({
  options,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]?.value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value?: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className="flex justify-center w-full text-sm font-medium text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="flex items-center">
            {options.find((option) => option.value === selectedOption)?.icon}
          </span>
          <svg
            className={`-mr-1 ml-1 h-5 w-5 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 9.58l3.29-3.29a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.29z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-18 border rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <Fragment key={index}>
                <button
                  onClick={() => handleOptionClick(option.value)}
                  className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-purple-200"
                  role="menuitem"
                >
                  <span className="flex items-center">
                    {option.icon}
                    <span className="ml-2">{option.value}</span>
                  </span>
                </button>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { ButtonDropDown };
