import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const features = [
  {
    title: "Estetyka",
    text: "Łączymy nowoczesne technologie z prostotą, zapewniając produkty trwałe i estetyczne.",
  },
  {
    title: "Trwałość",
    text: "Oferujemy deski odporne na warunki atmosferyczne, zachowują swój doskonały wygląd przez lata. Wybierz jakość, na którą możesz liczyć!",
  },
  {
    title: "Wsparcie",
    text: "Zapewniamy pełne wsparcie – od fachowego doradztwa i indywidualnej wyceny, przez transport, aż po profesjonalny montaż.",
  },
  {
    title: "Działamy w całej Polsce",
    text: "Choć nasza siedziba mieści się w Warszawie, realizujemy zlecenia na terenie całego kraju, dostarczając rozwiązania dopasowane do Twoich potrzeb.",
  },
];

const Features = () => {
  return (
    <>
      {/* Mobile Slider */}
      <div className="md:hidden px-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="!pb-10"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <h2 className="display-40-regular">{feature.title}</h2>
              <p className="mt-6 headline-20-regular">{feature.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex mt-24 justify-center">
        <div className="border-r border-basic-dark pr-[84px]">
          <h2 className="display-48-regular">Estetyka</h2>
          <p className="mt-6 headline-20-regular">
            Łączymy nowoczesne technologie z prostotą, zapewniając <br />
            produkty trwałe i estetyczne.
          </p>
          <h2 className="display-48-regular mt-12">Trwałość</h2>
          <p className="mt-6 headline-20-regular">
            Oferujemy deski odporne na warunki atmosferyczne, <br />
            zachowują swój doskonały wygląd przez lata. Wybierz <br />
            jakość, na którą możesz liczyć!
          </p>
        </div>
        <div className="pl-[84px]">
          <h2 className="display-48-regular mt-[128px]">Wsparcie</h2>
          <p className="mt-6 headline-20-regular">
            Zapewniamy pełne wsparcie – od fachowego doradztwa i <br />
            indywidualnej wyceny, przez transport, aż po profesjonalny <br />
            montaż.
          </p>
          <h2 className="display-48-regular mt-12">Działamy w całej Polsce</h2>
          <p className="mt-6 headline-20-regular">
            Choć nasza siedziba mieści się w Warszawie, realizujemy <br />
            zlecenia na terenie całego kraju, dostarczając rozwiązania <br />
            dopasowane do Twoich potrzeb.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
