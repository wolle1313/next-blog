'use client';
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import blogLogo from 'public/prblog_logo.png';
import { navMenu } from '../../constants/navMenu';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';

const Header = () => {
  const pathname = usePathname();
  const checkIfPathSame = (path: string) => path === pathname;
  return (
    <nav className="navbar navbar-expand-lg flex-nowrap p-md-5">
      <Link href="/" className="navbar-brand">
        <Image src={blogLogo} alt="PrBlog Logo" />
      </Link>
      <div className="container-fluid d-flex justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {navMenu.map((menuItem) => (
              <Link
                className={`nav-item nav-link fs-4${
                  checkIfPathSame(menuItem.link)
                    ? ` ${styles.active} active`
                    : ''
                }`}
                key={menuItem.name}
                href={menuItem.link}
              >
                {menuItem.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
