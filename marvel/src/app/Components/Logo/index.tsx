import Image from "next/image";

import Link from "next/link";

function Logo() {
  return (
    <>
      <Link href="/">
        <Image
          src="/marvel_logo.svg"
          alt="Marvel Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
    </>
  );
}

export default Logo;
