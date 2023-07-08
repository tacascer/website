import Image from "next/image";

const Tech = () => {
  const techs = [
    {
      name: "Apache Flink",
      image: "/flink.png",
      altText: "The Flink Logo",
      description:
        "Apache Flink is a framework and distributed processing engine for stateful computations over unbounded and bounded data streams. Flink has been designed to run in all common cluster environments, perform computations at in-memory speed and at any scale.",
    },
  ];

  const carouselHeight = 450;
  return (
    <div className="my-5 text-center">
      <h1 className="mb-5 display-5 text-primary">
        Currently in production ...
      </h1>
      <div
        id="techCarousel"
        className="carousel slide"
        style={{
          height: carouselHeight,
        }}
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{
              height: carouselHeight,
            }}
          >
            <Image
              src={techs[0].image}
              alt={techs[0].altText}
              width={200}
              height={200}
              className="d-block mx-auto rounded-5 border-bottom border-primary-subtle border-5"
            ></Image>
            <div className="carousel-caption text-start d-none d-xxl-block text-bg-secondary bg-opacity-75 col-6 mx-auto text-center rounded-5">
              <h2>{techs[0].name}</h2>
              <p className="px-5">{techs[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
