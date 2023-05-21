const Introduction = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/3 w-full px-3 sm:px-5 lg:pl-10 flex mx-auto items-center justify-center pt-5">
        <img
          src="https://i.imgur.com/XKbOMfy.jpg"
          alt="Minilofts"
          className="lg:w-[600px] lg:h-[350px] w-full h-full md:h-[300px] mb-4"
        />
      </div>
      <div className="lg:w-2/3 flex flex-col items-start px-3 sm:px-5 lg:mr-10">

        <h2 className="text-xl md:text-xl lg:text-2xl font-bold mb-4 pt-3 sm:pt-2 lg:pt-5">Pé na areia!</h2>
        <p className="mb-4 text-base md:text-xl lg:text-2xl text-justify">
          Esse condomínio tem 13 Mini Lofts com vista para o mar e ao atravessar a rua você já estará com os PÉS NA AREIA! Fica a 3 km do centro de Tramandaí (cerca de 6 min de carro). Os motoristas amigos ou uber cobram em torno de R$ 15,00 para ir ao centro. Fica também a 3 km da plataforma.
        </p>
        <p className="mb-4 text-base md:text-xl lg:text-2xl text-justify">
          Possui como grande diferencial o Espaço de Lazer e o Espaço Gourmet, onde você pode aproveitar seu descanso com mais diversão e conforto!
        </p>
        <p className="mb-4 text-sm md:text-base lg:text-lg font-bold text-justify">
          Endereço: Av. Beira Mar 77 ou entrada pelos fundos pela Rua Bergamo 80. Bairro: Tramandaí Beira Mar. Tramandaí/RS
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Reservar Agora
        </button>
      </div>
    </div>

  );
};

export default Introduction;
