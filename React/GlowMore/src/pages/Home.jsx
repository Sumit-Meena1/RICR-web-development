import React from "react";
const Home = ()=> {
 

    return(
        <>
        <div className=" text-black justify-center h-96 flex gap-60 py-24">
            <div className="w-96">

                <h1 className="text-6xl text-black my-10 ">Beauty & Makeup</h1>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugiat harum in numquam quaerat aliquam. Velit voluptates quos ullam, tenetur dolorum adipisci quas quam libero sit sint incidunt, rem repudiandae iusto nemo numquam illum quae nisi praesentium voluptate <br />

                <button className="w-40 h-10 my-5 rounded-2xl border border-blue-900 bg-blue-500 hover:bg-blue-900 hover:text-white">Get Your Glow</button>
            </div>
            <div>
                <img className="rounded shadow" src="https://images01.nicepagecdn.com/page/45/94/website-template-preview-45949.jpg" alt="" width={600} />
            </div>

        </div>
        </>
    )
};
export default Home;
