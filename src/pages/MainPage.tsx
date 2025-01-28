import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import ChucTet from "./ChucTet";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  const newYearDate = new Date("2025-01-29T00:00:00").getTime();
  // const newYearDate = new Date("2025-01-28T14:42:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isNewYear, setIsNewYear] = useState(false); // Thêm trạng thái kiểm tra năm mới

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = newYearDate - now;

      if (timeRemaining < 0) {
        clearInterval(interval);
        setIsNewYear(true); // Đánh dấu đã đến năm mới
      } else {
        // Tính toán thời gian còn lại
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-center mt-[40%] lg:mt-[15%]">
        <h1
          className="font-bold text-white text-4xl"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Chúc mừng năm mới Ất Tỵ 2025!
        </h1>

        <h2
          className="font-bold text-white text-2xl mt-[25px]"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8.760 giờ sung túc,
          525.600 phút thành công và 31.536.000 giây mã đáo.
        </h2>

        {/* Nếu là năm mới, hiển thị lời chúc mừng */}
        {isNewYear ? (
          <h1
            className="font-bold text-yellow-300 text-4xl mt-[50px]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Chúc mừng năm mới Ất Tỵ 2025!
          </h1>
        ) : (
          <>
            <h3
              className="font-bold text-white text-xl mt-[25px]"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Đếm ngược ngày tết
            </h3>
            <h1
              className="font-bold text-amber-400 text-4xl mt-[25px]"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              {timeLeft.days} ngày {timeLeft.hours} giờ {timeLeft.minutes} phút{" "}
              {timeLeft.seconds} giây
            </h1>
          </>
        )}

        {/* Button */}
        <div className="mt-[55px] flex justify-center gap-6">
          <button
            className="cursor-pointer flex items-center justify-center border-solid w-[100px] h-[50px] text-white rounded-full bg-gradient-to-b from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            onClick={() => navigate("/chuc-tet")}
          >
            Chúc tết
          </button>

          <button
            className="cursor-pointer flex items-center justify-center border-solid w-[100px] h-[50px] text-white rounded-full bg-gradient-to-b from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            onClick={() => navigate("/gieo-que")}
          >
            Gieo quẻ
          </button>

          <button
            className="cursor-pointer flex items-center justify-center border-solid w-[100px] h-[50px] text-white rounded-full bg-gradient-to-b from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            onClick={() =>
              (window.location.href =
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            }
          >
            Nhạc Tết
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
