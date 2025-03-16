import style from "./external-link.module.css";

type Props = Readonly<{
  children: React.ReactNode;
  href: string;
  className?: string;
}>

export default function ExternalLink({ children, href, className,  }: Props) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">
    {children}&nbsp;
    <img className={style.icon} src="/icon/open_in_new.svg"></img>
  </a>
}
