import { addDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import Loader from "../components/Loader";
import { colRef } from "../firebase";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Create() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const url = e.target.url.value;
    const title = e.target.title.value;

    if (!url || !title) return;
    setLoading(true);
    addDoc(colRef, {
      title,
      url,
    }).then(() => {
      formRef.current.reset();
      setLoading(false);
      Router.push("/");
    });
  }
  return (
    <>
      <Head>
        <title>Web Use | Create</title>
      </Head>
      {loading && <Loader />}
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium text-gray-700"
                      >
                        URL
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
