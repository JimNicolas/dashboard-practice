"use client";
import ContainerSection from "@/app/components/ContainerSection";
import TitleSection from "@/app/components/TitleSection";
import React, { useState } from "react";
import FiltersOrder from "@/app/orders/FiltersOrder";

const page = () => {
  const [searchPress, setSearchPress] = useState<boolean>(false);
  return (
    <ContainerSection>
      <TitleSection>Pedidos</TitleSection>
      <FiltersOrder />
    </ContainerSection>
  );
};
export default page;
