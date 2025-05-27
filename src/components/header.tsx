//clase para definir el header y todos sus elementos
import React from "react";

interface HeaderProps {
  title: string;
  style: string;
}

//style="font-family: 'Berkshire Swash', cursive;"

export default function Header(props: HeaderProps) {
  return (
    <h1 className="text-center py-3 text-brown-800 text-2xl" >
        {props.title}
      </h1>
  );
}
