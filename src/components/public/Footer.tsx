import * as React from 'react';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="mt-8">
      <div className="border-t border-slate-900/5 py-10">
        <p className="py-8 text-center text-sm leading-6 text-slate-500">
          © 2022 Kronos Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
