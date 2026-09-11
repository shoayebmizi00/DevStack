import BannerImg from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <div>
      <section className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-4 md:flex-row md:px-4">
        <div className="flex flex-col gap-10 text-center md:text-left md:w-[50%]">
          <h2 className="text-3xl font-bold md:text-6xl">
            Build Your Ideal{" "}
            <span className="brand-text">Development Stack</span>
          </h2>
          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <button className="btn text-white brand-gradient">
              Explore Technologies
            </button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div>
          <img src={BannerImg} alt="Banner" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
