import Testimonials from "@/components/landing-pages/Beranda/Testimonials";
import MainPages from "@/components/landing-pages/Beranda/MainPages";
import Services from "@/components/landing-pages/Beranda/Service";
import Gallery from "@/components/landing-pages/Beranda/Gallery";
import Loading from "@/components/landing-pages/Loading";
import Footer from "@/components/landing-pages/Footer";
import { axiosInstance } from "@/utils/axios";
import * as React from "react";
import useSWR from "swr";
import { SetHead } from "@/utils/setHead";

const Home = () => {
  const [pageLoading, setPageLoading] = React.useState<boolean>(true);
  const {
    data,
    error,
    isLoading,
  } = useSWR(
    `/count`,
    (url) =>
      axiosInstance.get(url).then((res) => {
        return res.data;
      })
  );

  React.useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2500);
  })

  return (
    <>
      <SetHead 
        description="Beranda Bimbel Griselda merupakan tempat bimbel terbaik di Indonesia"
        url="https://bimbelgriselda.com"
        keywords="griselda, bimbel"
      />
      {pageLoading ? (
        <Loading />
      ) : (
        <>
          { data && (
            <MainPages event={data[0]?.value || 0} member={data[1]?.value || 0} />
          ) }
          { !data && (
            <MainPages event={0} member={0} />
          ) }
          <Services name="nextSection" />
          <Testimonials />
          <Gallery />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
