export default function SocialIcons() {
  const Item = ({ children }) => (
    <a
      href="#"
      className="
        grid h-8 w-8 place-items-center
        rounded-full border border-black
        text-[11px] 
        transition
        hover:border-slate-700 hover:text-white/70
      "
    >
      {children}
    </a>
  );

  return (
    <div className="flex items-center gap-3">
      <Item>
        <img src="/twitter.png" alt="Twitter" />
      </Item>
      <Item>
        <img src="/facebook.png" alt="Facebook" />
      </Item>
      <Item>
        <img src="/instagram.png" alt="Instagram" />
      </Item>
    </div>
  );
}
