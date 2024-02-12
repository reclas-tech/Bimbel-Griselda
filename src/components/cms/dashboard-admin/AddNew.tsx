import Link from "next/link";

const AddNew = ({ href }: any) => {
  return (
    <Link href={href} className="flex items-center space-x-1 bg-[#FFC436] rounded px-2 py-1">
      <img src='/assets/addNew.png' width={23} height={22} alt="tambah" />
      {/* <Image src={tambah} width={23} height={22} alt="tambah" /> */}
      <p className=" text-white font-sm font-medium"> Tambah</p>
    </Link>
  );
};

export default AddNew;
