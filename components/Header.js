const Header = () => {
  return (
    <div className="flex justify-between py-4 font-bold text-mainWhite border-b-1 border-divider">
      <div>
        <a className="font-mulish text-xl cursor-pointer">Sanyam</a>
      </div>
      <div className="flex gap-x-10 text-xl">
        <a className="font-mulish cursor-pointer hover:text-hoverGray" href="/">About</a>
        <a className="font-mulish cursor-pointer hover:text-hoverGray" href="/">Music</a>
        <a className="font-mulish cursor-pointer hover:text-hoverGray" href="/">Contact Me</a>
      </div>
    </div>
  )
}

export default Header
