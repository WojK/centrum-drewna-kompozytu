const QuestionsSection = () => {
  return (
    <div className="py-20 justify-center flex bg-primary-green-600 text-white mt-20">
      <div className="border-r border-white pr-24">
        <h2 className="headline-40-regular">Masz pytania?</h2>
        <p className="mt-6">
          Skontaktuj się z nami bezpośrednio lub przez formularz <br />
          kontaktowy.
        </p>
        <div className="flex gap-x-6">
          <div>
            <span className="text-Tertiary-200 body-14-regular block mt-6">
              Email
            </span>
            <span className="body-16-medium block mt-1">
              kid@kompozytidrewno.pl
            </span>
          </div>
          <div>
            <span className="text-Tertiary-200 body-14-regular block mt-6">
              Telefon
            </span>
            <span className="body-16-medium block mt-1">+48 735 745 742</span>
          </div>
        </div>
        <button className="text-primary-green-600 subtitle-16-semibold px-5 py-[17px] bg-white mt-10">
          Napisz do nas
        </button>
      </div>
      <div className="pl-24">
        <h2 className="headline-40-regular">Chcesz być na bieżąco?</h2>
        <p className="mt-6">
          Zapisz się do newslettera, a będziemy Cię informować na <br />
          bieżąco o promocjach i nowościach! Nie wysyłamy więcej niż 2 <br />
          wiadomości w miesiącu.
        </p>
        <button className="text-primary-green-600 subtitle-16-semibold px-5 py-[17px] bg-white mt-10">
          Subskrybuj newsletter
        </button>
      </div>
    </div>
  );
};

export default QuestionsSection;
