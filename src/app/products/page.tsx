import { Filters } from "./Filters";
import TablaProducts from "@/app/products/TablaProducts";
import ContainerSection from "@/app/components/ContainerSection";
import TitleSection from "@/app/components/TitleSection";

const page = () => {
  return (
    <ContainerSection>
      <TitleSection>Productos</TitleSection>
      <Filters />
      <TablaProducts />
    </ContainerSection>
  );
};
export default page;
