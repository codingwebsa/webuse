import Image from "next/image";
import Link from "next/link";

const Websites = ({ data }) => {
  console.log(data);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 py-8 px-4 gap-4">
      {data.map((web) => (
        <Link href={web.url} key={web.url}>
          <div className="flex items-center gap-2">
            <Image
              src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${web.url}`}
              alt={web.title}
              width={18}
              height={18}
            />
            <p className="text-lg font-bold font-robotoMono">{web.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Websites;
