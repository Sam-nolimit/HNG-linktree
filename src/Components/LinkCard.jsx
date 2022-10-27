import { HoverEffectStyle, LinkCardStyle } from "./LinkCardStyles";

const LinkCard = () => {
  let links = [
    { name: "Twitter Link", link: "https://twitter.com/TAdejolu" },
    { name: "Zuri Team", link: "https://training.zuri.team/" },
    { name: "Zuri Books", link: "https://books.zuri.team" },
    { name: "Python Books",link: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"},
    { name: "Background Check for Coders", link: "https://background.zuri.team"},
    { name: "Design Books", link: "https://books.zuri.team/design-rules" },
  ];
  return (
    <HoverEffectStyle>
      {links.map((i) => (
        <a href={i.link}>
          {" "}
          <LinkCardStyle>{i.name}</LinkCardStyle>{" "}
        </a>
      ))}
    </HoverEffectStyle>
  );

};

export default LinkCard;
