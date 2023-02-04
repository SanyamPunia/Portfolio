"use client";

import Image from "next/image";

export const components = {
  h2: (props: JSX.Element) => (
    <h2
      style={{
        color: "#D4D4D4",
        fontFamily: "Poppins",
        marginTop: "3.5rem",
        marginBottom: "1.5rem",
        fontSize: "1.4rem",
        fontWeight: "bold",
      }}
      {...props}
    />
  ),
  p: (props: JSX.Element) => (
    <p
      style={{
        color: "#BCBCBC",
        fontFamily: "Manrope",
        margin: "0.8rem 0",
      }}
      {...props}
    />
  ),
  em: (props: JSX.Element) => (
    <em style={{ fontStyle: "normal" }}>
      <code
        style={{
          padding: "0 0.2rem",
          backgroundColor: "#2e2e2e",
          color: "#fce8c3",
          borderRadius: "7px",
        }}
        {...props}
      />
    </em>
  ),
  code: (props: JSX.Element) => (
    <code {...props} style={{ borderRadius: "5px" }} />
  ),
  img: (props: any) => (
    <Image
      alt="sub-section-image"
      width={1000}
      height={1000}
      style={{ borderRadius: "7px", userSelect: "none" }}
      draggable="false"
      {...props}
    />
  ),
  a: (props: JSX.Element) => (
    <a
      style={{
        color: "#BCBCBC",
        textDecoration: "underline",
      }}
      {...props}
    />
  ),
};
