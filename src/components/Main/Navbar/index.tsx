export default function Navbar() {
  return (
    <div className="w-full max-w-6xl min-h-20  flex items-center  justify-between">
      {/* 로고 & 타이틀 */}
      <div className="flex gap-4 justify-center items-center">
        <img
          alt="logo"
          src="/images/logo/blue_horizontal_logo.png"
          className="w-60 h-12 rounded-md"
        />
        {/* <span className="font-normal text-2xl">Education Alliance</span> */}
      </div>

      {/* 메뉴 리스트 */}
      <div className="flex gap-5">
        <span className="font-thin text-2xl">메뉴1</span>
        <span className="font-thin text-2xl">메뉴2</span>
        <span className="font-thin text-2xl">메뉴3</span>
        <span className="font-thin text-2xl">메뉴4</span>
      </div>

      {/* 한 | 영 */}
      <div className="flex gap-2">
        <span className="font-extralight text-2xl">KOR</span>
        <span className="font-extralight text-2xl">|</span>
        <span className="font-extralight text-2xl">ENG</span>
      </div>
    </div>
  );
}
