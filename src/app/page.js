import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Câu Chuyện'}
          mainHeader={'Khởi Nghiệp'}
        />
        <div className="flex flex-col">
        <div className="text-gray-500 mt-4 flex flex-col gap-4" style={{textAlign: "justify"}}>
          <p>
          Thực phẩm đang là một trong những mối lo lớn của bất kỳ người tiêu dùng nào cũng quan tâm bởi nó gắn liền với cuộc sống mỗi người chúng ta. Để ý rằng, thực phẩm bẩn đang vây quanh chúng ta. Có rất là nhiều người vì lợi ích cá nhân mà sản xuất các thực phẩm có chứa các chất độc hại. Họ sẽ không quan tâm đến bạn hay sẽ nghĩ ra sao khi bạn ăn thực phẩm đó , họ chỉ quan tâm nó đem cho họ lợi nhuận mà thôi.
          </p>
          <p>Nếu ăn chúng thường xuyên thì chúng ta sẽ đối mặt với hàng loạt những nguy cơ về bệnh tật nguy hiểm như ngộ độc, ung thư, suy gan, suy thận,… Ngược lại nếu sử dụng thực phẩm sạch, chúng ta sẽ không còn lo lắng đến các vấn đề về sức khỏe nữa mà thay vào đó là tận hưởng những bữa ăn ngon, giàu dinh dưỡng và tốt cho sức khỏe. Chẳng ai trong chúng ta mong muốn bản thân bị bệnh, sức khỏe hao tổn đúng không nào ? Vậy việc lựa chọn thực phẩm sạch và an toàn chính là cách tốt nhất để bảo vệ sức khỏe cho chính mình và gia đình.</p>
          <p>Vì thế Eat Clean chính là một chiếc kim chỉ nam cho nhu cầu này.  Khi Eat Clean đúng cách, bạn có thể linh hoạt điều chỉnh chế độ ăn uống của mình cho phù hợp với mục đích cá nhân từ ăn kiêng giảm cân, đến tăng cơ giảm mỡ, tăng cân. Trong thời gian áp dụng lối ăn uống lành mạnh này, thực đơn hằng ngày đều sẽ được loại bỏ các loại thức ăn đóng hộp, đã qua chế biến phức tạp, hạn chế dầu mỡ cũng như các chất có hại cho cơ thể nên ngoài tác dụng giảm cân, tăng cơ, Eat Clean còn tốt cho tim mạch, tiêu hóa và đặc biệt là làn da. Chính vì thế nên chúng tôi quyết định chọn ý tưởng khởi nghiệp này.</p>
        </div>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Đừng Ngần Ngại'}
          mainHeader={'Liên Hệ Chúng Tôi'}
        />
        {/* <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +84 377 230 697
          </a>
        </div> */}
      </section>
    </>
  )
}
