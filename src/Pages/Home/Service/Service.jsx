
const Service = () => {
    return (
        <div className="flex flex-wrap items-center lg:p-[20px] mt-[120px]">
            {/* <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="../../../../src/assets/hero-content.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}
            <div className="w-[50%]">
                <img className="w-full lg:h-[434px]" src="../../../../src/assets/hero-content.png" alt="" />
            </div>
            <div className="w-[50%]">
                <p className="text-xl">OUR SERVICES</p>
                <h2 className="text-5xl">We Solve Creative Delusions Efficiently</h2>
                <p className="lg:w-[70%]">The display employs new techniques and technology to precisely follow the curves of the design, all the way to the elegantly rounded corners.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Service;