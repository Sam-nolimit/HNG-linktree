import { HoverEffectStyle, LinkCardStyle } from "./LinkCardStyles";

const LinkCard = () => {
  let links = [
    { name: "Twitter Link", link: "https://twitter.com/TAdejolu", id:"twitter"},
    { name: "Zuri Team", link: "https://training.zuri.team/", id:"btn__zuri" },
    { name: "Zuri Books", link: "https://books.zuri.team", id:"books" },
    { name: "Python Books",link: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>", id:"book__python" },
    { name: "Background Check for Coders", link: "https://background.zuri.team/",id:"pitch"},
    { name: "Design Books", link: "https://books.zuri.team/design-rules",id:"book__design" },
  ];
  return (
    <HoverEffectStyle>
      {links.map((i) => (
        <a href={i.link} style={{textDecoration:"none",color:"black"}}>
          {" "}
          <LinkCardStyle id={i.id}>{i.name}</LinkCardStyle>{" "}
        </a>
      ))}
    </HoverEffectStyle>
  );

};

export default LinkCard;
