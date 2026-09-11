import BannerImage from './../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-12">
                {/* Banner Content */}
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-5xl">
                        Build Your Ideal{' '}
                        <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-[#475569] sm:text-base sm:leading-7 lg:text-lg">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together
                        the stack that fits your next project.
                    </p>

                    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                        <button
                            type="button"
                            className="rounded-2xl bg-gradient-to-r from-[#F97316] to-[#EC4899] px-5 py-2.5 text-sm text-white transition hover:opacity-90"
                        >
                            Explore Technologies
                        </button>

                        <button
                            type="button"
                            className="rounded-3xl border border-gray-300 px-5 py-2.5 text-sm text-black transition hover:bg-gray-50"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src={BannerImage}
                        alt="Development stack illustration"
                        className="mx-auto w-full max-w-md object-contain lg:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;