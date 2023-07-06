import Image from "next/image";
import profilePic from "./profile.jpeg";

const About = () => {
  return (
    <main className="px-4 py-5 my-5 text-center text-bg-dark bg-gradient rounded-5">
      <Image
        className="d-block mx-auto mb-4 rounded-circle"
        src={profilePic}
        alt="Picture of Tim"
        width={200}
        height={200}
      />
      <h1 className="display-5 fw-bold">Hi, I'm Tim</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-2">Developer, student, and opinion-haver</p>
        <p className="lead mb-4">
          I read books, build things, and test in production
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            What I've Done
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            What I've Read
          </button>
        </div>
      </div>
    </main>
  );
};

export default About;
