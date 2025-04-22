import { FormEventHandler } from "react";

type TFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const Form = ({ onSubmit }: TFormProps) => {
  return (
    <form className="flex flex-col gap-y-6 w-full" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-Tertiary-50 body-14-regular mb-1">
          Nazwa firmy lub imię i nazwisko
        </label>
        <input
          id="name"
          type="text"
          placeholder="Wpisz nazwę firmy lub imię i nazwisko"
          className="focus:outline-none text-basic-dark px-5 py-3.5 h-12 w-full body-16-regular placeholder:text-Tertiary-400 bg-white border border-primary-grey-100"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="phone"
          className="text-Tertiary-50 body-14-regular mb-1"
        >
          Nr telefonu
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Wpisz numer telefonu"
          className="focus:outline-none text-basic-dark px-5 py-3.5 h-12 w-full body-16-regular placeholder:text-Tertiary-400 bg-white border border-primary-grey-100"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-Tertiary-50 body-14-regular mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Wpisz adres email"
          className="focus:outline-none text-basic-dark px-5 py-3.5 h-12 w-full body-16-regular placeholder:text-Tertiary-400  bg-white border border-primary-grey-100"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="message"
          className="text-Tertiary-50 body-14-regular mb-1"
        >
          Wiadomość
        </label>
        <textarea
          id="message"
          placeholder="Napisz coś"
          className="text-basic-dark px-5 py-3.5 h-[200px] w-full resize-none focus:outline-none body-16-regular placeholder:text-Tertiary-400  bg-white border border-primary-grey-100"
        ></textarea>
      </div>

      <button className="w-full text-white bg-transparent subtitle-16-semibold text-center py-[17px] mt-6 border">
        Wyślij wiadomość
      </button>
    </form>
  );
};

export default Form;
