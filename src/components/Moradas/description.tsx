const Description = () => {
  return (
    <div className="relative w-screen">
      <img
        src="https://i.imgur.com/xUH7XIQ.jpg"
        alt="image 1"
        className="absolute h-full w-screen"
      />
      <div className="absolute h-full w-full bg-white opacity-60" />
      <div className="relative h-full px-2 pt-8 pb-10 lg:pt-14 lg:pb-20 ">
        <div className="p-3">
          <p className="mb-4 text-base md:text-xl lg:text-2xl text-justify text-black">
            Esse condomínio tem 13 Mini Lofts com vista para o mar e ao atravessar a rua você já estará com os PÉS NA AREIA! Fica a 3 km do centro de Tramandaí (cerca de 6 min de carro). Os motoristas amigos ou uber cobram em torno de R$ 15,00 para ir ao centro. Fica também a 3 km da plataforma.
          </p>
          <p className="mb-4 text-base md:text-xl lg:text-2xl text-justify text-black">
            Possui como grande diferencial o Espaço de Lazer e o Espaço Gourmet, onde você pode aproveitar seu descanso com mais diversão e conforto!
          </p>
          <p className="mb-4 text-sm md:text-base lg:text-lg font-bold text-justify text-black bg-white w-fit px-2 rounded-md">
            Endereço: Av. Beira Mar 77 ou entrada pelos fundos pela Rua Bergamo 80. Bairro: Tramandaí Beira Mar. Tramandaí/RS
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Reservar Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Description;
