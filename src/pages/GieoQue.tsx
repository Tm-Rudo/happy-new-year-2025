import { useState } from "react";
import { useNavigate } from "react-router-dom";
const GieoQue = () => {
  //quẻ
  const queList = [
    "Quẻ 1: Mọi việc hanh thông, tài lộc dồi dào.",
    "Quẻ 2: Gia đình ấm êm, hạnh phúc viên mãn.",
    "Quẻ 3: Công danh sự nghiệp thăng tiến vượt bậc.",
    "Quẻ 4: Sức khỏe dồi dào, tinh thần minh mẫn.",
    "Quẻ 5: Tình duyên nở rộ, nhân duyên tốt đẹp.",
    "Quẻ 6: Cẩn trọng trong việc đầu tư, tránh mạo hiểm.",
    "Quẻ 7: Gặp được quý nhân phù trợ, công việc thuận lợi.",
    "Quẻ 8: Học hành tấn tới, đạt nhiều thành tích tốt.",
    "Quẻ 9: Nên giữ bình tĩnh, tránh nóng vội trong năm nay.",
    "Quẻ 10: Thành công đến từ sự kiên nhẫn và nỗ lực.",
    "Quẻ 11: Gia đình hòa thuận, công việc thuận lợi.",
    "Quẻ 12: Tình cảm lứa đôi ngày càng gắn bó, khăng khít.",
    "Quẻ 13: Mọi khó khăn đều sẽ vượt qua, bạn sẽ thành công.",
    "Quẻ 14: Cơ hội mới đang đến, nắm bắt thời cơ.",
    "Quẻ 15: Công việc tiến triển tốt đẹp, nhiều cơ hội mới.",
    "Quẻ 16: Đầu tư khôn ngoan, mang lại lợi nhuận bền vững.",
    "Quẻ 17: Mọi thứ sẽ trở nên dễ dàng nếu bạn làm việc chăm chỉ.",
    "Quẻ 18: Chúc bạn luôn gặp may mắn trong cuộc sống.",
    "Quẻ 19: Mọi mối quan hệ đều tốt đẹp, tình yêu đong đầy.",
    "Quẻ 20: Tình hình tài chính ổn định, bạn sẽ không lo lắng về tiền bạc.",
    "Quẻ 21: Bạn sẽ tìm được sự nghiệp yêu thích và phát triển tốt.",
    "Quẻ 22: Công việc đạt kết quả cao nhờ sự cố gắng và sáng tạo.",
    "Quẻ 23: Tình yêu hạnh phúc, sự nghiệp vững vàng.",
    "Quẻ 24: Chúc bạn vượt qua mọi thử thách để đạt được ước mơ.",
    "Quẻ 25: Mọi kế hoạch sẽ thành công mỹ mãn.",
    "Quẻ 26: Chúc bạn tìm được niềm vui trong công việc mỗi ngày.",
    "Quẻ 27: Hãy luôn tin tưởng vào bản thân, thành công sẽ đến.",
    "Quẻ 28: Gia đình bạn sẽ đón nhận nhiều niềm vui bất ngờ.",
    "Quẻ 29: Cơ hội thăng tiến trong công việc đang đến gần.",
    "Quẻ 30: Tình cảm gia đình sẽ ngày càng gắn bó hơn.",
    "Quẻ 31: Hãy làm việc hết mình, thành công sẽ không xa.",
    "Quẻ 32: Cả gia đình cùng nhau vượt qua mọi khó khăn.",
    "Quẻ 33: Bạn sẽ đạt được mục tiêu lớn mà mình đã đề ra.",
    "Quẻ 34: Tài chính của bạn sẽ được cải thiện đáng kể.",
    "Quẻ 35: Tình yêu và sự nghiệp luôn song hành.",
    "Quẻ 36: Đừng ngại thử thách, bạn sẽ gặt hái thành công.",
    "Quẻ 37: Mọi mối quan hệ xung quanh bạn đều hòa thuận và bền vững.",
    "Quẻ 38: Bạn sẽ có cơ hội đi du lịch hoặc khám phá những điều mới mẻ.",
    "Quẻ 39: Hãy tiếp tục nỗ lực, bạn sẽ đạt được thành công xứng đáng.",
    "Quẻ 40: Cảm giác hạnh phúc sẽ đến khi bạn luôn biết chia sẻ.",
    "Quẻ 41: Đường tình duyên của bạn sẽ rất ngọt ngào và viên mãn.",
    "Quẻ 42: Sự nghiệp của bạn sẽ thăng tiến nhanh chóng.",
    "Quẻ 43: Cả gia đình bạn sẽ đón nhận những tin vui bất ngờ.",
    "Quẻ 44: Hãy sống tích cực, bạn sẽ nhận lại những điều tốt đẹp.",
    "Quẻ 45: Công việc sẽ ổn định, không có gì đáng lo ngại.",
    "Quẻ 46: Tình yêu của bạn sẽ được đơm hoa kết trái.",
    "Quẻ 47: Bạn sẽ nhận được sự công nhận xứng đáng trong công việc.",
    "Quẻ 48: Hãy luôn tin tưởng vào bản thân, bạn sẽ làm được mọi điều.",
    "Quẻ 49: Sức khỏe của bạn sẽ được cải thiện rõ rệt.",
    "Quẻ 50: Công việc sẽ tiến triển tốt, bạn sẽ được thăng chức.",
    "Quẻ 51: Chúc bạn có một năm nhiều niềm vui và thành công.",
    "Quẻ 52: Gia đình bạn sẽ luôn hạnh phúc, không có sóng gió.",
    "Quẻ 53: Đừng sợ thất bại, hãy cố gắng thêm một lần nữa.",
    "Quẻ 54: Tài lộc sẽ đến từ những dự định bạn đang thực hiện.",
    "Quẻ 55: Tình yêu sẽ thăng hoa, công việc thuận lợi.",
    "Quẻ 56: Bạn sẽ vượt qua những khó khăn để đạt được thành công.",
    "Quẻ 57: Bạn sẽ có cơ hội gặp gỡ những người quan trọng.",
    "Quẻ 58: Công việc sẽ ổn định và mang lại cho bạn niềm vui.",
    "Quẻ 59: Đừng ngần ngại theo đuổi ước mơ của mình.",
    "Quẻ 60: Tình cảm gia đình sẽ luôn tràn đầy yêu thương.",
    "Quẻ 61: Hãy tập trung vào mục tiêu, thành công sẽ đến.",
    "Quẻ 62: Bạn sẽ nhận được những điều tốt đẹp trong công việc.",
    "Quẻ 63: Cùng nhau vượt qua thử thách, bạn sẽ cảm thấy hạnh phúc.",
    "Quẻ 64: Tình yêu luôn ngọt ngào, gia đình sẽ luôn ấm êm.",
    "Quẻ 65: Cố gắng làm việc chăm chỉ, kết quả sẽ thật tuyệt vời.",
    "Quẻ 66: Sự nghiệp của bạn sẽ phát triển mạnh mẽ.",
    "Quẻ 67: Đừng bỏ cuộc, thành công sẽ đến khi bạn kiên trì.",
    "Quẻ 68: Tình yêu và công việc sẽ luôn song hành.",
    "Quẻ 69: Mọi việc trong cuộc sống sẽ diễn ra thuận lợi.",
    "Quẻ 70: Tìm thấy niềm vui trong những điều nhỏ nhặt trong cuộc sống.",
    "Quẻ 71: Sự nghiệp của bạn sẽ có những bước tiến lớn.",
    "Quẻ 72: Gia đình bạn sẽ luôn hạnh phúc và bình yên.",
    "Quẻ 73: Mọi khó khăn sẽ qua đi và bạn sẽ đạt được thành công.",
    "Quẻ 74: Cơ hội mới sẽ đến, bạn chỉ cần nắm bắt.",
    "Quẻ 75: Bạn sẽ nhận được nhiều sự giúp đỡ từ những người thân thiết.",
    "Quẻ 76: Tình cảm gia đình sẽ luôn đong đầy yêu thương.",
    "Quẻ 77: Bạn sẽ gặp được những người bạn tốt, giúp đỡ bạn rất nhiều.",
    "Quẻ 78: Mọi việc trong cuộc sống sẽ diễn ra như bạn mong muốn.",
    "Quẻ 79: Bạn sẽ tìm thấy sự bình yên trong tâm hồn.",
    "Quẻ 80: Những quyết định của bạn sẽ dẫn đến kết quả tốt đẹp.",
    "Quẻ 81: Gia đình bạn sẽ luôn đoàn kết và yêu thương nhau.",
    "Quẻ 82: Hãy sống tích cực, bạn sẽ gặp nhiều may mắn.",
    "Quẻ 83: Công việc của bạn sẽ mang lại nhiều cơ hội thăng tiến.",
    "Quẻ 84: Tình duyên sẽ nở rộ, bạn sẽ gặp được người phù hợp.",
    "Quẻ 85: Hãy giữ tinh thần lạc quan, mọi điều tốt đẹp sẽ đến.",
    "Quẻ 86: Chúc bạn luôn hạnh phúc và thành công trong cuộc sống.",
    "Quẻ 87: Cơ hội phát triển sẽ đến với bạn, hãy đón nhận.",
    "Quẻ 88: Mọi điều bạn mong muốn sẽ thành hiện thực.",
    "Quẻ 89: Tình yêu sẽ mang lại cho bạn sự an lành.",
    "Quẻ 90: Công việc của bạn sẽ tiến triển theo hướng tích cực.",
    "Quẻ 91: Đừng lo lắng về tương lai, mọi thứ sẽ ổn.",
    "Quẻ 92: Bạn sẽ gặp được quý nhân giúp đỡ trong công việc.",
    "Quẻ 93: Bạn sẽ đạt được thành công lớn trong sự nghiệp.",
    "Quẻ 94: Gia đình bạn sẽ luôn yêu thương và quan tâm lẫn nhau.",
    "Quẻ 95: Tình yêu của bạn sẽ ngày càng thắm thiết.",
    "Quẻ 96: Hãy luôn tin tưởng vào chính mình.",
    "Quẻ 97: Mọi công việc bạn làm đều sẽ mang lại kết quả tốt.",
    "Quẻ 98: Cơ hội tài chính đang đến gần bạn.",
    "Quẻ 99: Sức khỏe và tinh thần của bạn sẽ luôn được duy trì.",
    "Quẻ 100: Công việc sẽ đem lại niềm vui lớn cho bạn.",
    "Quẻ 101: Mọi sự sẽ suôn sẻ nếu bạn kiên nhẫn và chăm chỉ.",
    "Quẻ 102: Bạn sẽ gặp được nhiều cơ hội mới để phát triển.",
    "Quẻ 103: Tình yêu và gia đình sẽ là nguồn động lực lớn cho bạn.",
    "Quẻ 104: Bạn sẽ nhận được sự đánh giá cao từ mọi người.",
    "Quẻ 105: Sự nghiệp của bạn sẽ luôn thăng tiến.",
    "Quẻ 106: Tình cảm gia đình sẽ luôn tràn ngập niềm vui.",
    "Quẻ 107: Bạn sẽ gặp được những người đáng tin cậy trong công việc.",
    "Quẻ 108: Hãy luôn mạnh mẽ, mọi điều tốt đẹp sẽ đến với bạn.",
    "Quẻ 109: Tài lộc và sự nghiệp sẽ phát triển mạnh mẽ.",
    "Quẻ 110: Bạn sẽ tìm thấy sự bình an trong tâm hồn.",
  ];

  const navigate = useNavigate();

  //state
  const [loiChuc, setLoiChuc] = useState("");
  //random lời chcus
  const randomChuc = () => {
    const randomIndex = Math.floor(Math.random() * queList.length);
    setLoiChuc(queList[randomIndex]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      {/* <audio src="/img/bg.mp3" autoPlay loop /> */}
      <div className="text-center">
        <h1
          className="font-bold text-yellow-300 text-4xl mt-[10px]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Chúc Tết!
        </h1>

        <p className="text-white mt-[25px] text-lg text-center px-4 max-w-full">
          Nhấn nút dưới đây để gieo quẻ và nhận được lời tiên tri đầu năm mới!
        </p>

        <textarea
          //   type="text"
          className="bg-amber-100 rounded-xl text-center mt-[25px] p-2 w-[90%] max-w-[450px] h-20 resize-none "
          placeholder="Lời tiên tri sẽ ở đây"
          disabled
          value={loiChuc}
        />
        <div className="mt-[25px]" onClick={randomChuc}>
          <button className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] cursor-pointer text-white px-6 py-2 rounded-xl bg-gradient-to-b from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition duration-300 mb-4">
            Gieo quẻ
          </button>
        </div>

        <div>
          <button
            className="bg-green-400 cursor-pointer text-white px-6 py-2 rounded-xl hover:bg-gray-400 transition duration-300"
            onClick={() => navigate("/")}
          >
            Về trang chính
          </button>
        </div>
      </div>
    </div>
  );
};

export default GieoQue;
