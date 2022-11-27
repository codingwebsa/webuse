const HomeComponent = () => {
  return (
    <div className="h-screen grid justify-center items-center bg-hero-image-2 bg-cover">
      <div className="text-center">
        <h1 className="text-5xl font-nerko text-slate-100 mb-4 uppercase">
          The Best you can get off !
        </h1>
        <p className="max-w-xl text-center text-slate-200 text-lg font-robotoMono">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          voluptates cumque in cum officia nemo commodi eligendi optio dicta
          doloribus ipsam. Ea magni maxime deserunt eius corporis voluptates
          quibusdam omnis!
        </p>
        <div className="mt-8">
          <input
            type="email"
            name="email"
            className="w-80 h-16 bg-[rgba(255,255,255,.3)] rounded-full px-4 placeholder:text-white placeholder:text-xl outline-none text-white text-xl"
            placeholder="Subscribe to our newsletter"
          />
          <button className="ml-4 text-xl bg-white py-3 px-8 rounded-full border-black border-[1px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
