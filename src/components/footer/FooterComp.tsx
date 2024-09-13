/** @format */

type Props = {};

const FooterComp = (props: Props) => {
  return (
    <footer className="text-center py-2">
      <h2 className="text-center">
        Copyright © 2024 - {new Date().getFullYear()} All Rights Reserved.
      </h2>
    </footer>
  );
};

export default FooterComp;
