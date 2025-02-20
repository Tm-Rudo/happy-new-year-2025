import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ChucTet = () => {
  //câu chúc
  const cauChuc = [
    "Chúc bạn một năm mới an khang thịnh vượng!",
    "Chúc bạn và gia đình một năm mới tràn đầy hạnh phúc và may mắn!",
    "Chúc mừng năm mới, tiền vào như nước, sức khỏe như núi!",
    "Vạn sự như ý, tỷ sự như mơ!",
    "Phát tài phát lộc, phúc đầy trong tay!",
    "Tấn tài tấn lộc, vạn sự bình an!",
    "Chúc mừng năm mới, mọi điều tốt đẹp sẽ đến với bạn!",
    "Chúc bạn một năm mới đầy ắp niềm vui, yêu thương và thành công!",
    "Xuân về tràn ngập phúc lộc, gia đình hòa thuận an khang!",
    "Chúc năm mới vạn sự bình an, niềm vui như ý!",
    "Chúc bạn một năm mới phát tài phát lộc, mọi sự như ý!",
    "Năm mới, chúc bạn sức khỏe dồi dào, tiền tài thịnh vượng!",
    "Chúc bạn có một năm mới vui vẻ, hạnh phúc và thành công rực rỡ!",
    "Mong mọi điều tốt lành sẽ đến với bạn trong năm mới!",
    "Chúc bạn vạn sự như ý, tiền tài, phúc lộc đầy đủ!",
    "Chúc bạn một năm mới an khang, thịnh vượng và sức khỏe!",
    "Một năm mới đầy những niềm vui và thành công bất ngờ!",
    "Chúc mừng năm mới, chúc bạn vượt qua mọi thử thách, đón nhận thành công!",
    "Năm mới, chúc bạn luôn vui khỏe, may mắn, hạnh phúc!",
    "Chúc bạn có một năm mới bình an, nhiều cơ hội thăng tiến!",
    "Mong rằng năm mới sẽ mang đến cho bạn nhiều niềm vui và niềm tin vào tương lai!",
    "Chúc bạn và gia đình luôn an khang, thịnh vượng, hạnh phúc!",
    "Năm mới, chúc bạn luôn cười thật tươi và sống một cuộc sống trọn vẹn!",
    "Chúc bạn đón một mùa xuân mới tràn đầy niềm vui và tiếng cười!",
    "Chúc bạn và gia đình luôn ấm no, hạnh phúc và bình an trong năm mới!",
    "Chúc bạn một năm mới tươi đẹp, sức khỏe dồi dào, và hạnh phúc viên mãn!",
    "Năm mới, chúc bạn sự nghiệp thăng tiến, sức khỏe vững bền và niềm vui không ngừng!",
    "Chúc bạn năm mới thành công vượt bậc, gia đình hạnh phúc, tiền tài phát đạt!",
    "Chúc mừng năm mới, chúc bạn một năm bình an, mọi điều thuận lợi!",
    "Chúc bạn năm mới đong đầy may mắn, hạnh phúc và sức khỏe dồi dào!",
    "Chúc bạn một năm mới sung túc, tiền vào như nước, công danh thăng tiến!",
    "Xuân sang chúc bạn một năm mới vạn sự như ý, tấn tài tấn lộc!",
    "Chúc bạn đón năm mới ngập tràn niềm vui, hạnh phúc và thành công!",
    "Chúc bạn năm mới vui vẻ, sức khỏe dồi dào, mọi sự thành công mỹ mãn!",
    "Năm mới, chúc bạn và gia đình luôn an khang thịnh vượng!",
    "Chúc bạn bước vào năm mới đầy may mắn và thành công!",
    "Chúc bạn một năm mới ngập tràn niềm vui, gia đình hòa thuận và sức khỏe tốt!",
    "Chúc bạn và gia đình một năm mới hạnh phúc, no đủ và bình an!",
    "Chúc bạn năm mới nhiều niềm vui, tài lộc dồi dào và thành công viên mãn!",
    "Chúc bạn bước vào năm mới thật nhiều may mắn và sức khỏe!",
    "Chúc bạn năm mới gặt hái nhiều thành công, hạnh phúc viên mãn!",
    "Năm mới, chúc bạn sức khỏe dồi dào, gia đình hòa thuận, công việc suôn sẻ!",
    "Chúc bạn và gia đình luôn mạnh khỏe, bình an trong năm mới!",
    "Năm mới, chúc bạn luôn vui vẻ, gặp nhiều may mắn và thành công rực rỡ!",
    "Chúc bạn đón Tết trong hạnh phúc, bình an, tiền tài phát đạt!",
    "Chúc bạn một năm mới thịnh vượng, công việc thuận lợi và hạnh phúc!",
    "Chúc mừng năm mới, chúc bạn một năm đầy những bước tiến mới trong sự nghiệp!",
    "Chúc bạn đón chào năm mới với tâm hồn an nhiên, sức khỏe dồi dào!",
    "Năm mới, chúc bạn luôn vui vẻ, khỏe mạnh và thịnh vượng!",
    "Chúc bạn năm mới gặp nhiều may mắn, luôn tươi trẻ và đón nhận thành công!",
    "Chúc bạn một năm mới phát tài phát lộc, hạnh phúc vẹn toàn!",
    "Chúc mừng năm mới, chúc bạn đón nhận những điều tốt đẹp nhất trong cuộc sống!",
    "Chúc bạn và gia đình đón năm mới an khang thịnh vượng, hạnh phúc viên mãn!",
    "Chúc bạn năm mới may mắn, tiền tài dồi dào, mọi điều như ý!",
    "Năm mới, chúc bạn sức khỏe dồi dào, cuộc sống đầy ắp niềm vui và tiếng cười!",
    "Chúc bạn một năm mới tràn đầy sức sống, đón nhận nhiều thành công mới!",
    "Chúc bạn một năm mới thật thành công và hạnh phúc viên mãn!",
    "Mong năm mới mang đến cho bạn nhiều cơ hội và sự thịnh vượng!",
    "Chúc bạn năm mới thật nhiều hạnh phúc, tài lộc và thành công!",
    "Chúc bạn và gia đình có một năm mới an khang, thịnh vượng và tràn đầy yêu thương!",
    "Năm mới, chúc bạn có thật nhiều sức khỏe và thành công trong mọi công việc!",
    "Chúc bạn năm mới mọi sự như ý, chinh phục mọi mục tiêu trong cuộc sống!",
    "Chúc bạn một năm mới rực rỡ, may mắn và sức khỏe tốt!",
    "Chúc mừng năm mới, chúc bạn đón nhận những điều tốt đẹp trong năm tới!",
    "Chúc bạn một năm mới sung túc, bình an, và luôn gặp may mắn!",
    "Chúc bạn năm mới luôn tươi cười, hạnh phúc và thành công!",
    "Chúc bạn đón một năm mới với nhiều khởi đầu mới và thành công mới!",
    "Chúc bạn năm mới vui vẻ, khỏe mạnh, và gia đình hạnh phúc!",
    "Chúc bạn năm mới gặp nhiều may mắn và đạt được những mục tiêu cao nhất!",
    "Chúc bạn đón một năm mới với nhiều niềm vui, tài lộc và thành công!",
    "Chúc bạn một năm mới tươi sáng, mọi ước mơ đều thành hiện thực!",
    "Chúc bạn đón Tết vui vẻ, an lành và thành công rực rỡ!",
    "Chúc bạn một năm mới may mắn, hạnh phúc và đạt được nhiều thành công!",
    "Chúc bạn năm mới đầy hy vọng, thành công và nhiều cơ hội mới!",
    "Chúc bạn một năm mới với đầy những điều tuyệt vời, sáng tạo và niềm vui!",
    "Chúc bạn đón một năm mới tràn đầy tài lộc, hạnh phúc và thành công!",
    "Chúc bạn năm mới sức khỏe dồi dào, tâm hồn an yên và cuộc sống hạnh phúc!",
    "Năm mới, chúc bạn mọi sự như ý, vạn sự hanh thông và gia đình hạnh phúc!",
    "Chúc bạn năm mới thịnh vượng, thành công và vui vẻ trong mọi công việc!",
    "Chúc bạn và gia đình năm mới an lành, ấm áp và tràn ngập yêu thương!",
    "Chúc bạn đón Tết vui vẻ, hạnh phúc và một năm mới đầy sự thịnh vượng!",
  ];

  const navigate = useNavigate();

  //state
  const [loiChuc, setLoiChuc] = useState("");
  //random lời chcus
  const randomChuc = () => {
    const randomIndex = Math.floor(Math.random() * cauChuc.length);
    setLoiChuc(cauChuc[randomIndex]);
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
          Nhấn nút bên dưới để nhận một lời chúc Tết bất ngờ.
        </p>

        <textarea
          //   type="text"
          className="bg-amber-100 rounded-xl text-center mt-[25px] p-2 w-[90%] max-w-[450px] h-20 resize-none "
          placeholder="Lời chúc sẽ ở đây"
          disabled
          value={loiChuc}
        />
        <div className="mt-[25px]" onClick={randomChuc}>
          <button className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] cursor-pointer text-white px-6 py-2 rounded-xl bg-gradient-to-b from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 transition duration-300 mb-4">
            Nhận lời chúc
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

export default ChucTet;
