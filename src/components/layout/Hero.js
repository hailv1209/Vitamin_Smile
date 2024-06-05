import Right from "@/components/icons/Right";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-10">
    <div className="py-8 md:py-12 md:mt-12 ">
      <h1 className="text-4xl font-semibold"> 
        Thực phẩm sạch<br/> Sức khỏe vàng
      </h1>
      <p className="my-6 text-gray-600 text-lg"> 
        Ăn sạch không chỉ là một xu hướng, đó là cách sống trọn vẹn và yêu thương cơ thể mình mỗi ngày
      </p>
      <div className="flex gap-4 text-lg"> 
        <button className="flex justify-center bg-primary  flex items-center gap-2 text-white px-6 py-3 rounded-full"> 
          <Link href='/menu'>Đặt hàng</Link>
          <Right />
        </button>
        <button className="flex items-center border-0 gap-2 py-3 text-gray-800 font-semibold"> 
          Tìm hiểu
          <Right />
        </button>
      </div>
    </div>
    <div className="relative hidden md:block md:mt-12">
      <Image src={'/salad.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} /> 
    </div>
  </section>
  
  );
}