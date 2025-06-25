interface HeaderProps {
  title?: string;
  img?: string;
  imgHiddend?: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="bg-[#FEBA17]">
      <h1
        className="text-center py-3 text-bright-sun-950 text-2xl"
        style={{ fontFamily: "'Berkshire Swash', cursive" }}
      >
        {props.title}
      </h1>
      {!props.imgHiddend && props.img && (
        <img src={props.img} alt="Header image" className="w-60 h-auto pb-1 justify-self-center" />
      )}
      </div>
  );
}
