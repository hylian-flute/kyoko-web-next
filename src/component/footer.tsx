import style from './footer.module.css';

type Props = Readonly<{
  className?: string;
}>;

export default function Footer({ className }: Props) {
  return (
    <footer className={[className, style.footer].join(" ")}>
      <small>&copy; 2010-2024 Kyoko Koyama Design All Right Resesrved</small>
    </footer>
  );
}
