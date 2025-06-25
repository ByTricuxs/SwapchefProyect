import { useState } from "react";
import corazonVacio from '../../assets/corazonVacio.svg';
import corazonLleno from '../../assets/corazonR.svg';

interface ButtonCardProps {
  style?: string;
}

export default function ButtonCard({ style }: ButtonCardProps) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <button onClick={toggleLike} className={style}>
      <img
        src={liked ? corazonLleno : corazonVacio}
        alt="like"
        className="w-6 h-6 transition duration-300"
      />
    </button>
  );
}
