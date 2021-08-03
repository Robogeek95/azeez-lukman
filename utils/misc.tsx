import Link from "next/link";
import { forwardRef } from "react";

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const AnchorOrLink = forwardRef<HTMLAnchorElement, AnchorProps>(
  function AnchorOrLink(props, ref) {
    const { href = "", ...rest } = props;
    if (href.startsWith("http") || href.startsWith("#")) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} ref={ref} />;
    } else {
      return (
        <Link href={href} {...rest}>
          <a ref={ref}></a>
        </Link>
      );
    }
  }
);

export { AnchorOrLink };
