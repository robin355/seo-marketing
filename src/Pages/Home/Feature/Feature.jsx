
const Feature = () => {
    return (
        <div className="mt-[120px]">
            <section className="text-center">
            <h4 className="text-xl text-gray-400 font-bold">WHAT WE DO</h4>
            <h2 className="text-5xl">Featured Content</h2>
            </section>
            <section>
                <div className="lg:grid gap-4 grid-cols-3 lg:p-8">
                    <div>
                    <div className="card shadow-xl">
  <figure><img src="../../../../src/assets/featured-content-1.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Creative Lights</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit amet consecte tur adipiscing elit integer fermentum in orci lorem ipsum.</p>
    <div>
      <button className="btn btn-outline btn-accent">View More</button>
    </div>
  </div>
</div>
                    </div>
                    <div> 

                    <div className="card shadow-xl">
  <figure><img src="../../../../src/assets/featured-content-2.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Mobile Photography</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit amet consecte tur adipiscing elit integer fermentum in orci lorem ipsum.</p>
    <div>
    <button className="btn btn-outline btn-accent">View More</button>
    </div>
  </div>
</div>
                    </div>
                    <div>
                        
                    <div className="card shadow-xl">
  <figure><img src="../../../../src/assets/featured-content-3.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vintage Camera</h2>
    <p className="text-gray-400">Lorem ipsum dolor sit amet consecte tur adipiscing elit integer fermentum in orci lorem ipsum.</p>
    <div>
    <button className="btn btn-outline btn-accent">View More</button>
    </div>
  </div>
</div>
 </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;