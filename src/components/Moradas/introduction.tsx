const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="lg:w-1/3 p-4 flex mx-auto items-center justify-center">
        <img
          src="https://i.imgur.com/XKbOMfy.jpg"
          alt="Minilofts"
          className="md:w-[600px] h-[250px] md:h-[300px] mb-4"
        />
      </div>
      <div className="lg:w-2/3 px-4 py-0 pb-8 md:py-8 flex flex-col items-start">

        <h2 className="text-2xl font-bold mb-4">Pé na areia!</h2>
        <p className="mb-4 md:text-2xl">
          Esse condomínio tem 13 Mini Lofts com vista para o mar e ao atravessar a rua você já estará com os PÉS NA AREIA! Fica a 3 km do centro de Tramandaí (cerca de 6 min de carro). Os motoristas amigos ou uber cobram em torno de R$ 15,00 para ir ao centro. Fica também a 3 km da plataforma.
        </p>
        <p className="mb-4 md:text-2xl">
          Possui como grande diferencial o Espaço de Lazer e o Espaço Gourmet, onde você pode aproveitar seu descanso com mais diversão e conforto!
        </p>
        <p className="mb-4 md:text-xl font-bold">
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
