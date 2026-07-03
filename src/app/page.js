import Banner from "@/components/homepage/Banner";
import PopularProducts from "@/components/homepage/PopularProducts";
import SummerCareTips from "@/components/homepage/SummerCareTips";
import TopBrands from "@/components/homepage/TopBrands";


export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <PopularProducts></PopularProducts>
        <SummerCareTips></SummerCareTips>
        <TopBrands></TopBrands>
    </div>
  );
}
