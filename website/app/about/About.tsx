import Image from "next/image";

const About = () => {
  return (
    <>
      <header
        id="about"
        className="p-5 my-5 text-center text-bg-primary bg-opacity-75 bg-gradient rounded-5"
      >
        <Image
          className="d-block mx-auto mb-4 rounded-circle"
          src="/profile.jpeg"
          alt="Picture of yours truly"
          width={200}
          height={200}
        />
        <h1 className="display-5 fw-bold ">Hi, I&apos;m Tim</h1>
      </header>
      <main className="mx-auto m-3">
        <p className="fw-light fs-4 ">Developer, learner, and opinion-haver</p>
        <p className="fw-light fs-4">
          I read books, build things, and test in production
        </p>
      </main>
    </>
  );
};

export default About;
