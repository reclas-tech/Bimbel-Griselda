import PatnerDescription from "@/components/landing-pages/Mitra/ParnerDescription";
import GoalsAndBenefits from "@/components/landing-pages/Mitra/GoalsAndBenefits";
import RegistrationSteps from "@/components/landing-pages/Mitra/RegistrationSteps";
import ListMitra from "@/components/landing-pages/Mitra/ListMitra";
import MitraPacketPages from "@/components/landing-pages/Mitra/MitraPacketPages";
import Footer from "@/components/landing-pages/Footer";
import { SetHead } from "@/utils/setHead";

export default function Patner() {
  return (
    <>
      <SetHead
        title="Mitra"
        description="Mitra Bimbel Griselda solusi terbaik membuka bimbel belajar"
        keywords="mitra, griselda, bimbel, indonesia"
        url="https://bimbelgriselda.com/partner"
      />
      <PatnerDescription />
      <GoalsAndBenefits />
      <RegistrationSteps />
      <MitraPacketPages />
      <ListMitra />
      <Footer />
    </>
  );
}
