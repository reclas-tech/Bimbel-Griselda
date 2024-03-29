import CardServices from "../CardServices";
interface ServiceProps {
  name?: string;
}
const Services: React.FC<ServiceProps> = ({ name }) => {
  return (
    <div
      id={name}
      className="bg-[#F6F6F6] w-full min-h-screen flex flex-col justify-center items-center "
    >
      <div className="text-center    flex flex-col space-y-2 sm:space-y-6">
        <p className="text-[#020202] text-[26px] font-bold sm:text-5xl">
          Yang Kami Tawarkan
        </p>
        <p className="text-[#7C7C7C] font-medium text-[12px] w-[334px] sm:text-lg sm:w-[620px]">
          Di Griselda, kami menghadirkan layanan yang tidak hanya memenuhi
          tetapi melampaui harapan Anda. Dari bimbingan belajar hingga dukungan
          guru yang berkualifikasi tinggi, temukan solusi pendidikan yang
          dirancang khusus untuk setiap kebutuhan.
        </p>
      </div>
      <div className=" mt-4   space-y-4 sm:flex sm:space-y-0 sm:space-x-8 sm:mt-20">
        <CardServices href="/teacher" title="Guru" />
        <CardServices href="/student" title="Murid" />
        <CardServices href="/patner" title="Mitra" />
      </div>
    </div>
  );
};

export default Services;
