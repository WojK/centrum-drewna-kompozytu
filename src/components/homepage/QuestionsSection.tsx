import { FormEventHandler, useState } from "react";
import Form from "./Form";

const QuestionsSection = () => {
  const [mode, setMode] = useState<"init" | "form" | "sent">("init");

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    console.log(event);
    setMode("sent");
  };

  const handleWriteToUsClick = () => {
    setMode("form");
  };

  return (
    <div className="px-6 md:px-0 py-12 md:py-20 justify-center flex flex-col md:flex-row bg-primary-600 text-white mt-12 md:mt-20">
      <div className="md:border-r border-white md:pr-24 md:w-[528px]">
        {(mode === "init" || mode === "form") && (
          <>
            <h2 className="headline-40-regular">Masz pytania?</h2>
            <p className="mt-6">
              Skontaktuj się z nami bezpośrednio lub przez formularz kontaktowy.
            </p>
          </>
        )}
        <div>
          {mode !== "sent" && (
            <div className="flex flex-col md:flex-row gap-x-6">
              <div>
                <span className="text-tertiary-200 body-14-regular block mt-6">
                  Email
                </span>
                <span className="body-16-medium block mt-1">
                  kid@kompozytidrewno.pl
                </span>
              </div>
              <div>
                <span className="text-tertiary-200 body-14-regular block mt-6">
                  Telefon
                </span>
                <span className="body-16-medium block mt-1">
                  +48 735 745 742
                </span>
              </div>
            </div>
          )}
          {mode === "init" && (
            <button
              className="cursor-pointer text-primary-600 subtitle-16-semibold px-5 py-[17px] bg-white mt-10 mb-12 md:mb-0"
              onClick={handleWriteToUsClick}
            >
              Napisz do nas
            </button>
          )}
        </div>
        {mode === "form" && (
          <div className="mt-6 pb-10 md:pb-0">
            <Form onSubmit={handleFormSubmit} />
          </div>
        )}
        {mode === "sent" && (
          <>
            <p className="headline-40-regular text-white">
              Dziękujemy! Wiadomość została wysłana.
            </p>
            <p className="headline-18-regular text-white mt-6 mb-10 md:mb-0">
              Niedługo wrócimy do Ciebie z odpowiedzią.
            </p>
          </>
        )}
      </div>
      <div className="md:pl-24 pt-10 md:pt-0 border-t md:border-t-0 border-white">
        <h2 className="headline-40-regular">Chcesz być na bieżąco?</h2>
        <p className="mt-6">
          Zapisz się do newslettera, a będziemy Cię informować na
          <br className="hidden md:inline" />
          bieżąco o promocjach i nowościach! Nie wysyłamy więcej niż 2{" "}
          <br className="hidden md:inline" />
          wiadomości w miesiącu.
        </p>
        <button className="cursor-pointer w-full md:w-fit text-primary-600 subtitle-16-semibold px-5 py-[17px] bg-white mt-10">
          Subskrybuj newsletter
        </button>
      </div>
    </div>
  );
};

export default QuestionsSection;
