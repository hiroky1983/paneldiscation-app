import Head from "next/head";
// import styles from "../styles/Home.module.css";
import "tailwindcss/tailwind.css";

export default function Header() {
  return (
    <div className="items-center">

      <img
        src="https://it-kingdom.com/_next/image?url=%2Fimg%2Flogo.png&w=220&q=75"
        className="m-5"
      />
      <div>
        <p className="text-center text-gray-600">
          しまぶーさん＆じゃけえさん対談用パネルディスカッション
        </p>
      </div>
      <div className="border"></div>
    </div>
  );
}
