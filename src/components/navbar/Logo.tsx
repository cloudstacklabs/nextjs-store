import Link from "next/link";
import { VscCode } from "react-icons/vsc";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button asChild size='icon'>
      <Link href='/'>
        <VscCode className='w-6 h-6' />
      </Link>
    </Button>
  );
}

export default Logo;
