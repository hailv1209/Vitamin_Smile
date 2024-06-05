'use client';
import {CartContext} from "@/components/AppContext";
import Bars2 from "@/components/icons/Bars2";
import ShoppingCart from "@/components/icons/ShoppingCart";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useContext, useState} from "react";

function AuthLinks({status, userName}) {
  if (status === 'authenticated') {
    return (
      <>
        <Link href={'/profile'} className="whitespace-nowrap">
          Chào, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-primary rounded-full text-white px-5 py-2">
          Đăng Xuất
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'}>Đăng Nhập</Link>
        <Link href={'/register'} className="bg-primary rounded-full text-white px-4 py-2">
        Đăng Ký
        </Link>
      </>
    );
  }
}

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const {cartProducts} = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }
  return (
    <header className="fixed top-0 w-full z-90 "   style={{ backgroundColor: 'rgba(0, 173, 102, 0.8)' , marginLeft : -200, paddingLeft : 200,paddingRight : 200, paddingTop  : 10, paddingBottom : 10, zIndex : 999, marginBottom : 30}}>
      <div className="flex items-center md:hidden justify-between" >
      <Image src={'/logo.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} /> 
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
            {cartProducts.length}
          </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
          <Link href={'/'}>Trang Chủ</Link>
          <Link href={'/menu'}>Thực Đơn</Link>
          <Link href={'/#about'}>Về Chúng Tôi</Link>
          <Link href={'/#contact'}>Liên Hệ</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-200 font-semibold">
        <div className="relative w-[70px] h-[70px]">
        <Image src={'/logo.jpg'} layout={'fill'} objectFit={'contain'} alt={'Logo'} />
        </div>
          <Link href={'/'}>Trang Chủ</Link>
          <Link href={'/menu'} prefetch>Thực Đơn</Link>
          <Link href={'/#about'}>Về Chúng Tôi</Link>
          <Link href={'/#contact'}>Liên Hệ</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-200 font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-primary text-white text-xs py-1 px-1 rounded-full leading-3">
            {cartProducts.length}
          </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}