import Link from "next/link";
import WaTransparent from "./Icons/WaTransparent";

interface CardPacketProps {
  title?: string;
  pricelist1?: string;
  pricelist2?: string;
  pricelist3?: string;
  pricelist4?: string;
  href?:any;
}

const CardPacket: React.FC<CardPacketProps> = ({
  title,
  pricelist1,
  pricelist2,
  pricelist3,
  pricelist4,
  href
}) => {
  return (
    <div className="  relative flex items-center w-[171.563px] h-[240px] sm:h-[460px] sm:w-[300px]">
      <div className="absolute top-0 w-full  flex justify-center">
        <p className="text-white font-bold text-[13.725px] bg-gradient-to-r from-[#0174bee0] to-[#00416B] text-center rounded-[20px]  px-2 py-0.5  sm:text-[24px]  sm:py-2 sm:px-5 sm:max-w-[250px]">
          {title}
        </p>
      </div>
      <div className="bg-[#E6E6E6] shadow-[5px_5px_4px_0px] shadow-[#00000040] w-full max-h-[220px] rounded-[11px] pt-3 pb-2 sm:rounded-2xl sm:w-full sm:max-h-[420px] sm:pt-10 sm:pb-4">
        <div className=" flex flex-col justify-center items-center mt-6 space-y-2 sm:space-y-5 sm:mt-4">
          <div className="text-center">
            <p className=" text-[13.241px] sm:text-[24px] ">online</p>
            <p className="font-bold text-[17.65px] sm:text-[32px]">
              {pricelist1}/1 jam
            </p>
            <p className="font-bold text-[17.65px] sm:text-[32px]">
              {pricelist2}/1,5 jam
            </p>
            <p className="text-[13.241px] sm:text-[24px]">offline</p>
            <p className="font-bold text-[17.65px] sm:text-[32px]">
              {pricelist3}/1 jam
            </p>
            <p className="font-bold text-[17.65px] sm:text-[32px]">
              {pricelist4}/1,5 jam
            </p>
          </div>

          <Link
            href={href}
            className="bg-[#06AC58] flex justify-center items-center  rounded-full w-[115.45px] h-[26.43px] space-x-1 sm:space-x-3 sm:w-[201px] sm:h-[47px]"
          >
            <p className="text-white text-[10.30px] sm:text-lg">
              Pesan Sekarang
            </p>
            <WaTransparent className="w-[14.30px] h-[14.30px] sm:w-[25px] sm:h-[25px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardPacket;
