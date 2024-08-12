import Image from "next/image";
export default function Home() {
  return (
    <div className="relative justify-center items-center mt-16 ms-4 md:mt-0 md:ms-0">
      <Image
        src="/bg2.png"
        alt=""
        layout="responsive"
        quality={75}
        objectFit="cover"
        width={100}
        height={100}
        className="absolute z-50 object-cover w-[100vw] h-[100vh] hidden lg:block"
      />
      <div className="flex relative ms-16 lg:ms-56 ">
        <Image
          src="/img1.png"
          alt=""
          width={200}
          height={220}
          className="absolute top-64 -left-5 z-10 w-[200px] h-[170px]"
        />

        <Image
          src="/img2.png"
          alt=""
          width={200}
          height={220}
          className="absolute top-24 w-[250px] h-[200px]"
        />

        <Image
          src="/img3.png"
          alt=""
          width={150}
          height={220}
          className="absolute left-36 w-[150px] h-[280px]"
        />

        <Image
          src="/img4.png"
          alt=""
          width={170}
          height={220}
          className="absolute left-64 z-10 w-[170px] h-[250px]"
        />

        <Image
          src="/img5.png"
          alt=""
          width={300}
          height={220}
          className="absolute left-[23rem] -top-5 w-[300px] h-[300px]"
        />

        <Image
          src="/img6.png"
          alt=""
          width={270}
          height={220}
          className="absolute left-[39rem] top-20 w-[290px] h-[300px]"
        />

        <Image
          src="/img7.png"
          alt=""
          width={200}
          height={220}
          className="absolute left-[45rem] top-64 w-[150px] h-[220px]"
        />
      </div>

      <div className="relative">
        <Image
          src="/img8.png"
          alt=""
          width={700}
          height={520}
          className="absolute top-[250px] left-28 lg:left-72  md:w-[700px] h-[620px]"
        />
      </div>

      <div className="relative">
        <Image
          src="/img9.png"
          alt=""
          width={700}
          height={220}
          className="absolute top-[235px] left-32 lg:left-72 z-40 w-[700px] h-[350px]"
        />
        <Image
          src="/img10.png"
          alt=""
          width={320}
          height={350}
          className="absolute top-[42rem] left-[20rem] lg:left-[30rem] z-40 w-[320px] h-[180px]"
        />
      </div>

      {/* SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 207 376"
        fill="none"
        className="absolute top-[10rem] left-[30rem] lg:left-[45rem] w-[95px] h-[376px]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M105 0L207 30C207 30 173.4 179.67 173 188C172.6 196.33 175.4 293.67 177 306C178.6 318.33 185 376 185 376C185 376 19.4 347.67 13 340C6.60004 332.33 -4.59996 265.67 3.00004 238C10.6 210.33 27.4 149.67 37 128C46.6 106.33 91 28 91 28L105 0Z"
          fill="black"
        />
      </svg>
    </div>
  );
}
