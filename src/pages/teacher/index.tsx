import TeacherDescription from "@/components/landing-pages/Guru/TeacherDescription";
import ModuleLearning from "@/components/landing-pages/Guru/ModuleLearning";
import Footer from "@/components/landing-pages/Footer";
import Offering from "@/components/landing-pages/Guru/Oferring";
import { SetHead } from "@/utils/setHead";

export default function Teacher() {
  return (
    <>
      <SetHead
        title="Guru"
        description="Guru Bimbel Griselda merupakan guru pilihan dengan kualitas terbaik"
        keywords="griselda, bimbel, loker, lowongan kerja"
        url="https://bimbelgriselda.com/teacher"
      />
      <TeacherDescription />
      <ModuleLearning />
      <Offering />
      <Footer />
    </>
  );
}
