import StudentDescription from "@/components/landing-pages/Murid/StudentDescription";
import MerdekaProgram from "@/components/landing-pages/Murid/MerdekaProgram";
import ClassLevel from "@/components/landing-pages/Murid/ClassLevel";
import LearningMaterials from "@/components/landing-pages/Murid/LearningMaterials";
import PacketPages from "@/components/landing-pages/PacketPages";
import Footer from "@/components/landing-pages/Footer";
import { SetHead } from "@/utils/setHead";

export default function Student() {
  return (
    <>
      <SetHead
        title="Murid"
        description="Murid Bimbel Griselda menghasilkan siswa dengan kualitas terbaik"
        keywords="griselda, bimbel, belajar, indonesia"
        url="https://bimbelgriselda.com/student"
      />
      <StudentDescription />
      <MerdekaProgram />
      <ClassLevel />
      <LearningMaterials />
      <PacketPages />
      <Footer />
    </>
  );
}
