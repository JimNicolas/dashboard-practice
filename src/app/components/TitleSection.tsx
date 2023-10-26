import React from "react";

interface Props {
  children: React.ReactNode;
}
const TitleSection: React.FC<Props> = ({ children }) => {
  return (
    <h1
      style={{
        color: "#fff",
        fontWeight: "normal",
      }}
    >
      {children}
    </h1>
  );
};
export default TitleSection;
